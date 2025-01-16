const search_input = document.getElementById('search');
const search_btn = document.getElementById("search-btn");
const img_container = document.getElementById("img-container");

const fetchDate = async ()=>{
    const search_value = search.value
    if(search_value == ''){
        alert('Please enter a search term')
        return
    }else{
        const key = 'RuJTeKhXAyF9G-9VlCJJv1NlEMuCgGCDgIS-2Brjv3E';
        const url = `https://api.unsplash.com/search/photos?page=1&query=${search_value}&client_id=${key}`;
        let data = await fetch(url)
        data = await data.json()
        displayImages(data)
    }
 
}

search_btn.addEventListener('click', () => {
   fetchDate()
})

function displayImages(data){
    img_container.innerHTML = '';
    data.results.forEach(element => {
        let result = element.urls.regular;
        const img = document.createElement('img')
        img.src=result;
        img_container.appendChild(img)
    });
}
