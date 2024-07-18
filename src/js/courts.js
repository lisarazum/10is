import vars from './_vars';
import './_functions';
import './_global'

import './components/courts/courts'

document.addEventListener("DOMContentLoaded", () => {
  let courtsMap;
  ymaps.ready(initMap);
  function initMap(){
    courtsMap = new ymaps.Map("courts-map", {
      center: [55.785992, 37.355908],
      controls: [],
      zoom: 12,
    })

    let myPlacemark1 = new ymaps.Placemark([55.813794, 37.376006], {
        iconContent : '10is Рублево',
        balloonContentBody: [
          '<address>',
          '<strong>Теннисный корт 10is «Рублево»</strong>',
          '<br/>',
          'Красногорск, 6-я Мякининская улица',
          '<br/>',
          'Открыть в Яндекс картах: <a target="_blank" href="https://yandex.ru/maps/org/shkola_tennisa_10is/123955886633/?ll=37.376006%2C55.813860&z=18">https://yandex.ru/maps/org/123955886633</a>',
          '</address>'
        ].join('')
    },
      {
        preset: 'islands#yellowStretchyIcon',
      });

    let myPlacemark2 = new ymaps.Placemark([55.827701, 37.409688],
      {
        iconContent : '10is Комплекс таежный',
        balloonContentBody: [
          '<address>',
          '<strong>Теннисный корт 10is Комплекс таежный</strong>',
          '<br/>',
          'Волоколамское ш., 89, корп. 1, стр. 1, Москва',
          '<br/>',
          'Открыть в Яндекс картах: <a target="_blank" href="https://yandex.ru/maps/org/217145583560">https://yandex.ru/maps/org/217145583560</a>',
          '</address>'
        ].join('')
      },
      {
        preset: 'islands#yellowStretchyIcon',
      });
    let myPlacemark3 = new ymaps.Placemark([55.829092, 37.324129],
      {
        iconContent : '10is Зенит',
        balloonContentBody: [
          '<address>',
          '<strong>Теннисный корт 10is Зенит</strong>',
          '<br/>',
          'Красногорск, Советская ул., 14',
          '<br/>',
          'Открыть в Яндекс картах: <a target="_blank" href="https://yandex.ru/maps/org/36748680984">https://yandex.ru/maps/org/36748680984</a>',
          '</address>'
        ].join('')
      },
      {
        preset: 'islands#yellowStretchyIcon',
      });
    let myPlacemark4 = new ymaps.Placemark([55.726860, 37.369499],
      {
        iconContent : '10is Немчиновка',
        balloonContentBody: [
          '<address>',
          '<strong>Теннисный корт 10is Немчиновка</strong>',
          '<br/>',
          '2-я Запрудная улица, 36, село Немчиновка',
          '<br/>',
          'Открыть в Яндекс картах: <a target="_blank" href="https://yandex.ru/maps/org/209717195152">https://yandex.ru/maps/org/209717195152</a>',
          '</address>'
        ].join('')
      },
      {
        preset: 'islands#yellowStretchyIcon',
      });
    let myPlacemark5 = new ymaps.Placemark([55.880882, 37.316934],
      {
        iconContent : '10is Этюд',
        balloonContentBody: [
          '<address>',
          '<strong>Теннисный корт 10is Этюд</strong>',
          '<br/>',
          'ул. Прокофьева, 1А, посёлок Отрадное',
          '<br/>',
          'Открыть в Яндекс картах: <a target="_blank" href="https://yandex.ru/maps/org/113672905216">https://yandex.ru/maps/org/113672905216</a>',
          '</address>'
        ].join('')
      },
      {
        preset: 'islands#yellowStretchyIcon',
      });

    courtsMap.geoObjects.add(myPlacemark1);
    courtsMap.geoObjects.add(myPlacemark2);
    courtsMap.geoObjects.add(myPlacemark3);
    courtsMap.geoObjects.add(myPlacemark4);
    courtsMap.geoObjects.add(myPlacemark5);
    courtsMap.behaviors.disable('scrollZoom')
    courtsMap.controls.add('zoomControl');
  }
})
