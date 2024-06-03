for (let item of document.getElementsByClassName("recipe-container")){
    item.addEventListener("click", (e) => {
        console.log(e.target.tagName)
        if(e.target.tagName != "I"){
            window.location = `/recipe?id=${item.id}`
        }
    })
};


document.getElementById("viewFavourites")?.addEventListener("click", (e) => {
    document.getElementById("overlay").classList.toggle("active")
})

document.getElementById("overlay").addEventListener("click", (el) => {
    if(el.target.id == "overlay"){
        document.getElementById("overlay").classList.toggle("active")
    }
})




async function getRecipes(ids) {
    result = await fetch("./recipe/recipe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({ids: favourites}),
    })
    console.log(await result.json())
    return result.json();
}