import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import BreadCrumbs from "./component/reusables/BreadCrumbs";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className=" w-[100vw] min-h-[100dvh] ring-2 " >
            <div className="  relative flex flex-col justify-center items-center text-black bg-primary_light_grey " >
                <NavBar/>
                <BreadCrumbs/>
                {children}
                <Footer/>
            </div>
        </div>
    );
  }
  