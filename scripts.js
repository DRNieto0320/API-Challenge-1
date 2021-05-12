let studioGhibliFilmsList = document.querySelector('ul');

fetch('https://ghibliapi.herokuapp.com/films')
.then(function(response){
return response.json();
})
.then(async function(json){
    for(let i=0; i<=json.length-1; i++){
        listItem = document.createElement('li');
        listItem.innerHTML = '<p>' +(`${json[i].title}`)+ '</p>';
        studioGhibliFilmsList.appendChild(listItem);
    }
    console.log(json);
});



/*
console.log(`The ${(json[i].name)} species tend to have the following eye color(s): ${(json[i].eye_colors)} and the following hair color(s): ${(json[i].hair_colors)}`);
*/

/*

*/