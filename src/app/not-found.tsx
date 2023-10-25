import Link from "next/link"

export default function NotFound() {
    return (
        <div className=" w-full h-screen flex justify-center items-center">
            <div>
                <h1 className=" text-3xl font-semibold">Page Not Found</h1>
                <p className=" text-center mt-3">
                    Go{" "}
                    <Link
                        href={"/"}
                        className=" ms-1 underline underline-offset-1 font-semibold"
                    >
                        Home
                    </Link>{" "}
                </p>
            </div>
        </div>
    )
}
