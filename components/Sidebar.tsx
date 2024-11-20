import { AlignStartHorizontalIcon, AArrowUp } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Sidebar = () => {
  return (
    <aside
      className="hidden w-[90px] sm:flex flex-col px-5 py-7 overflow-auto bg-red-700
        lg:w-[250px] xl:w-[310px] transition-all duration-300 ease-in-out"
    >
      {/* create logo */}

      <div className="flex justify-center lg:justify-start gap-5">
        <AlignStartHorizontalIcon size={24} />
        <h1 className="text-xl font-bold hidden lg:block">Anything</h1>
      </div>
      <Separator className="bg-black my-2" />

      <div className="flex flex-1 flex-col">
        <ul className="flex flex-1 mt-9 flex-col gap-5">
        <Link href="/" className="w-full">
            <li className="flex gap-2 items-center justify-center lg:justify-start">
              <AArrowUp size={24} className="" />
              <p className="text-lg hidden lg:block font-bold">Inicio</p>
            </li>
          </Link><Link href="/" className="w-full">
            <li className="flex gap-2 items-center justify-center lg:justify-start">
              <AArrowUp size={24} className="" />
              <p className="text-lg hidden lg:block font-bold">Inicio</p>
            </li>
          </Link><Link href="/" className="w-full">
            <li className="flex gap-2 items-center justify-center lg:justify-start">
              <AArrowUp size={24} className="" />
              <p className="text-lg hidden lg:block font-bold">Inicio</p>
            </li>
          </Link><Link href="/" className="w-full">
            <li className="flex gap-2 items-center justify-center lg:justify-start">
              <AArrowUp size={24} className="" />
              <p className="text-lg hidden lg:block font-bold">Inicio</p>
            </li>
          </Link><Link href="/" className="w-full">
            <li className="flex gap-2 items-center justify-center lg:justify-start">
              <AArrowUp size={24} className="" />
              <p className="text-lg hidden lg:block font-bold">Inicio</p>
            </li>
          </Link><Link href="/" className="w-full">
            <li className="flex gap-2 items-center justify-center lg:justify-start">
              <AArrowUp size={24} className="" />
              <p className="text-lg hidden lg:block font-bold">Inicio</p>
            </li>
          </Link>
        </ul>
        <div>LogOut</div>
      </div>
    </aside>
  );
};
export default Sidebar;
