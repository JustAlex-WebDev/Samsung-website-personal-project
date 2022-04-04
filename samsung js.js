//making the navigation bar responsive
const menuleft = document.querySelector(".left");
const menuright = document.querySelector(".right");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menuOpacityRes = document.querySelector(".menu-opacity-res");
menuBtn.onclick = ()=>{
	menuleft.classList.add("menu-active");
	menuright.classList.add("menu-active");
	menuBtn.classList.add("hide");
	menuOpacityRes.style.display = "flex";
}
cancelBtn.onclick = ()=>{
	menuleft.classList.remove("menu-active");
	menuright.classList.remove("menu-active");
	menuBtn.classList.remove("hide");
	menuOpacityRes.style.display = "none";
}









//making the slides for the first slider-container ADVANCED WAY OF DOING IT
var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var bms = document.getElementsByClassName("bm");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  /*makes the other slides disappear after clicking on a dot for example*/
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  /*decreases the dot's opacity after not beign active*/
  /*for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  for (i = 0; i < bms.length; i++) {
      bms[i].className = bms[i].className.replace(" active2", "");
  }*/

  /*makes the slides appear*/
  slides[slideIndex-1].style.display = "block";

  /*increases the opacity of the active dot to see where you are*/
  /*
  dots[slideIndex-1].className += " active";
  */

  bms[slideIndex-1].className += " active2";
}









//making the slides for the second slider-container SECOND WAY OF DOING IT SIMPLER
//slide1
function myFunction1() {
  var x1 = document.querySelector(".first");
  var x2 = document.querySelector(".second");
  var x3 = document.querySelector(".third");
  var x4 = document.querySelector(".fourth");
  if (x1.style.display === "none") {
    x1.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
  } else {
    x1.style.display = "block";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "none";
  }
}

//slide2
function myFunction2() {
  var x1 = document.querySelector(".first");
  var x2 = document.querySelector(".second");
  var x3 = document.querySelector(".third");
  var x4 = document.querySelector(".fourth");
  if (x2.style.display === "none") {
    x1.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
    x4.style.display = "none";
  } else {
    x1.style.display = "none";
    x2.style.display = "block";
    x3.style.display = "none";
    x4.style.display = "none";
  }
}

//slide3
function myFunction3() {
  var x1 = document.querySelector(".first");
  var x2 = document.querySelector(".second");
  var x3 = document.querySelector(".third");
  var x4 = document.querySelector(".fourth");
  if (x3.style.display === "none") {
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "block";
    x4.style.display = "none";
  } else {
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "block";
    x4.style.display = "none";
  }
}

//slide4
function myFunction4() {
  var x1 = document.querySelector(".first");
  var x2 = document.querySelector(".second");
  var x3 = document.querySelector(".third");
  var x4 = document.querySelector(".fourth");
  if (x3.style.display === "none") {
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "block";
  } else {
    x1.style.display = "none";
    x2.style.display = "none";
    x3.style.display = "none";
    x4.style.display = "block";
  }
}









/*making the search bar appear and disappear easy*/
function myFunction() {
  var x = document.getElementById("mySearchBar");
  var y = document.querySelector(".opacity");
  var z = document.querySelector(".gg-close");
  if (x.style.display === "flex") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "none";
  } else {
    x.style.display = "flex";
    y.style.display = "flex";
    z.style.display = "flex";
  }
}




//making the search-bar N3 final
let suggestions = ["Chanel","CodingLab","CodingNepal","YouTube","YouTuber","Bloger","Apple","Web Developer","Web Designer","How to learn HTML and CSS","How to learn Javascript",
"How to become Web Designer","What does HTMl stands for","What does CSS stand for","Freelancer","Facebook","Instagram","GitHub","LinkedIn"];

//getting all requiered elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = document.querySelector("input");
const suggBox = document.querySelector(".autocom-box");

//if user press any key and release
inputBox.onkeyup = (e) =>{
	let userData = e.target.value; //user entered data
	let emptyArray = [];
	if(userData){
		emptyArray = suggestions.filter((data)=>{
				//filtering array vlaue and user char to lowercase and returning only those word/sentc 
				//which are starts with user entered word
				return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
		});
		emptyArray = emptyArray.map((data)=>{
				return data = '<li>'+ data + '</li>';
		});
		console.log(emptyArray);
		searchWrapper.classList.add("active3"); //show autocomplete box
		showSuggestion(emptyArray);
		let allList = suggBox.querySelectorAll("li");
		for(let i = 0; i < allList.length; i++){
			//adding onclick attribute in all li tag
			allList[i].setAttribute("onclick", "select(this)");
		}
	}
	else{
		searchWrapper.classList.remove("active3"); //hides autocomplete box
	}
}

function select(element){
	let selectUserData = element.textContent;
	inputBox.value = selectUserData; //passing the user selected list item data in textfield
	searchWrapper.classList.remove("active3");
}

function showSuggestion(list){
	let listData;
	if(!list.length){
		userValue = inputBox.value;
		listData = '<li>'+ userValue +'</li>';	
	}
	else{
		listData = list.join('');
	}
	suggBox.innerHTML = listData;
}









//making the scroll to the top of the web page button work
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 40px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}






