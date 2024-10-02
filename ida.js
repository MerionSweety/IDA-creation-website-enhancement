// Add event listener to nav links
    document.querySelectorAll('nav a').forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Add event listener to form submission
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea').value;
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    });

    //navigation
    
let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let changeSlide = 0;
// console.log(changeSlide);
nextBtn.addEventListener("click", function() {
  
    slides.forEach(function (slide, index) {
    if (slide.classList.contains("show") === true) {
      changeSlide = index + 1;
      slide.classList.remove("show");
    }
    
  });
//   console.log(changeSlide);
  if (changeSlide < slides.length) {
    slides[changeSlide].classList.add("show");
    }
  else {
      changeSlide = 0;
      slides[changeSlide].classList.add("show");
    }
});
// console.log(changeSlide);
prevBtn.addEventListener('click', function () {
   
    slides.forEach(function (slide, index) {
        if (slide.classList.contains("show") === true) {
            changeSlide = index - 1;
            slide.classList.remove("show");
        }
       
        
    });
    // console.log(changeSlide);

    if (changeSlide < slides.length && changeSlide > -1) {
        slides[changeSlide].classList.add("show");
    }
    else {
        // console.log(slides.length);
        
        changeSlide = slides.length - 1;
        slides[changeSlide].classList.add("show");
    }
});
