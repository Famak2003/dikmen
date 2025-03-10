"use client"

import I18N from "@/i18n";
import { Link } from "@/i18n/routing";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, BreadcrumbProps } from "antd";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const BreadCrumbs = () => {
    const [pageName, setPageName] = useState('')
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean); // Get path segments

    useEffect(() => {
        setPageName(paths[paths.length - 1].toLocaleUpperCase())
    }, [paths])

    const itemRender: BreadcrumbProps["itemRender"] = (route, params, routes, paths) => {
        const isLast = route?.path === routes[routes.length - 1]?.path;
    
        return isLast ? (
            <span>{route.title}</span>
        ) : (
            <Link href={route.path ?? "#"}>{route.title}</Link>
        );
    };
      

    // Define a default path for translate keys like en and tr.
    const pathTitleMap: Record<string, string> = {
        "en": "HOME_PAGE",
        "tr": "HOME_PAGE",
    };

    // Remove the first segment if it's a language code
    const filteredPaths = paths[0] === "en" || paths[0] === "tr" ? paths.slice(1) : paths;


    // Generate breadcrumb items
    const breadcrumbItems = filteredPaths.map((path, index) => {
        const url =  path === "/en" || path === "/tr" ? "/" : `/${filteredPaths.slice(0, index + 1).join("/")}`;
        const titleChar = pathTitleMap[path] || path.toLocaleUpperCase(); // Use mapped title or fallback to path
        const title = <I18N>{titleChar}</I18N>
        return {
            path: url,
            title,
        };
    });

    const items = [
        ...breadcrumbItems
    ];

    if (pathname === "/en" || pathname === "/tr"){
        return
    }
    return (
        <div className=" flex justify-center items-center bg-base_yellow w-screen h-[85px] ">
            <div className=" section flex gap-3 justify-between items-center ">
                <h1 className=" text-sm mobile:text-base sm:text-[20px] tab:text-[26px] text-dark_yellow font-bold " >
                    <I18N>{pageName}</I18N>
                </h1>
                <Breadcrumb separator={<FontAwesomeIcon icon={faAngleRight} />} className=" text text-dark_yellow font-bold h-full breadcrumbs " itemRender={itemRender} items={items} />
            </div>
        </div>
    )
}


export default BreadCrumbs