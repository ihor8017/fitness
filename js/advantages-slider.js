import Swiper from"./vendor/swiper-bundle.js";const advantagesWrapper=document.querySelector(".advantages__slider-wrapper"),advantagesSlides=document.querySelectorAll(".advantages__slide"),advantagesNavigation=document.querySelector(".advantages__navigation"),advantages=document.querySelector(".advantages"),advantagesSlider=()=>{let a,e;function t(){let t=window.matchMedia("(min-width: 0px) and (max-width: 1199px)");window.matchMedia("(min-width: 1200px)").matches?e||(e=!0,a=new Swiper(".advantages__slider",{loop:!0,slidesPerView:3,spaceBetween:30,initialSlide:1,navigation:{nextEl:".advantages__button-next",prevEl:".advantages__button-prev"}})):t.matches&&void 0!==a&&(a.destroy(),e=!1)}advantages.classList.remove("no-js"),advantagesNavigation.classList.add("swiper-navigation"),advantagesWrapper.classList.add("swiper-wrapper"),advantagesSlides.forEach((a=>{a.classList.add("swiper-slide")})),window.addEventListener("load",(()=>{t()})),window.addEventListener("resize",(()=>{t()}))};export default advantagesSlider;