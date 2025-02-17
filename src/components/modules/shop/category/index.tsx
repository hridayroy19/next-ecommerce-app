import CreateCatagoryModal from "./CreateCatagoryModal";

const ManageCatagories = () => {
    return (
        <div>
           <div className=" flex justify-between items-center">
           <h1 className="text-xl font-bold">Manage Catagories</h1>
           <CreateCatagoryModal/>
           </div>
        </div>
    );
};

export default ManageCatagories;