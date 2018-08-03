var picOverlay = document.querySelectorAll('.album');

for(i = 0; i < picOverlay.length; i ++) {
    picOverlay[i].addEventListener('mouseover', function(e){
        var selectClass = 'overlay ' + e.target.parentNode.classList[1];
        console.log(selectClass);
        document.getElementsByClassName(selectClass)[0].style.opacity = '0.85';
    })
    
    picOverlay[i].addEventListener('mouseout', function(e){
        var selectClass = 'overlay ' + e.target.parentNode.classList[1];
        document.getElementsByClassName(selectClass)[0].style.opacity = '0.18';
    })
}


window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    if(scroll > 0) {
        document.querySelector('.navigation').classList.add('activeScroll');
    } else {
        document.querySelector('.navigation').classList.remove('activeScroll');

    }
})



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex-1].style.display = "block";
  }


  window.addEventListener('keydown', function(e) {
    if(document.querySelector('.next')) {
        if(e.keyCode == 39) {
            document.querySelector('.next').click();
        } else if(e.keyCode == 37) {
            document.querySelector('.prev').click();
        }
    }
})

function navigate(e) {
    console.log('yo');
    if(e.keyCode == 39) {
        document.querySelector('.next').click();
    } else if(e.keyCode == 37) {
        document.querySelector('.prev').click();
    }
}



