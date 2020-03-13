 /*

http://www.omdbapi.com/?i=tt3896198&apikey=93ac6620 

*/ 

let b2 = document.querySelector('.b2')

function getMovie(){
const xhr = new XMLHttpRequest();
  xhr.open('GET' , `http://www.omdbapi.com/?i=tt3896198&apikey=93ac6620` , false );
  xhr.send();
 console.log(xhr.responseText)
}
b2.addEventListener('click' , function(){
  getMovie()

})