"use client"

import { FC } from "react"

interface Data {
    image?: string,
    title?: string,
    name?: string
}

type GridLayoutProps = {
    data: Data[],
    Element: FC<Data>;
}

const GridLayout: FC<GridLayoutProps> = ({data, Element}) => {
    return(
        <ul className=" flex-1 grid grid-cols-1 smobile:grid-cols-2 lmobile:grid-cols-3 sm:grid-cols-2 lmd:grid-cols-3 ltab:grid-cols-4 place-items-center gap-y-4 gap-x-4 px-2 mobile:px-8 pb-20 ">
            {
                data.map((obj, idx) => {
                    return(
                        <Element key={idx} {...obj} />
                    )
                })
            }
        </ul>
    )
}

export default GridLayout