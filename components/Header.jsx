import React from 'react';
import {useRouter} from "next/router";

const Header = () => {
    const router = useRouter();
    console.log(router.query);

    return (
        <header className={"max-w-7xl p-3 shadow-md mx-auto bg-white border mx-10 my-3 rounded-full"}>
          <div className={"flex justify-between"}>
              <h1 onClick={() => router.push("/")} className={"font-bold text-3xl text-red-700 ml-3 md:ml-10 cursor-pointer"}> Villa</h1>

              <button className={"hover:opacity-80 bg-red-500 p-2 w-[90px] rounded-full text-white font-semibold mr-5 md:mr-10"}> Login</button>
          </div>
        </header>
    );
};

export default Header;