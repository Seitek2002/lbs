import React from 'react'
import { MapContainer, TileLayer, Popup, Polyline, useMapEvent } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux'
import AutoFitBound from '../../components/AutoFitBound'
import Marker from '../Marker'
import { routerActions, selectRoute } from '../../features/router/routerSlice'

const DrawMap = () => {
  const route = useSelector(selectRoute)
  const [points, setPoints] = React.useState([])
  const [originMarker, setOriginMarker] = React.useState(null)
  const [destinationMarker, setDestinationMarker] = React.useState(null)
  const [bounds, setBounds] = React.useState([])
  const dispatch = useDispatch()

  function MapEvents() {
    useMapEvent('click', e => {
      console.log(e.latlng)
    })
    return null
  }

  React.useEffect(() => {
    if (route) {
      const points = route.routes[0].geometry.coordinates.map(arr => [arr[1], arr[0]])
      setPoints(points)
      const originPoint = { lat: points[0][0], lng: points[0][1] }
      const destinationPoint = {
        lat: points[points.length - 1][0],
        lng: points[points.length - 1][1],
      }
      setOriginMarker(originPoint)
      setDestinationMarker(destinationPoint)
      const newBounds = [originPoint, destinationPoint].map(m => [m.lat, m.lng])
      setBounds(newBounds)
    }
    console.log(route);
  }, [route])

  React.useEffect(() => {
    dispatch(
      routerActions.fetchRoute({
        original: [42.86476777774923, 74.55397209694085],
        destination: [42.8623880844005, 74.55248618718157],
      })
    )
  }, [])

  const handleSetBounds = bounds => {
    setBounds(bounds)
  }

  const ws = new WebSocket('ws://176.126.164.218:8000/ws/socket-server/chat/1')

  ws.onmessage = async (e) => {
    const data = await JSON.parse(e.data)
    console.log(data)
  }

  const handleCheck = (x,y) => {
    ws.send(
      JSON.stringify({
        x,
        y
      })
    )
    dispatch(
      routerActions.fetchRoute({
        original: [42.86476777774923, 74.55397209694085],
        destination: [x, y],
      })
    )
  }

  if (navigator.geolocation) {
    const options = {
      enableHighAccuracy: true, // Запрос на более высокую точность
      timeout: 5000, // Максимальное время ожидания
      maximumAge: 0 // Не использовать кэшированное местоположение
    };

    const watchId = navigator.geolocation.watchPosition(
      function (position) {
        // Обработка обновленного местоположения
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        handleCheck(latitude, longitude)
      },
      function (error) {
        console.log(error);
      },
      options
    );
  } else {
    console.log('Геолокация не поддерживается вашим браузером');
  }


  return (
    <MapContainer bounds={bounds} center={[42.844827, 74.588]} zoom={12}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <MapEvents />

      <Polyline color={'purple'} opacity={0.7} weight={8} positions={points}>
        <Popup>Polygon</Popup>
      </Polyline>

      {originMarker && <Marker position={originMarker} text="Погрузка" />}

      {destinationMarker && <Marker position={destinationMarker} text="Загрузка" />}

      <AutoFitBound bounds={bounds} handleSetBounds={handleSetBounds} />
    </MapContainer>
  )
}

export default DrawMap
