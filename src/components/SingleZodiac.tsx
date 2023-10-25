import Image from "next/image"
import Link from "next/link"

export default function SingleZodiac({info}: {info: DetailType}) {
    return (
        <Link href={`/zodiac/${info.Name}`}>
            <div className=" bg-gd bg-white w-36 md:w-40 h-40 pt-2 rounded-md border flex flex-col justify-around items-center">
                <div className="flex-1">
                    <div className=" shadow-md bg-white w-16 h-16 rounded-full flex justify-center items-center">
                        <Image
                            src={`/${info.ZodiacSignImageUrl}`}
                            width={40}
                            height={40}
                            alt="sign"
                        />
                    </div>
                </div>
                <div className="flex-1">
                    <h1>{info.Name}</h1>
                    <h1>{info.Dates}</h1>
                </div>
            </div>
        </Link>
    )
}
