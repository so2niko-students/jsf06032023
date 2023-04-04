const CLASS_SELECTED = 'selected';
const SELECTOR_BODY = '.main-body';
let volume = 0;

$('.search-form').on('submit', (ev) => {
    console.log(ev);
    return false;
});

$(SELECTOR_BODY).on('click', (ev) => {
    console.log('body click');
    console.log(ev);
    return false;
});
$(SELECTOR_BODY).on('wheel', (ev) => {
    volume = (volume + ev.originalEvent.deltaY * -1) % 301;
    
    setVolume(volume);
});

//BAD VARIANT
function setVolume(vol){
    console.log(vol);
    $('.el').removeClass(CLASS_SELECTED);

    const vol100 = $('.el:last');
    if(vol >= 100){
        vol100.addClass(CLASS_SELECTED);
    }

    if(vol >= 200){
        vol100.prev().addClass(CLASS_SELECTED);
    }

    if(vol >= 300){
        vol100.prev().prev().addClass(CLASS_SELECTED);
    }
}

$('.text-fish,.text-fish2,input').on('click', (ev) => {
    console.log('p click');
    ev.target.classList.add('red');
    setTimeout(() => ev.target.classList.remove('red'), 1000);
    return false;
});
$('p:odd').on('mouseup', (ev) => {
    ev.target.classList.add('weight800');
    setTimeout(() => ev.target.classList.remove('weight800'), 2000);
    return false;
});

$('.el').click(function(){
    console.log(this);
    $(this).addClass(CLASS_SELECTED);
    $(this).nextAll().addClass(CLASS_SELECTED);
    $(this).prevAll().removeClass(CLASS_SELECTED);
    return false;
});

// $('.el').scroll(ev => console.log(ev));
// 'div div div'