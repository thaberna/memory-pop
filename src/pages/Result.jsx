import { useLocation } from "react-router-dom";
import { Button, Layout, Score, Timer } from "../components";

export default function Result() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const score = searchParams.get("score");
  const seconds = searchParams.get("time");

  return (
    <Layout>
      <div className="h-screen flex items-center justify-center flex-col gap-8 z-30">
        <Timer seconds={seconds} />
        <Score points={score} />
        <div className="flex items-center justify-center gap-3">
          <Button title="jugar" url="/game" rotate={12} />
          <Button title="salir" url="/" rotate={3} />
        </div>
      </div>
      <div className="absolute z-20 rounded-full bg-orange-400 border-4 border-black p-36"></div>
    </Layout>
  );
}
