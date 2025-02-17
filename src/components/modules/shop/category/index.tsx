import { ICategory } from "@/types";
import CreateCatagoryModal from "./CreateCatagoryModal";

type TcatagorisProps = {
  catagoris: ICategory[];
};

const ManageCatagories = ({ catagoris }: TcatagorisProps) => {
  console.log(catagoris);
  return (
    <div>
      <div className=" flex shadow-md  p-4 justify-between items-center">
        <h1 className="text-xl font-bold">Manage Catagories</h1>
        <CreateCatagoryModal />
      </div>
    </div>
  );
};

export default ManageCatagories;
