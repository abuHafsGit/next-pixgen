export const getAllData = async () => {
    const res = await fetch('https://next-pixgen.vercel.app/data.json')
    return res.json()
}
export const getCategory = async () => {
    const res = await fetch('https://next-pixgen.vercel.app/category.json')
    return res.json()
}