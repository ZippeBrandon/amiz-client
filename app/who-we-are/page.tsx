import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getWhoWeArePage } from "@/lib/api";
import Button from '@/components/button';
import Form from "@/components/form";
import ServiceBlock from '@/components/service-block';

function WhoWeArePage(
  {
    content
  }: {
    content: any
  }
) {
    console.log(content)
  return (
    <>
    <section className="bg-peach p-10 pt-10 md:pt-20 mx-2 rounded-3xl text-center whoWeArePage md:mb-20">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <img src={content?.headerImage?.url} alt={content?.header} className="-mb-20" />
        <div className="w-full relative text-left mt-10 md:mt-0 md:px-20 py-10">
            <h1 className="whoWeAre-h1 relative z-10">{documentToReactComponents(content?.header?.json)}</h1>
            <div className="md:ml-2 mt-12 font-bold">{documentToReactComponents(content?.headerContent?.json)} </div>      
        </div>
      </div>
    </section>

    <section className="w-full max-w-6xl mx-auto p-10 md:p-0 md:my-32">
       <div className="flex flex-col md:flex-row justify-around">
            <div className="w-full md:w-1/2">
                <p className="bodySubTitle">{content?.visionSubTitle}</p>
                <div className="bodyBoldTitle my-10">{documentToReactComponents(content?.visionTitle?.json)}</div>
                <div className="">{documentToReactComponents(content?.visionContent?.json)}</div>
            </div>
            <div className="w-full md:w-1/2">
                <img src={content?.visionImage?.url} alt={content?.visionSubTitle} className="w-auto mx-auto my-10 md:my-0 md:ml-auto" />
            </div>
       </div>
    </section>

    <section className="w-full max-w-6xl mx-auto p-10 md:p-0 md:my-32">
       <div className="flex flex-col-reverse md:flex-row justify-around">
            <div className="w-full md:w-1/2">
                <img src={content?.storyImage?.url} alt={content?.storySubTitle} className="w-auto mx-auto my-10 md:my-0 md:mr-auto" />
            </div>
            <div className="w-full md:w-1/2">
                <p className="bodySubTitle">{content?.storySubTitle}</p>
                <div className="bodyBoldTitle my-10">{documentToReactComponents(content?.storyTitle?.json)}</div>
                <div className="">{documentToReactComponents(content?.stortContent?.json)}</div>
            </div>
       </div>
    </section>

    <section  className="bg-primary-purple p-10 md:p-20 mx-2 rounded-3xl mb-20">
        <div className="bodyBoldTitle my-10 text-white text-center w-full">{documentToReactComponents(content?.valuesTitle?.json)}</div>
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
            {
                content?.valuesBlocksCollection?.items.map((item:any, i: any) => (
                    <div className="bg-purple-shade-2 p-8 my-5 md:mx-2 rounded-3xl w-full md:w-1/3">
                        <img src={item?.blockImage?.url} alt="*" />
                        <p className="font-bold text-2xl my-5 md:max-w-52">{item?.title}</p>
                        {documentToReactComponents(item?.checklist?.json)}
                    </div>
                ))
            }
        </div>
    </section>

    <section className="w-full max-w-6xl mx-auto p-10 md:p-0 md:my-32 hidden">
        <p className="bodySubTitle text-center">{content?.teamSubTitle}</p>
        <div className="bodyBoldTitle my-10 text-center">{documentToReactComponents(content?.teamTitle?.json)}</div>
        <div className="flex flex-col md:flex-row flex-wrap justify-between max-w-7xl mx-auto mt-20">
            {
                content?.teamBlocksCollection?.items.map((item:any, i:any) => (
                    <div className="w-1/2 md:w-1/3 mx-auto my-5">
                        <img src={item?.image?.url} alt={item?.name} className="mx-auto"/>
                        <div className="teamName">{documentToReactComponents(item?.name?.json)}</div>
                        <p className="text-center font-bold">{item?.title}</p>
                    </div>
                ))
            }
        </div>
    </section>

    <section id="contact" className="bg-purple-shade-1 p-10 md:p-20 mx-2 rounded-3xl formfooter">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 md:max-w-md">
          <div className="text-xl md:text-3xl mt-10 mb-4 whatWeDoForm !max-w-sm">{documentToReactComponents(content?.formTitle?.json)}</div>
          <div className="max-w-xs">{documentToReactComponents(content?.formContent?.json)}</div>
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
  const content = await getWhoWeArePage("7qnsJAkQ160NUVN7jh1Hlb")
  return (
    <div className="">
      <WhoWeArePage content={content}/>
    </div>
  );
}
