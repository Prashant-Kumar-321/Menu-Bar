const togler = document.getElementById('menu-toggler');
const showMenu = document.getElementById('show-menu');
const hideMenu = document.getElementById('hide-menu');
const navBar = document.querySelector('.main-menu-bar'); 

 
const show_hide_sidebar = (a) => {
	const classList = togler.classList; 
	const classArray = Array.from(classList); // convert classList into array 
	const str = classArray[1]; 

	if(str == "show-sideBar"){
		togler.className = togler.className.replace('show-sideBar', 'hide-sideBar'); // replace a class name of an element using js 	
		showMenu.style.display = "none";
		hideMenu.style.display = "inline";  
		navBar.style.display = "flex"; 
	}else {
		togler.className = togler.className.replace('hide-sideBar', 'show-sideBar'); 
		showMenu.style.display = "inline"; 
		hideMenu.style.display = "none"; 
		navBar.style.display = "none"; 
	}
}
 
togler.addEventListener('click', show_hide_sidebar); 
