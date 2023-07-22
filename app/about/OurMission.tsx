import React from "react";

const OurMission = () => {
  return (
    <div className="flex w-full bg-[url('/images/dummypicture10.jpg')] bg-cover bg-fixed bg-center bg-no-repeat">
      <div className="flex w-full flex-col bg-neutral-950 bg-opacity-70 px-10 py-10 pt-16 text-white xl:flex-row xl:px-20 xl:pb-32">
        <div className="flex w-full justify-center xl:w-1/2">
          <h1 className="mb-8 text-4xl font-bold uppercase xl:mb-0 xl:text-6xl">
            Our Mission
          </h1>
        </div>
        <div className="flex w-full flex-col items-center space-y-8 xl:w-1/2 xl:items-start">
          <p className="w-full text-center font-medium xl:w-3/5 xl:text-start xl:font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, facere
            illo debitis ducimus id atque fugiat eum quibusdam, harum qui
            repellat, in sint amet dolorum sequi suscipit ex aut. Consequatur?
          </p>
          <p className="w-full text-center font-medium xl:w-3/5 xl:text-start xl:font-normal">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            totam explicabo blanditiis labore aperiam et culpa, repudiandae
            commodi ex esse, iusto sunt fuga minus? Provident, aliquam facilis.
            Neque, unde perspiciatis!
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
