import { Faustina, DM_Sans } from "next/font/google";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import LogoSlider from "@/components/logo-slide"
import { getHomePage } from "@/lib/api";
import Button from "@/components/button";
import ServiceBlock from "@/components/service-block";
import TestimonialBlock from "@/components/testimonial-block";
import Form from "@/components/form";

const faustina = Faustina({
  variable: "--font-faustina",
  subsets: ["latin"],
  display: "swap",
});

function Intro(
  {
    content
  }: {
    content: any
  }
) {

  return (
    <>
    <section className="bg-purple-shade-1 p-10 ptp-10 md:pt-20 mx-2 rounded-3xl text-center intro">
      <div className="relative max-w-4xl mx-auto">
        <img className="absolute bottom-0 hidden md:block" src="/images/header-stars.png" alt="*" />
        <h1 className="markdown-h1">{documentToReactComponents(content?.introHeader?.json)}</h1>
      </div>
      <div className="markdown-copy max-w-sm mx-auto my-5 md:my-10">
        {documentToReactComponents(content?.introContent?.json)}
      </div>
      <Button text="Let's Chat" url="/contact" css="button-shadow buttonLight mx-auto mt-5 md:mt-10 z-10 relative" />
      <img className="mx-auto w-full max-w-6xl md:-mt-16 z-0 relative" src={content?.introImage?.url} />
    </section>
    <section  className="py-10 md:py-20 text-center text-2xl md:text-4xl">
      <div className="max-w-5xl mx-auto leading-normal mb-16 px-5 md:px-0">
        {documentToReactComponents(content?.partnersContent?.json)}
      </div>
      <div className="">
        <LogoSlider logos={content?.partnerLogosCollection?.items} />
      </div>
    </section>
    <section id="services" className="bg-grey p-10 pt-10 md:pt-20 mx-2 rounded-3xl text-center">
      <div className="services max-w-6xl mx-auto mt-10 mb-16">
        {documentToReactComponents(content?.servicesHeader?.json)}
      </div>
      <Button text="Learn More" url="/what-we-do" css="button-nav buttonGreen mt-20 relative" />
      <div className="flex flex-col md:flex-row justify-center items-center content-center md:space-x-4 my-10 md:my-20">
        {
          content?.servicesContentCollection?.items?.map((service: { title: string; image: { url: string; }; url: string; }, i: any) => (
            <ServiceBlock 
              title={service?.title} 
              image={service?.image?.url}
              url={service?.url}
              index={i}
              key={i}
            />
          ))
        }
      </div>
    </section>
    <section className="py-20 w-full overflow-hidden">
      <div className="chooseUs w-full max-w-6xl text-center mx-auto mt-10 mb-20 px-5">
        {documentToReactComponents(content?.chooseUsHeader?.json)}
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center content-center max-w-6xl mx-auto w-full">
        <img className="mx-auto w-full md:w-1/2 p-10" src={content?.chooseUsImage?.url} alt="Why Choose Amiz" />
        <div className="w-full md:w-1/2 flex flex-col lg:flex-row flex-wrap justify-start items-center content-center">
          {
            content?.chooseUsNumbers?.map((item: any, i: any) => (
              <div key={i} className="w-full flex flex-col justify-center px-20 my-5 md:my-10 text-center md:text-left items-center">
                  <p className="text-5xl mb-2">{item?.number}</p>
                  <p className="font-semibold">{item?.title}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
    <section id="about" className="bg-purple-shade-2 p-10 md:p-20 mx-2 rounded-3xl">
      <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row justify-between items-start content-start">
      <div className="">
        <div className="whoWeAre max-w-lg mt-10 mb-10">
          {documentToReactComponents(content?.whoHeader?.json)}
        </div>
        <div className="max-w-xl block mb-16">
          {documentToReactComponents(content?.whoContent?.json)}
        </div>
        <Button text="Learn More" url="/who-we-are" css="button-nav buttonGreen mt-20 relative" />
      </div>
      <img className="mt-10 w-full md:w-1/2 p-10" src={content?.whoImage?.url} alt="Who we are at Amiz"/>
      </div>
      
      
    </section>
    <section id="clients" className="py-10 md:py-20 max-w-6xl text-center mx-auto">
      <div className="chooseUs max-w-6xl text-center mx-auto mt-10 md:mb-20">
        {documentToReactComponents(content?.testimonialsHeader?.json)}
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center content-center my-0 md:my-20 mx-auto px-10 md:p-0">
          {
            content?.testimonialsCollection?.items?.map((item: any, i: any) => (
              <TestimonialBlock 
                title={item?.title}
                name={item?.name}
                quote={item?.quote}
                image={item?.image?.url}
                index={i}
                key={i}
              />
            ))
          }
        </div>
    </section>
    <section id="contact" className="bg-purple-shade-1 p-20 mx-2 rounded-3xl formfooter">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <div className="contact w-full md:w-1/2">
        {documentToReactComponents(content?.formContent?.json)}
        </div>
        <div className="w-full md:w-1/2">
          <Form />
        </div>
      </div>
    </section>
    </>
  );
}



export default async function Page() {
  const content = await getHomePage("59NM2CrNxplR34nUN5OKv7")
  return (
    <div className="">
      <Intro content={content}/>
    </div>
  );
}
