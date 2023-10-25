export const getChineseZodiac = (birthday: string) => {
    const birthYear = new Date(birthday).getFullYear()
    const startYear = 1900 // Start year of the Chinese zodiac cycle
    const zodiacSigns = [
        "Monkey",
        "Rooster",
        "Dog",
        "Pig",
        "Rat",
        "Ox",
        "Tiger",
        "Rabbit",
        "Dragon",
        "Snake",
        "Horse",
        "Goat",
    ]
    const offset = (birthYear - startYear) % 12 // Calculate the offset from the start year

    // Determine the Chinese zodiac sign based on the offset
    const zodiacSign = zodiacSigns[offset]
    return zodiacSign
}

export function getChineseZodiacSign(birthday: string) {
    const zodiacAnimals = [
        "Monkey🐒",
        "Rooster🐓",
        "Dog🐕",
        "Pig🐖",
        "Rat🐀",
        "Ox🐂",
        "Tiger🐅",
        "Rabbit🐇",
        "Dragon🐉",
        "Snake🐍",
        "Horse🐎",
        "Sheep🐑",
    ]
    const birthYear = new Date(birthday).getFullYear()

    // Calculate the Chinese zodiac year.
    const zodiacYear = birthYear % 12

    // Return the Chinese zodiac animal for the calculated year.
    return zodiacAnimals[zodiacYear]
}

export const getZodiac = (birthday: string) => {
    const month = new Date(birthday).getMonth() + 1
    const day = new Date(birthday).getDate()

    // Determine the Zodiac sign based on the birth date
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return "Aries"
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Taurus"
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Gemini"
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cancer"
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo"
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo"
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra"
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Scorpio"
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagittarius"
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return "Capricorn"
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Aquarius"
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Pisces"
    else throw new Error("Invalid birth date.")
}
