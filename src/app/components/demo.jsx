

const Testimonials = () => {
  return (
    <section
      className="self-stretch overflow-hidden flex flex-col items-center justify-center pt-[161px] px-[94px]  box-border gap-[92px] max-w-full z-[1] 
    text-left text-xl text-lawngreen font-dm-sans "
    >
     <div className="w-[1453px] flex flex-row items-center justify-center relative max-w-[116%] shrink-0 text-base text-gray-300 font-satoshi  ">
     <div className="!m-[0] absolute  flex flex-row items-center justify-center py-[238px] px-5 box-border max-w-full sm:w-[1100px] 2xl:w-[1221px]">
          <img
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-21xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/Rectangle.svg"
          />

          <img
            className=" w-[243.78px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/Play.png"
          />
        </div> 
         {/* <VideoPlayer /> */}

       <div className="!m-[0] absolute right-[65px] bottom-[11px] rounded-21xl bg-gray-500 [backdrop-filter:blur(40px)] flex flex-col items-start justify-start py-5 px-[19px] gap-[16px] z-[2] border-[1px] border-solid border-neutral-10 font-text-base-semibold">
            <div className="w-[130px] flex flex-col items-start justify-start">
              <div className="self-stretch relative leading-[150%] font-medium">
                Happy Costumers
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-xs">
                <div className="relative leading-[150%] inline-block min-w-[57px]">
                  <span>
                    <span className="font-medium">4.5</span>
                  </span>
                  <span className="text-slategray">
                    <span>{` `}</span>
                    <span>(2.785)</span>
                  </span>
                </div>
                <img
                  className="h-[18px] w-[18px] relative rounded-12xs-5 min-h-[18px]"
                  loading="lazy"
                  alt=""
                  src="/Star.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-start justify-start">
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90]"
                alt=""
                src="/1.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[1] ml-[-16px]"
                alt=""
                src="/2.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[2] ml-[-16px]"
                alt=""
                src="/3.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[3] ml-[-16px]"
                alt=""
                src="/4.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[4] ml-[-16px]"
                alt=""
                src="/5.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[5] ml-[-16px]"
                alt=""
                src="/6.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[6] ml-[-16px]"
                alt=""
                src="/7.svg"
              />
              <img
                className="h-[43px] w-[43px] relative rounded-[50%] object-cover min-h-[43px] shrink-0 [debug_commit:f6aba90] z-[6] ml-[-16px]"
                alt=""
                src="/Group.svg"
              />
            </div>
          </div> 

        <img
          className="h-[508px] flex-1 relative max-w-full overflow-hidden z-[8]"
          alt=""
          src="/curve.pn"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-2 box-border max-w-full text-center text-29xl text-gray-200 font-text-base-semibold">
        <div className="w-[790px] flex flex-col items-start justify-start gap-[16px] max-w-full">
          <h1 className="m-0 self-stretch h-[120px] relative text-inherit tracking-[-0.01em] leading-[120%] font-semibold font-inherit inline-block shrink-0 mq450:text-10xl mq450:leading-[35px] mq1050:text-19xl mq1050:leading-[46px]">
            <p className="m-0">{`Go Beyond Searching: `}</p>
            <p className="m-0">Discover Every Detail</p>
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[26px] box-border max-w-full text-lg text-lightsteelblue font-body-sub-heading-16-bold">
            <div className="mb-20 flex-1 relative leading-[32px] font-medium inline-block max-w-full">
              With our revolutionary platform, every detail matters. Discover
              and compare products instantly across selected or a multitude of
              marketplaces, all with just a photo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
