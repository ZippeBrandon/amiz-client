import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getWhatWeDoPage } from "@/lib/api";
import Button from '@/components/button';
import Form from "@/components/form";
import ServiceBlock from '@/components/service-block';

function WhatWeDoPage(
  {
    content
  }: {
    content: any
  }
) {
  return (
    <>
    <section className="bg-grey p-10 ptp-10 md:pt-20 mx-2 rounded-3xl text-center whatWeDoPage md:mb-32">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/3 relative">
            <h1 className="whatWeDo-h1">{documentToReactComponents(content?.headerTitle?.json)}</h1>
            <div className="w-full max-w-96 text-left mt-10">{documentToReactComponents(content?.headerContent?.json)} </div>      
        </div>
        <img src={content?.headerImage?.url} alt={content?.headerTitle} className="w-full md:w-2/6 h-full" />
      </div>
    </section>

    <section className="px-10 mx-2 rounded-3xl text-center">
          <div className="whatWeDoBody max-w-6xl mx-auto md:mb-16 mt-10">
            <p className="bodySubTitle">{content?.bodySubTitle}</p>
            <h1 className="whatWeDo-h1-body">{documentToReactComponents(content?.bodyTitle?.json)}</h1>
          </div>
          <div className="flex flex-col md:flex-row flex-wrap justify-center max-w-6xl mx-auto">
            {
              content?.bodyBlocksCollection?.items?.map((service: { title: string; image: { url: string; }; content: {json:any};}, i: any) => (
                <div className={"serviceBodyBlock block" + i}>
                  <div>
                    <h3 className="text-left text-4xl font-bold">{service?.title}</h3>
                  <div className="flex flex-row justify-start space-x-2 items-start content-center font-medium mt-5 mb-2 ">
                    {documentToReactComponents(service?.content.json)}
                  </div>
                  </div>
                  <img className="mt-10 mx-auto" src={service?.image?.url} alt={service?.title} />
                </div>
              ))
            }
          </div>
        </section>

    <section id="contact" className="bg-purple-shade-1 p-10 md:p-20 mx-2 rounded-3xl formfooter">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 md:max-w-md">
          <div className="text-xl md:text-3xl mt-10 mb-4 whatWeDoForm">{documentToReactComponents(content?.formTitle?.json)}</div>
          <div className="">{documentToReactComponents(content?.formContent?.json)}</div>
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
  const content = await getWhatWeDoPage("26Ta0450DZkGKjd2lAJ24W")
  return (
    <div className="">
      <WhatWeDoPage content={content}/>
    </div>
  );
}
