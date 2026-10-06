// app/blog/[slug]/page.tsx
import { getPostBySlug, getAllPostSlugs } from '@/lib/api'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { notFound } from 'next/navigation'
import Form from '@/components/form'

type PageProps = {
  params: Promise<{ slug: string }>
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params

  const post = await getPostBySlug(slug)
  if (!post) {
    notFound()
  }

  const { title } = post


  return (
    <>
    <article className="relative max-w-7xl mx-auto md:pt-20">
      <div className="flex flex-col md:flex-row justify-around items-center mb-20">
        <div className="flex flex-col w-full md:w-1/2 p-5 md:p-0">
          <span className="bg-primary-purple py-2 rounded-3xl text-white text-xs my-5 max-w-32 text-center">{post?.tag}</span>
          <h1 className="csTitle">{title}</h1>
          <div className="csContent">
            {documentToReactComponents(post.titleContent.json)}
          </div>
        </div>
        <img className="w-1/2 md:w-1/4 mt-10 md:mt-0" src={post?.coverImage?.url} alt={post?.title} />
      </div>
      <div className=" bg-primary-purple text-white  rounded-3xl my-20 m-2 md:m-0">
        <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto p-10 items-center content-center">
          {
          post?.numbersBar?.map((item:any, i:any) => (
            <div key={i} className="flex flex-col my-5 md:my-0">
              <span className="flex flex-row justify-center md:justify-start items-end content-center text-6xl">{item?.number} <img className="w-10 height-10 mb-1" src="/images/angled-arrow.png" alt="Angled Arrow" /></span>
              <span className="max-w-52 mx-auto text-center md:text-left">{item?.title}</span>
            </div>
          ))
        }
        </div>
      </div>
      <div className="content">
        <div className="post-content-wrap">
          <img src={post?.clientImage?.url} alt={post?.title} />
          <div className="post-content">
            {documentToReactComponents(post.clientContent.json)}
          </div>
        </div>
        <div className="post-content-wrap">
          <div className="post-content">
            {documentToReactComponents(post.challengeContent.json)}
          </div>
          <img src="/images/puzzle.png" alt={post?.title} />
        </div>
        <div className="post-content-wrap">
          <img src="/images/bullseye.png" alt={post?.title} />
          <div className="post-content">
            {documentToReactComponents(post.solutionContent.json)}
          </div>
        </div>

        <div className="post-content-wrap">
          <div className="post-content text-center mx-40">
            {documentToReactComponents(post.resultsContent.json)}
          </div>
        </div>
        
      </div>
      {
        post?.additionalPostsCollection?.items.length != 0 ? (
          <div className="">
            <div>
              <h3>Read More</h3>
              <div>
                {
                  post?.additionalPostsCollection?.items?.map((post:any,i:any) => (
                    <a key={i} href={post?.slug} className="postCard">
                      <img src={post?.coverImage?.url} alt={post?.title} />
                      <span>{post?.tag}</span>
                      <p>{post?.title}</p>
                      <p>Read More <img src="/arrow-r.png" alt="Read More" /></p>
                    </a>
                  ))
                }
              </div>
            </div>
          </div>
        ):('')
      }
    </article>
    <section id="contact" className="bg-purple-shade-1 p-10 md:p-20 mx-2 rounded-3xl formfooter">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 md:max-w-md">
          <div className="text-xl md:text-3xl mt-10 mb-4 whatWeDoForm max-w-xs"><p><b>Join our list of satisfied clients</b></p></div>
          <div className="max-w-xs"><p><b>Stay updated with our latest case studies and success stories.</b></p></div>
        </div>
        <div className="w-full md:w-1/2">
          <Form />
        </div>
      </div>
    </section>
    </>
  );
}

// Function to tell Next.js which paths to build ahead of time
export async function generateStaticParams() {
  const posts = await getAllPostSlugs(); 
  return posts;
}
