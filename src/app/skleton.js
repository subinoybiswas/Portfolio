import Spotlight from "./spotlight";
import { SpotlightCard } from "./spotlight";
import Image from "next/image";
export default function Skeleton() {
  return (
    <Spotlight className="max-w-sm mx-2 flex flex-col lg:flex-row flex-wrap lg:max-w-none group mb-4 items-center justify-center gap-x-4 gap-y-4">
      <SpotlightCard>
        <div className="relative h-full bg-[#020817] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <Image
            className={`${"animate-pulse bg-gray-200 blur-md"} mb-5 rounded-3xl`}
            src={"/loading.png"}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width={0}
            height={0}
            sizes="100vw"
            alt="Image"
          ></Image>

          <div className="flex flex-col h-full items-start mb-5">
            {/* Placeholder for title */}
            <div className="animate-pulse w-[90%] h-6 bg-gray-200 rounded-full mb-2"></div>
            {/* Placeholder for content */}
            <div className="animate-pulse w-full h-4 bg-gray-200 rounded-full mb-2"></div>
            <div className="animate-pulse w-[80%] h-4 bg-gray-200 rounded-full mb-2"></div>
            <div className="animate-pulse w-[70%] h-4 bg-gray-200 rounded-full mb-2"></div>
            {/* Placeholder for buttons */}
            <div className="flex flex-row gap-2 justify-end items-end">
              <div className="animate-pulse w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="animate-pulse w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard>
        <div className="relative h-full bg-[#020817] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <Image
            className={`${"animate-pulse bg-gray-200 blur-md"} mb-5 rounded-3xl`}
            src={"/loading.png"}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width={0}
            height={0}
            sizes="100vw"
            alt="Image"
          ></Image>

          <div className="flex flex-col h-full items-start mb-5">
            {/* Placeholder for title */}
            <div className="animate-pulse w-[90%] h-6 bg-gray-200 rounded-full mb-2"></div>
            {/* Placeholder for content */}
            <div className="animate-pulse w-full h-4 bg-gray-200 rounded-full mb-2"></div>
            <div className="animate-pulse w-[80%] h-4 bg-gray-200 rounded-full mb-2"></div>
            <div className="animate-pulse w-[70%] h-4 bg-gray-200 rounded-full mb-2"></div>
            {/* Placeholder for buttons */}
            <div className="flex flex-row gap-2 justify-end items-end">
              <div className="animate-pulse w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="animate-pulse w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard>
        <div className="relative h-full bg-[#020817] p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
          <Image
            className={`${"animate-pulse bg-gray-200 blur-md"} mb-5 rounded-3xl`}
            src={"/loading.png"}
            style={{
              width: "100%",
              height: "auto",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            width={0}
            height={0}
            sizes="100vw"
            alt="Image"
          ></Image>

          <div className="flex flex-col h-full items-start mb-5">
            {/* Placeholder for title */}
            <div className="animate-pulse w-[90%] h-6 bg-gray-200 rounded-full mb-2"></div>
            {/* Placeholder for content */}
            <div className="animate-pulse w-full h-4 bg-gray-200 rounded-full mb-2"></div>
            <div className="animate-pulse w-[80%] h-4 bg-gray-200 rounded-full mb-2"></div>
            <div className="animate-pulse w-[70%] h-4 bg-gray-200 rounded-full mb-2"></div>
            {/* Placeholder for buttons */}
            <div className="flex flex-row gap-2 justify-end items-end">
              <div className="animate-pulse w-8 h-8 bg-gray-200 rounded-full"></div>
              <div className="animate-pulse w-8 h-8 bg-gray-200 rounded-full"></div>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </Spotlight>
  );
}
