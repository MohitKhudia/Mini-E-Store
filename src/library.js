const getCategories = async()=>{
    try {
        const response = await fetch('https://fakestoreapi.in/api/products/category')
        const data = await response.json() 
        return data.categories     
    } catch (error) {
        console.error(error.message)
    }
}
const getProducts = async(product_id = null)=>{
    try {
        const response = await fetch(`https://fakestoreapi.in/api/products/${product_id != null ? product_id : ''}`)
        const data = await response.json() 
        return product_id == null ? data.products : data.product     
    } catch (error) {
        console.error(error.message)
    }
}

export {getCategories , getProducts}
