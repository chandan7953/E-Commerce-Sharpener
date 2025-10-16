async function handleSubmit(e){
    e.preventDefault();
    try{
        const brand = e.target.brand.value.trim();
        const response  = await axios.post("/products/", {brand})
        console.log(response.data);
    }catch(err){
        console.log(err);
    }
}