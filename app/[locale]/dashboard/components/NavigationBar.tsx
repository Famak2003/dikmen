"use client"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLayerGroup, faBell, faCartShopping, faSearch, faHamburger, faBars } from "@fortawesome/free-solid-svg-icons"
import React, { useEffect, useState } from "react"
import Bell from "./svg/bell"
import Cart from "./svg/cart"
import StackLeftVertic from "./svg/stackLeftVertic"
import ThreeLayer from "./svg/threeLayers"
import Bulb from "./svg/bulb"
import Moon from "./svg/moon"
import Logo from "./svg/logo"
import { Button, Divider, Dropdown, MenuProps, Space } from "antd"
import Navbar from "./svg/navbar"
import { useDispatch, useSelector } from "react-redux"
import { setisSidebarCollapsed, setisSidebarHidden } from "@/lib/slices/dashboardSlice"
import { RootState, useAppDispatch } from "@/lib/store"
import { Link } from "@/i18n/routing"

// dropdownRender={(menu) => (
//     <div className="ring-2 bg-white rounded-lg">
//       {React.cloneElement(
//         menu as React.ReactElement<{
//           style: React.CSSProperties;
//         }>
//       )}
//       <hr className=" border-red-600 !w-1/2 " style={{ margin: 0 }} />
//       <Space style={{ padding: 8 }}>
//         <Button type="primary">Click me!</Button>
//       </Space>
//     </div>
// )}
// For mixing the already existing menu with a custome style



