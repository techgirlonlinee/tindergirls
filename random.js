const pages = [
 "‘do you have that on vinyl’",
 "trashing tech house",
 "mistaking tech house for techno",
 "‘can i get on the guestlist’",
 "making fun of solomun",
 "‘check out my soundcloud mix’",
 "‘berghain changed my life man’",
 "thinks wearing black is a personality trait",
 "commenting on Nina Kraviz feet",
 "‘track ID?’",
 "moving to Berlin"

]

const outputTag = document.querySelector(".text") 

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber]
}

const random = function (){
	event.preventDefault();
  pageNumber = Math.floor( Math.random() * pages.length )
    updateSection ()
}

  
// document.getElementById("intro").addEventListener("click", random)
// event.preventDefault();

document.querySelector("body").addEventListener("click", random)


document.addEventListener("keyup", function (event){
  if (event.key == "ArrowRight"){
    random () }
})

