import * as React from "react";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  filter,
  setFilter,
}: any) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(filter);
  const onChange = (value: any) => {
    setFilter(value || undefined);
  };
  return (
    <span className="text-gray-700 dark:text-teal-accent-400 text-sm">
      Search{" "}
      <input
        type="text"
        value={value || ""}
        className="px-4 py-2 rounded border-gray-400 border text-xs flex-1 dark:bg-gray-800 dark:text-gray-50 dark:border-gray-600"
        placeholder={`${count} records...`}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </span>
  );
};
