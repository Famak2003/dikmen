import { Link } from "@/i18n/routing"
import Image from "next/image"
import Socials from "./reusables/Socials"

const DIKMENLOGO2 =  '/static/svg/floatingLogo.svg'
const WEATHER = '/static/svg/weather.svg'
const linkedinSVG = '/static/svg/linkedin.svg'
const facebookSVG = '/static/svg/facebook.svg'
const xSVG = '/static/svg/x.svg'
const instaSVG = '/static/svg/insta.svg'

const FooterStrip = () => {
    return(
        <div className=" flex justify-center items-center md:h-[100px] py-2 md:py-0 w-screen bg-base_yellow">
            <div className="flex flex-wrap md:justify-between justify-center gap-4 items-center section">
                <div className="flex items-center gap-3  ring-" >
                    <Socials className="" height="20px" width="20px" color="bg-base_yellow" />
                    <ul>
                        <li className=" text16 ">
                            Sosyal
                        </li>
                        <li className=" text16 ">
                            Medya
                        </li>
                        <li className=" text16 font-bold ">
                            Hesaplarımız
                        </li>
                    </ul>
                </div>
                <Link href={"/"} >
                    <figure className=" relative w-[91px] h-[91px] ring-" >
                        <Image className=" object-contain " src={DIKMENLOGO2} priority fill alt="logo" />
                    </figure>
                </Link>
                <div className=" flex justify-center items-center gap-3 ring- ">
                    <div className=" flex flex-col text16" >
                        <p className=" text16 ">Dikmen</p>
                        <p className=" text16 font-bold ">Hava Durumu</p>
                    </div>
                    <figure className=" relative aspect-square h-[68px] ">
                        <Image src={WEATHER} alt="weather" fill />
                    </figure>
                    <div className=" flex flex-col gap-1 " >
                        <h1 className=" text-[30px] " >22°C</h1>
                        <small className=" text16 " >az bulutlu</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterStrip