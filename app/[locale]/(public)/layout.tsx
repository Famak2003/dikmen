
export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className=" w-[100vw] min-h-[100dvh] ring-2 " >
            <div className="  text-black dark:text-gray-300 bg-white dark:bg-slate-600 " >
                {children}
            </div>
        </div>
    );
  }
  