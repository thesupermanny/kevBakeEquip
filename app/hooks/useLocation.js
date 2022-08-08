import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

function useLocation() {
  const [location, setLocation] = useState();

  try {
    const getLocation = async () => {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getLastKnownPositionAsync();

      setLocation({ latitude, longitude });
    };

    useEffect(() => {
      getLocation();
    }, []);
  } catch (error) {
    console.log(error);
  }

  return location;
}

export default useLocation;
