import { lazy } from "react";

const TableOperations = lazy(() => import("../../ui/TableOperations"));
const Filter = lazy(() => import("../../ui/Filter"));

function FilterOperations() {
  return (
    <TableOperations>
      <Filter
        name="filterBy"
        filterField="year"
        options={[
          { value: "all", label: "Alle" },
          { value: "lastYear", label: "Vorjahr" },
          { value: "currentYear", label: "Aktuelles Jahr" },
        ]}
      />
    </TableOperations>
  );
}

export default FilterOperations;
