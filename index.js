const API ="https://www.themealdb.com/api/json/v1/1/categories.php"

let content=document.querySelector(".content")

async function getCategory(){
    try {
        const res = await fetch(API)
        const data = await res.json()
        showCategory(data.categories)
    } catch (error) {
        console.log(error)
    }
}
getCategory()
function showCategory(data){
    content.innerHTML=data.map((item)=>{
        return`
        <div class="card">
        <div class="image">
            <img src="${item.strCategoryThumb}" alt="">
        </div>
        <div class="info">
            <h2>${item.strCategory}</h2>
            <p>desc</p>
            <div>1200</div>
        </div>
    </div>
        `
    }).join("")
}