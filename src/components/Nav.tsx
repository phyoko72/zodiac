import Image from "next/image"
import logo from "../../public/images/logo.svg"
export default function Nav() {
    return (
        <nav className=" bg-black/90 w-full h-16 flex items-center ">
            <div className=" w-[92%] lg:w-4/5 m-auto py-2 max-sm:flex max-sm:justify-center">
                <Image src={logo} alt="logo" style={{width: 100}} />
            </div>
        </nav>
    )
}
