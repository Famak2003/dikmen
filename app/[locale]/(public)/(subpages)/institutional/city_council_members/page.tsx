import I18N from "@/i18n"
import Image from "next/image"

const City_Council_Members = () => {

    const data = [
        {
            image: "/assets/img2.jpg",
            title: "VISE_PRESIDENT",
            name: "Fatma Ekdal",
        },
        {
            image: "/assets/img3.jpg",
            title: "VISE_PRESIDENT",
            name: "Mehmet Özsezer",
        },
        {
            image: "/assets/img3.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Ogün Dilaver",
        },
        {
            image: "/assets/img1.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Emine Yamantürk",
        },
        {
            image: "/assets/img3.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Salih Beşiktaş",
        },
        {
            image: "/assets/img1.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Aygen Bardakko",
        },
        {
            image: "/assets/img2.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Salih Kanal",
        },
        {
            image: "/assets/img3.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Havva Koç",
        },
        {
            image: "/assets/img1.jpg",
            title: "CITY_COUNCIL_MEMBER",
            name: "Okan Akmandor",
        },
        {
            image: "",
            title: "CITY_COUNCIL_MEMBER",
            name: "Ömür Manga",
        },
    ]

    return(
        <div className=" flex flex-col gap-8 w-full h-full bg-section_bg pt-5 ">
            <div className=" flex items-center ">
                <div className=" flex items-center justify-center text16 font-bold hover:text-dark_yellow text-gray-300 border-r h-[19px] w-[100px] ">CTP</div>
                <div className=" flex items-center justify-center text16 font-bold hover:text-dark_yellow text-gray-300 border-r h-[19px] w-[100px] ">UBP</div>
            </div>
            <ul className=" grid grid-cols-1 smobile:grid-cols-2 lmobile:grid-cols-3 sm:grid-cols-2 lmd:grid-cols-3 ltab:grid-cols-4 place-items-center gap-y-4 gap-x-4 px-2 mobile:px-8 pb-20 ">
                {
                    data.map((obj, idx) => {
                        return(
                            <li key={idx} className=" flex flex-col gap-3 pt-8 pb-5 px-2 bg-white max-w-[172px] w-full h-[288px] ">
                                {
                                    obj.image ? (
                                        <figure className=" w-full max-w-[153px] h-full max-h-[175px] " >
                                            <Image
                                                className=" object-cover h-full w-full"
                                                src={obj.image}
                                                width={153}
                                                height={175}
                                                alt="profile image"
                                            />
                                        </figure>
                                    )
                                    : (
                                        <div className=" w-full max-w-[153px] h-full max-h-[175px] bg-section_bg ">
                                            
                                        </div>
                                    )
                                }
                                <div className=" flex flex-col ">
                                    <h1 className=" text-dark_gray font-bold text16 " >{obj.name}</h1>
                                    <span className=" text-faint_gray text fonr-bold "> <I18N>{obj.title}</I18N> </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default City_Council_Members