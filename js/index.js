const ECarInfo = document.getElementById('ECarInfo');

const carInfo = [
    "<h2>Aporia</h2><h4>Aporia is an upcoming horror game made in Unreal Engine 5.</h4>",
    "<h2>TBA Project</h2><h4>Project I'm currently working on, being developed by me and the Team at Blauehaus. More info coming soon.</h4>"
];

ECarInfo.innerHTML = carInfo[0];

$('.carousel').carousel({
    interval: 5000 
})

$('#myCarousel').on('slid.bs.carousel', function (e) {
    var slideFrom = $(this).find('.active').index();
    var slideTo = $(e.relatedTarget).index();

    ECarInfo.innerHTML = carInfo[slideTo];
})
