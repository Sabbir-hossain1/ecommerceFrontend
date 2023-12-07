import { GiBallerinaShoes } from "react-icons/gi";
import { GrRestroomWomen } from "react-icons/gr";
import { FaPerson } from "react-icons/fa6";
import { FcElectronics } from "react-icons/fc";
import { BsHeadset } from "react-icons/bs";
import { BiSolidWatchAlt } from "react-icons/bi";
import { RiComputerLine } from "react-icons/ri";
import { BiMobile } from "react-icons/bi";

const HeroMenu = () => {
  const menu = [
    { name: "Shoes", icon: <GiBallerinaShoes /> },
    {
      name: "Men",
      icon: <FaPerson />,
      subMenu: [{ name: "Hot Sale" }, { name: "OuterWear Jacket" }, { name: "UnderWear & Loun" }, { name: "Bottoms" }],
    },
    { name: "Women", icon: <GrRestroomWomen /> },
    { name: "Electronics", icon: <FcElectronics /> },
    { name: "Headphones", icon: <BsHeadset /> },
    { name: "Watches", icon: <BiSolidWatchAlt /> },
    {
      name: "Computer",
      icon: <RiComputerLine />,
      subMenu: [
        { name: "Mackbook" },
        { name: "Desktop" },
        { name: "Laptop" },
        { name: "Monitor" },
        { name: "Accessories" },
      ],
    },
    { name: "Mobile", icon: <BiMobile /> },
  ];

  return (
    <>
      {menu.map((menu) => (
        <div
          key={menu.name}
          className="flex w-full cursor-pointer  justify-center items-center border-b-[1px] border-[#44403c] border-dotted last:pb-4 first:pt-4 last:border-none"
        >
          <div className="w-1/3 flex justify-center items-center text-xl py-2 text-[#dda9af]">{menu.icon}</div>
          <div className="w-2/3 font-semibold text-xl text-[#81786d] p-2">{menu.name}</div>
        </div>
      ))}
    </>
  );
};

export default HeroMenu;
