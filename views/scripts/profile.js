for (let item of document.getElementsByClassName("recipe-container")){
    item.addEventListener("click", async (e) => {
        if(e.target.tagName != "I"){
            window.location = `/recipe?id=${item.id}`
        }else {

            let response = await fetch("/profile/favourite", {
                method: "DELETE",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({recipeID: item.id})
            })
            if(response.ok){
                document.getElementById(item.id).remove()
                document.getElementById(item.id).remove()
            }else{
                displayError(response.statusText);
            }
        }
    })
};

let overlayFavourites = document.getElementById("overlay-favourites")
let overlayFriends = document.getElementById("overlay-friends")



document.getElementById("viewFavourites")?.addEventListener("click", (e) => {
    overlayFavourites.classList.toggle("active")
})
overlayFavourites.addEventListener("click", (el) => {
    if(el.target == overlayFavourites){
        overlayFavourites.classList.toggle("active")
    }
})


document.getElementById("friendslist")?.addEventListener("click", (e) => {
    overlayFriends.classList.toggle("active")
})
overlayFriends.addEventListener("click", (el) => {
    if(el.target == overlayFriends){
        overlayFriends.classList.toggle("active")
    }
})


document.getElementById("settings").addEventListener("click", ()=>{
    window .location = "./profile/settings"
})