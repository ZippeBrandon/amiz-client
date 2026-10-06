import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getContactPage } from "@/lib/api";

import Form from "@/components/form";

function ContactPage(
  {
    content
  }: {
    content: any
  }
) {

  return (
    <>
    <section className="bg-purple-shade-1 p-10 ptp-10 md:pt-20 mx-2 rounded-3xl text-center contactPage md:mb-32">
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2 relative">
            <h1 className="contact-h1">{documentToReactComponents(content?.formTitle?.json)}</h1>
            <img className="w-80 relative md:absolute md:-bottom-16 md:left-28 mx-auto" src={content?.formTitleImage?.url} alt="*" />
        </div>
        <div className="formfooter contactPageForm">
            <Form />
        </div>
      </div>
    </section>
    <section className="py-10 w-full overflow-hidden hidden">
        <div className="w-full max-w-6xl mx-auto md:mb-20 px-5 flex flex-col md:flex-row justify-between">
            <div>
                <div className="contactSubHeader max-w-lg mb-10">
                    {content?.formContentSubTitle}
                </div>  
                <div className="contactHeader mb-10">
                    {documentToReactComponents(content?.formContentTitle?.json)}
                </div>
                
                <ul className="contactList mb-10">
                    {
                        content?.contactList?.map((item:any, i:any) => (
                            <li className="flex flex-row justify-start items-center content-center mt-5">
                                <img className="mr-2" src="/images/checkmark.png"/>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <img className="w-full" src={content?.formContentImage?.url} alt="Contact Amiz" />
            </div>
        </div>
        
    </section>
    </>
  );
}



export default async function Page() {
  const content = await getContactPage("5QgKyAHqu5c9ZFVG7rhUzO")
  return (
    <div className="">
      <ContactPage content={content}/>
    </div>
  );
}
