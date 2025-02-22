"use client";
import { ICategory, IMeta } from "@/types";
import CreateCatagoryModal from "./CreateCatagoryModal";
import { NETable } from "@/components/ui/core/NEtabil";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { deleteCategory } from "@/services/Category";
import { toast } from "sonner";
import DeleteConfirmationModal from "@/components/ui/core/NEModal/DeleteConfirmationModal";
import TablePagination from "@/components/ui/core/NEtabil/TabilPagination";

type TcatagorisProps = {
  catagoris: ICategory[];
  meta: IMeta;
};

const ManageCatagories = ({ catagoris, meta }: TcatagorisProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: ICategory) => {
    console.log(data);
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteCategory(selectedId);
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const columns: ColumnDef<ICategory>[] = [
    {
      accessorKey: "name",
      header: () => <div className="font-bold">Category Name</div>,
      cell: ({ row }) => (
        <div className="flex items-center space-x-3">
          <Image
            src={row.original.icon}
            alt={row.original.name}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="truncate">{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: "isActive",
      header: () => <div className="font-bold">isActive</div>,
      cell: ({ row }) => (
        <div>
          {row.original.isActive ? (
            <p className="text-green-500 border bg-green-100 w-14 text-center px-1 rounded">
              True
            </p>
          ) : (
            <p className="text-red-500 border bg-red-100 w-14 text-center px-1 rounded">
              False
            </p>
          )}
        </div>
      ),
    },
    {
      accessorKey: "action",
      header: () => <div className="font-bold">Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
  ];

  console.log(catagoris);
  return (
    <div>
      <div className=" flex shadow-md mb-4 p-4 justify-between items-center">
        <h1 className="text-xl font-bold">Manage Catagories</h1>
        <CreateCatagoryModal />
      </div>
      <NETable data={catagoris} columns={columns} />
      <TablePagination totalPage={meta?.totalPage} />
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ManageCatagories;
