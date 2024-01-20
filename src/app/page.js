import dynamic from "next/dynamic";

const NoSSR = dynamic(() => import("./main.js"), { ssr: false });
export default function Home() {
  return <NoSSR></NoSSR>;
}
