import * as React from "react";
// This is a custom UI for our 'between' or number range
// filter. It uses two number boxes and filters rows to
// ones that have values between the two
export const NumberRangeColumnFilter = ({
  column: { filterValue = [], preFilteredRows, setFilter, id },
}: any) => {
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
    <div className="flex flex-wrap text-gray-700 dark:text-blue-400 text-xs justify-start align-middle text-center items-center">
      <input
        value={filterValue[0] || ""}
        type="number"
        className="text-xs w-20 px-1 rounded border-gray-400 border py-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            val ? parseInt(val, 10) : undefined,
            old[1],
          ]);
        }}
        placeholder={`Min (${min})`}
      />
      <div className="p-1">to</div>
      <input
        value={filterValue[1] || ""}
        type="number"
        className="text-xs w-20 px-1 rounded border-gray-400 border py-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600"
        onChange={(e) => {
          const val = e.target.value;
          setFilter((old = []) => [
            old[0],
            val ? parseInt(val, 10) : undefined,
          ]);
        }}
        placeholder={`Max (${max})`}
      />
    </div>
  );
};
