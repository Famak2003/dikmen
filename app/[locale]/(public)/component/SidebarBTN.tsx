import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { forwardRef } from "react"

interface SidebarBTNProps {
    isPagesSidebarOpen: boolean;
    setIsPagesSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

const SidebarBTN = forwardRef<HTMLDivElement,SidebarBTNProps>(({setIsPagesSidebarOpen, isPagesSidebarOpen}, ref) => {
    return (
        <div 
            ref={ref}
            className={` absolute top-3 left-4 z-[999] sm:hidden flex justify-center items-center text-dark_yellow bg-white hover:bg-section_bg transition-all duration-300 rounded-sm h-[30px] w-[30px] `}
            onClick={() => setIsPagesSidebarOpen(!isPagesSidebarOpen)}
        >
            <FontAwesomeIcon icon={faBars} />
        </div>
    )
})

export default SidebarBTN