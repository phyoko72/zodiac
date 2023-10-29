"use client"
import Image from "next/image"
import Link from "next/link"
import data from "@/data/Zodiac.json"
import {notFound} from "next/navigation"
import Button from "@/components/Button"
import ContentGroup from "@/components/ContentGroup"
import RadarChart from "@/components/RadarChart"
import {useEffect} from "react"

export default function ZodiacInfoPage({
    params: {zodiacName},
}: {
    params: {zodiacName: string}
}) {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    const foundZodiac = data.ZodiacSignsDetail.find(
        (zd) => zd.Name === zodiacName
    )

    if (!foundZodiac) notFound()

    return (
        <div className=" mb-3">
            <div className=" w-fit m-auto">
                <Link href={"/"}>
                    <Button text="Back" />
                </Link>
            </div>

            <div className="bg-gd bg-white rounded-md flex flex-col justify-center items-center py-2 gap-1 my-5">
                <div className=" bg-white shadow-lg w-16 h-16 rounded-full flex justify-center items-center">
                    <Image
                        src={`/${foundZodiac.ZodiacSignImageUrl}`}
                        width={40}
                        height={40}
                        alt="sign"
                    />
                </div>

                <div className=" text-center">
                    <h3 className=" font-semibold text-lg">
                        {foundZodiac.Name}
                    </h3>
                    <h4>{foundZodiac.Dates}</h4>
                </div>
            </div>

            <div className=" flex max-sm:flex-col justify-evenly gap-3 mb-5">
                <div className=" flex-1 bg-white flex flex-col justify-evenly items-center p-2 rounded-md">
                    <div className="[&>*]:mb-3 text-black/50">
                        <h1 className=" title">မြန်မာလ</h1>
                        <span className=" block text-center">-</span>
                        <h1 className=" title">{foundZodiac.MyanmarMonth}</h1>
                        <h1 className=" title">Sign</h1>
                    </div>
                    <div className=" w-24 h-24 relative mb-5">
                        <Image
                            src={`/${foundZodiac.ZodiacSignImageUrl}`}
                            fill
                            alt="sign"
                            className="my-3 object-contain"
                        />
                    </div>
                    <Image
                        src={`/${foundZodiac.ZodiacSign2ImageUrl}`}
                        width={460}
                        height={575}
                        // width={300}
                        // height={300}
                        priority
                        alt="sign"
                        className=" rounded-md"
                    />
                </div>

                <RadarChart traits={foundZodiac.Traits} />

                <div className=" bg-white flex-1 flex flex-col justify-evenly items-center p-2 rounded-md">
                    <div className="[&>*]:mb-3 text-black/50">
                        <h1 className=" title">ဒြပ် / ELEMENT</h1>
                        <h2 className=" title">{foundZodiac.Element}</h2>
                    </div>
                    <Image
                        src={`/${foundZodiac.ElementImageUrl}`}
                        width={248}
                        height={529}
                        alt="element"
                        priority
                        className="rounded-md"
                    />
                </div>
            </div>

            <ContentGroup info={foundZodiac} />
        </div>
    )
}
