import RichTextImage from "../../../component/reusables/RichtextImage"

const Quality_And_Service = () => {
    const image = "/assets/history.png"

    return (
        <div className=" subPageSection richTextSection ">
            <h1>DİKMEN BELEDİYESİ KALİTE VE HİZMET POLİTİKASI</h1>
            <p>
                Bölge halkının ihtiyaç ve beklentilerini, Belediye kaynaklarını etkin ve verimli bir şekilde kullanarak karşılamak; belediyemiz karar ve
                uygulamalarında yasal şartlara bağlı kalarak halkımızın ve çalışanlarımızın katılımını sağlamak; çağdaş yaşam, sürekli eğitim ve sürekli iyileştirme
                yaklaşımı ile bölge halkının hizmetlerimizden memnuniyetini artırmak, Kalite Politikamızdır.
            </p>
            <RichTextImage image={image} />
            <h1>HEDEFLERİMİZ</h1>
            <ul className="checkedList">
                <li>Tüm Bölge Halkının Belediye hizmetlerinden memnuniyetini arttırmak.</li>
                <li>Halk-Belediye işbirliği ve iletişimini arttırmak.</li>
                <li>Belediye kaynaklarının verimli kullanımını sağlamak.</li>
                <li>Kültürel, sosyal, sportif ve ekonomik içerikli çalışmaları arttırmak</li>
                <li>Belediye personelinin iş memnuniyetini ve motivasyonunu artırmak.</li>
                <li>Sürekli eğitimi ve gelişimi benimseyerek çalışmak.</li>
                <li>Sürdürülebilir kalkınmaya destek olmak.</li>
            </ul>
            <hr className=" w-full h-1 my-8 " />
            <p>
            Dikmen Belediyesi olarak, ISO 9001:2008 Kalite Yönetim Sistemi ilkelerine göre oluşturduğumuz Kalite Yönetim Sistemi koşulları ile yasal ve
            düzenleyici şartlara uyacağımızı ve sistemin etkinliğini sürekli iyileştireceğimizi taahhüt ederiz.
            </p>
        </div>
    )
}

export default Quality_And_Service