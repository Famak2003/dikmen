"use client"

import React from "react";
import I18N from "@/i18n"
import { Link } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import Image from "next/image";

const MAYOR =  '/static/svg/mayor.svg'

const Minister = () => {
    const pathname = usePathname()
    const getPageName = pathname.split("/").filter(Boolean)
    const pageName = getPageName[getPageName.length - 1].toUpperCase()
    console.log(pageName)

    return (
        <section className="  h-full w-full  " >
            <div className=" flex flex-col gap-8 ">
                <div className=" relative h-[40px] border-b-[1px] ">
                    <h1 className=" text-[18px] font-bold capitalize text-dark_yellow"><I18N>{pageName}</I18N></h1>
                    <hr className=" absolute bottom-0 translate-y-[70%] border-0 bg-base_yellow h-[3px] w-[20%] " />
                </div>
                <div className=" flex flex-col gap-7 lg:gap-0 lg:flex-row justify-between ">
                    <div className=" flex flex-col justify-center items-center lg:items-start w-full lg:max-w-[226px] ">
                        <figure className=" h-[226px] w-[198px] ">
                            <Image
                                className=" w-full h-full"
                                width={198}
                                height={226}
                                src={MAYOR}
                                alt="mayor"
                            />
                        </figure>
                        <div className=" flex flex-col justify-center items-center ">
                            <h1 className=" text-light_dark_yellow text-[28px] ltab:text-[30px] font-semibold truncate w-full max-w-[205px] ">
                                <I18N>YUKSEL_CELEBI</I18N>
                            </h1>
                            <hr className=" w-full " />
                            <h2 className=" text-[14px] sm:text-[15px] text-gray-400 font-semibold ">
                                <I18N>MAYOR_OF_DIKMEN</I18N>
                            </h2>
                        </div>
                    </div>

                    <div className=" flex flex-col gap-12 w-full lg:w-[65%] xl:max-w-[577px] ">
                        <h1>
                            Kıymetli Hemşehrilerim
                        </h1>
                        <div className=" text font-semibold text-secondary_gray leading-6 ">
                            Yüksel Çelebi, 1961 yılında Baf kazasına bağlı Aydoğan köyünde doğdu. 1975 yılında Dikmen’de
                            ikamet etmeye başlar. 1980 yılında Askerliğini tamamladıkdan sonra iş hayatına atılır. Uzun yıllar
                            konfeksiyon işiyle uğraşır.Sosyal alanda ise, Dikmen Gücü Spor Kulübü yönetim kurulu üyeliği ve
                            kulüp başkanlığı yaptı.
                            
                            Özel sektördeki çalışmalarının yanında siyasete atılarak 1986 yılında kurulan
                            Dikmen Belediyesi’nde dört dönem (16 yıl) aktif olarak Belediye meclis üyesi seçilerek
                            Meclis Üyeliği yaptı. Başarıyla yürüttüğü bu görevi sonrasında Haziran 2006 Yerel Seçimlerinde
                            Dikmen Belediye Başkanı seçildi. Halen bu görevi başarıyla yürütmekte olan Yüksel Çelebi, evli
                            ve 2 çocuk babasıdır.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Minister