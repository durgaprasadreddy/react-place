import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import { useSelector, useDispatch } from "react-redux";
import { getPlaceDetail } from "../../redux/actions/map.action";
import { CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { getPlaceLoadingSelector } from "../../redux/selectors/map.selector";

export default function PlaceItem({ item }) {
  const dispatch = useDispatch();
  const placeLoading = useSelector(getPlaceLoadingSelector);

  const onSelectPlace = (place_id) => {
    dispatch(getPlaceDetail(place_id));
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{ cursor: "pointer" }}
      borderBottom={0.5}
      p={1.5}
      onClick={() => onSelectPlace(item.place_id)}
    >
      {placeLoading === item.place_id ? (
        <Stack>
          <CircularProgress size={20} />
        </Stack>
      ) : (
        <RoomIcon color="inherit" />
      )}
      <Typography ml={1} textAlign="left">
        {item.description}
      </Typography>
    </Stack>
  );
}
