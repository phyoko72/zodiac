"use client"
import {FormEvent} from "react"
import {notFound, useRouter} from "next/navigation"
import {getZodiac} from "@/utils/calculation"
import Button from "./Button"
export default function SearchForm() {
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const birthDay = e.currentTarget.birthDay.value

        if (!birthDay) notFound()

        const result = getZodiac(birthDay)

        router.push(`/zodiac/${result}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="date"
                    name="birthDay"
                    id="birthDay"
                    required
                    className="w-1/2 px-2 py-1 rounded-full outline-none"
                    aria-label="Search"
                />
                <br />
                <Button text="Search" />
            </form>
        </div>
    )
}
