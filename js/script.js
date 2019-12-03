const slider = document.getElementById('slide-template').innerHTML;

Mustache.parse(slider);

let slideItems = '';

for (var i = 0; i < slidesData.length; i++) {
    slideItems += Mustache.render(slider, slidesData[i]);
}

const carousel = document.getElementById('carousel');


carousel.insertAdjacentHTML('beforeend', slideItems);





var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
    cellAlign: 'left',
    contain: true,
    pageDots: false,
    hash: true

});

var flkty = new Flickity('.main-carousel');

var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.button');
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  if ( !matchesSelector( event.target, '.button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var flkty = new Flickity('.main-carousel');

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});

(function(){
  window.initMap = function(){
    let map = new google.maps.Map(document.getElementById('map'),
    {
      zoom: 8,
      center: slidesData[0].coords
    });
  };
  for (let i = 0; i < slidesData.length; i++) {
    let marker = new google.maps.Marker({
        position: slidesData[i].coords,
        map: map,
    })
}
})();

