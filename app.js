// change bg nav
const navBar = document.querySelector(".nav");
window.addEventListener("scroll", () => {
    if (scrollY >= 118) {
        navBar.classList.add("bg")
    } else {
        navBar.classList.remove("bg")
    }
})




// change img hero
const sliderImg = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg"];
let slider = document.querySelector(".bg-img");
let sliderGridItems = [...document.querySelectorAll(".grid__item")];

let currentImg = 0;

setInterval(()=>{
    changesImg()
}, 5000)

const changesImg = () => {
    sliderGridItems.map((gridItem, index)=>{
        setTimeout(() => {
            gridItem.classList.remove("hide");

            setTimeout(() => {
                if (index == sliderGridItems.length - 1) {
                    if (currentImg >= sliderImg.length -1) {
                        currentImg = 0;
                    } else {
                        currentImg++;
                    }

                    slider.src = `./img/${sliderImg[currentImg]}`;

                    sliderGridItems.map((item, i) => {
                        setTimeout(() => {
                            item.classList.add("hide")
                        }, i * 100)
                    })
                }
            },100)
        },index * 100)
    })
}

