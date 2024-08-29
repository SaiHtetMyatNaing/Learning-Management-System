import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ArrowDown,
  ArrowUpDownIcon,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "../ui/button";
import { dataProps } from "@/lib/type";
import { sortedRole } from "@/lib/data";
import { Checkbox } from "../ui/checkbox";
import DeleteDialogBox from "./delete-dialog";
import UserEditDialogBox from "./user-edit-dialog";


// table column defination
export const columns: ColumnDef<dataProps>[] = [
  {
    id: "select",
    header: ({ table }) => {
      return (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} // double exclamation toggle the boolean value
        />
      );
    },
    cell: ({ row }) => {
      return (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
        />
      );
    },
    enableSorting: false,
  },
  //Id Section
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Id <ArrowUpDownIcon className="h-3" />
        </Button>
      );
    },
    accessorKey: "id", // We need accessorKey coz , ColumnDef needs it to keep track of the proper place to render (!important)
  },
  //Name Section
  {
    header: "Name",
    accessorKey: "name",
  },
  //Email Section
  {
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          Email <ArrowUpDownIcon className="h-3" />
        </Button>
      );
    },
    accessorKey: "email",
  },
  //Role Section
  {
    header: ({ table }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center gap-4">
            <span>Role</span>
            <ArrowDown className="h-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Filtered By Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {}
            {sortedRole.map((role) => {
              return (
                <DropdownMenuItem
                  //Sorting According to Role
                  onClick={() => {
                    if (role.title !== "All") {
                      table.getColumn("role")?.setFilterValue(role.title);
                    } else {
                      table.getColumn("role")?.setFilterValue(null); // Null, because I want to reset the state
                    }
                  }}
                  key={role.id}
                >
                  {role.title}
                </DropdownMenuItem>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    accessorKey: "role",
  },
  // Action Section
  {
    id: "actions",
    cell: ({row}) => {
      const { original } = row;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white">
              {/* Edit User Button */}
            <DropdownMenuItem onSelect={(e)=> e.preventDefault()}  className="flex items-center w-full gap-3">
               <UserEditDialogBox name={original.name} email={original.email} role={original.role}/>
            </DropdownMenuItem>

            {/* Delete Button */}
            <DropdownMenuItem onSelect={(e)=> e.preventDefault()}>
              <DeleteDialogBox/>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
