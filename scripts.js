var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: 'hover'
})

const api_url = 'https://ghibliapi.herokuapp.com/films';
let filmTitle = document.getElementById('h1');

async function getData(){
    let response = await fetch(api_url);
    let data = await response.json()
    return data;
}

getData()
.then(data => console.log(data))


