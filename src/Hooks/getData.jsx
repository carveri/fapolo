

export const getData = async()=>{
    const apiUrl = `localhost:3000/productos`

    const res = await fetch(apiUrl)
    const desjson = await res.json()
    return desjson

}