const Footer = () => {
    return (
      <section className="self-stretch bg-gray-200 overflow-hidden flex flex-col items-start justify-start 
      pt-20 px-[94px] 2xl:px-[335px] pb-10 box-border relative gap-[174px] max-w-full z-[9] text-left text-45xl text-neutral-10 font-text-base-semibold">


        <img
          className="w-[1440px] h-[621px] relative hidden max-w-full z-[0]"
          alt=""
          src="/e.png"
        />
        <img
          className="w-[1082.9px] h-[847.5px] absolute !m-[0] right-[-281.9px] bottom-[-312.5px] z-[1]"
          loading="lazy"
          alt=""
          src="/Union.svg"
        />
        <div className="w-[771px] flex flex-row items-start justify-start py-0 pr-1 pl-[4.5px] box-border max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start gap-[66px] max-w-full mq450:gap-[16px] mq750:gap-[33px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[115%] font-bold font-inherit z-[2] mq450:text-19xl mq450:leading-[44px] mq1050:text-32xl mq1050:leading-[59px]">
              Want to see what we built for you?
            </h1>
            <div className="w-[495px] flex flex-row flex-wrap items-start justify-start gap-[32px] max-w-full z-[1] text-center text-base font-body-sub-heading-16-bold mq750:gap-[16px]">
              <div className="w-[194px] flex flex-row items-start justify-start">
                <div className="flex-1 rounded-81xl bg-data-analysis-color03 overflow-hidden flex flex-row items-center justify-center py-3.5 px-5 gap-[10px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon.svg"
                  />
                  <b className="flex-1 relative leading-[26px]">Let’s Search</b>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/icon.svg"
                  />
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex-1 flex flex-row items-start justify-start min-w-[175px]">
                <div className="flex-1 rounded-81xl overflow-hidden flex flex-row items-center justify-center py-3.5 px-[19px] gap-[10px] border-[1px] border-solid border-neutral-30">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/Icon (1).png"
                  />
                  <b className="flex-1 relative text-base leading-[26px] font-body-sub-heading-16-bold text-neutral-10 text-center">
                    Get a browser Extension
                  </b>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/Icon.png"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[38px] max-w-full text-base font-body-sub-heading-16-bold mq750:gap-[19px]">
          <div className="self-stretch h-0.5 relative box-border z-[2] border-t-[2px] border-solid border-neutral-50" />
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[2.5px] pl-1 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
              <div className="relative z-[1]">
                © 2024 Seamsearch. All Rights Reserved.
              </div>
              <div className="flex flex-row items-start justify-start gap-[45px] mq450:gap-[22px]">
                <div className="relative z-[2]">{`Terms & Conditions`}</div>
                <div className="relative inline-block min-w-[105px] z-[2]">
                  Privacy Policy
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Footer;



