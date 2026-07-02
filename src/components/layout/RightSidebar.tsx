import profil from "../../assets/profil.jpg";

const RightSidebar = () => {
  return (
    <div className="w-16 h-130 bg-[#24262d] rounded-md p-4">
      <img src={profil} alt="Profil" className=" rounded-full mr-0" />
    </div>
  );
};

export default RightSidebar;
