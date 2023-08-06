var imgList = Array.from(document.querySelectorAll('.img-item img')),
    lightBoxContainer = document.querySelector('.lightBox-container'),
    lightItem = document.querySelector('.lightItem'),
    currentImg = 0;
    nextBtn = document.getElementById('next'),
    prevBtn = document.getElementById('prev'),
    closeBtn = document.getElementById('close');


for(i = 0; i < imgList.length; i++){
    imgList[i].addEventListener('click',(e)=>{
        var imgSrc = e.target.getAttribute('src');
        currentImg = imgList.indexOf(e.target);
        lightBoxContainer.classList.replace('d-none','d-flex');
        lightItem.style.backgroundImage = `url(${imgSrc})`;
    })
}

function slide(i){
    currentImg = currentImg + i;
    if(currentImg == -1){
        currentImg = imgList.length -1;
    }
    if(currentImg == imgList.length){
        currentImg = 0;
    }

    var imgSrc = imgList[currentImg].getAttribute('src');
    lightItem.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener('click', ()=>{
    slide(1)
});
prevBtn.addEventListener('click', ()=>{
    slide(-1)
});
function closeSlide(){
   lightBoxContainer.classList.replace('d-flex','d-none');
}
closeBtn.addEventListener('click',closeSlide)