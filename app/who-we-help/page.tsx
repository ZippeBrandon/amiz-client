import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getWhoWeHelpPage } from "@/lib/api";
import Button from '@/components/button';
import Form from "@/components/form";
import ServiceBlock from '@/components/service-block';

function WhoWeHelpPage(
  {
    content
  }: {
    content: any
  }
) {
  return (
    <>
    <section className="bg-primary-purple p-10 pt-10 md:pt-20 mx-2 rounded-3xl text-center whatWeDoPage md:mb-20">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <img src={content?.headerImagesCollection?.items[0]?.url} alt={content?.headerTitle} className="hidden md:block w-full max-w-56 left-0 h-auto absolute -bottom-20" />
        <div className="w-full relative text-center text-white">
            <h1 className="whoWeHelp-h1 relative z-10">{documentToReactComponents(content?.header?.json)}</h1>
            <div className="w-full max-w-96 text-center mt-10 mb-14 mx-auto">{documentToReactComponents(content?.headerContent?.json)} </div>      
        </div>
        <img src={content?.headerImagesCollection?.items[1]?.url} alt={content?.headerTitle} className="hidden md:block w-full max-w-48 h-auto absolute top-5 -right-5" />

      </div>
    </section>

    <section className="w-full max-w-5xl mx-auto p-2 md:p-0">
        <div className="whoWeHelp">{documentToReactComponents(content?.bodyTitle?.json)}</div>
        {
            content?.contentBlocksCollection?.items?.map((item:any, i:any) => (
                <div key={i} className={"contentBlock cb-" + i} >
                    <div>
                        <img src={item?.blockImage?.url} alt={item?.title} />
                    </div>
                    <div>
                        <p className="checklistTitle">{item?.title}</p>
                        <div className="cb-checklist">
                            {documentToReactComponents(item?.checklist?.json)}
                        </div>
                    </div>
                </div>
            ))
        }
    </section>


    <section id="contact" className="bg-purple-shade-1 p-10 md:p-20 mx-2 rounded-3xl formfooter">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 md:max-w-md">
          <div className="text-xl md:text-3xl mt-10 mb-4 whatWeDoForm !max-w-xs">{documentToReactComponents(content?.formTitle?.json)}</div>
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
  const content = await getWhoWeHelpPage("3QwyIBrT0ksiWq8StyaTGK")
  return (
    <div className="">
      <WhoWeHelpPage content={content}/>
    </div>
  );
}
