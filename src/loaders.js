import { baseUrl } from "./base_url";

export const peopleLoader = async () => {
    const response = await fetch(`${baseUrl}/people`)
    const people = await response.json()
    return people
}
export const personLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/people/${id}`)
    const person = await response.json()
    return person
}