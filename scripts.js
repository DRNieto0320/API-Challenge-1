let studioGhibliFilmTitle = document.querySelector('ul');

fetch('https://ghibliapi.herokuapp.com/films')
.then(function(response){
return response.json();
})
.then(async function(json){
    for(let i=1; i<json.length; i++){
        listItem = document.createElement('li');
        listItem.innerHTML = '<p>' +(`${json[i].title}`)+ '</p>';
        studioGhibliFilmTitle.appendChild(listItem);
    }
    console.log(json);
});



/*
console.log(`${(json[i].title)} = the title of the film; ${(json[i].description)} = a brief description of the film; ${(json[i].release_date)} = the year the film was released`);
*/

/*

*/