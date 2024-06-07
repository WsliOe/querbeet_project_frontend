import { useEffect, useState, lazy, Suspense } from "react";
import Spinner from "../../ui/Spinner";
import useHours from "./useHours";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";
import {
  StyledPagination,
  Buttons,
  PaginationButton,
} from "../../ui/Pagination";
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";

const HoursRow = lazy(() => import("./HoursRow"));

function HoursTable() {
  const { isLoading, hours } = useHours();
  const [searchParams, setSearchParams] = useSearchParams();
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    function updateItemsPerPage() {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(5);
      }
    }

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);

    return () => {
      window.removeEventListener("resize", updateItemsPerPage);
    };
  }, []);

  if (isLoading) return <Spinner />;
  if (!hours) return <Empty resourceName="hours" />;

  // 1) FILTER
  const currentYear = new Date().getFullYear().toString();
  const filterValue = searchParams.get("year") || "all";

  let filteredHours = [];
  if (filterValue === "all") {
    filteredHours = hours;
  } else if (filterValue === "lastYear") {
    // Filter Stunden Vorjahr
    const lastYear = (parseInt(currentYear) - 1).toString();
    filteredHours = hours.filter((hour) => hour.year === lastYear);
  } else if (filterValue === "currentYear") {
    // Filter Stunden aktuelles Jahr
    filteredHours = hours.filter((hour) => hour.year === currentYear);
  }
  // 2) SORT
  const sortBy = searchParams.get("sortBy") || "year-asc";
  const [field, direction] = sortBy.split("-");
  const modifier =
    field === "totalHoursYear"
      ? direction === "asc"
        ? 1
        : -1
      : direction === "asc"
      ? 1
      : -1;

  const sortedHours = filteredHours.sort((a, b) => {
    if (field === "totalHoursYear") {
      return (
        (parseFloat(a.totalHoursYear) - parseFloat(b.totalHoursYear)) * modifier
      );
    } else {
      return (a[field] - b[field]) * modifier;
    }
  });

  // 3) PAGINATION
  const totalPages = Math.ceil(sortedHours.length / itemsPerPage);
  const shouldDisplayPagination = totalPages > 1;

  const handlePageChange = (page) => {
    setSearchParams({
      ...Object.fromEntries(searchParams.entries()),
      page: page.toString(),
    });
  };

  const renderPages = [currentPage - 1, currentPage, currentPage + 1]

    .filter((page) => page > 0 && page <= totalPages)

    .map((page) => (
      <PaginationButton
        key={page}
        onClick={() => handlePageChange(page)}
        $active={currentPage === page}
      >
        {page}
      </PaginationButton>
    ));

  return (
    <Suspense fallback={<Spinner />}>
      <Menus>
        <Table role="table" columns="repeat(6, 1fr) 0.25rem">
          <Table.Header>
            <div role="columnheader">Jahr</div>
            <div role="columnheader">Q1</div>
            <div role="columnheader">Q2</div>
            <div role="columnheader">Q3</div>
            <div role="columnheader">Q4</div>
            <div role="columnheader">Total</div>
          </Table.Header>

          <Table.Body
            data={sortedHours.slice(
              (currentPage - 1) * itemsPerPage,
              currentPage * itemsPerPage
            )}
            render={(hour) => <HoursRow hours={hour} key={hour._id} />}
          />
        </Table>

        {shouldDisplayPagination && (
          <StyledPagination>
            <Buttons>
              <PaginationButton
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <HiChevronLeft /> <span>Zurück</span>
              </PaginationButton>

              {renderPages}

              <PaginationButton
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <span>Weiter</span>
                <HiChevronRight />
              </PaginationButton>
            </Buttons>
          </StyledPagination>
        )}
      </Menus>
    </Suspense>
  );
}
export default HoursTable;
