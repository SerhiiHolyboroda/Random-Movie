 /*

http://www.omdbapi.com/?i=tt3896198&apikey=93ac6620 

*/ 

let Search__button = document.querySelector(".Search__button")
let movies1_logo = document.querySelector(".movies__top__movie1__logo" )
let movies1__header = document.querySelector(".movies__top__movie1__header" )
let movies1__text = document.querySelector(".movies__top__movie1__text" )
let movies1__more = document.querySelector(".movies__top__movie1__more" )

let movies2_logo = document.querySelector(".movies__top__movie2__logo" )
let movies2__header = document.querySelector(".movies__top__movie2__header" )
let movies2__text = document.querySelector(".movies__top__movie2__text" )
let movies2__more = document.querySelector(".movies__top__movie2__more" )


let movies3_logo = document.querySelector(".movies__top__movie3__logo" )
let movies3__header = document.querySelector(".movies__top__movie3__header" )
let movies3__text = document.querySelector(".movies__top__movie3__text" )
let movies3__more = document.querySelector(".movies__top__movie3__more" )


 

let movies4_logo = document.querySelector(".movies__top__movie4__logo" )
let movies4__header = document.querySelector(".movies__top__movie4__header" )
let movies4__text = document.querySelector(".movies__top__movie4__text" )
let movies4__more = document.querySelector(".movies__top__movie4__more" )

let movies5_logo = document.querySelector(".movies__top__movie5__logo" )
let movies5__header = document.querySelector(".movies__top__movie5__header" )
let movies5__text = document.querySelector(".movies__top__movie5__text" )
let movies5__more = document.querySelector(".movies__top__movie5__more" )

let movies6_logo = document.querySelector(".movies__top__movie6__logo" )
let movies6__header = document.querySelector(".movies__top__movie6__header" )
let movies6__text = document.querySelector(".movies__top__movie6__text" )
let movies6__more = document.querySelector(".movies__top__movie6__more" )


let movies7_logo = document.querySelector(".movies__top__movie7__logo" )
let movies7__header = document.querySelector(".movies__top__movie7__header" )
let movies7__text = document.querySelector(".movies__top__movie7__text" )
let movies7__more = document.querySelector(".movies__top__movie7__more" )


let movies8_logo = document.querySelector(".movies__top__movie8__logo" )
let movies8__header = document.querySelector(".movies__top__movie8__header" )
let movies8__text = document.querySelector(".movies__top__movie8__text" )
let movies8__more = document.querySelector(".movies__top__movie8__more" )

let movie1 = document.querySelector('.movies__top__movie1')
let movie2 = document.querySelector('.movies__top__movie2')
let movie3 = document.querySelector('.movies__top__movie3')
let movie4 = document.querySelector('.movies__top__movie4')
let movie5 = document.querySelector('.movies__top__movie5')
let movie6 = document.querySelector('.movies__top__movie6')
let movie7 = document.querySelector('.movies__top__movie7')
let movie8 = document.querySelector('.movies__top__movie8')
function getMovie(){
const xhr = new XMLHttpRequest();
let search = document.querySelector('.Search__input__search').value
  xhr.open('GET' , `http://www.omdbapi.com/?s=${search}&apikey=93ac6620` , false );
  xhr.send();
 console.log(xhr.responseText)
 console.log(JSON.parse(xhr.responseText))
 let movies = JSON.parse(xhr.responseText)
//  console.log(movies.1)
  console.log(movies.Search[0].Title)
  movies1__header.innerHTML =  movies.Search[0].Title
  movies1__text.innerHTML =  movies.Search[0].Year
  console.log(movies.Search[0].Poster)
  movies1_logo.style.backgroundImage = `url(${movies.Search[0].Poster})`

  movies2__header.innerHTML =  movies.Search[1].Title
  movies2__text.innerHTML =  movies.Search[1].Year
  console.log(movies.Search[1].Poster)
  movies2_logo.style.backgroundImage = `url(${movies.Search[1].Poster})`


  movies3__header.innerHTML =  movies.Search[2].Title
  movies3__text.innerHTML =  movies.Search[2].Year
  console.log(movies.Search[2].Poster)
  movies3_logo.style.backgroundImage = `url(${movies.Search[2].Poster})`


  movies4__header.innerHTML =  movies.Search[3].Title
  movies4__text.innerHTML =  movies.Search[3].Year
  console.log(movies.Search[3].Poster)
  movies4_logo.style.backgroundImage = `url(${movies.Search[3].Poster})`

  movies5__header.innerHTML =  movies.Search[4].Title
  movies5__text.innerHTML =  movies.Search[4].Year
  console.log(movies.Search[4].Poster)
  movies5_logo.style.backgroundImage = `url(${movies.Search[4].Poster})`

  movies6__header.innerHTML =  movies.Search[5].Title
  movies6__text.innerHTML =  movies.Search[5].Year
  console.log(movies.Search[5].Poster)
  movies6_logo.style.backgroundImage = `url(${movies.Search[5].Poster})`


  movies7__header.innerHTML =  movies.Search[6].Title
  movies7__text.innerHTML =  movies.Search[6].Year
  console.log(movies.Search[6].Poster)
  movies7_logo.style.backgroundImage = `url(${movies.Search[6].Poster})`


  movies8__header.innerHTML =  movies.Search[7].Title
  movies8__text.innerHTML =  movies.Search[7].Year
  console.log(movies.Search[7].Poster)
  movies8_logo.style.backgroundImage = `url(${movies.Search[7].Poster})`
 return movies
}
Search__button.addEventListener('click' , function(){
   
 
  getMovie()

})

// function getMovie(){
//   let search = document.querySelector('.Search__input__search').value
// fetch(`http://www.omdbapi.com/?s=${search}&apikey=93ac6620` )
// .then((success) => { success.json() } )
// .then((movies) => { console.log(movies) } )
// .catch((error)=>{ console.log(error)})
 
// }