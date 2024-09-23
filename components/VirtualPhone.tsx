import React from "react";
import Image from "next/image";
import Btn from "./Button";

interface ScreenProps {
    src: string,
    alt: string,
    priority?: boolean,
    className?:string,
    speed?: number
}

const VirtualPhone = ({ src,alt,priority,speed }: ScreenProps) => {
  return (
    <section className="grid place-content-center">
      <FloatingPhone src={src} alt={alt} priority={priority} speed={speed}/>
    </section>
  );
};

const FloatingPhone = ({ src,alt,priority,speed }: ScreenProps) => {
    return (
    <div
    style={{
        transformStyle: "preserve-3d",
        animation: `spin ${speed}s linear infinite`,
        width: "200px",
        height: "400px",
        position: "relative",
        margin: "100px auto",
        
      }}
      className="relative"
    >
      <div
        className="absolute inset-0 h-full w-full border-white border-l-neutral-200 border-t-neutral-200 bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600 p-1 pl-[3px] pt-[3px]"
        style={{
          transform: "translateZ(10px)",
          backfaceVisibility: "hidden",
        }}
      >
        <HeaderBar />
        <Screen src={src} alt={alt} priority={priority} />
      </div>

      <div
        className="absolute inset-0 h-full w-full border-white border-l-neutral-200 border-t-neutral-200 bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600 p-1 pl-[3px] pt-[3px]"
        style={{
          transform: "rotateY(180deg) translateZ(10px)",
          backfaceVisibility: "hidden",
        }}
      >
        <Camera />
      </div>

      <div
        className="absolute inset-0 h-full w-[20px] bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600"
        style={{
          transform: "rotateY(90deg) translateZ(3px)",
        }}
      ></div>

      <div
        className="absolute inset-0 h-full w-[20px] bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600"
        style={{
          transform: "rotateY(-90deg) translateZ(-183px)",
        }}
      ></div>

      <div
        className="absolute inset-0 w-full h-[20px] bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600"
        style={{
          transform: "rotateX(90deg) translateZ(10px)",

          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
        }}
      ></div>

      <div
        className="absolute inset-0 w-full h-[20px] bg-gradient-to-t from-gray-400 via-gray-200 to-gray-600"
        style={{
          transform: "rotateX(-90deg) translateZ(385px) translateY(0px)",

          borderBottomLeftRadius: "24px",
          borderBottomRightRadius: "24px",
        }}
      ></div>

      <style>{`
        @keyframes spin {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </div>
  );
};

const HeaderBar = () => {
  return (
    <>
      <div className="absolute left-[50%] top-2.5 z-50 h-2 w-16 -translate-x-[50%] rounded-md bg-neutral-900"></div>
      <div className="absolute right-3 top-2 z-10 flex gap-2"></div>
    </>
  );
};

const Screen = ({ src,alt,priority }: ScreenProps) => {
  return (
    <div className="relative z-0 h-full w-full place-content-center overflow-hidden bg-white">
      <Image src={src} alt={alt} priority={priority} fill/>
      <div className="absolute left-4 w-4/5 bottom-2 block md:hidden">
        <Btn />
      </div>
    </div>
  );
};

const Camera = () => {
  return (
    <div className="relative flex items-center justify-center h-full w-full">
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-8 w-8 rounded-full bg-black"></div>
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-4 w-4 rounded-full bg-gray-700"></div>
    </div>
  );
};

export default VirtualPhone;