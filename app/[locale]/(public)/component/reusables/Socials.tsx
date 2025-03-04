import Image from "next/image"
const linkedinSVG = '/static/svg/linkedin.svg'
const facebookSVG = '/static/svg/facebook.svg'
const xSVG = '/static/svg/x.svg'
const instaSVG = '/static/svg/insta.svg'

interface prop {
    height?: string,
    width?: string,
    color?: string,
    className?: string
}

const Socials = ({height="10px", width="10px", color, className}: prop) => {
    return (
        <ul className={` flex gap-2 ${className} `} >
            <a className={` socialLink ${color} `} href="#" >
                <figure className={`relative h-[${height}] w-[${width}]`} >
                    <Image fill src={linkedinSVG} alt="contact us" />
                </figure>
            </a>
            <a className={` socialLink ${color} `} href="#" >
                <figure className={`relative h-[${height}] w-[${width}]`} >
                    <Image fill src={xSVG} alt="contact us" />
                </figure>
            </a>
            <a className={` socialLink ${color} `} href="#" >
                <figure className={`relative h-[${height}] w-[${width}]`} >
                    <Image fill src={instaSVG} alt="contact us" />
                </figure>
            </a>
            <a className={` socialLink ${color} `} href="#" >
                <figure className={`relative h-[${height}] w-[${width}]`} >
                    <Image fill src={facebookSVG} alt="contact us" />
                </figure>
            </a>
        </ul>
    )
}

export default Socials