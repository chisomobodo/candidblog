document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('id');
    const name = params.get('name');
    const description =params.get('des');
    const picture = params.get('picture');
    const auth = params.get('auth');
    const publishAt = params.get('publishAt');
    console.log(name)
    let markup =`<div class="news-card">
    <h2>${name}</h2>
     <img src=${picture} alt="News Image 1">
     
    <div class="news-details">
        
        <p class="author">Author: ${auth}</p>
        <p class="description">${description}</p>
        <p class="published-date">Published on: ${publishAt}</p>
    </div>
</div>`
document.getElementById('blog-con').innerHTML = markup  
    // Now you have access to blogId, name, description, and picture
    // ...
});