const NavigationBar = () => {
    const dispatch = useAppDispatch()
    const [sidebarPos, setSidebarPos] = useState<string>('sidebar')
    const [darkmode, setDarkmode] = useState<boolean | null>(null)
    const {isSidebarCollapsed, isSidebarHidden} = useSelector((state: RootState) => state.dashboard)

    useEffect(() => {
        const storedDarkmode = localStorage.getItem('dark-mode') === "true"
        setDarkmode(storedDarkmode)
    }, [])
    // // darkmode
    useEffect(() =>{
        if (darkmode === null) return;
        const root = window.document.documentElement
        if (darkmode){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
    
        //save dark-mode preference
        localStorage.setItem("dark-mode", `${darkmode}`);
    }, [darkmode])

    const handleCollapse = () => {
        dispatch(setisSidebarCollapsed(!isSidebarCollapsed))
    }

    const handleChangeSidebarPosition = (pos: string) => {
        setSidebarPos(pos)
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
              2nd menu item (disabled)
            </a>
          ),
          icon: <Moon />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
              3rd menu item (disabled)
            </a>
          ),
          disabled: true,
        },
        {
          key: '4',
          danger: true,
          label: 'a danger item',
        },
      ];

    //   
    return(
        <nav className=" flex justify-between items-center relative h-[74px] py-3 px-4 bg-white dark:bg-navDark border-b dark:border-slate-600 " >
            <div className=" flex gap-6 tab:gap-11 items-center w-[460px] md:w-[490px] tab:w-[539px] h-[50px]  ">
                <div className=" flex justify-between items-center pr-1 min-w-[215px]  " >
                    <Link href={"/dashboard"} >
                        <Logo className=" text-black dark:text-white" width={130} height={50} />
                    </Link>
                    <button 
                        className="text-primary_black dark:text-slate-300 h-[19px] w-[19px] tab:h-[24px] tab:w-[24px] hover:!text-deep_red duration-300 block "
                        onClick={handleCollapse}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={`lucide lucide-arrow-left-to-line w-6 duration-300 ${isSidebarCollapsed ? " rotate-180 " : " rotate-0 "} `}>
                            <path d="M3 19V5"></path><path d="m13 6-6 6 6 6"></path>
                            <path d="M7 12h14"></path>
                        </svg>
                    </button>
                    {/* <button 
                        className="text-primary_black dark:text-slate-300 h-[19px] w-[19px] tab:h-[24px] tab:w-[24px] hover:!text-deep_red duration-300 block lmd:hidden "
                        onClick={handleHideSidebar}
                    >
                        <FontAwesomeIcon  icon={faBars} />
                    </button> */}
                </div>
                <div className=" flex gap-2 justify- items-center p-[10px] h-[36px] tab:h-[44px] rounded-lg flex-1 ring-[1px] ring-gray-300 focus: bg-gray-50 dark:bg-gray-500 dark:ring-gray-500 " >
                    <FontAwesomeIcon className=" text-black dark:text-white" icon={faSearch}/>
                    <input className=" bg-inherit flex-1 " type="search" placeholder="Ürün Ara" />
                </div>
            </div>
            <div className=" flex flex-row justify-between items-center w-[200px] lmd:w-[290px] " >
                <button 
                    type="button"
                    onClick={(e) => e.stopPropagation()} className=" relative h-6 w-6 "
                >
                    <Cart/>
                </button>
                <Dropdown
                    trigger={['click']} 
                    placement="bottomLeft"
                    dropdownRender={() => (
                        <div className="flex flex-col items-center justify-center gap-2 p-4 mt-2 bg-white rounded-lg" >
                            <h1 className=" text-[18px] text-gray-700" >
                                Araçlar
                            </h1>
                            <ul>
                                <li>

                                </li>
                            </ul>
                        </div>
                    )}
                >
                    <button className=" text-gray-600 dark:text-slate-100 text-xl " >
                        <ThreeLayer/>
                    </button>
                </Dropdown>
                <Dropdown
                    trigger={['click']} 
                    placement="bottomLeft"
                    dropdownRender={() => (
                        <div className="flex flex-col items-center justify-center gap-2 p-4 mt-2 bg-white rounded-lg" >
                            <h1 className=" text-[18px] text-gray-700" >
                                Bildirimler
                            </h1>
                            <ul>
                                <li className=" flex justify-between text-gray-500 w-[300px] h-[87px] px-3 py-4 border-b ">
                                    <div className=" cursor-pointer flex justify-center items-center w-[44px] h-[44px] rounded-full ring-2 ring-red-600 " >
                                        <Logo className=" text-black " width={38} height={30}/>
                                    </div>
                                    <div className=" max-w-[212px] " >
                                        <span className=" text-gray-900 pr-2 ">Rifat Samjjd</span> 
                                        tteyur dolor sit amet consectetur adipisicing elit
                                        <small className=" block text-black">az once</small>
                                    </div>
                                </li>
                                <div className=" text-center text16 py-2 " >
                                    Tümünü gör
                                </div>
                            </ul>
                        </div>
                    )}
                >
                    <button className="text-gray-600 dark:text-slate-100 text-xl">
                        <Bell />
                    </button>
                </Dropdown>
                <Dropdown
                    trigger={['click']} 
                    placement="bottom"
                    dropdownRender={() => (
                        <div className=" flex flex-col items-center justify-center gap-2 p-4 mt-2 bg-white rounded-lg">
                            <h1>
                                Menu Pozisyonu
                            </h1>
                            <hr className=" w-full " />
                            <ul className=" barPosition " >
                                    <li onClick={() => handleChangeSidebarPosition("sidebar")} >
                                        <StackLeftVertic/>
                                        <p>Sidebar</p>
                                    </li>
                                    <li onClick={() => handleChangeSidebarPosition("navbar")} >
                                        <Navbar/>
                                        <p>Navbar</p>   
                                    </li>
                            </ul>
                        </div>
                      )}
                >
                    <button className={` text-gray-600 dark:text-slate-100 text-xl duration-300 ${sidebarPos === 'sidebar' ? "rotate-0" : "rotate-90 scale-y-[-1]"} `} >
                        <StackLeftVertic/>
                        {/* {
                            sidebarPos === "sidebar" ?
                                <StackLeftVertic/>
                            :
                                <Navbar/>
                        } */}
                    </button>
                </Dropdown>
                <button className=" text-gray-600 dark:text-slate-100 text-xl " 
                    onClick={() => { 
                        setDarkmode(!darkmode)
                    }}
                >
                    { darkmode ? 
                        <Bulb/> :
                        <Moon/>
                    }
                </button>
                <Dropdown
                    // className=" absolute right-[10px] lmd:right-0 top-[-15px] lmd:top-0 translate-y-[50%] lmd:translate-y-0 lmd:relative "
                    trigger={['click']} 
                    placement="bottomLeft"
                    dropdownRender={() => (
                        <div className="flex flex-col items-center justify-center gap-2 p-4 mt-2 bg-white rounded-lg" >
                            <h1 className="text-start w-full" >
                                Lorem Ipsum
                            </h1>
                            <hr className=" w-full " />
                            <ul className=" flex flex-col gap-2 pb-2 text-sm w-[150px] h-16" >
                                <li>
                                    Profile
                                </li>
                                <li>
                                    Çıkış Yap
                                </li>
                            </ul>
                        </div>
                    )}
                >
                    <div className=" cursor-pointer flex justify-center items-center w-[50px] h-[50px] rounded-full ring-2 ring-red-600 " >
                        <Logo className=" text-black dark:text-white" width={40} height={30}/>
                    </div>
                </Dropdown>
            </div>
        </nav>
    )
}
export default NavigationBar