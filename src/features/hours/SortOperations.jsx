import { lazy } from "react";
const TableOperations = lazy(() => import("../../ui/TableOperations"));
const SortBy = lazy(() => import("../../ui/SortBy"));

function SortOperations() {
  return (
    <TableOperations>
      <SortBy
        name="sortBy"
        options={[
          { value: "year-asc", label: "Jahr (aufsteigend)" },
          { value: "year-desc", label: "Jahr (absteigend)" },
          {
            value: "totalHoursYear-asc",
            label: "Total (aufsteigend)",
          },
          {
            value: "totalHoursYear-desc",
            label: "Total (absteigend)",
          },
        ]}
      />
    </TableOperations>
  );
}

export default SortOperations;
