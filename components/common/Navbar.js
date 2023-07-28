import { NAVBAR_LIST } from "@/utils/constants";
export const Navbar = () => {
  return (
    <nav className="bg-primary text-white h-10 lg:flex hidden items-center justify-center sticky top-0 z-50">
      <ul className="flex items-center gap-5">
        {NAVBAR_LIST.map((item) => (
          <li key={item} className="hover:text-yellow cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};
