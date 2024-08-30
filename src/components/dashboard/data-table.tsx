import React, { useEffect, useState } from "react";

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useDebounce } from "../hooks/useDebounce";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
// TData represents the name of data in the row , TValue represents the type of values
export const DataTable = <TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) => {

  //To Maintain the state
  const [sorting, setSorting] = React.useState<SortingState>([]); // To sort by order
  const [columnFilters, setColumnFilter] = React.useState<ColumnFiltersState>(
    []
  ); // To filter by column
  const [globalFilter, setGlobalFilter] = React.useState(""); // Search Input

  const [searchTerm, setSearchTerm] = useState(""); // To store every word
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 400); // To prevent  re-render on every word

  const [ rowSelection , setRowSelection ] = useState({});

  useEffect(() => {
    setGlobalFilter(debouncedSearchTerm); // Set the debounced search term as global filter after 400 mms
  }, [debouncedSearchTerm]);

  const table = useReactTable({
    columns, // !important
    data, //!important
    getCoreRowModel: getCoreRowModel(), //!Important
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),    

    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilter,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange : setRowSelection,
    state: {
      sorting,
      columnFilters,
      globalFilter,
      rowSelection
    },
  });
  //Whenever we want functionality(sorting, filtering,...) , we need to add the modal(get...Modal)  to the table object , and custom state
  return (
    <div className="mt-10 ">
      <Input
        className="max-w-sm"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        type="text"
      />

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {!header.placeholderId &&
                      flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => {
              return (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No Results
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {/* Selected Row Count */}

      {/* Pagination Part */}
      <Pagination>
        <PaginationContent className="flex gap-4 cursor-pointer select-none">
          <PaginationItem>
            <Button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              Previous
            </Button>
          </PaginationItem>
          <PaginationItem>
            <Button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <div>
          { table.getFilteredSelectedRowModel().rows.length} of
          { table.getFilteredRowModel().rows.length} rows selected
      </div>
      
    </div>
  );
};
