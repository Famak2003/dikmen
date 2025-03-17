import I18N from "@/i18n"
import { faClockFour, faHouse, faMailForward, faPhoneAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Communication = () => {
    return(
        <div className=" richTextSection font-normal subPageSection">
            <div className='w-full h-[458px] max-w-[836px] ' >
                {/* <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1630.1151718275357!2d33.35801273913504!3d35.20073098492126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de1728705f20d1%3A0x901d3f3b58b733ec!2sAyda%20IVF%20Center!5e0!3m2!1str!2s!4v1736501691126!5m2!1str!2s" width="100%" height="100%" style={{border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3257.5316667672523!2d33.32084007635488!3d35.26790535256771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de13c182bcf667%3A0xe70029d6f65796d5!2sMunicipality%20of%20Dikmen!5e0!3m2!1sen!2s!4v1741938700081!5m2!1sen!2s" width="100%" height="100%" style={{border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <p className=" text-secondary_gray " > <span><FontAwesomeIcon icon={faHouse} /></span> Dikmen Belediyesi 20 Temmuz Caddesi, Hasan Sükan Sokak No 4, Dikmen </p>
            <p className=" text-secondary_gray " > <span><FontAwesomeIcon icon={faPhoneVolume} /></span> +90 392 237 26 18 </p>
            <p className=" text-secondary_gray " > <span><FontAwesomeIcon icon={faPhoneAlt} /></span> +90 392 237 26 18 </p>
            <p className=" text-secondary_gray " > <span><FontAwesomeIcon icon={faMailForward} /></span> info@dikmenbelediyesi.com </p>
            <hr className=" w-full " />
            <h1 className=" text18 text-dark_yellow " > <I18N>WORKING_HOURS</I18N> </h1>
            <p className=" text-secondary_gray " > <span><FontAwesomeIcon icon={faClockFour} /></span> Pazartesi – Cuma , 8:00 – 16:15 (Öğle arası 12:30-13:00) </p>
            <p className=" text-secondary_gray " > <span><FontAwesomeIcon icon={faClockFour} /></span> info@Perşembe 08:00 – 17:30 (Öğle arası 12:30-13:00) </p>

        </div>
    )
}

export default Communication