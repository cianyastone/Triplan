import { useState } from "react";
import { Button, FormControl, Heading, VStack, Input } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import { uploadTripAsync, readTripAsync, selectData } from "../redux/TripSlice";

const TestUpload = () => {
  const datas = useSelector(selectData);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [days, setDays] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();

  const black = "#1D1D1D";

  const upload = () => {
    dispatch(uploadTripAsync({ name, days, date, image }));
  };

  const read = () => {
    dispatch(readTripAsync());
    console.log(datas);
    // console.log(Object.keys(datas).length);
  };

  return (
    <VStack alignItems="center" mb={20}>
      <FormControl mb={1} alignItems="center">
        <Input
          w={275}
          autoCapitalize="none"
          onChangeText={(name) => setName(name)}
          placeholder={"Name"}
        />
      </FormControl>
      <FormControl mb={1} alignItems="center">
        <Input
          w={275}
          autoCapitalize="none"
          onChangeText={(days) => setDays(days)}
          placeholder={"Days"}
        />
      </FormControl>
      <FormControl mb={1} alignItems="center">
        <Input
          w={275}
          autoCapitalize="none"
          onChangeText={(text) => setDate(text)}
          placeholder={"date"}
        />
      </FormControl>
      <FormControl mb={1} alignItems="center">
        <Input
          w={275}
          autoCapitalize="none"
          onChangeText={(text) => setImage(text)}
          placeholder={"image"}
        />
      </FormControl>
      <Button mb={1} onPress={upload}>
        <Heading color={black} fontSize="md">
          上傳
        </Heading>
      </Button>
      <Button onPress={read}>
        <Heading color={black} fontSize="md">
          讀取
        </Heading>
      </Button>
    </VStack>
  );
};

export default TestUpload;
