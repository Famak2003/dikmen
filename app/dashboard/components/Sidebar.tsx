'use client'

import { faBlog, faBullhorn, faCalculator, faCertificate, faChartPie, faFolder, faMouse, faPenFancy, faQuestion, faQuestionCircle, faUser, faUserFriends, faUsers, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuProps } from "antd";
import SidebarIcon from "./reuseable/SidebarIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/lib/store";
import { setSelectedKey } from "@/lib/slices/dashboardSlice";
import { redirect } from "next/navigation";
import SidebarLink from "./reuseable/SidebarLink";

const Sidebar = () => {
    const dispatch = useDispatch()
    const {selectedKey, isSidebarCollapsed} = useSelector((state: RootState) => state.dashboard)
    type MenuItem = Required<MenuProps>['items'][number];

    console.log(selectedKey)
    console.log(isSidebarCollapsed)
    

    const handleMenuSelect: MenuProps['onSelect'] = (info: any) => {
        dispatch(setSelectedKey(info.key))
      };

    const handleLink = (to: string) => {
        redirect(to)
    }

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
      
    return(
        <aside className={`sidebar DisableScrollBar overflow-scroll flixed top-0 left-0 pb-20 bg-white dark:bg-slate-800 duration-300 ${isSidebarCollapsed ? "w-[60px]" : "w-[230px]"} h-full border-r `}>
            <Menu 
                className="!w-full bg-transparent "
                mode={isSidebarCollapsed ? "vertical" : "inline"}
                expandIcon={isSidebarCollapsed ? null : ""}
                // items={sidebarData}
                onClick={(key) => console.log(key)}
                onSelect={handleMenuSelect}
            >
                <Menu.Item key={'1'} className={` sidebarPages `} >
                    <SidebarLink href={"/dashboard"} >
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faChartPie} className="sidebarNakedIcon" />
                        </SidebarIcon>
                        <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                            Dashboard
                        </p>
                    </SidebarLink>
                </Menu.Item>
                <Menu.Item key={'2'} className={` sidebarPages `} >
                    <SidebarLink href={"/dashboard/raporlar"} >
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faFolder} className="sidebarNakedIcon" />
                        </SidebarIcon>
                        <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                            Raporlar
                        </p>
                    </SidebarLink>
                </Menu.Item>
                <Menu.SubMenu 
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : "sidebarSubPages"} `}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faUserFriends} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "Kadro" }
                >
                    <Menu.Item key={'3'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/kadro1"} childRoute={true}  >
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'4'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/kadro2"} childRoute={true}  >
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu 
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faBlog} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "Blog"}
                >
                    <Menu.Item key={'5'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/blog1"} childRoute={true}>
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'6'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/blog2"} childRoute={true}>
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu 
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faPenFancy} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "Sayfalar"}
                >
                    <Menu.Item key={'7'} className=" subMenuPage" >
                        <SidebarLink href={"dashboard/sayfalar1"} childRoute={true} >
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'8'} className=" subMenuPage" >
                        <SidebarLink href={"dashboard/sayfalar2"} childRoute={true} >
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu 
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faUserTie} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "Kullanıcılar"}
                >
                    <Menu.Item key={'9'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/user1"} childRoute={true}>
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'10'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/user2"} childRoute={true}>
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu 
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faUsers} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "Müşteriler" }
                >
                    <Menu.Item key={'11'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/customer1"} childRoute={true}>
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'12'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/customer2"} childRoute={true}>
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key={'13'} className={` sidebarPages`} >
                    <SidebarLink href={"/dashboard/muhasebe"}>
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faCalculator} className="sidebarNakedIcon" />
                        </SidebarIcon>
                        <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                            Muhasebe
                        </p>
                    </SidebarLink>
                </Menu.Item>
                <Menu.Item key={'14'} className={` sidebarPages`} >
                    <SidebarLink href={"/dashboard/aboneler"}>
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faCertificate} className="sidebarNakedIcon" />
                        </SidebarIcon>
                        <p className={` ${isSidebarCollapsed ? "hidden" : " "} `}>
                            Aboneler
                        </p>
                    </SidebarLink>
                </Menu.Item>
                <Menu.Item key={'15'} className={` sidebarPages`} >
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
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faMouse} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "Ürünler" }
                >
                    <Menu.Item key={'16'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/products1"} childRoute={true}>
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'17'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/products2"} childRoute={true} >
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu 
                    className={` ${isSidebarCollapsed ? "collapsedSidebarSubPages" : ""} sidebarSubPages  "`}
                    icon={(
                        <SidebarIcon>
                            <FontAwesomeIcon icon={faQuestionCircle} className="sidebarNakedIcon" />
                        </SidebarIcon>
                    )} 
                    title={ isSidebarCollapsed ? "": "S.S.S" }
                >
                    <Menu.Item key={'18'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/sss1"} childRoute={true} >
                            <p>
                                Sub Menu 1
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                    <Menu.Item key={'19'} className=" subMenuPage" >
                        <SidebarLink href={"/dashboard/sss2"} childRoute={true} >
                            <p>
                                Sub Menu 2
                            </p>
                        </SidebarLink>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </aside>
    )
}

export default Sidebar