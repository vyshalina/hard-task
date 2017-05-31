/*For Left-menu*/

	var hideMenu = document.querySelector('.catalog-menu li.has-menu');
		showMenu = document.querySelector('.catalog-menu li.has-menu  ul');
	hideMenu.onmouseover = function (){
		showMenu.classList.add('show-left');
	}
	hideMenu.onmouseout = function(){
		showMenu.classList.remove('show-left');
	}
	

/*For FeedBack*/
/*show and close feedback*/
function openFeedB(){
	document.getElementById('feedB').style.visibility = 'visible';
	document.getElementById('feedB').style.opacity = '1'; 
}
function closeFeedB(){
	document.getElementById('feedB').style.visibility = 'hidden';
	document.getElementById('feedB').style.opacity = '0';
	
}

function validate(){
	/*Add Variables*/
	a = document.form.name;
	b = document.form.phone;
	c = document.form.email;
	forced = 'Поле обязательно для заполнения!';
	clearErr = function(){
			this.classList.remove("err");
			this.value = '';
		};
		
	/*Test inputs*/
	if (a.value == 0){
		a.value = forced;
		a.classList.add('err');
		a.onclick = clearErr;
	}
	if (b.value == 0){
		b.value = forced;
		b.classList.add('err');
		b.onclick = clearErr;
	}  
	if (c.value == 0){
		c.value = forced;
		c.classList.add('err');
		c.onclick = clearErr;
	} 
}
/*FeedBack End*/

/*For slider*/
var slider = document.querySelectorAll('#slider .slide');
var numbSlide = 0;
var slideInterval = setInterval(nextSlide,4000);

/*Buttons*/
var next = document.getElementById('nav-next');
var prev = document.getElementById('nav-prev');

next.onclick = function(){
	nextSlide();
	pauseSlide()
};
prev.onclick = function(){
	previousSlide();
	pauseSlide()
};

function nextSlide(){
	goSlide(numbSlide+1);
}
function previousSlide(){
	goSlide(numbSlide-1);
}

/*start slide*/
function goSlide(n){
	slider[numbSlide].className = 'slide';
	numbSlide = (n+slider.length)%slider.length;
	slider[numbSlide].className = 'slide show';
}
/*for stop slide with click on button*/
function pauseSlide(){
	clearInterval(slideInterval);
}
/*Slider End*/