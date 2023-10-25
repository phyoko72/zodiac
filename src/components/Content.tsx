export default function Content({title, desc}: {title: string; desc: string}) {
    return (
        <div className=" mb-6">
            <h1 className=" text-3xl font-semibold mb-3">{title}</h1>
            <p className=" border-l-2 border-orange-400 pl-3 text-justify text-black/70 text-lg">
                {desc}
            </p>
        </div>
    )
}
