import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import backgroundImage from "../../../public/housebackground.jpg"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col w-screen overflow-hidden">
      <div className="z-0 fixed w-screen h-screen">
        <Image
          src={backgroundImage}
          alt="Beta Gamma Epsilon House"
          fill
          className="object-cover"
        />
      </div>
      <div className="z-10 fixed w-screen h-screen bg-black opacity-80" />
      <div className="z-20">
        <Navbar/>
        {children}
      </div>
    </div>
  );
};

export default Layout;