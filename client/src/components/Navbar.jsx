import banner from "../assets/banner.jpg";
import astro from "../assets/astro.svg";
import streamlabs from "../assets/streamlabs.png";
import ears from '../assets/ultimateEars.png'
import world from '../assets/world.svg'
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

export default function Navbar() {
  return (
    <div className="w-full h-16 flex justify-between shadow-md px-16 items-center">
      <div className="flex items-center ">
        <img className="w-48" src={banner} alt="" />
        <Menu className="bg-white">
          <MenuHandler className="cursor-pointer text-gray-500 text-sm border-none">
            <p className="text-gray-500 text-sm ">Nuestras marcas</p>
          </MenuHandler>
          <MenuList className="bg-white-500 w-[130px] mt-4 border-none bg-white">
            <MenuItem className="p-2 mt-1">
              <img className="w-14 opacity-50 hover:opacity-100 m-auto " src={astro}/>
            </MenuItem>
            <MenuItem className="p-2 mt-3">
              <img className="w-16 opacity-50 hover:opacity-100 m-auto " src={streamlabs} alt="" />
            </MenuItem>
            <MenuItem className="p-2 mt-3">
              <img className="w-12 m-auto opacity-50 filter grayscale hover:filter-none hover:opacity-100 " src={ears} alt="" />
            </MenuItem>
          </MenuList>
        </Menu>
      </div>

      <div className="flex">
      <img className="w-[18px]" src={world} alt="" />
      <p className="text-gray-500 font-semibold ml-1 text-sm">Mexico</p>

      </div>

    </div>
  );
}
