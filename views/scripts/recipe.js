let recipeID = window.location.search.substr(1).split("=")[1]

document.getElementById("leave-review")?.addEventListener("click", (e) => {
    if(e.target.hasAttribute("canEdit")){
        window.location = `http://localhost:8000/recipe/submit?id=${recipeID}`
    }else {
        document.getElementById("write-review").classList.toggle("active")
    }
})

let stars = document.getElementById("star-ratings")
let rating = 1;

stars.addEventListener("click", (e) =>{
    if(e.target.tagName = "SPAN"){

        for(let star of stars.children){
            rating = e.target.getAttribute("number")
            if(rating >= star.getAttribute("number")){
                star.classList.add('checked');
            }else {
                star.classList.remove('checked');
            }
        }
    }
})

stars.addEventListener("hover", (e) =>{
    if(e.target.tagName = "SPAN"){

        for(let star of stars.children){
            rating = e.target.getAttribute("number")
            if(rating >= star.getAttribute("number")){
                star.classList.add('checked');
            }else {
                star.classList.remove('checked');
            }
        }
    }
})

document.getElementById("submit-review").addEventListener("click", async () => {
    let description = document.getElementById("review-text").value;
    let response = await fetch("/recipe/review", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({recipeID, rating, description})
    })

    if(response.ok){
        description.value = ""
        
    }else{
        displayError(response.statusText);
    }
})

document.getElementById("write-review").addEventListener("click", (el) => {
    if(el.target.id == "write-review"){
        document.getElementById("write-review").classList.toggle("active")
    }
})