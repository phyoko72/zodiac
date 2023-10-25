import Image from "next/image"
import loader from "../../public/images/loader.png"
export default function Loader() {
    return (
        <div className=" w-full h-screen flex justify-center items-center">
            <Image
                src={loader}
                alt="loading"
                width={150}
                className=" animate-spin"
            />
        </div>
    )
}
