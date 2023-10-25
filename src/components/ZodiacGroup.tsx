import data from "@/data/Zodiac.json"
import SingleZodiac from "./SingleZodiac"

export default function ZodiacGroup() {
    return (
        <div className=" flex flex-wrap gap-2 justify-center">
            {data.ZodiacSignsDetail.map((zd) => (
                <SingleZodiac key={zd.Id} info={zd} />
            ))}
        </div>
    )
}
