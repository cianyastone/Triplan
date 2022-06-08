import React from "react";
import {
  Box,
  Heading,
  VStack,
  Image,
  Pressable,
  FormControl,
  useColorMode,
  Flex,
  Input,
} from "native-base";
import * as ImagePicker from "expo-image-picker";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGeneral,
  readUserAsync,
  updateUserAsync,
  updateUserPhotoAsync,
} from "../redux/accountSlice";
import { readUserPhoto } from "../api/firebase";

const ProfileSettingScreen = () => {
  const dispatch = useDispatch();
  const general = useSelector(selectGeneral);
  const [name, setName] = useState();
  const [country, setCountry] = useState();
  const [style, setStyle] = useState([]);
  const [image, setImage] = useState(null);
  const [imageUrl, setUrl] = useState();

  const { colorMode } = useColorMode();

  const black = "#1D1D1D";
  const blueGreen = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  const onUpdate = () => {
    dispatch(updateUserAsync({ name, style, country, imageUrl }));
    dispatch(updateUserPhotoAsync({ image }));
  };

  useEffect(() => {
    dispatch(readUserAsync());
    getImage().then((thing) => {
      setUrl(thing);
    });
  }, []);

  const getImage = async () => {
    return await readUserPhoto();
  };

  useEffect(() => {
    setName(general.name);
    setCountry(general.country);
    setStyle(general.style);
    setUrl(general.imageUrl);
  }, [general]);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <Box pt={5} _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
      <VStack alignItems="center">
        <Pressable
          marginBottom={57}
          onPress={pickImage}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            alignItems="center"
            justifyContent="center"
            w={102}
            h={102}
            backgroundColor={white}
            borderRadius={21}
            shadow="3"
          >
            <Box
              w={94}
              h={94}
              position="absolute"
              borderRadius={19}
              backgroundColor={orange}
              alignItems="center"
              justifyContent="center"
            >
              <Feather name="user" size={94} color={white} />
            </Box>
            <Image
              position="absolute"
              source={{ uri: imageUrl }}
              borderRadius={19}
              style={{ width: 94, height: 94 }}
              alt=" "
            />
            {image && (
              <Image
                position="absolute"
                source={{ uri: image.uri }}
                borderRadius={19}
                style={{ width: 94, height: 94 }}
                alt="userImage"
              />
            )}
          </Box>
        </Pressable>
        <FormControl mb={19} h={55} alignItems="center">
          <Box
            h={55}
            w={310}
            borderRadius="20"
            borderWidth="1.5"
            _light={{ bg: blueGreen, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={50}
            w={320}
            borderRadius="15"
            borderWidth="1.5"
            _light={{ bg: white, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Flex
            direction="row"
            position="absolute"
            w={300}
            h={50}
            alignItems="center"
          >
            <Feather
              name="user"
              size={25}
              color={colorMode == "light" ? black : darkWhite}
            />
            <Input
              w={275}
              value={name}
              variant="unstyled"
              size="lg"
              autoCapitalize="none"
              onChangeText={(name) => setName(name)}
              placeholder={"暱稱"}
            />
          </Flex>
        </FormControl>
        <Box alignItems="center" mb={19}>
          <Box
            h={55}
            w={310}
            borderRadius="20"
            borderWidth="1.5"
            _light={{ bg: blueGreen, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={50}
            w={320}
            borderRadius="15"
            borderWidth="1.5"
            _light={{ bg: white, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Flex
            position="absolute"
            w={320}
            h={50}
            direction="row"
            alignItems="center"
            px={3}
          >
            <MaterialIcons
              name="flag"
              size={25}
              color={colorMode == "light" ? black : darkWhite}
            />
            <Box w="95%" mt={-60} ml={-1}>
              <Box w="100%" position="absolute">
                <SectionedMultiSelect
                  items={countryItems}
                  single={true}
                  IconRenderer={MaterialIcons}
                  uniqueKey="name"
                  selectText="國家"
                  showDropDowns={false}
                  readOnlyHeadings={false}
                  onSelectedItemsChange={(selectedItems) => {
                    setCountry(selectedItems);
                  }}
                  colors={{ primary: blueGreen }}
                  selectedItems={country}
                  hideSearch={true}
                  showChips={false}
                  styles={{
                    itemText: {
                      padding: 5,
                    },
                    item: {
                      padding: 10,
                    },
                    listContainer: {
                      paddingHorizontal: 20,
                    },
                    selectedItem: {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                    modalWrapper: {
                      paddingHorizontal: 20,
                      paddingVertical: 150,
                    },
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
        <Box alignItems="center" mb={47}>
          <Box
            h={55}
            w={310}
            borderRadius="20"
            borderWidth="1.5"
            _light={{ bg: blueGreen, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={50}
            w={320}
            borderRadius="15"
            borderWidth="1.5"
            _light={{ bg: white, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Flex
            position="absolute"
            w={320}
            h={50}
            direction="row"
            alignItems="center"
            px={3}
          >
            <Feather
              name="heart"
              size={25}
              color={colorMode == "light" ? black : darkWhite}
            />
            <Box w="95%" mt={-60} ml={-1}>
              <Box w="100%" position="absolute">
                <SectionedMultiSelect
                  items={items}
                  IconRenderer={MaterialIcons}
                  uniqueKey="name"
                  selectText="旅行風格"
                  showDropDowns={false}
                  readOnlyHeadings={false}
                  onSelectedItemsChange={(selectedItems) => {
                    setStyle(selectedItems);
                  }}
                  colors={{ primary: blueGreen }}
                  selectedItems={style}
                  hideSearch={true}
                  showChips={false}
                  styles={{
                    itemText: {
                      padding: 5,
                    },
                    item: {
                      padding: 10,
                    },
                    listContainer: {
                      paddingHorizontal: 20,
                    },
                    selectedItem: {
                      backgroundColor: "rgba(0,0,0,0.1)",
                    },
                    modalWrapper: {
                      paddingHorizontal: 20,
                      paddingVertical: 150,
                    },
                  }}
                />
              </Box>
            </Box>
          </Flex>
        </Box>

        <Pressable alignItems="center" onPress={onUpdate}>
          <Box
            h={55}
            w={238}
            borderRadius="20"
            borderWidth="1.5"
            _light={{ bg: blueGreen, borderColor: black }}
            _dark={{ bg: darkBlack, borderColor: white }}
          />
          <Box
            position="absolute"
            h={50}
            w={245}
            borderRadius="15"
            borderWidth="1.5"
            _light={{ borderColor: black }}
            _dark={{ borderColor: white }}
            bg={orange}
          />
          <Heading
            position="absolute"
            mt={15}
            _light={{ color: white }}
            _dark={{ color: black }}
            fontSize="md"
          >
            儲存
          </Heading>
        </Pressable>
      </VStack>
    </Box>
  );
};

const items = [
  { name: "文化" },
  { name: "學習" },
  { name: "冒險" },
  { name: "藝術" },
  { name: "自然" },
  { name: "建築" },
  { name: "奢華" },
  { name: "音樂" },
];

const countryItems = [
  { name: "台灣" },
  { name: "日本" },
  { name: "韓國" },
  { name: "美國" },
  { name: "英國" },
];

export default ProfileSettingScreen;
