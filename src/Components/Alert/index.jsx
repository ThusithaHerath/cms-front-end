import React from "react";

import {
  Alert as AlertComponent,
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import { BellIcon, InformationCircleIcon } from "@heroicons/react/24/solid";

export const Alert = ({ message, open = false, color = "blue" }) => {
  return (
    <AlertComponent
      open={open}
      color={color}
      variant="gradient"
      icon={<InformationCircleIcon strokeWidth={2} className="h-6 w-6" />}
    >
      {message}
    </AlertComponent>
  );
};

export const AlertDialog = ({
  handleSubmit,
  setOpenDeleteAlert,
  open,
  message,
  title,
}) => {
  return (
    <Dialog size="xs" open={open} handler={() => setOpenDeleteAlert(false)}>
      <DialogBody className="grid place-items-center gap-2">
        <BellIcon className="h-10 w-10 text-cyan-700" />
        <Typography color="cyan" variant="h4">
          {title}
        </Typography>
        <Typography className="text-center font-normal">{message}</Typography>
      </DialogBody>
      <DialogFooter className="space-x-2 items-center justify-center ">
        <Button
          variant="outlined"
          color="cyan"
          onClick={() => setOpenDeleteAlert(false)}
        >
          No
        </Button>
        <Button color="cyan" onClick={handleSubmit}>
          Yes
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
