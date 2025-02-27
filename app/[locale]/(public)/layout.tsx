
export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className=" w-[100vw] h-full ring-2 " >
            <div className="  DisableScrollBar flex-1 overflow-y-scroll h-full px-8 pt-5 text-black dark:text-gray-300 bg-white dark:bg-slate-600 " >
                {children}
            </div>
        </div>
    );
  }
  