// category data load section
const allCategoryLoad = () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => allCategoryDisplay(data.data.news_category))
}

// category append section
const allCategoryDisplay = (categories) => {
    const home = document.getElementById('home');

    categories.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('col-lg-1','col-sm-6','col-md-4');
        div.innerHTML = ` 
        <button onclick="allNewsLoad('${category.category_id}')" class="m-2 gap-2 border-0 bg-white fs-4">${category.category_name
            }</button>
        
        `;
        home.appendChild(div)
    });
}

// news profile data load section
const allNewsLoad = (id) => {
    const url = ` https://openapi.programming-hero.com/api/news/category/${id}`

    fetch(url)
        .then(res => res.json())
        .then(data => allNewsDisplay(data.data))
}

// news display section
const allNewsDisplay = (allData) => {
    const allNews = document.getElementById('all-news');
    allNews.innerHTML = '';
    allData.forEach(data => {
        console.log(data);
        const div = document.createElement('div');
        
        div.classList.add('col-lg-4','col-sm-1','col-md-6',);
        
        div.innerHTML = `
        <div class="card mb-3" style="max-width: 540px;">
       <div class="row g-0">
       <div class="col-md-4">
       <img src="${data.thumbnail_url}" class=" w-100 h-100 rounded-start" alt="...">
       </div>
       <div class="col-md-8">
       <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text" >${data.details.slice(0,200)
        }</p>
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <img class="rounded-circle w-25 h-50" src="${data.image_url}" alt="" >
                <div class="px-2">
                    <p class="mb-0">${data.author.name}</p>
                    <p class="text-primary">${data.author.published_date}</p>
                </div>
            </div>
            <div class="d-flex">
                <p>views: </p>
                <p> ${data.total_view}</p>
            </div>
        </div> 
       </div>
       </div>
        </div>
        </div>
    `
        allNews.appendChild(div);
    });

    // news open in modal section


   
}

allCategoryLoad();