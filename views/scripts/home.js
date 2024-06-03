for (let item of document.getElementsByClassName("recipe-container")){
    item.addEventListener("click", (e) => {
        console.log(e.target.tagName)
        if(e.target.tagName != "I"){
            window.location = `/recipe?id=${item.id}`
        }
    })
};