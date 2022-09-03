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
        div.classList.add('col-lg-1');
        div.classList.add('col-sm-6');
        div.classList.add('col-md-4');
        div.innerHTML = ` 
        <h4 class="m-2 gap-2 ">${category.category_name
        }</h4>
        
        `;
        home.appendChild(div)
    });
}

// news profile data load section

allCategoryLoad();