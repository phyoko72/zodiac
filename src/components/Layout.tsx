import UpBtn from "./UpBtn"

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className=" w-[92%] lg:w-4/5 m-auto min-h-[100vh-4rem]">
            {children}
            <UpBtn />
        </main>
    )
}
