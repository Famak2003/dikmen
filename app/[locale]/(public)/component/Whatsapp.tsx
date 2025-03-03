import I18N from "@/i18n"
import { Tooltip } from "antd"
import Image from "next/image"

const WhatsApp = () => {
    return (
        <div className=" cursor-pointer fixed bottom-[20px] right-[20px] w-[52px] h-[52px] z-[99]" >
            <a href="https://wa.me/1XXXXXXXXXX">
                <Tooltip 
                    className="WhatsappTooltip"
                    title={<div className=" bg-base_yellow h-[50px] max-w-[175px] p-3 "> <I18N>WHATSAPP_CONTACT</I18N> </div>} 
                    placement="right"
                >
                    <figure className=" absolute w-[52px] h-[52px] " >
                        <Image className=" object-cover " src={"/assets/whatsApp.png"} fill alt="whatsapp" />
                    </figure>
                </Tooltip>
            </a>

            </div>
    )
}

export default WhatsApp