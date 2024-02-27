import { Link } from "react-router-dom";

export default function Button({
  title,
  url = "",
  rotate = 0,
  onClick = null,
}) {
  return (
    <Link
      to={url}
      className={`font-meoow py-4 px-8 text-3xl rounded-full bg-blue-300 transition border-4 border-black 
      hover:bg-yellow-200 rotate-${rotate} hover:scale-110`}
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
