import { useEffect, useState } from "react";

export const BackgroundCircles = () => {
    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []);
  
    return (
      <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square  rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[46deg]">
            <div
              className={`w-[4px] h-[4px] -ml-1 -mt-36 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[56deg]">
            <div
              className={`w-[4px] h-[4px] -ml-1 -mt-32 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[54deg]">
            <div
              className={`hidden w-[4px] h-[4px] -ml-1 mt-[12.9rem] bg-gradient-to-b from-whi    to-[#1A1A32] rounded-full xl:block transit transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[65deg]">
            <div
              className={`w-[4px] h-[4px] -ml-1.5 mt-52 bg-gradient-to-b from-[white] to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom -rotate-[85deg]">
            <div
              className={`w-[4px] h-[4px] -ml-3 -mt-3 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
  
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-3 -mt-3 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-7 -mt-5 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-36 -mt-60 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-56 -mt-11 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-7 -mt-11 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-20 -mt-48 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] ml-3 mt-3 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
          <div className="absolute bottom-1/2 left-1/2 w-0.25 h-1/2 origin-bottom rotate-[70deg]">
            <div
              className={`w-[4px] h-[4px] -ml-52 mt-16 bg-gradient-to-b from-white to-[#1A1A32] rounded-full transition-transform duration-500 ease-out ${
                mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            />
          </div>
        
      </div>
    );
  };