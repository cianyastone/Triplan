import React, { useState, useEffect } from 'react';
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableHighlight, Modal } from 'react-native';
import { Box, useColorMode, Flex, Pressable, Text, Image } from "native-base";
import SafeAreaView from "react-native-safe-area-view";
import * as Location from 'expo-location';
import * as Device from "expo-device";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Key } from '../../Key'

const black="#1D1D1D";
const blueGreen="#2AB3C0";
const blue = "#A8DEE0";
const orange="#F9BC75";
const white="#fff";
const green="#7EBB94";
const darkBlack="#262626";
const darkWhite="#E4E4E4";


export default function MapScreen({ navigation: { goBack } }) {
    const { colorMode } = useColorMode();
    const [onCurrentLocation, setOnCurrentLocation] = useState(false);
    const [showDetail, setShowDetail] = useState(false);

    const [region, setRegion] = useState({
        longitude: 121.544637,
        latitude: 25.024624,
        longitudeDelta: 0.01,
        latitudeDelta: 0.02,
    })

    const [marker, setMarker] = useState({
      coord: {
        longitude: 121.544637,
        latitude: 25.024624,
      },
      name: "國立臺北教育大學",
      address: "台北市和平東路二段134號",
      centerOffset: {
        x: 0,
        y: 0,
      },
    });
    
    const onRegionChangeComplete = (rgn) => {
        if (
          Math.abs(rgn.latitude - region.latitude) > 0.0002 ||
          Math.abs(rgn.longitude - region.longitude) > 0.0002
        ) {
          setRegion(rgn);
          setOnCurrentLocation(false);
        }
    };

    const setRegionAndMarker = (location) => {
        setRegion({
          ...region,
          longitude: location.coords.longitude,
          latitude: location.coords.latitude,
        });
        setMarker({
          ...marker,
          coord: {
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
          },
        });
    };
    
    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setMsg('Permission to access location was denied');
          return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setRegionAndMarker(location);
        setOnCurrentLocation(true);
    }

    const DetailShown = () => {
        setShowDetail(true);
    }

    return (
        <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: colorMode == "light" ? white : darkBlack,
        }}
        >
        <MapView 
            style={styles.map}
            region={region}
            provider="google"
            onRegionChangeComplete={onRegionChangeComplete}>
            <Marker 
                coordinate={marker.coord} 
                pinColor={blueGreen}
                title={marker.name}
                description={marker.address}>
            </Marker>
            </MapView>
            {!onCurrentLocation && (
                <Box 
                bg="white"
                borderRadius={60}
                position="absolute"
                shadow="2"
                zIndex={99}
                right={5}
                bottom={5}
                >
                <Ionicons name={"ios-locate"}
                    size={60}
                    color="black"
                    onPress={getLocation}
                />
                </Box>
            )}
        <Box position='absolute'>
            <Box
                flexDirection= "row"
                marginTop={60}
                pl={6}
                alignItems='center'>
                <Pressable
                    onPress={() => goBack()}
                    alignSelf="center">
                    <Box
                        size={38}
                        bg="#F9BC75"
                        justifyContent="center"
                        alignItems="center"
                        borderRadius={15}
                        borderWidth={2}
                        _light={{ borderColor: darkBlack }}
                        _dark={{ borderColor: white }}
                    >
                        <Image
                        alt={"back"}
                        size={28}
                        source={require("../asset/back.png")}
                        />
                    </Box>
                </Pressable>
                <Box ml={8}>
                    <Box
                        h={55}
                        w={270}
                        borderRadius="20"
                        borderWidth="1.5"
                        alignSelf="center"
                        _light={{ bg: orange, borderColor: black }}
                        _dark={{ bg: darkBlack, borderColor: white }}
                    />
                    <Box
                        position="absolute"
                        h={50}
                        w={280}
                        borderRadius="30"
                        borderWidth="1.5"
                        alignSelf="center"
                        _light={{ bg: white, borderColor: black }}
                        _dark={{ bg: darkBlack, borderColor: white }}
                    />
                    
                    <GooglePlacesAutocomplete
                        styles={{
                            backgroundColor: black,
                            borderColor: black,
                            container:{ 
                                padding: 3,
                                flex: 0, 
                                position: "absolute", 
                                width:250, 
                                alignSelf: "center", 
                                borderColor: black,
                            },
                            listView:{
                                position: 'relative',
                                backgroundColor: white,
                            }}}
                        fetchDetails={true}
                        GooglePlacesSearchQuery={{
                            rankby: 'distance',
                        }}
                        placeholder='在這裡搜尋'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                            setRegion({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                longitudeDelta: 0.01,
                                latitudeDelta: 0.02,
                            });
                            setMarker({
                                ...marker,
                                coord: {
                                    latitude: details.geometry.location.lat,
                                    longitude: details.geometry.location.lng,
                                },
                                name: details.name,
                                address: details.formatted_address,
                                centerOffset: {
                                    x: 0,
                                    y: 4,
                                  },
                              });
                            DetailShown();
                        }}
                        query={{
                            key: Key,
                            language: 'zh-TW',
                            types: 'establishment',
                            location: `${region.latitude}, ${region.longitude}`,
                        }}
                    />
                </Box>
            </Box>
            </Box>
            {showDetail &&(
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={showDetail}
                    supportedOrientations={['portrait']}
                    onRequestClose={()=>setShowDetail(false)}>
                <Box flex={1}>
                <TouchableHighlight
                    style={{
                        flex: 1,
                        position: 'relative',
                        alignItems:'flex-end',
                        flexDirection: 'row',
                    }}
                    underlayColor={white}
                    activeOpacity={1}
                    visible={showDetail}
                    onPress={() => setShowDetail(false)}>
                        <TouchableHighlight
                            underlayColor={white}
                            style={{
                                flex: 1,
                                borderColor: black,
                                borderWidth: 1,
                                marginBottom: 0,
                            }}>
                            <View  style={{
                                backgroundColor: white,
                                height: 400,
                                borderColor:  black,
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                                <View>
                                    
                                </View>
                            </View>
                        </TouchableHighlight>
                </TouchableHighlight>
            </Box>
            </Modal>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});