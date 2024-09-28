import React from "react";



const About = () => {
  return (
    <div className="relative items-center w-screen h-screen bg-black">
      {/* Spline iframe */}
      <iframe
        className="absolute w-screen h-200
         top-0 left-0"
        src="https://my.spline.design/interactivesparkletterwithparticleeffect-057ee7dbcd329f7241c0a59d73061017/"
        
        
        style={{ border: "none" }}
      />
      <iframe
        className="absolute w-full h-200
         "
        src="https://my.spline.design/interactivesparkletterwithparticleeffect-b2c2286c8dafdab0b533c192f95603b6/"
        
        
        style={{ border: "none" }}
      />

      {/* Top Text */}
      <div className=" font-oswald  w-full text-center text-xl md:text-3xl bg-black bg-clip-text text-transparent">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, modi commodi? Consequatur vero ab dolore, sequi quisquam tenetur reprehenderit, doloribus quod totam quae similique minima rem eius explicabo eum? Ad!
      </div>

      


    </div>
  );
};

export default About;
