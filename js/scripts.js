$(document).ready(function(){

    // Progress Bar
    let containerA = document.getElementById("circleA");

    let circleA = new ProgressBar.Circle(containerA, {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1400,
        from: {color: '#aaa'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() *60);
            circle.setText(value);
        }
    
    });
    
    let containerB = document.getElementById("circleB");

    let circleB = new ProgressBar.Circle(containerB, {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 1600,
        from: {color: '#aaa'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() *254);
            circle.setText(value);
        }
    });
        
    let containerC = document.getElementById("circleC");

    let circleC = new ProgressBar.Circle(containerC, {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#aaa'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() *8);
            circle.setText(value);
        }
    });

        
    let containerD = document.getElementById("circleD");

    let circleD = new ProgressBar.Circle(containerD, {
        color: '#64daf9',
        strokeWidth: 8,
        duration: 2200,
        from: {color: '#aaa'},
        to: {color: '#65DAF9'},

        step: function(state, circle) {
            circle.path.setAttribute('stroke', state.color);
            
            var value = Math.round(circle.value() *2543);
            circle.setText(value);
        }
    });

    // iniciando o loader
    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;
    
    $(window).scroll(function(e){
    
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500)&& stop ==0){
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });
});
    //Paralax
    setTimeout(function()   {

        $('#data-area').parallax({imageSrc: 'imagem/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc: 'imagem/pattern.png'});
    },250);

    // Filtro do poriforio

    $('.filter-btn').on('click',function(){
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if (type == 'dir-btn'){
            eachBoxes('dir',boxes)
        }else if(type =='ti-btn'){
            eachBoxes('ti',boxes)
        }else if (type == 'enf-btn'){
            eachBoxes ('enf',boxes)
        }else if (type == 'adm-btn'){
            eachBoxes('adm',boxes)
        }else if (type == 'dvs-btn'){
            eachBoxes('dvs',boxes)
        }else {
            eachBoxes('alt',boxes);
        }

    function eachBoxes(type,boxes){
        if(type == 'alt'){
            $(boxes).fadeIn();
        }
        else{
            $(boxes).each(function(){
                if(!$(this).hasClass(type)){
                    $(this).fadeOut('show');
                } else {
                    $(this).fadeIn();
                }
            });

            
        }
    }
});