import {createElement} from 'react'
import {YMaps, Map, ZoomControl, GeolocationControl, Placemark} from 'react-yandex-maps'

import officePin from '~/assets/icons/office-pin.svg'

const PinLocation: Record<string, [number, number]> = {
  MOSCOW: [55.755819, 37.617644],
  SARATOV: [51.533562, 46.034266],
  KAZAN: [55.796127, 49.106414],
  TYUMEN: [57.152985, 65.541227],
  OMSK: [54.989347, 73.368221],
}

const PinDescription: Record<string, string> = {
  MOSCOW: `Офис Лига Банка в Москве`,
  SARATOV: `Офис Лига Банка в Саратове`,
  KAZAN: `Офис Лига Банка в Казани`,
  TYUMEN: `Офис Лига Банка в Тюмени`,
  OMSK: `Офис Лига Банка в Омске`,
}

const MAP_PROPS = {
  state: {
    center: [57.3, 60.99],
    zoom: 4.9,
  },
  options: {
    avoidFractionalZoom: false,
  },
  style: {
    width: `100%`,
  },
  className: `OfficesSection__map-container`
}

const ZOOM_PROPS = {
  options: {
    size: `small`,
    position: {
      right: 15,
      top: 210,
    },
  },
}

const GEO_PROPS = {
  options: {
    position: {
      right: 15,
      top: 285,
    },
  },
}

const PLACEMARKS_PROPS = Object.keys(PinLocation).map((cityKey) => (
  {
    key: cityKey.toLowerCase(),
    geometry: PinLocation[cityKey],
    modules: [`geoObject.addon.balloon`, `geoObject.addon.hint`],
    properties: {
      hintContent: PinDescription[cityKey],
      balloonContent: PinDescription[cityKey],
    },
    options: {
      iconLayout: `default#image`,
      iconImageHref: officePin,
      iconImageSize: [37, 42],
      iconImageOffset: [-18.5, -42],
    },
  }
))

export const OfficesMap = () => {
  return (
    createElement(YMaps, {},
      createElement(Map, MAP_PROPS,
        createElement(ZoomControl, ZOOM_PROPS),
        createElement(GeolocationControl, GEO_PROPS),
        ...PLACEMARKS_PROPS.map((placemarkProps) => (
          createElement(Placemark, placemarkProps)
        ))
      )
    )
  )
}
