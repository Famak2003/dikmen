import Image from "next/image"

const RichTextImage = ({image} : {image: string}) => {
    return(
        <figure className=" h-full max-h-[450px] w-full max-w-[840px] ">
            <Image
                className=" h-full w-full object-contain "
                src={image}
                alt="Mission vision image"
                width={840}
                height={450}
            />
        </figure>
    )
}

export default RichTextImage