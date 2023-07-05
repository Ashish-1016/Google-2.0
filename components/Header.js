import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import HeaderOptions from "./HeaderOptions";
import Avatar from "./Avatar";

function Header({term}) {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search/term=${term}`);
  };

  return (
    <header className="sticky bg-white top-0">
      <div className="flex w-full p-6 items-center">
        <Image
          onClick={() => router.push("/")}
          src=""
          height={40}
          width={120}
          className="cursor-pointer"
        />
        <form className="flex border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
          <input
            type="text"
            className="flex-grow items-center w-full focus:outline-none"
            ref={searchInputRef}
            defaultValue={term}
          />
          <p
            onClick={() => (searchInputRef.current.value = "")}
            className=" mr-2 hover: cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125"
          >
            X
          </p>
          <p className="h-6  mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300">
            @
          </p>
          <p className="h-6 mr-3 text-blue-500 hidden sm:inline-flex">$</p>
          <button hidden type="submit" onClick={search}></button>
        </form>
        <Avatar className="ml-auto" url="" />
      </div>
      <HeaderOptions />
    </header>
  );
}
export default Header;
