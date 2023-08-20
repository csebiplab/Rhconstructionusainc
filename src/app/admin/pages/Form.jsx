import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Textarea,
} from "@material-tailwind/react";
 
export default function PageForm({open, toggleOpen,page}) {
 
  return (
    <>
      <Dialog open={open} handler={toggleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>{page?.title || "Create Page"}</DialogHeader>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input label="id" />
            <Input label="title" />
            <Textarea label="keywords" />
            <Textarea label="description" />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" size="sm" color="red" onClick={toggleOpen}>
            close
          </Button>
          <Button variant="filled"  size="sm" color="green" className="text-black" onClick={toggleOpen}>
            send message
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}