import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import EditIcon from "@/icons/edit-icon";
import UserUpdateForm from "../forms/user-edit-form";
import { ConstructionRole } from "@/lib/type";

const UserEditDialogBox = ({name , email , role} : {name : string , email : string , role : ConstructionRole}) => {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center w-full gap-3">
        <EditIcon /> <span className="text-[1.2em]">Edit</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            <UserUpdateForm name={name} email={email} role={role} /> {/* To be able to update UserINfo */}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UserEditDialogBox;
