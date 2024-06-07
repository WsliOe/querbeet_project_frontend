import React from "react";

function NotFound({ resourceName }) {
  return <p>{resourceName} konnte nicht gefunden werden.</p>;
}

const Empty = React.memo(NotFound);

export default Empty;
