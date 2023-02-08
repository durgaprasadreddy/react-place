import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import PlaceSearch from "./placesSearch";
import { getPlaceSelector } from "../../redux/selectors/map.selector";
import Marker from "./marker";
import { Stack } from "@mui/system";
import { Environment } from "../../config";

export default function HomePage() {
  const [center, setCenter] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });
  const [api, setApi] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const place = useSelector(getPlaceSelector) || {};

  useEffect(() => {
    if(place?.geometry?.location) {
      focusOnPlace(place?.geometry?.location || {});
    }
  }, [place.geometry]);

  const handleApiLoad = (map, maps) => {
    setApi({ map, maps });
  };

  const focusOnPlace = (coordinates) => {
    setCenter(coordinates);
    api?.map?.panTo(coordinates);
    setSearchQuery("");
  }

  return (
    <Stack sx={{ height: "100vh" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: Environment.GOOGLE_MAP_API_KEY }}
        defaultCenter={center}
        defaultZoom={11}
        onGoogleApiLoaded={({ map, maps }) => handleApiLoad(map, maps)}
      >
        <Marker {...center} />
      </GoogleMapReact>
      <PlaceSearch searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
    </Stack>
  );
}
