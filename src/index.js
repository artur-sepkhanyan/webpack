import './index.css';
import {imagesArray, start, end} from './index1';

let index = 0;
let  slide = (n) => {
    const mainImage = document.getElementById("mainImage");
    if (n > end) {
        index = 0;
    } else if (n < start) {
        index = imagesArray.length;
    }
    mainImage.setAttribute('src', imagesArray[index])
    slideCarousel(index);
}
let slideCarousel = (n) => {
    let images = document.getElementsByClassName("slider_item");
    let first = index - 2;
    let second = index - 1;
    let beforlast = index + 1;
    let last = index + 2;
    if(index == start) {
        first = end - 2;
        second = end - 1;
    }
    if(index == start + 1) {
        first = end - 1;
    }
    if(index == end) {
        last = start + 2;
        beforlast = start + 1;
    }
    if(index == end - 1) {
        last = start;
    }
    images[0].setAttribute('src',imagesArray[first]);
    images[1].setAttribute('src',imagesArray[second]);
    images[2].setAttribute('src',imagesArray[index]);
    images[3].setAttribute('src',imagesArray[beforlast]);
    images[4].setAttribute('src',imagesArray[last]);
    
}

let slideLeftRight = (direction = '+') => {
    index = direction ? index + 1 : index - 1;
    slide(index);
}


setInterval(slideLeftRight, 3000);

