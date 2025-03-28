'use client'

import { faBars, faBlog, faBullhorn, faCalculator, faCalendarAlt, faCertificate, faChartPie, faFolder, faMouse, faNewspaper, faPen, faProjectDiagram, faQuestion, faQuestionCircle, faSignOut, faUser, faUserFriends, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigProvider, Menu, MenuProps } from "antd";
import SidebarIcon from "./reuseable/SidebarIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppSelector } from "@/lib/store";
import { setisSidebarHidden, setSelectedKey } from "@/lib/slices/dashboardSlice";
import { redirect } from "next/navigation";
import SidebarLink from "./reuseable/SidebarLink";
import { useRef } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import I18N from "@/i18n";

const Sidebar = () => {
    const dispatch = useDispatch()
    const sidebarRef = useRef<HTMLDivElement | null>(null)
    const btnRef = useRef<HTMLDivElement | null>(null)
    const {selectedKey, isSidebarCollapsed, isSidebarHidden} = useSelector((state: RootState) => state.dashboard)
    type MenuItem = Required<MenuProps>['items'][number];
    
    
    const token = useAppSelector((state: RootState) => state.auth)
    // console.log(token);


    const handleMenuSelect: MenuProps['onSelect'] = (info: any) => {
        dispatch(setSelectedKey(info.key))
      };

    // useOutsideClick({ref: sidebarRef, callback: handleHideSidebar})

    // const sidebarData: MenuItem[] = [
    //     { key: 1, icon: "", label: "Dashboard" },
    //     {
    //         key: 2,
    //         icon: <FontAwesomeIcon icon={faFolder} className=" h-6 w-6 dark:!text-white " />, 
    //         label: "Raporal"
    //     },
    //     { 
    //         key: 3, 
    //         icon: "", 
    //         label: <div className=" " >Kadro</div>,
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //      },
    //     { 
    //         key: 4, 
    //         icon: "", 
    //         label: "Blog",
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //     },
    //     { 
    //         key: 5, 
    //         icon: "", 
    //         label: "Sayfalar",
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //     },
    //     { 
    //         key: 6, 
    //         icon: "", 
    //         label: "Kullanıcılar",
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //     },
    //     { 
    //         key: 7, 
    //         icon: "", 
    //         label: "Müşteriler",
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //     },
    //     { key: 8, icon: "", label: "Muhasebe" },
    //     { key: 9, icon: "", label: "Aboneler" },
    //     { key: 10, icon: "", label: "Duyuru Modal" },
    //     { 
    //         key: 11, 
    //         icon: "",
    //         label: "Ürünler",
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //     },
    //     { 
    //         key: 12, 
    //         icon: "", 
    //         label: "S.S.S", 
    //         children: [
    //             { key: '11', label: 'Option 1' },
    //             { key: '12', label: 'Option 2' },
    //             { key: '13', label: 'Option 3' },
    //             { key: '14', label: 'Option 4' },
    //         ]
    //     },
    // ]

    const handleHideSidebarToggle = () => {
        dispatch(setisSidebarHidden(!isSidebarHidden))
    }
    const handleHideSidebar = () => {
        dispatch(setisSidebarHidden(true))
    }

    useOutsideClick({ref: sidebarRef, btnRef, callback: handleHideSidebar})
    
    
    return(
        <>
            <div 
                ref={btnRef}
                className={` cursor-pointer text-primary_black dark:text-slate-300 h-[19px] w-[19px] tab:h-[24px] tab:w-[24px] hover:!text-deep_red duration-300 absolute ${isSidebarHidden ? "left-[10px]" : "left-[232px]"} ${isSidebarCollapsed ? "left-[62px]" : ""} lmd:hidden `}
                onClick={handleHideSidebarToggle}
            >
                <FontAwesomeIcon icon={faBars} />
            </div>
            <aside ref={sidebarRef} className={`sidebar DisableScrollBar overflow-scroll pb-20 bg-white dark:bg-slate-800 duration-300 fixed top-[74px] ${ isSidebarHidden ? "left-[-100%]" : "left-0" }  lmd:left-0 lmd:top-0 lmd:relative ${isSidebarCollapsed ? "w-[60px]" : "w-[230px]"} h-full border-r z-[99] `}>
                <ConfigProvider
                    theme={{
                        components: {
                        Menu: {
                            itemSelectedBg: "#ef4444",
                            itemSelectedColor: "white",
                        },
                        },
                    }}
                >
                    <Menu 
                        className="!w-full bg-transparent "
                        mode={isSidebarCollapsed ? "vertical" : "inline"}
                        expandIcon={isSidebarCollapsed ? null : ""}
                        // items={sidebarData}
                        onSelect={handleMenuSelect}
                    >
                        <Menu.Item key={'1'} className={` sidebarPages  `} >
                            <SidebarLink href={"/dashboard"} >
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faChartPie} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    <I18N>DASHBOARD</I18N>
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        <Menu.Item key={'2'} className={` sidebarPages  `} >
                            <SidebarLink href={"/dashboard/projects"} >
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faProjectDiagram} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    <I18N>PROJECTS</I18N>
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        <Menu.Item key={'3'} className={` sidebarPages  `} >
                            <SidebarLink href={"/dashboard/news"} >
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faNewspaper} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    <I18N>NEWS</I18N>
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        {/* <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : "sidebarSubPages "} `}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faUserFriends} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "Kadro" }
                        >
                            <Menu.Item key={'3'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/kadro1"} childRoute={true}  >
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'4'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/kadro2"} childRoute={true}  >
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu> */}
                        <Menu.Item key={'4'} className={` sidebarPages  `} >
                            <SidebarLink href={"/dashboard/announcement"} >
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faBullhorn} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    <I18N>ANNOUNCEMENT</I18N>
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        <Menu.Item key={'5'} className={` sidebarPages  `} >
                            <SidebarLink href={"/dashboard/events"} >
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faCalendarAlt} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    <I18N>EVENTS</I18N>
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        {/* <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faBlog} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "Blog"}
                        >
                            <Menu.Item key={'5'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/blog1"} childRoute={true}>
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'6'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/blog2"} childRoute={true}>
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu> */}
                        <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages   "`}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faPen} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "Sayfalar"}
                        >
                            <Menu.Item key={'7'} className=" subMenuPage " >
                                <SidebarLink href={"dashboard/sayfalar1"} childRoute={true} >
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'8'} className=" subMenuPage " >
                                <SidebarLink href={"dashboard/sayfalar2"} childRoute={true} >
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages   "`}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faUserTie} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "Kullanıcılar"}
                        >
                            <Menu.Item key={'9'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/user1"} childRoute={true}>
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'10'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/user2"} childRoute={true}>
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages   "`}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faUsers} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "Müşteriler" }
                        >
                            <Menu.Item key={'11'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/customer1"} childRoute={true}>
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'12'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/customer2"} childRoute={true}>
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key={'13'} className={` sidebarPages `} >
                            <SidebarLink href={"/dashboard/muhasebe"}>
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faCalculator} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    Muhasebe
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        <Menu.Item key={'14'} className={` sidebarPages `} >
                            <SidebarLink href={"/dashboard/aboneler"}>
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faCertificate} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    Aboneler
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        <Menu.Item key={'15'} className={` sidebarPages `} >
                            <SidebarLink href={"/dashboard/duyuru-modal"}>
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faBullhorn} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    Duyuru Modal
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                        <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages   "`}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faMouse} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "Ürünler" }
                        >
                            <Menu.Item key={'16'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/products1"} childRoute={true}>
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'17'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/products2"} childRoute={true} >
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.SubMenu 
                            className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages   "`}
                            icon={(
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faQuestionCircle} className="sidebarNakedIcon" />
                                </SidebarIcon>
                            )} 
                            title={ isSidebarCollapsed ? "": "S.S.S" }
                        >
                            <Menu.Item key={'18'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/sss1"} childRoute={true} >
                                    <p>
                                        Sub Menu 1
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                            <Menu.Item key={'19'} className=" subMenuPage " >
                                <SidebarLink href={"/dashboard/sss2"} childRoute={true} >
                                    <p>
                                        Sub Menu 2
                                    </p>
                                </SidebarLink>
                            </Menu.Item>
                        </Menu.SubMenu>
                        <Menu.Item key={""} className={` sidebarPages `} >
                            <SidebarLink isLogout={true}>
                                <SidebarIcon>
                                    <FontAwesomeIcon icon={faSignOut} className="sidebarNakedIcon" />
                                </SidebarIcon>
                                <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                                    Logout
                                </p>
                            </SidebarLink>
                        </Menu.Item>
                    </Menu>
                </ConfigProvider>
            </aside>
        </>
    )
}

export default Sidebar