import React from "react";
import Image from "next/image";

type Props = {};

const Greeting = (props: Props) => {
  return (
    <div className="flex justify-end">
      <img
        src="/analog-photo.jpg"
        alt="Coming soon"
        className="h-screen w-screen object-cover aspect-auto"
      />
      <div className="absolute flex justify-center items-end h-1/3 w-screen">
        <h1 className="font-pixel tracking-widest uppercase text-4xl text-white">
          coming soon...
        </h1>
      </div>
    </div>
  );
};

export default Greeting;
