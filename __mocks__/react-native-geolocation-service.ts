import Geolocation from 'react-native-geolocation-service';

export default {
  getCurrentPosition: jest
    .fn()
    .mockImplementation((successCallback: Geolocation.SuccessCallback) => {
      const position = {
        coords: {
          latitude: 57.7,
          longitude: 11.93,
          accuracy: 10,
          altitude: 0,
          heading: 0,
          speed: 0,
        },
        timestamp: 0,
      };
      successCallback(position);
    }),
};
