import Image from "next/image"

const ourFeaturesData = [
    {
        title: "OUR_SERVICES",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/services.png"
    },
    {
        title: "STUDIES",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/studies.png"
    },
    {
        title: "COURSES",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/course.png"
    },
    {
        title: "CULTURE",
        writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
        image: "/assets/culture.png"
    },
]


const OurFeatures = () => {
    return(
        <section className=" flex justify-center items-center h-fit py-28 w-screen bg-white ">
            <div className="section h-fit">
                <ul className=" w-full h-fit flex flex-wrap ltab:flex-nowrap justify-center items-center gap-2 " >
                    {
                        ourFeaturesData.map((obj, idx) => {
                            return(
                                <li key={idx} className=" flex flex-col justify-center items-center lmobile:max-w-[290px] min-w-[250px] w-[90%] lmobile:w-1/4 h-fit gap-3 bg-section_bg pb-6 " >
                                    <figure className=" w-full h-[285px] ">
                                        <Image
                                            className=" object-cover w-full h-full "
                                            width={290}
                                            height={285} 
                                            src={obj.image} 
                                            alt="our features"
                                        />
                                    </figure>
                                    <div className=" flex flex-col gap-2 px-6">
                                        <h1 className=" text16 font-semibold text-light_dark_yellow w-fit " > {obj.title} </h1>
                                        <hr className=" max-w-[120px] border-light_dark_yellow " />
                                        <p className=" text-secondary_gray text-left mt-1" >
                                            {obj.writeup}
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default OurFeatures