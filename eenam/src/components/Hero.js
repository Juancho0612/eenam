import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-20">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          
          <h1 className="uppercase text-[55px] md:text-[70px] leading-[1.1] font-semibold mb-4">Globos para cada ocación<br />
          {/* <span className="font-light">new collection</span>*/} </h1> 
          <button className='self-start uppercase font-semibold border-b-2 border-primary'>Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
