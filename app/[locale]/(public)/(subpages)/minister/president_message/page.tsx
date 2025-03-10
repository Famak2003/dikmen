
import MinisterComp from "../../../component/pagesComponent/MinisterComp"


const MAYOR =  '/static/svg/mayor.svg'

const President_Message = () => {
    const data = {
        imagedata: {
            image: MAYOR,
            alt: "Dikmen mayor"
        },
        about: {
            name: "YUKSEL_CELEBI",
            position: "MAYOR_OF_DIKMEN"
        },
        writeup: {
            title: "Kıymetli Hemşehrilerim",
            body: ("Yüksel Çelebi, 1961 yılında Baf kazasına bağlı Aydoğan köyünde doğdu. 1975 yılında Dikmen’deikamet etmeye başlar. 1980 yılında Askerliğini tamamladıkdan sonra iş hayatına atılır. Uzun yıllarkonfeksiyon işiyle uğraşır.Sosyal alanda ise, Dikmen Gücü Spor Kulübü yönetim kurulu üyeliği vekulüp başkanlığı yaptı. Özel sektördeki çalışmalarının yanında siyasete atılarak 1986 yılında kurulanDikmen Belediyesi’nde dört dönem (16 yıl) aktif olarak Belediye meclis üyesi seçilerekMeclis Üyeliği yaptı. Başarıyla yürüttüğü bu görevi sonrasında Haziran 2006 Yerel SeçimlerindeDikmen Belediye Başkanı seçildi. Halen bu görevi başarıyla yürütmekte olan Yüksel Çelebi, evlive 2 çocuk babasıdır.")
        }
    }

    return (
        <section className="  h-full w-full  " >
            <MinisterComp prop={data} />
        </section>
    )
}

export default President_Message