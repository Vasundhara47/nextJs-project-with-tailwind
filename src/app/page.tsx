import { Link } from "@mui/material";


export default function Home() {
  return (
    <div className="bg-slate-800 h-screen grid place-items-center font-sans">
      <div className="flex gap-4" >
        <button
          className="bg-white px-6 py-2 hover:bg-slate-300 rounded-lg"
        > <Link
          className=" text-sky-950 no-underline"
          href='/login'>Login</Link></button>
        <button
          className="bg-white px-6 py-2 hover:bg-slate-300 rounded-lg"
        > <Link
          className=" text-sky-950 no-underline"
          href='/signup'>Signup</Link></button>
      </div>
    </div>
  );
}
