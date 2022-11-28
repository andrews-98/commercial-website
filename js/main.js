
$(function(){

    $('.slider_inner, .news_bottom_block_1').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite:false

       
    });
    

});
const changeTextBtn = document.querySelector('#about_btn');
        /*changeTextBtn.addEventListener('click', function(){
        changeTextBtn.style.backgroundColor = '#111111'
        })*/

changeTextBtn.onclick = () =>{
    changeTextBtn.style.backgroundColor = 'yellow'
}
