import RichTextImage from "../../../component/reusables/RichtextImage"

const Vision_And_Mission = () => {
    const image = "/assets/visionMission.png"
    return(
        <div className=" richTextSection subPageSection ">
            <h1>Vizyon</h1>
            <p>
                Altyapı çalışmaları ve planlaması tamamlanmış, doğal güzellikler içerisinde sakin bir yaşam sunan, hizmetleriyle büyük şehirlere
                alternatif bir bölge.
            </p>
            <RichTextImage image={image} />
            <h1>Misyon</h1>
            <ul className="checkedList">
                <li className="before:content-['✅'] before:mr-2">Daha iyi hizmet sağlamak maksadıyla kapasitesini sürekli geliştirmek ve yurttaşlarına eşit hizmet sunmak.</li>
                <li className="before:content-['✅'] before:mr-2">Çağdaş belediyecilik anlayışı ve Master Plana göre altyapı çalışmaları yapmak.</li>
                <li className="before:content-['✅'] before:mr-2">Bölgenin tarihi, doğal ve ekolojik mirasına sahip çıkarak farklı ekonomik ve sosyal faaliyetlerin de bölgede gelişimini sağlamak ve bölgenin tanıtımını yapmak.</li>
                <li className="before:content-['✅'] before:mr-2">Yurttaşlık bilincini yaratmak ve karar almada katılımcılığı desteklemek.</li>
            </ul>
        </div>
    )
}

export default Vision_And_Mission