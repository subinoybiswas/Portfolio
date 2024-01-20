import Spotlight from "./spotlight";
import { SpotlightCard } from "./spotlight";
export default function Skleton() {
  return (
    <Spotlight className="max-w-sm mx-2 flex flex-col lg:flex-row flex-wrap lg:max-w-none group mb-4 items-center justify-center gap-x-4 gap-y-4">
      <SpotlightCard>
        <div className="relative h-full bg-[#0f172a] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
          {/* Skeleton Loader */}
          <div className="animate-pulse w-full h-[40%] bg-[#0f172a] rounded-full mb-3">
            {" "}
            <div className="animate-pulse  h-[40%] bg-[#0f172a] rounded-full mb-3 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div className="absolute inset-0 translate-z-0 bg-[#090c3bdd] rounded-full blur-[80px]"></div>
            </div>
          </div>
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
        <div className="relative h-full bg-[#0f172a] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
          {/* Skeleton Loader */}
          <div className="animate-pulse w-full h-[40%] bg-[#0f172a] rounded-full mb-3">
            {" "}
            <div className="animate-pulse  h-[40%] bg-[#0f172a] rounded-full mb-3 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div className="absolute inset-0 translate-z-0 bg-[#090c3bdd] rounded-full blur-[80px]"></div>
            </div>
          </div>
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
      </SpotlightCard>{" "}
      <SpotlightCard>
        <div className="relative h-full bg-[#0f172a] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden ">
          {/* Skeleton Loader */}
          <div className="animate-pulse w-full h-[40%] bg-[#0f172a] rounded-full mb-3">
            {" "}
            <div className="animate-pulse  h-[40%] bg-[#0f172a] rounded-full mb-3 absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square">
              <div className="absolute inset-0 translate-z-0 bg-[#090c3bdd] rounded-full blur-[80px]"></div>
            </div>
          </div>
          <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-3"></div>
          <div className="animate-pulse w-full h-8 bg-slate-800 rounded-full mb-5"></div>

          <div className="flex flex-col h-full items-center text-center">
            {/* Placeholder for image */}
            <div className="animate-pulse w-[40%] h-[40%] bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for text */}
            <div className="animate-pulse w-[90vw] md:w-full h-4 bg-slate-800 rounded-full mb-2"></div>
            <div className="animate-pulse w-3/4 h-4 bg-slate-800 rounded-full mb-5"></div>

            {/* Placeholder for button */}
            <div className="animate-pulse w-32 h-8 bg-slate-800 rounded-full"></div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
