let vidBtn= document.querySelectorAll(".video-btn");
vidBtn.forEach(slide => {
    slide.addEventListener('click',function(){
        document.querySelector(".controls .blue").classList.remove("blue");
        slide.classList.add("blue");
        let src= slide.getAttribute("data-src");
        document.querySelector("#video-slider").src=src;
    })
})