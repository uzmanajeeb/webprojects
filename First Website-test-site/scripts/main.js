//const myHeading =document.querySelector("h1");
//myHeading.textContent = "Hello world!";


let myImage = document.querySelector("img");

myImage.onclick = () => {
	let mySrc = myImage.getAttribute("src");
	if (mySrc === "C:\Users\uzman\OneDrive\Documents\uzma\Web-Projects\First Website-test-site\images\Firstpic.png") {
		myImage.setAttribute("src","C:\Users\uzman\OneDrive\Documents\uzma\Web-Projects\First Website-test-site\images\2ndimage.png");
	} else {
		myImage.setAttribute("src","C:\Users\uzman\OneDrive\Documents\uzma\Web-Projects\First Website-test-site\images\Firstpic.png");
	}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	let myName = prompt ("Uzma");
	if(!myName) {
		setUserName();
	} else {
	localStorage.setItem("name", myName);
	myHeading.textContent = Mozilla is cool,+myName;
} }
if (!localStorage.getItem("name")) {
	setUserName();
} else {
	let storedName = localStorage.getItem("name");
	myHeading.innerHTML = Mozilla is cool,+storedName;
}
myButton.onclick = fuction() {
	setUserName();
} 






