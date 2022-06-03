import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Feather from "react-native-vector-icons/Feather";

import {
  ScrollView,
  Text,
  Heading,
  Box,
  Image,
  Flex,
  Pressable,
  useColorMode,
} from "native-base";
import tripData from "../json/trip.json";
import moment from "moment";
import UnfinishedTripList from "./UnfinishedTripList";
import FinishedTripList from "./FinishedTripList";
import ActionButton from "./ActionButtonTop";
import SafeAreaView from "react-native-safe-area-view";
import { selectGeneral, readUserAsync } from "../redux/accountSlice";

const CollectTrips = ({ navigation }) => {
  const general = useSelector(selectGeneral);

  const dispatch = useDispatch();

  const { colorMode } = useColorMode();
  const black = "#1D1D1D";
  const blue = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";
  

  useEffect(() => {
    dispatch(readUserAsync());
  }, []);

  return (
    <Box>

    </Box>
  );
};

export default CollectTrips;
