let datas = [];

document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=3e1895012fd04e028cff20f86a7a8497';

    function fetchBlogList() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                datas = data.articles;
                displayBlogList(datas);
            })
            .catch(error => console.error('Error:', error));
    }

  

    
    document.getElementById('searchButton').addEventListener('click', search);

    fetchBlogList();
});

function displayBlogList(data) {
    const blogListElement = document.getElementById('blog-list');
    let markup = '';
     if(data.length === 0){
        markup += '<p class="error">No result found.</p>';
     }else{
        data.forEach(element => {
            markup += `<div class="news-card">
                <img src="${element.urlToImage}" alt="News Image ">
                <div class="news-details">
                    <h2>${element.title}</h2>
                    <p class="author">Author: ${element.author}</p>
                    <p class="description">Description: ${element.description}</p>
                    <p class="published-date">Published: ${element.publishedAt}</p>
                    <a href="${element.url}">News</a>
                    <div><a href="selected.html?name=${element.title}&des=${element.content}&picture=${element.urlToImage}&auth=${element.author}&publishAt=${element.publishedAt}" class="read-more">Read More</a></div>
                </div>
            </div>`;
        });
    
     }
   
    blogListElement.innerHTML = markup;
}

function search() {
    const searchQuery = document.getElementById('searchButton').value.toLowerCase();
    const filteredResults = datas.filter(result => result.title.toLowerCase().includes(searchQuery));
    displayBlogList(filteredResults);
}
