export default function weather(state = {weather:{}}, action) {
    let modState = {};
    switch (action.type) {      
      case 'WEATHER_RECEIVED':
          modState = {...state}
          modState.weather = action.weather;
          return modState;
      default:
        return state;
    }
  }
  