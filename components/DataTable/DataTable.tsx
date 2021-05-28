import * as React from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGroupBy,
  useGlobalFilter,
  useFilters,
  useExpanded,
} from "react-table";
import { useExportData } from "react-table-plugins";
import { UserGroupIcon, DownloadIcon } from "@heroicons/react/outline";
import {
  ChevronDoubleRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleDownIcon,
  UserGroupIcon as UserGroupSolidIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronUpIcon,
} from "@heroicons/react/solid";
import { subDays, addDays, isWithinInterval } from "date-fns";
import { GlobalFilter } from "../filters/GlobalFilter";
import { ColumnFilter } from "../filters/ColumnFilter";
// A great library for fuzzy filtering/sorting items
import { matchSorter } from "match-sorter";
import Papa from "papaparse";

const fuzzyTextFilterFn = (
  rows: any,
  id: string | number,
  filterValue: any
) => {
  return matchSorter(rows, filterValue, {
    keys: [(row: any) => row.values[id]],
  });
};

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val: any) => !val;

// Define a custom filter filter function!
const filterGreaterThan = (
  rows: any[],
  id: string | number,
  filterValue: number
) => {
  return rows.filter((row: any) => {
    const rowValue = row.values[id];
    return rowValue >= filterValue;
  });
};

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = (val: any) => typeof val !== "number";

const getExportFileBlob = ({ columns, data, fileType }: any) => {
  if (fileType === "csv") {
    // CSV example
    const headerNames = columns.map((col: any) => col.exportValue);
    const csvString = Papa.unparse({ fields: headerNames, data });
    return new Blob([csvString], { type: "text/csv" });
  }

  // Other formats goes here
  return false;
};

