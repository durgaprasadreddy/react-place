import React from "react";
import { useSelector } from "react-redux";
import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getPlacesLoadingSelector, getPlacesSelector } from "../../redux/selectors/map.selector";
import PlaceItem from "./placeItem";

export default function PlaceSearchResults(props) {
  const places = useSelector(getPlacesSelector)
  const placesLoading = useSelector(getPlacesLoadingSelector);

  return (
    <Stack
      sx={{ backgroundColor: "white", width: 500, borderRadius: 1 }}
      m="auto"
    >
      {placesLoading ? (
        <Stack py={4} direction="row" justifyContent="center">
          <CircularProgress />
        </Stack>
      ) : places.length ? (
        places.map((p) => <PlaceItem key={p.place_id} item={p} {...props} />)
      ) : (
        <Stack py={4}>
          <Typography>Search Result Didn't Found</Typography>
        </Stack>
      )}
    </Stack>
  );
}
