import { useState } from "react";
import Modal from "./Modal";
export default function Section1() {
    const [showModal, setShowModal] = useState(false);
    return (
      <section className='flex justify-evenly mt-5 bg-maColor1 w-full h-fit py-5  flex-wrap'>
        <div className=' w-[500px] text-justify mb-5 sm:mb-0 p-5 md:p-0'>
          <div className="bg-[url('./assets/react-logo.png')] mx-auto bg-cover w-[200px] h-[200px] hover:animate-spin transition-transform duration-[1200ms]"></div>
          <h1 className='uppercase font-poppins font-semibold text-3xl text-center text-white'>
            react js
          </h1>
          <p className='text-white font-regular mt-4 text-lg  '>
            React adalah pustaka JavaScript yang dikembangkan oleh Facebook dan
            sekelompok pengembang individu. Ini digunakan untuk membangun
            antarmuka pengguna (UI) untuk aplikasi web dan seluler.
          </p>
          <div className='flex justify-start'>
            <button
              className='uppercase font-bold bg-maColor2 rounded-lg px-3 py-2 mt-3 text-center text-white'
              onClick={() => setShowModal(true)}
            >
              read more
            </button>
          </div>
        </div>
  
        <Modal isOpen={showModal}>
          <section className='w-[350px] p-5 md:p-5 md:w-[500px] bg-black mx-auto h-[500px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 z-[9999] rounded-2xl'>
            <h1 className='text-white font-bold text-center text-2xl mb-2 '>
              React Js
            </h1>
            <button
              className='uppercase font-bold bg-maColor2 rounded-lg px-3 py-2 mt-3 text-center text-white'
              onClick={() => setShowModal(false)}
            >
              CLOSE
            </button>
  
            <p className='text-white text-justify '>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
              sed aliquid, alias ea iure omnis animi eveniet placeat error id
              blanditiis quam vero! Pariatur natus eos corporis blanditiis
              incidunt odit enim inventore quam, tenetur aperiam commodi facere
              praesentium assumenda deleniti exercitationem vitae cumque? Ipsam
              corrupti aliquam, praesentium quam corporis quasi. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Eaque, totam.
            </p>
          </section>
        </Modal>
        <div className='  w-[500px] text-justify p-5 md:p-0'>
          <div className="bg-[url('./assets/tailwind-logo.png')] bg-contain bg-no-repeat w-[290px] h-[150px] mx-auto"></div>
          <h1 className='uppercase font-poppins font-semibold text-3xl text-center text-white'>
            tailwind css
          </h1>
          <p className='text-white font-regular mt-2 text-lg'>
            Tailwind CSS adalah kerangka desain CSS yang dirancang untuk membangun
            antarmuka pengguna yang cepat, efisien, dan mudah disesuaikan.
          </p>
          <div className='flex justify-start'>
            <button className='uppercase font-bold bg-maColor2 rounded-lg px-3 py-2 mt-3 text-center text-white'>
              read more
            </button>
          </div>
        </div>
      </section>
    );
  }