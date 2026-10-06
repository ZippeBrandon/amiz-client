import { HiOutlineArrowLongRight } from "react-icons/hi2";


interface ServiceBlockProps {
    title:any;
    url:any;
    image:any;
    index: any;
}

export default function ServiceBlock({title, image, url, index}: ServiceBlockProps) {
    return (
        <a key={index} className={"serviceBlock block" + index} href={url}>
            <h3 className="text-left text-2xl font-bold max-w-52 mb-10">{title}</h3>
            {/* <p className="flex flex-row justify-start space-x-2 items-start content-center text-primary-purple font-medium mt-5 mb-2 ">Read More <HiOutlineArrowLongRight className="text-2xl font-bold text-primary-purple ml-4" /></p> */}
            <img className="mt-2 mx-auto" src={image} alt={title} />
        </a>
    )
}