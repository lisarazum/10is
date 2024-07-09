import vars from './_vars';
import './_functions';
import './_global'

import './components/courts/courts'

document.addEventListener("DOMContentLoaded", () => {
  let courtsMap;
  ymaps.ready(initMap);
  function initMap(){
    courtsMap = new ymaps.Map("courts-map", {
      center: [55.813794, 37.376006],
      controls: [],
      zoom: 17
    })
    let myPlacemark = new ymaps.Placemark([55.813794, 37.376006],
      {
        iconContent : '10is',
      },
      {
        preset: 'islands#yellowStretchyIcon',
      });

    courtsMap.geoObjects.add(myPlacemark);
    courtsMap.behaviors.disable('scrollZoom')
    courtsMap.controls.add('zoomControl');
  }
})
