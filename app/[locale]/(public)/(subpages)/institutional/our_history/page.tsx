import RichTextImage from "../../../component/reusables/RichtextImage"

const OurHistory = () => {
    const image = '/assets/history.png'
    return(
        <div className=" richTextSection subPageSection ">
            <h1>DİKMEN BELEDİYESİ’NİN KURULUŞU</h1>
            <p>Dikmen Belediyesi, 1 Haziran 1986 tarihinde kuruldu.</p>
            <p>KARAR NUMARASI: E (K – 1) 94 – 86</p>
            <RichTextImage image={image} />
            <h1>VADİLİ VE DİKMEN KÖYLERİNİN BELEDİYEYE DÖNÜŞTÜRÜLMESİ</h1>
            <span>
                (Önerge NO: 83/86)(İ.İ.B.)
                Bakanlar Kurulu, 15/1980 sayılı Belediyeler Yasası’nın 4. maddesinin vermiş olduğu yetkiye dayanarak, Vadili köyünün ve Aşağı Dikmen ile
                Yukarı Dikmen Muhtarlıklarından oluşan Dikmen köyünün, tüm köy arazileri ile birlikte Belediye’ye dönüştürülmesine karar verdi.
                22.01.1986
            </span>
            <hr className=" w-full h-1 my-8 " />
            <p className=" font-bold ">KIBRIS TÜRK FEDERE DEVLETİ</p>
            <p className=" font-bold ">RESMİ GAZETE</p>
            <p>EK I 4 Haziran 1980</p>
            <p>Sayı: 15/1980</p>
            <p className=" font-bold ">BELEDİYELER YASASI</p>
        </div>
    )
}

export default OurHistory