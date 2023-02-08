import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import {  getPlacesAction } from "../../redux/actions/map.action";
import { Input } from "@mui/material";
import PlaceSearchResults from "./placesSearchResults";
import { Stack } from "@mui/system";

export default function PlaceSearch({searchQuery, setSearchQuery}) {

  const dispatch = useDispatch();
 
  const searchRef = useRef();

  useEffect(() => {
    if (searchQuery) {
      clearTimeout(searchRef.current);
      searchRef.current = setTimeout(() => {
        dispatch(getPlacesAction(searchQuery));
      }, 700);
    }
  }, [searchQuery]);

  const handleTextChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
      <Stack
        direction="row"
        justifyContent="center"
        position="absolute"
        sx={{
          top: 30,
          width: "100%",
        }}
      >
        <Stack sx={{ width: 500 }}>
          <Input
            value={searchQuery}
            onChange={handleTextChange}
            placeholder="Search Place"
            sx={{
              width: 500,
              backgroundColor: "white",
              padding: 1,
              borderRadius: 1,
            }}
          />
          {searchQuery ? (
            <PlaceSearchResults />
          ) : null}
        </Stack>
    </Stack>
  );
}
