"use client"
import ApexCharts from "react-apexcharts"
import Loader from "./Loader"
export default function RadarChart({
    traits,
}: {
    traits: {name: string; percentage: number}[]
}) {
    const options: ApexCharts.ApexOptions = {
        chart: {
            width: "100%",
            height: "100%",
            type: "radar",
            id: "zodiac-chart",
            toolbar: {show: false},
        },
        labels: traits.map((ts) => ts.name),
        grid: {show: false},
        dataLabels: {
            enabled: true,
            style: {fontWeight: "bold"},
        },
        colors: ["orange"],
        fill: {colors: ["#ffa200"], opacity: 0.2},
        plotOptions: {
            area: {fillTo: "end"},
            radar: {
                polygons: {
                    strokeColors: "#e8e8e8",
                    fill: {
                        colors: ["#f8f8f8", "#fff"],
                    },
                },
            },
        },
    }
    const series: ApexAxisChartSeries = [
        {name: "Traits", data: traits.map((ts) => ts.percentage)},
    ]

    return (
        <>
            <div className="bg-white flex-[2_1_0%] text-center rounded-md">
                <h1 className=" text-3xl font-bold text-center my-5">
                    Personality Traits
                </h1>
                <div className=" max-sm:h-[300px] h-4/5">
                    <ApexCharts
                        type="radar"
                        width={"100%"}
                        height={"100%"}
                        series={series}
                        options={options}
                    />
                </div>
            </div>
        </>
    )
}
