import Spotlight from "./spotlight";
import { SpotlightCard } from "./spotlight";
export default function Skleton() {
  return (
    <Spotlight className="max-w-sm mx-2 flex flex-col lg:flex-row flex-wrap lg:max-w-none group mb-4 items-center justify-center gap-x-4 gap-y-4">
      <SpotlightCard>
        <div className="relative h-full bg-[#1d1543] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
          {/* Skeleton Loader */}
          <div className="animate-pulse w-full h-[40%] bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-full h-8 bg-slate-800 rounded-full mb-5"></div>

          <div className="flex flex-col h-full items-center text-center">
            {/* Placeholder for image */}
            <div className="animate-pulse w-[40%] h-[40%] bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for text */}
            <div className="animate-pulse w-full h-4 bg-slate-800 rounded-full mb-2"></div>
            <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for button */}
            <div className="animate-pulse w-32 h-8 bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard>
        <div className="relative h-full bg-[#1d1543] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
          {/* Skeleton Loader */}
          <div className="animate-pulse w-full h-[40%] bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-full h-8 bg-slate-800 rounded-full mb-5"></div>

          <div className="flex flex-col h-full items-center text-center">
            {/* Placeholder for image */}
            <div className="animate-pulse w-[40%] h-[40%] bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for text */}
            <div className="animate-pulse w-full h-4 bg-slate-800 rounded-full mb-2"></div>
            <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for button */}
            <div className="animate-pulse w-32 h-8 bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard>
        <div className="relative h-full bg-[#1d1543] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
          {/* Skeleton Loader */}
          <div className="animate-pulse w-full h-[40%] bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-full h-8 bg-slate-800 rounded-full mb-5"></div>

          <div className="flex flex-col h-full items-center text-center">
            {/* Placeholder for image */}
            <div className="animate-pulse w-[40%] h-[40%] bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for text */}
            <div className="animate-pulse w-full h-4 bg-slate-800 rounded-full mb-2"></div>
            <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for button */}
            <div className="animate-pulse w-32 h-8 bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
