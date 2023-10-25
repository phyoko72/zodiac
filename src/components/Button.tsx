export default function Button({text}: {text: string}) {
    return (
        <button className=" bg-orange-600 text-white rounded-full px-6 py-1 mt-3">
            {text}
        </button>
    )
}
