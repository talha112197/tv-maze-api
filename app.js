const form = document.querySelector('#search-form');
let container = document.querySelector('#results');
container.innerHTML = '';

form.addEventListener('submit',async function (e) {
    e.preventDefault();
  const query = form.elements.query.value;
  const config = {params: {q: query}}
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config );
  showResults(res.data);
  form.elements.query.value = '';
  
});

function showResults(array) {
    for(let result of array) {
        if(result.show.image) {
   
        let resultHtml = `<div class="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto mb-3">
        <div class="card">
        <div class="card-image-top"><img src="${result.show.image.medium}" class="img-fluid w-100" alt="image${result.show.id}"></div>
        <div class="card-body">
        <ul class="list-unstyled">
        <li class="list-group-item"><span class="font-weight-bold">Name : </span> <span class="result-name">${result.show.name}</span></li>
        <li class="list-group-item"><span class="font-weight-bold">Genres : </span> ${result.show.genres}</li>
        <li class="list-group-item"><span class="font-weight-bold">Language : </span> ${result.show.language}</li>
        <li class="list-group-item"><span class="font-weight-bold">Rating : </span> ${result.show.rating.average}</li>
        <li class="list-group-item"><span class="font-weight-bold">Release-Date : </span> ${result.show.premiered}</li>
        <li class="list-group-item"><span class="font-weight-bold">Summary : </span> ${result.show.summary.substring(0, 170) + ''}</li>
        <li class="list-group-item"><a href="${result.show.url} class="btn-link">See Details</a></li>
        <li class="list-group-item"><span class="font-weight-bold">Type : </span> ${result.show.type}</li>
        <li class="list-group-item"><span class="font-weight-bold">Score : </span> ${result.score}</li>
        </ul>
        </div> <!-- card body ends here -->
        </div> <!-- card div ends here -->
        </div> <!-- col ends here -->`;
        container.insertAdjacentHTML('beforeend', resultHtml);
        }
    }
} 
