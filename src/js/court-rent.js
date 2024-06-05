import vars from './_vars';
import './_functions';
import './_global'


document.addEventListener("DOMContentLoaded", () => {
  let contactsMap;
  ymaps.ready(initMap);
  function initMap(){
    contactsMap = new ymaps.Map("contacts-map", {
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

    contactsMap.geoObjects.add(myPlacemark);
    contactsMap.behaviors.disable('scrollZoom')
    contactsMap.controls.add('zoomControl');
  }
})
