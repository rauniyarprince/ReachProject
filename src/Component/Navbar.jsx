function Navbar() {
  return (
    <>
      <nav className="bg-amber-100 h-20 flex items-center justify-between px-4 md:px-10 shadow-md fixed top-0 w-full z-50 ">
        <h1 className="text-lg md:text-xl font-bold">
          PinceCodes
        </h1>

        <ul className="flex gap-3 md:gap-6 text-sm md:text-base">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="hidden md:block"></li>
          <li className="cursor-pointer">Contact</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;