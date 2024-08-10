"use client";
import Image from "next/image";
import { Button } from "./ui/button";

const AddDocumentButton = ({ userId, email }: AddDocumentBtnProps) => {
  const createDocumentHandler = async () => {};

  return (
    <Button
      type="submit"
      onClick={createDocumentHandler}
      className="gradient-blue flex gap-1 shadow-md"
    >
      <Image
        src="/assets/icons/add.svg"
        alt="Add Document"
        width={24}
        height={24}
      />
      <p className="hidden sm:block">Create Blank Document</p>
    </Button>
  );
};

export default AddDocumentButton;
