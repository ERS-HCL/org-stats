export const ColumnFilter = ({
  column: { filterValue, preFilteredRows, setFilter },
}: any) => {
  const count = preFilteredRows.length;
  return (
    <span className="text-gray-700 dark:text-teal-accent-400 text-xs w-1/2">
      <input
        className="px-1 rounded border-gray-400 border py-2 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600"
        value={filterValue || ""}
        onChange={(e) => {
          setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
        }}
        placeholder={`Search ${count} records...`}
      />
    </span>
  );
};
