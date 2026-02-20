const WhatWeOffer = () => {
  return (
    <section className="rounded-[25px] bg-black overflow-hidden py-16 px-4 sm:px-12 mb-4">
      <h2 className="text-[#EDEDED] underline text-[40px] font-bold mb-16 text-center">
        What You Get
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Card 01 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            01
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Hands-on
            <br />
            project work
          </span>
        </div>

        {/* Card 02 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            02
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Operations
            <br />
            & product
            <br />
            Experience
          </span>
        </div>

        {/* Card 03 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            03
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            space economy
            <br />
            exposure
            <br />
          </span>
        </div>

        {/* Card 04 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            04
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            A portfolio
            <br />
            you can show
          </span>
        </div>

        {/* Card 05 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            05
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Community
            <br />
            of peers
          </span>
        </div>

        {/* Card 06 */}
        <div className="rounded-[25px] bg-black border border-white p-6 h-[153px]  flex items-center  justify-evenly whitespace-nowrap ">
          <span className="text-[#EDEDED] text-[80px] sm:text-[100px] font-bold">
            06
          </span>
          <span className="text-white text-xl sm:text-2xl font-medium">
            Remote first
            <br />
            flexibility
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
