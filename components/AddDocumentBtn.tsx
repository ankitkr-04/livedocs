"use client";
import { createDocument } from "@/lib/actions/room.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const AddDocumentButton = ({ userId, email }: AddDocumentBtnProps) => {
  const router = useRouter();
  const createDocumentHandler = async () => {
    try {
      const room = await createDocument({ userId, email });
      if (room) router.push(`/documents/${room.id}`);
    } catch (error) {
      console.error(error);
    }
  };

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
