"use client"; // Required for useParams()

import I18N from "@/i18n";
import Image from "next/image";
import { useParams } from "next/navigation";
import RichTextImage from "../../../component/reusables/RichtextImage";
import Button from "../../../component/reusables/Button";
import { useRouter } from "@/i18n/routing";

const Tender = () => {
    const params = useParams(); 
    const router = useRouter()
    const tender = params.tender;
    const data = [
        "Belediyemiz “Aknar Sitesi Park Büfe” için  teklif kabul eder.",
        "Teklif ile ilgili şartname KDV dahil 100.00 TL karşılığında Dikmen Belediye  Başkanlığından temin edilebilir. ",
        "Teklifler en geç 18 Aralık  2023 Pazartesi günü    Saat:15:30’a  kadar teklif kutusuna atılmış olmalıdır.",
        "Dikmen Belediye Meclisi en düşük veya herhangi bir teklifi kabul etmek mecburiyetinde değildir."
    ]

    if (!tender) return <p>Loading...</p>;

    return (
        <div className=" subPageSection richTextSection ">
            <span className=" font-medium text16 text-secondary_gray text-opacity-35" >Şubat 22, 2025</span>
            <h1 className=" text18 text-dark_yellow "><I18N>TENDERS_CONDITIONS</I18N></h1>
            <ul className=" decimalList" >
                {
                    data.map((item, idx) => {
                        return(
                            <li key={idx} className="  " >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
            <RichTextImage image="/assets/tender.png" />
            <Button handleClick={() => router.push("/tenders")} text="ALL_TENDERS" className=" px-3 py-1 " />
        </div>
    );
};

export default Tender;
