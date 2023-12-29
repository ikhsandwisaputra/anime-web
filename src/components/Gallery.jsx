export default function Gallery() {
    return (
      <>
        <h1 className='text-center font-poppins font-semibold text-3xl uppercase p-5'>
          {' '}
          Gallery
        </h1>
        <div className='grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 md:p-4'>
          <div className=' h-15 md:h-80 w-full bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3]  rounded-lg md:col-span-4 overflow-hidden relative group hover:scale-95 transition-all duration-500 z-[-99999]'>
            <div className="w-full h-full bg-[url('./assets/12.jpg')] bg-cover bg-center group-hover:scale-125 transition-all duration-500"></div>
          </div>
          <div className=" bg-[url('./assets/1.jpg')] h-15 bg-green-500  rounded-lg md:row-span-2 bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/2.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/3.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/4.jpg')] h-15 bg-green-500 rounded-lg md:row-span-2 bg-cover bg-center  "></div>
          <div className=" bg-[url('./assets/5.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center "></div>
          <div className=" bg-[url('./assets/6.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center "></div>
          <div className=" bg-[url('./assets/7.jpg')] h-15 md:h-80 bg-green-500  rounded-lg md:col-span-4 bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/8.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/9.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/10.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center"></div>
          <div className=" bg-[url('./assets/11.jpg')] h-15 bg-green-500 aspect-[4/3] md:aspect-[3/4] xl:aspect-[4/3] rounded-lg bg-cover bg-center"></div>
        </div>
      </>
    );
  }