import Image from "next/image"
import Content from "@/components/Content"
export default function ContentGroup({info}: {info: DetailType}) {
    return (
        <>
            <Content title="Life Purpose" desc={info.LifePurpose} />
            <Content title="Loyal" desc={info.Loyal} />
            <Content title="Angry" desc={info.Angry} />
            <Content title="Character" desc={info.Character} />
            <Content title="Pretty Features" desc={info.PrettyFeatures} />
            <div className=" flex max-sm:flex-col gap-3 justify-center ">
                <Image
                    src={`/${info.FlowerImageUrl}`}
                    width={400}
                    height={200}
                    alt="Flower"
                    className=" max-sm:w-full h-auto rounded-md"
                />
                <Content
                    title="Representative Flower"
                    desc={info.RepresentativeFlower}
                />
            </div>
        </>
    )
}
