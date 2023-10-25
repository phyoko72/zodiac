"use client"

import {useEffect, useState} from "react"

export default function UpBtn() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleScrollButton = () => {
        if (window.scrollY > 600) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    useEffect(() => {
        window.addEventListener("scroll", toggleScrollButton)
        return () => {
            window.removeEventListener("scroll", toggleScrollButton)
        }
    }, [])

    return (
        <button
            className={`bg-orange-600 text-white rounded ${
                isVisible ? "fixed" : "hidden"
            }  bottom-10 right-5 p-3 text-sm opacity-50 hover:opacity-100`}
            onClick={scrollToTop}
        >
            &#x25B3;
        </button>
    )
}
