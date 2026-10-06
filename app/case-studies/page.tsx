// app/blog/page.tsx
// This is a Server Component

import Form from '@/components/form';
import { getAllPosts } from '@/lib/api';
import Link from 'next/link'; // Use Next.js Link component for client-side navigation

export default async function BlogIndexPage() {
  const allPosts = await getAllPosts();
  return (
    <>
    <main>
      <div className="text-center caseStudy mt-10 mb-20">
              <h1 className="leading-snug relative max-w-2xl mx-auto">See how our Clients Increased their Revenue <img className="absolute -right-0 bottom-8 w-8" src="images/header-stars-light.png" /></h1>
              <p className="!text-lg max-w-md mx-auto mt-10">lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labraore et dolore magna aliqua.</p>
      </div>
      
      <section className="max-w-5xl mx-auto mb-20">
      {
        allPosts.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-center">
          {allPosts.map((post: any, i: any) => (
            <a key={i} href={'/case-studies/' + post?.slug} className="postCard">
              <img src={post?.postCardImage?.url} alt={post?.title} />
              <div className="p-5 bg-purple-shade-2 text-black">
                <span className="bg-primary-purple py-1 px-2 rounded-3xl text-white text-xs my-5">{post?.tag}</span>
                <p className="text-lg font-bold my-5">{post?.title}</p>
              <p className="flex flex-row w-auto items-center contenet-center text-primary-purple font-bold">Read More <img src="images/arrow-r.png" alt="Read More" className="w-3 ml-5"/></p>
              </div>
            </a>
          ))}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
      </section>
      
    
    </main>
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
