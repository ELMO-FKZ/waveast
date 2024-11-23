import { projectPlaces } from "../data/projectPlaces"

// Function to get the number of projects rounded to the nearest ten
export const getProjectsCount = () => {
    const count = projectPlaces.length
    const roundedCount = Math.floor(count / 10) * 10
    return `${roundedCount}`
}

// Function to get the number of years since 2011
export function getYearsSince2011() {
    const currentYear = new Date().getUTCFullYear()
    const years = currentYear - 2011
    return `${years}`
}

// Function to count unique countries in projectPlaces
export function countUniqueCountries() {
    const countries = projectPlaces.map(place => {
        const country = place.name.split(', ')[1]
        return country
    });
    const uniqueCountries = new Set(countries)
    return uniqueCountries.size
}

export const teamSize = 30;

export const continent=5;

export const yearFounded = 2021;