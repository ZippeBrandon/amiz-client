import { HiOutlineArrowLongRight } from "react-icons/hi2";


interface TestimonialBlockProps {
    title:any;
    name:any;
    image:any;
    quote: any;
    index: any;
}

export default function Button({title, image, name, quote, index}: TestimonialBlockProps) {
    return (
        <div className="testimonialBlock text-left">
            <img className="mb-10 w-24 mx-auto" src="/images/testimonial-stars.png" alt="*" />
            <p className="text-lg mb-10 md:h-52 overflow-visible md:overflow-clip">{quote}</p>
            <div className="flex flex-row justify-start items-center">
                <img className="hidden" src={image} />
                <div className="flex flex-col ml-2">
                    <p className="font-bold">{name}</p>
                    <p className="text-xs">{title}</p>
                </div>
            </div>
        </div>
    )
}