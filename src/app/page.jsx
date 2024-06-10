import Header from "./components/header";
import Hero from "./components/hero"
import Demo from "./components/demo";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div className="w-full h-full relative bg-neutral-10 overflow-auto flex flex-col 
    items-start justify-start pt-[38px] lg:px-0 px-6 pb-0 box-border 
    leading-[normal] tracking-[normal] text-left text-base text-neutral-100 font-body-sub-heading-16-bold">
      <Hero />
      <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-5 pr-[21px] pl-5 text-center text-lg text-neutral-80">
        <div className="w-[349px] relative leading-[32px] font-medium inline-block">
          Instant search in multiple stores at once.
        </div>
      </div>
      <section className="self-stretch bg-data-analysis-color03 flex flex-row flex-wrap items-start justify-center py-8 px-5 gap-[16px] mq750:pl-10 mq750:pr-10 mq750:box-border">
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          loading="lazy"
          alt=""
          src="/slack.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          loading="lazy"
          alt=""
          src="/netflix.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          loading="lazy"
          alt=""
          src="/google.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          loading="lazy"
          alt=""
          src="/airbnb.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          alt=""
          src="/unicef.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          alt=""
          src="/adobe.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          alt=""
          src="/microsoft.png"
        />
        <img
          className="self-stretch flex-1 relative max-w-[146px] overflow-hidden max-h-full object-cover min-w-[143px] min-h-[94px]"
          alt=""
          src="/shipbob.png"
        />
      </section>
      <Demo />
      <Footer />
    </div>
  );
};

export default Home;
