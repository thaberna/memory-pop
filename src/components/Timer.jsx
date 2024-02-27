import { formatTime } from "../constants/utils";

export default function Timer({ seconds }) {
  return (
    <div className="flex items-center justify-center flex-col text-stroke font-meoow text-yellow-400 ">
      <span className="text-6xl -rotate-6">{formatTime(seconds)}</span>
      <span className="text-4xl rotate-3">tiempo</span>
    </div>
  );
}
