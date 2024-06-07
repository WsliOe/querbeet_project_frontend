import React, { lazy } from "react";
import styled from "styled-components";
import Row from "../ui/Row";

const Heading = lazy(() => import("../ui/Heading"));
const HoursTable = lazy(() => import("../features/hours/HoursTable"));
const AddHours = lazy(() => import("../features/hours/AddHours"));
const FilterOperations = lazy(() =>
  import("../features/hours/FilterOperations")
);
const SortOperations = lazy(() => import("../features/hours/SortOperations"));

const MemoizedHeading = React.memo(Heading);
const MemoizedHoursTable = React.memo(HoursTable);
const MemoizedAddHours = React.memo(AddHours);
const MemoizedFilterOperations = React.memo(FilterOperations);
const MemoizedSortOperations = React.memo(SortOperations);

const DesktopHoursContainer = styled.div`
  display: none;

  @media (min-width: 860px) {
    display: block;

    ${Row} {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

const DesktopHoursTableOperations = styled.div`
  display: none;
  
  @media (min-width: 860px) {
     display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
`;

const TabletHoursContainer = styled.div`
  display: none;

  @media (min-width: 570px) and (max-width: 859px) {
    display: block;

    ${Row} {
      flex-direction: column;
      align-items: start;
    }
  }
`;

const TabletHoursTableOperations = styled.div`
  display: none;

  @media (min-width: 570px) {
    ${Row} {flex-direction: row}
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 1rem;
`;

const MobileHoursTableOperations = styled.div`
  display: none;

  @media (max-width: 569px) {
    display: block;
    ${Row}:nth-child(2) {
      margin-bottom: 1rem;
    }
  }
`;

function Hours() {
  return (
    <>
      <DesktopHoursContainer>
        <Row type="horizontal">
          <MemoizedHeading as="h1">Stunden</MemoizedHeading>
          <DesktopHoursTableOperations>
            <MemoizedFilterOperations />
            <MemoizedSortOperations />
          </DesktopHoursTableOperations>
        </Row>
      </DesktopHoursContainer>

      <TabletHoursContainer>
        <Row type="horizontal">
          <MemoizedHeading as="h1">Stunden</MemoizedHeading>
        </Row>
        <TabletHoursTableOperations>
          <Row>
            <MemoizedFilterOperations />
            <MemoizedSortOperations />
          </Row>
        </TabletHoursTableOperations>
      </TabletHoursContainer>

      <MobileHoursTableOperations>
        <Row>
          <MemoizedHeading as="h1">Stunden</MemoizedHeading>
        </Row>
        <Row>
          <MemoizedFilterOperations />
        </Row>
        <Row>
          <MemoizedSortOperations />
        </Row>
      </MobileHoursTableOperations>

      <Row>
        <MemoizedHoursTable />
        <MemoizedAddHours />
      </Row>
    </>
  );
}

export default Hours;
