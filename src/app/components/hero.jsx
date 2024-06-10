import Link from "next/link";


const Hero = () => {
 
  return (
<section className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[101px] box-border max-w-full text-center text-45xl text-gray-300 font-text-base-semibold mq750:pb-[66px] mq750:box-border">
<div className="w-[983px] flex flex-row items-start justify-start relative max-w-full">
  <img
    className="h-[163.1px] w-[191.4px] absolute !m-[0] top-[-6px] left-[-74.5px] overflow-hidden shrink-0 object-contain mix-blend-normal"
    loading="lazy"
    alt=""
    src="/Monthly.png"
  />
  <div className="flex-1 flex flex-col items-center justify-start gap-[56px] max-w-full z-[1] mq750:gap-[28px]">
    <div className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full">
      <button className="cursor-pointer [border:none] py-1.5 px-3 bg-basic-app-landing-color rounded-81xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-lavender-100">
        <Link className="w-[104px] relative text-sm leading-[150%] font-medium font-body-sub-heading-16-bold text-data-analysis-color03 text-center inline-block min-w-[104px] no-underline" href= "/search">
          Product Search
        </Link>
      </button>
      <div className="self-stretch flex flex-col items-center justify-start relative gap-[24px] max-w-full">
        <img
          className="w-[571px] h-[90px] absolute !m-[0] top-[77px] left-[373.5px]"
          loading="lazy"
          alt=""
          src="/Vector.png"
        />
        <b className="self-stretch relative tracking-[-0.01em] leading-[120%] z-[1] mq450:text-15xl mq450:leading-[46px] mq1050:text-26xl mq1050:leading-[61px]">
          <span>Explore Every Corner of Retail with Ease,</span>
          <span className="text-37xl text-neutral-10">
            With Just an Image
          </span>
        </b>
        <div className="w-[536px] relative text-lg leading-[32px] font-medium font-body-sub-heading-16-bold text-neutral-80 inline-block max-w-full">
          With every interaction, we bring you closer to the items you
          love from the brands you trust.
        </div>
      </div>
    </div>
    <div className="w-[420px] flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full mq450:gap-[16px]">
      <div className="cursor-pointer flex-1 flex flex-row items-start justify-start min-w-[126px]">
        <div className="flex-1 rounded-81xl bg-data-analysis-color03 overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px]">
          <Link className="flex-1 relative leading-[26px] text-neutral-10 no-underline text-base " href="/search">New Search</Link>
        </div>
      </div>
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start min-w-[126px]">
        <Link className="no-underline flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-neutral-30" href="/Demo">
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0"
            alt=""
            src="/Icon.png"
          />
          <b className="flex-1 relative text-base leading-[26px] inline-block font-body-sub-heading-16-bold text-data-analysis-color03 text-center min-w-[120px]">
            Watch A Demo
          </b>


          
        </Link>
      </button>
    </div>
  </div>
  <div className="h-[251px] w-[258.7px] absolute !m-[0] right-[-164.2px] bottom-[-87px]">
    <div className="absolute top-[69px] left-[0px] rounded-[50%] bg-lavender-200 [filter:blur(98.33px)] w-[182px] h-[182px]" />
    <img
      className="absolute h-[calc(100%_-_3.3px)] top-[0px] bottom-[3.3px] left-[24px] rounded-[15.38px] max-h-full w-[234.7px] overflow-hidden object-contain z-[2]"
      loading="lazy"
      alt=""
      src="/Chart.png"
    />
  </div>
  <div className="h-[208.5px] w-[225.9px] absolute !m-[0] bottom-[-101.2px] left-[-150.5px]">
    <div className="absolute top-[6.3px] left-[0px] rounded-[50%] bg-royalblue [filter:blur(166.72px)] w-[189px] h-[189px]" />
    <img
      className="absolute h-full top-[0px] bottom-[0px] left-[41px] rounded-[3.92px] max-h-full w-[184.9px] overflow-hidden object-contain z-[2]"
      loading="lazy"
      alt=""
      src="/MRR Growth.png"
    />
  </div>
</div>
</section> 
  );
};

export default Hero;

