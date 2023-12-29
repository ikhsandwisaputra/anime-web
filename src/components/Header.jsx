// import React, { useEffect } from 'react';
// import { gsap } from 'gsap';

export default function Header() {

  function sayHey() {
    window.alert('Hello From React And Tailwind👋');
  }

  return (
    <div className="bg-[url('./assets/header.jpg')] bg-cover bg-center w-full h-[500px] relative items-center justify-evenly flex">
      <div className="text-center">
        <h1 className="text-slate-950 font-bold font-poppins text-center text-4xl uppercase animate-heading">
          Jujutsu Kaisen
        </h1>
        <p className="text-slate-900 text-3xl text-center capitalize font-poppins font-regular">
          react + tailwind css
        </p>
        <button
          className="bg-blue-700 rounded px-5 py-2 text-white mt-3"
          onClick={() => {
            sayHey();
          }}
        >
          Hello
        </button>
      </div>
    </div>
  );
}
