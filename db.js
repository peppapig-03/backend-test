const routers = [
    {id:1, brand: "Toyota"},
    {id:2, brand: "Mitsubishi"},
    {id:3, brand: "Honda"}
]
async function getRouterById(routerId){
    return routers.find((router)=>router.id===routerId)
}
export default getRouterById