const _Environments = {
  production: {
    GOOGLE_PLACE_API_BASE_URL: 'https://maps.googleapis.com/maps/api/place',
    GOOGLE_PLACE_API_KEY: process.env.REACT_APP_GOOGLE_PLACE_API_KEY,
    GOOGLE_MAP_API_KEY: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  },
  development: {
    GOOGLE_PLACE_API_BASE_URL: 'https://maps.googleapis.com/maps/api/place',
    GOOGLE_MAP_API_KEY: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  },
};

const getEnvironment = () => {
  const platform = getEnv();
  return _Environments[platform];
};

const getEnv = () => {
    return process.env.NODE_ENV;
};

export const Environment = getEnvironment();
