import React from 'react';

const Header = () => {
    return (
        <header className={"p-5 shadow-md bg-white"}>
          <div className={"max-w-8xl flex justify-between mx-auto"}>
              <h1 className={"font-bold text-3xl text-red-700 ml-3 md:ml-10 cursor-pointer"}> Sikal Villa</h1>

              <button className={"hover:opacity-80 bg-red-500 p-2 w-[90px] rounded-lg text-white font-semibold mr-5 md:mr-10"}> Login</button>
          </div>
        </header>
    );
};

export default Header;