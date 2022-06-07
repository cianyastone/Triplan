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
  Text,
  Select,
} from "native-base";
import { TouchableOpacity, Modal, TouchableHighlight, View } from 'react-native';
import moment, { now } from "moment"
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import Feather from "react-native-vector-icons/Feather";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  uploadTripAsync,
  readTripAsync
} from "../redux/TripSlice";


const AddTripScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const general = useSelector(selectData);
  const [name, setName] = useState();
  const [days, setDays] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setUrl] = useState();

  //Date
  const [date, setDate] = useState(moment());
  const [show, setShow] = useState(false);

  //Color
  const { colorMode } = useColorMode();
  const black = "#1D1D1D";
  const blueGreen = "#2AB3C0";
  const orange = "#F9BC75";
  const white = "#fff";
  const green = "#7EBB94";
  const darkBlack = "#262626";
  const darkWhite = "#E4E4E4";

  //Trip Detail
  const onUpdate = () => {
    dispatch(uploadTripAsync({ name, days, date, image }));;
  };

  useEffect(() => {
    dispatch(readTripAsync());
  }, []);

  useEffect(() => {
    setName(general.name);
    setDays(general.days);
    setUrl(general.imageUrl);
  }, [general]);

  //Image
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
  

  //Date Picker
  const onChange = (event, selectedDate) => {
    setDate(selectedDate);
  };
  const onCancelPress = () =>{
      setDate(moment());
      setShow(false);
      console.log('Cancel');
  }
  const onDonePress = () =>{
      setShow(false);
      console.log('Done');
  }

  return (
    <Box pt={10} _light={{ bg: white }} _dark={{ bg: darkBlack }} flex={1}>
      <VStack alignItems="center">
        <Pressable
          marginBottom={57}
          onPress={pickImage}
          alignItems="center"
          justifyContent="center"
        >
          <Box
            w={102}
            h={102}
            backgroundColor={white}
            borderRadius={21}
            shadow="3"
          />
          <Box
            w={94}
            h={94}
            position="absolute"
            borderRadius={19}
            backgroundColor={orange}
            alignItems="center"
            justifyContent="center"
          >
            <Feather name="image" size={94} color={white} />
          </Box>
          <Image
            position="absolute"
            source={{ uri: imageUrl }}
            borderRadius={19}
            style={{ width: 94, height: 94 }}
            alt="userImage"
          />
          <Text 
            position="absolute">
            選擇照片
            </Text>
          {image && (
            <Image
              position="absolute"
              source={{ uri: image.uri }}
              borderRadius={19}
              style={{ width: 94, height: 94 }}
              alt="userImage"
            />
          )}
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
            <Text ml={22}>
                行程名稱
            </Text>
            <Input
              w={275}
              ml={2}
              value={name}
              variant="unstyled"
              size="md"
              autoCapitalize="none"
              onChangeText={(name) => setName(name)}
              placeholder={"請輸入行程名稱"}
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
            <Text ml={22}>
                開始日期
            </Text>
            <TouchableHighlight
                underlayColor={white}
                activeOpacity={0} 
                onPress={() => setShow(true)}>
                <View>
                <Text ml={4}>{moment(date).format('YYYY / MM / DD')}</Text>
                <Modal
                    transparent={true}
                    animationType="slide"
                    visible={show}
                    supportedOrientations={['portrait']}
                    onRequestClose={()=>setShow(false)}>
                        <Box flex={1}>
                            <TouchableHighlight
                                style={{
                                    flex: 1,
                                    alignItems:'flex-end',
                                    flexDirection: 'row',
                                }}
                                underlayColor={white}
                                activeOpacity={1}
                                visible={show}
                                onPress={() => setShow(false)}>
                                    <TouchableHighlight
                                        underlayColor={white}
                                        style={{
                                            flex: 1,
                                            borderTopColor: black,
                                            borderTopWidth: 1
                                        }}>
                                        <View  style={{
                                            backgroundColor: white,
                                            height: 276,
                                            overflow: 'hidden',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}>
                                            <Box 
                                                flexDirection= "row"
                                                justifyContent="space-between"
                                                paddingX={8}
                                                >
                                            <TouchableHighlight
                                                underlayColor={'transparent'}
                                                onPress={onCancelPress}
                                                style={{
                                                    position:'relative',
                                                    flexDirection:"row",
                                                    alignItems:"center",
                                                    height: 36,
                                                    justifyContent: "center",
                                                    }}>
                                                <Text>
                                                    取消
                                                </Text>
                                            </TouchableHighlight>
                                            <TouchableHighlight
                                                underlayColor={'transparent'}
                                                onPress={onDonePress}
                                                style={{
                                                    position:'relative',
                                                    flexDirection:"row",
                                                    alignItems:"center",
                                                    height: 36,
                                                    justifyContent: "center",
                                                    }}>
                                                <Text 
                                                    >
                                                    完成
                                                </Text>
                                            </TouchableHighlight>
                                            </Box>
                                            <View>
                                                <DateTimePicker
                                                    timeZoneOffsetInMinutes={0}
                                                    value={new Date(date)}
                                                    mode="date"
                                                    onChange={onChange}
                                                    display='spinner'
                                                />
                                            </View>
                                        </View>
                                    </TouchableHighlight>
                            </TouchableHighlight>
                        </Box>
                </Modal>
                </View>
            </TouchableHighlight>
                
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
            <Text ml={22}>
                行程天數
            </Text>
            <Select 
                selectedValue={days} 
                accessibilityLabel="Select Days"
                w={16}
                h={30}
                ml={2}
                _selectedItem={{
                    endIcon: <Feather name="chevron-down" size="5" />
                    }} 
                onValueChange={itemValue => setDays(itemValue)}>
                <Select.Item label="1" value="1" />
                <Select.Item label="2" value="2" />
                <Select.Item label="3" value="3" />
                <Select.Item label="4" value="4" />
                <Select.Item label="5" value="5" />
            </Select>
          </Flex>
        </Box>

        <Pressable alignItems="center" onPress={() => {
              navigation.navigate("TripPlanScreenDay1",{
                  name: name,
                  days: days,
                  date: date,
                  image: image,
                  imageUrl: imageUrl,
              });
            }}>
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
            下一步
          </Heading>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default AddTripScreen;
