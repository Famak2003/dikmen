"use client"

import I18N from "@/i18n"
import RichTextImage from "../../component/reusables/RichtextImage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleLeft, faAngleRight, faX } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"
import { useRef } from "react"
import { FacebookFilled, XOutlined, YoutubeFilled } from "@ant-design/icons"

const News = () => {
    const scrollRef = useRef<HTMLDivElement>(null)
    const image = "/assets/newsPage.png"

    const galleryData = [
        "/assets/gallery1.png",
        "/assets/gallery2.png",
        "/assets/gallery3.png",
        "/assets/gallery4.png",
        "/assets/gallery5.png",
    ]

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({
            left: direction === "right" ? 275 : -275,
            behavior: "smooth",
          });
        }
      };
    

    return(
        <div className=" subPageSection richTextSection w-full ">
            <span>Temmuz 22, 2018</span>
            <p>Dikmen Belediyesi tarafından bu yıl 9’uncusu düzenlenen 11 Meşale Festivali sona erdi.</p>
            <RichTextImage image={image} />
            <p>
                Gecede ilk olarak Dikmen Gençlik Merkezi Halk Dansları gruplarının halk dansları gösterileri yer alarak büyük ilgi gördü.
                Gecede kapanış konseri ile Grup SOS sahnede yer alarak birbirinden güzel seslendirdiği parçalar ile katılımcılara muhteşem
                bir gece yaşattı.
                Gecenin sonunda ise her yıl geleneksel hale getirilen ve bu yıl Dikmen Yoğurtları sponsorluğunda düzenlenen tavla turnuvasında
                dereceye girenlere ödülleri taktim edilerek 11 Meşale Festivali sona erdi.
            </p>
            <p>
                Dikmen Yoğurtları sponsorluğunda Tavla Turnuvasında dereceye giren isimler ise şöyle:
            </p>
            <ul className=" !list-decimal before:!hidden before:content-[''] ">
                <li>
                    Hasan Özerol
                </li>
                <li>
                    Hüseyin Göksoylu
                    </li>
                <li>
                    Sezai Bayraktar
                    </li>
                <li>
                    Tahir Sancak
                </li>
            </ul>
            <div className=" flex flex-col gap-4 w-full ">
                <div className=" flex justify-between items-center  " >
                    <h1 className=" font-bold text-dark_yellow text-[18px] " ><I18N>GALLERY</I18N></h1>
                    <div className=" flex gap-3 ">
                        <button onClick={() => scroll("left")} ><FontAwesomeIcon className=" text-[20px] " icon={faAngleLeft} /></button>
                        <button onClick={() => scroll("right")} ><FontAwesomeIcon className=" text-[20px] " icon={faAngleRight} /></button>
                    </div>
                </div>
                <div ref={scrollRef} className=" flex gap-2 items-center max-w-[870px] w-full overflow-x-scroll scroll-smooth ">
                    {
                        galleryData.map((value, idx) => {
                            return(
                                <div className=" h-[150px] mobile:h-[200px] md:h-[275px] aspect-square ">
                                    <Image 
                                        className=" h-full w-full "
                                        height={275}
                                        width={275}
                                        src={value}
                                        alt="Gallery image"
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <p>
                        <I18N>SHARE</I18N>
                    </p>
                    <div className=" flex gap-2 ">
                        <FontAwesomeIcon icon={faX} />
                        <XOutlined className="" />
                        <YoutubeFilled className="" />
                        <FacebookFilled className=" text-blue-500 rounded-full " />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News