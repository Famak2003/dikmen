import I18N from "@/i18n"
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"

const Facilities = () => {

    const facilitiesData = [
        {
            image: "/static/svg/townhall.svg",
            title: "OUR_TOWN_HALL",
            writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
            getInfo: true
        },
        {
            image: "/static/svg/pharmacy.svg",
            title: "PHARMACIES_ON_DUTY",
            writeup: "Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizahtır.",
            getInfo: false,
            pharmacy: true
        },
    ]

    const pharmacyData = [
        {
            title: "ABD Eczanesi",
            phone: "+90 392 237 26 18",
            location: "Dikmen/Lefkoşa"
        },
        {
            title: "ABD Eczanesi",
            phone: "+90 392 237 26 18",
            location: "Dikmen/Lefkoşa"
        },
    ]

    return(
        <section className=" flex justify-center items-center w-screen h-fit py-28 ">
            <ul className=" w-full h-fit flex flex-col md:flex-row justify-center items-center gap-5 section ">
                {
                    facilitiesData.map((obj, idx) => {
                        return (
                            <li key={idx} className=" flex flex-col justify-center items-center gap-3 bg-white md:w-1/2 max-w-[565px] pb-6">
                                <div className=" w-full h-[283px] ">
                                        {
                                            obj.pharmacy ? (
                                                <div className=" flex  h-full w-full border-b border-light_gray ">
                                                    <div className=" flex flex-1 flex-col gap-3 p-6 ">
                                                        {
                                                            pharmacyData.map((obj, index) => {
                                                                const isLast = (pharmacyData.length - 1) === index
                                                                return(
                                                                    <div key={index} className={` flex flex-col gap-3 pb-4 ${isLast ? "" : "border-b border-text_light_gray"} `}>
                                                                        <h1 className="text16 font-semibold text-light_dark_yellow w-fit">{obj.title}</h1>
                                                                        <ul className=" flex flex-col gap-2 ">
                                                                            <li className=" flex items-center gap-3 ">
                                                                                <figure className={`relative h-[15px] w-[15px] text-light_dark_yellow`} >
                                                                                    <Image fill src={"/static/svg/phone.svg"} alt="contact us" />
                                                                                </figure>
                                                                                <p className=" text ">
                                                                                    {obj.phone}
                                                                                </p>
                                                                            </li>
                                                                            <li className=" flex items-center gap-3 ">
                                                                                <figure className={`relative h-[15px] w-[15px] text-light_dark_yellow`} >
                                                                                    <Image fill src={"/static/svg/location.svg"} alt="location" />
                                                                                </figure>
                                                                                <div className=" flex gap-1 w-full ">
                                                                                    <div className=" flex-1 border-dashed border-b border-light_dark_yellow " ></div>
                                                                                    <p className=" text ">{obj.location}</p>
                                                                                </div>
                                                                            </li>

                                                                        </ul>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <figure className=" w-[40%] smobile:w-[139px] h-full bg-cool_red ">
                                                        <Image
                                                            className=" object-contain w-full h-full "
                                                            width={139}
                                                            height={283} 
                                                            src={"/assets/pharmacy.png"} 
                                                            alt="our features"
                                                        />
                                                    </figure>
                                                </div>
                                            ): (
                                                
                                                <figure className=" w-full h-full ">
                                                    <Image
                                                        className=" object-cover w-full h-full "
                                                        width={565}
                                                        height={283} 
                                                        src={obj.image} 
                                                        alt="our features"
                                                    />
                                                </figure>
                                            )
                                        }
                                </div>
                                <div className=" flex flex-col gap-2 px-6">
                                    <h1 className=" text16 font-semibold text-light_dark_yellow w-fit " > <I18N>{obj.title}</I18N> </h1>
                                    <p className=" text-secondary_gray text-left mt-1 " >
                                        {obj.writeup}
                                    </p>
                                    <div className=" flex justify-between items-center w-full mt-2 text-light_dark_yellow">
                                        {
                                            obj.getInfo ? (
                                                <p className=" cursor-pointer "> <I18N>GET_INFORMATION</I18N> </p>
                                            ) : ""
                                        }
                                        <ul className=" flex gap-2 h-fit w-[27px] ">
                                            <li className=" text-light_dark_yellow h-[18px] w-[8.5px] " >
                                                <FontAwesomeIcon icon={faAngleLeft} />
                                            </li>
                                            <li className=" text-light_dark_yellow h-[18px] w-[8.5px] " >
                                                <FontAwesomeIcon icon={faAngleRight} />
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Facilities