export const DataTable = ({
  columns,
  data,
  renderRowSubComponent,
  groupBy = [],
  hiddenColumns = [],
}: any) => {
  const filterTypes = React.useMemo(
    () => ({
      date: (rows: any[], id: any, filterValue: any) => {
        if (filterValue === null) return rows;
        let start = subDays(new Date(filterValue[0]), 1);
        let end = addDays(new Date(filterValue[1]), 1);
        return rows.filter((val) =>
          isWithinInterval(new Date(val.original[id]), {
            start,
            end,
          })
        );
      },
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows: any[], id: string | number, filterValue: any) => {
        return rows.filter((row: any) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : false;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: ColumnFilter,
    }),
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    visibleColumns,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize, globalFilter },
    preGlobalFilteredRows,
    setGlobalFilter,
    setHiddenColumns,
    exportData,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, groupBy, hiddenColumns },
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
      getExportFileBlob,
    } as any,
    useFilters,
    useGlobalFilter,
    useGroupBy,
    useSortBy,
    useExpanded, // We can useExpanded to track the expanded state
    // for sub components too!
    usePagination,
    useExportData
  ) as any;

  React.useEffect(() => {
    setHiddenColumns(hiddenColumns);
  }, [hiddenColumns]);

  // Render the UI for your table
  return (
    <div className="min-w-full rounded-lg border shadow-">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200 rounded-lg shadow-md"
      >
        <thead className="bg-gray-100 dark:bg-gray-800 rounded-t-lg">
          <tr>
            <th
              colSpan={visibleColumns.length}
              className="px-4 py-3 text-left text-xs text-gray-700 border-b rounded-t-lg"
            >
              <div className="px-4 flex flex-row-reverse text-xs text-gray-700">
                <button
                  type="button"
                  className="inline-flex justify-between items-center uppercase py-2 px-4 m-2 border border-transparent shadow text-sm font-medium rounded-md text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    exportData("csv", true);
                  }}
                >
                  <DownloadIcon className="h-5 w-5 mr-1" />
                  <span>CSV</span>
                </button>
                <button
                  type="button"
                  className="inline-flex justify-between items-center uppercase py-2 px-4 m-2 border border-transparent shadow text-sm font-medium rounded-md text-gray-100 bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => {
                    exportData("csv", false);
                  }}
                >
                  <DownloadIcon className="h-5 w-5 mr-1" />
                  <span>CSV (f)</span>
                </button>
              </div>
            </th>
          </tr>
          <tr>
            <th
              colSpan={visibleColumns.length}
              className="px-4 py-3 text-left text-xs text-gray-700 border-b"
            >
              <GlobalFilter
                filter={globalFilter}
                setFilter={setGlobalFilter}
                preGlobalFilteredRows={preGlobalFilteredRows}
              />
            </th>
          </tr>
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="px-1 py-3 text-left text-xs font-medium text-gray-700 dark:text-blue-400 uppercase tracking-wider hover:text-gray-900 dark:hover:text-blue-700"
                >
                  <span className="flex flex-wrap">
                    {column.canGroupBy ? (
                      // If the column can be grouped, let's add a toggle
                      <span
                        {...column.getGroupByToggleProps()}
                        className="text-gray-700 dark:text-gray-50 hover:text-teal-900 dark:hover:text-blue-400 mr-1"
                      >
                        {column.isGrouped ? (
                          <UserGroupSolidIcon className="w-4 h-4" />
                        ) : (
                          <UserGroupIcon className="w-4 h-4" />
                        )}
                      </span>
                    ) : null}
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <ChevronDownIcon className="h-4 w-4" />
                      ) : (
                        <ChevronUpIcon className="h-4 w-4" />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
          {headerGroups.map((headerGroup: any) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th
                  {...column.getHeaderProps()}
                  className="px-1 pb-2 text-left text-xs font-medium text-gray-700 dark:text-blue-400 uppercase tracking-wider hover:text-gray-900 dark:hover:text-blue-700"
                >
                  <div>
                    {!column.isGrouped && column.canFilter
                      ? column.render("Filter")
                      : null}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-400 flex-1"
        >
          {page.map((row: any, i: any) => {
            prepareRow(row);
            return (
              <React.Fragment key={i}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell: any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={`px-4 py-4 whitespace-nowrap ${
                          cell.isGrouped
                            ? "bg-blue-400 text-gray-700 dark:text-gray-800"
                            : cell.isAggregated
                            ? "bg-white dark:bg-gray-700 dark:text-gray-50"
                            : cell.isPlaceholder
                            ? "bg-gray-200 dark:bg-gray-800"
                            : "bg-white dark:bg-gray-700 dark:text-gray-50"
                        }`}
                      >
                        <div className="text-sm text-gray-900 dark:text-gray-100">
                          {cell.isGrouped ? (
                            // If it's a grouped cell, add an expander and row count
                            <div className="flex flex-wrap align-middle text-center text-gray-700 dark:text-gray-800 hover:text-teal-900  dark:hover:text-gray-900 ">
                              <span
                                {...row.getToggleRowExpandedProps()}
                                className="mr-1"
                              >
                                {row.isExpanded ? (
                                  <ChevronDoubleDownIcon className="h-5 w-5" />
                                ) : (
                                  <ChevronDoubleRightIcon className="h-5 w-5" />
                                )}
                              </span>
                              <div>
                                {cell.render("Cell")} ({row.subRows.length})
                              </div>
                            </div>
                          ) : cell.isAggregated ? (
                            // If the cell is aggregated, use the Aggregated
                            // renderer for cell
                            <div className="flex flex-wrap align-middle text-center font-semibold">
                              {cell.render("Aggregated")}
                            </div>
                          ) : cell.isPlaceholder ? null : ( // For cells with repeated values, render null
                            // Otherwise, just render the regular cell
                            cell.render("Cell")
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                    Skipping if this is not the child node
                  */}
                {row.subRows.length === 0 && row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={visibleColumns.length} className="rounded-b-lg">
              {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
              <div className="bg-white dark:bg-gray-700 px-4 py-3 w-full flex items-center justify-between border-gray-200 rounded-b-lg">
                <div className="flex flex-row flex-1 items-center justify-evenly w-full ">
                  <div className="flex">
                    <button
                      onClick={() => gotoPage(0)}
                      disabled={!canPreviousPage}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border-l border-b border-t border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400"
                    >
                      <ChevronDoubleLeftIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                      className="relative inline-flex items-center px-2 py-2 border-l border-t border-b border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400"
                    >
                      <ChevronLeftIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                      className="relative inline-flex items-center px-2 py-2 border-l border-t border-b border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400"
                    >
                      <ChevronRightIcon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => gotoPage(pageCount - 1)}
                      disabled={!canNextPage}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm font-medium bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-teal-900 dark:hover:text-blue-400"
                    >
                      <ChevronDoubleRightIcon className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="hidden sm:flex sm:items-center sm:justify-between mx-2">
                    <div>
                      <p className="text-sm text-gray-700 dark:text-gray-200">
                        Page
                        <span className="font-medium mx-2">
                          {pageIndex + 1}
                        </span>
                        of{" "}
                        <span className="font-medium mx-2">
                          {pageOptions.length}
                        </span>
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:flex text-sm items-center text-gray-700 dark:text-gray-200">
                    Go to page
                    <input
                      type="number"
                      defaultValue={pageIndex + 1}
                      onChange={(e) => {
                        const page = e.target.value
                          ? Number(e.target.value) - 1
                          : 0;
                        gotoPage(page);
                      }}
                      className="py-2 px-3 mx-2 border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm w-24"
                    />
                  </span>
                  <select
                    value={pageSize}
                    onChange={(e) => {
                      setPageSize(Number(e.target.value));
                    }}
                    className="py-2 border border-gray-300 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
