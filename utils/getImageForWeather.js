const images = {
  Clear:require('../assets/sunny.jpg'),
  Hail: require('../assets/hail.jpg'),
  'Heavy Cloud': require('../assets/cloud.jpg'),
  'Light Cloud': require('../assets/cloud.jpg'),
  'Heavy Rain': require('../assets/rain.jpg'),
  'Light Rain': require('../assets/rain.jpg'),
  Showers: require('../assets/rain.jpg'),
  Sleet: require('../assets/rain.jpg'),
  Snow: require('../assets/snow.jpg'),
  Thunder: require('../assets/thunder.jpg'),
  Sunny: require('../assets/sunny.jpg'),
}

export default (weather) => images[weather]
