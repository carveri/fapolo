

export const PostData = async(producto)=>{
    const apiUrl = `localhost:3000/productos`

    const res = await fetch(apiUrl,{
        method: 'POST',
        data: producto
    })
    const desjson = await res.json()
    return desjson
}