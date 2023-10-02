import Sidebar from "@/components/Sidebar";
import { auth } from "@/firebase/firebase";
import Image from "next/image";
import React, { useEffect } from "react";

const Dashboard = () => {
  return (
    <div className="flex relative min-h-[100vh] bg-[#111421] text-white">
      <Sidebar />
      <div className=" flex flex-col items-center mx-auto gap-16 py-20   w-full">
        <Image src={"/data2.png"} width={600} height={0} />
        <Image src={"/dash2.png"} width={600} height={0} />
        <Image src={"/circle.png"} width={300} height={0} />
      </div>
    </div>
  );
};

export default Dashboard;
