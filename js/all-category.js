// category data load section
const allCategoryLoad = () => {
    const url = ` https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
        .then(res => res.json())
        .then(data => allCategoryDisplay(data.data.news_category))
        .catch(error => console.log(error))
    
}

// category append section
const allCategoryDisplay = (categories) => {
    const home = document.getElementById('home');

    categories.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('col-lg-1', 'col-sm-6', 'col-md-4');
        div.innerHTML = ` 
        <button onclick="allNewsLoad('${category.category_id}')" class="m-2 gap-2 border-0 bg-white fs-4">${category.category_name
            }
            </button>      
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
    console.log(allData.length);
    const allNews = document.getElementById('all-news');
    allNews.innerHTML = '';
    allData.forEach(data => {

        const div = document.createElement('div');

        div.classList.add('col-lg-6', 'col-sm-12', 'col-md-12',);

        div.innerHTML = `
        <div onclick="newsDetailLoad('${data._id}')" class="card mb-3" style="max-width: 540px;" data-bs-toggle="modal" data-bs-target="#detailModal">
       <div class="row g-0">
       <div class="col-md-4">
       <img src="${data.thumbnail_url}" class=" w-100 h-100 rounded-start" alt="...">
       </div>
       <div class="col-md-8">
       <div class="card-body">
        <h5 class="card-title">${data.title}</h5>
        <p class="card-text elpsis" >${data.details
            }</p>
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <img class="rounded-circle w-25 h-50" src="${data.image_url}" alt="" >
                <div class="px-2">
                    <p class="mb-0">${data.author.name ? data.author.name : 'no name found'}</p>
                    <p class="text-primary">${data.author.published_date ? data.author.published_date : 'date note found'}</p>
                </div>
            </div>
            <div class="d-flex">
                <p>views: </p>
                <p> ${data.total_view ? data.total_view : '0'}</p>
            </div>
        </div> 
       </div>
       </div>
        </div>
        </div>
    `
        allNews.appendChild(div);
    });
    toggleSpinner(false);

}

// news open in modal section
const newsDetailLoad = (id) => {
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    
    fetch(url)
        .then(res => res.json())
        .then(data => modalOpen (data.data))
        .catch(error => console.log(error))
}
const modalOpen = (data) => {
    const title = document.getElementById('detailModalLabel');
    title.innerText = data[0].title
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
     <img class="w-100" src="${data[0].image_url}" alt="">

     <h3>${data[0].author.name ? data[0].author.name:'Name not Found'
     }</h3>
     <p>${data[0].author.published_date ? data[0].author.published_date:'Pubshil date not Found'
     }</p>
     <p>view: ${data[0].total_view
        ? data[0].total_view
        :'No viewer Found'
     }</p>

     <p>${data[0].details
     }</p>
    `

}

// add loader
const toggleSpinner = isLoading => {
    const loaderSection = document.getElementById('loader');
    if (isLoading===true) {
        loaderSection.classList.remove('d-none')
    } else {
      loaderSection.classList.add('d-none')  
    }
}

allCategoryLoad();