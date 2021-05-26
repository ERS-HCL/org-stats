import * as React from "react";

// This is a custom filter UI that uses a
// slider to set the filter value between a column's
// min and max values
export const NumberColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}: any) => {
  // Calculate the min and max
  // using the preFilteredRows
  const [min, max] = React.useMemo(() => {
    let min = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    let max = preFilteredRows.length ? preFilteredRows[0].values[id] : 0;
    preFilteredRows.forEach((row: any) => {
      min = Math.min(row.values[id], min);
      max = Math.max(row.values[id], max);
    });
    return [min, max];
  }, [id, preFilteredRows]);

  return (
    <div className="flex flex-col text-xs">
      <input
        type="number"
        min={min}
        max={max}
        className="rounded text-xs border-gray-400 border py-2 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(parseInt(e.target.value, 10) || undefined);
        }}
      />
    </div>
  );
};
