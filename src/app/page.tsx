import SearchForm from "@/components/SearchForm"
import ZodiacGroup from "@/components/ZodiacGroup"

export default function Home() {
    return (
        <div className=" text-center w-full md:w-4/5 mt-14 lg:mt-32 mx-auto [&>*]:my-5">
            <h1 className=" text-2xl md:text-4xl font-semibold">
                Search Zodiac
            </h1>
            <SearchForm />
            <h1 className="text-2xl md:text-4xl font-semibold">
                Horoscope Forecasts
            </h1>
            <ZodiacGroup />
        </div>
    )
}
