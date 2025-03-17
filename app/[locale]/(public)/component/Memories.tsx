import I18N from "@/i18n"

const MemoriesData = [
    {
        name: "NAME",
        surname: "SURNAME"
    },
    {
        name: "NAME",
        surname: "SURNAME"
    },
    {
        name: "NAME",
        surname: "SURNAME"
    },
]

const Memories = () => {
    return(
        <section className=" flex justify-center items-center w-screen h-fit bg-gray-200 ">
            <div className=" section flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-8 p-2 h-fit mobile:h-[80px] ">
                <h1 className=" text16 text-dark_yellow uppercase " >
                    <I18N>THOSE_WHO_LEFT_US</I18N>
                </h1>
                <ul className=" flex flex-wrap mobile:flex-nowrap justify-between items-center gap-8 pl-4 mobile:pl-0 w-fit list-disc ">
                    {
                        MemoriesData.map((obj, idx) => {
                            return(
                                <li key={idx} >
                                    <div className=" flex gap-2" >
                                        <p><I18N>{obj.name}</I18N></p>
                                        <p><I18N>{obj.surname}</I18N></p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Memories