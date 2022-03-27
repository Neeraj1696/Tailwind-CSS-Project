import React from "react";

function Nav() {
  return (
    <>
      <main>
        <div className="flex bg-black text-white justify-between ">
          <h5 className="flex items-center px-3">Tailwind</h5>
          <ul className="flex m-4 px-4 space-x-4 justify-end  ">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Nav;
