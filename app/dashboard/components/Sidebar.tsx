import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuProps } from "antd";

const Sidebar = () => {
    type MenuItem = Required<MenuProps>['items'][number];

    const sidebarData: MenuItem[] = [
        { key: 1, icon: "", label: "Dashboard" },
        {
            key: 2,
            icon: <FontAwesomeIcon icon={faFolder} className=" h-6 w-6 dark:!text-white " />, 
            label: "Raporal"
        },
        { 
            key: 3, 
            icon: "", 
            label: <div className=" " >Kadro</div>,
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
         },
        { 
            key: 4, 
            icon: "", 
            label: "Blog",
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
        },
        { 
            key: 5, 
            icon: "", 
            label: "Sayfalar",
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
        },
        { 
            key: 6, 
            icon: "", 
            label: "Kullanıcılar",
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
        },
        { 
            key: 7, 
            icon: "", 
            label: "Müşteriler",
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
        },
        { key: 8, icon: "", label: "Muhasebe" },
        { key: 9, icon: "", label: "Aboneler" },
        { key: 10, icon: "", label: "Duyuru Modal" },
        { 
            key: 11, 
            icon: "",
            label: "Ürünler",
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
        },
        { 
            key: 12, 
            icon: "", 
            label: "S.S.S", 
            children: [
                { key: '11', label: 'Option 1' },
                { key: '12', label: 'Option 2' },
                { key: '13', label: 'Option 3' },
                { key: '14', label: 'Option 4' },
            ]
        },
    ]
    return(
        <aside className=" sidebar flixed top-0 left-0 bg-white dark:bg-slate-800 w-[230px] h-full ">
            <Menu 
                className="!w-full bg-transparent "
                mode="inline"
                items={sidebarData}
            />
        </aside>
    )
}

export default Sidebar