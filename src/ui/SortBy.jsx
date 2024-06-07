import React, { lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import Spinner from "./Spinner";

const Select = lazy(() => import("./Select"));

function SortByFunction({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Suspense fallback={<Spinner />}>
      <Select
        name="sortBy"
        options={options}
        type="white"
        value={sortBy}
        onChange={handleChange}
      />
    </Suspense>
  );
}

const SortBy = React.memo(SortByFunction);

export default SortBy;
