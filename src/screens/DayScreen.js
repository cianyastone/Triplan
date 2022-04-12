import React, {Component} from "react";
import { Box, Input, ScrollView, Text, Flex, Image } from "native-base";
import { View, TouchableOpacity, TextInput } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import DateTimePicker from '@react-native-community/datetimepicker';
import tripData from "../json/trip.json";


const Goal_data = [
  {
    key: "1",
    label: "Group",
    backgroundColor: "#black",
  }
]
  

export default class  DayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Goal_data,
      scrollEnabled: true,
      // chosenDate: new Date(),
    }
    // this.setDate = this.setDate.bind(this);

  }


  onEnableScroll = (value) => {
    this.setState({
      enableScrollViewScroll: value,
    });
  }



  plusdata = (data) => {
    let d = this.state.data;
    const newRecord = {
      key: "2",
      label: "Group",
    };
    this.setState({
      data: [...d, newRecord]
    })
  }
  render() {
  return(
    <Box flex="1" alignSelf="center" bg="#fff" px={25}>
      {/* <View style={{
        justifyContent: "center",
        alignItems: "center",
        
      }}>
        <Image 
        source={require('../../assets/splash.png')}
        style={{
          height: 225,
          width: 330,
        }}
        />
      </View> */}
      <Box h={210} alignItems="center" mb={5}>
          <Box mt={1.5} h={200} w={290}
            borderRadius="25" borderWidth="1.5" borderColor="#1D1D1D"
            bg="#2AB3C0"
          />
          <Flex position="absolute" bg="#fff" w={300} h={200} justifyContent="center"
            borderRadius={30} borderWidth="1.5" borderColor="#1D1D1D"
          >
            <Image position="absolute" alignSelf="center" w="96%" h="93%" borderRadius={25} source={require('../asset/map.png')}/>
            <Box position="absolute" alignSelf="center" w="96%" h="93%" borderRadius={25} borderWidth={1.5} />
          </Flex>
      </Box>
      <ScrollView>
        <View style={{
        flexDirection: "row",
        justifyContent:'center',
       }}>
              <View style={{width:310}}>
              
              <Box flexDir='row'>
                  <Box mr={10} mt={10} height={5} width={5} borderRadius={20} 
                      borderColor={"#1D1D1D"} borderWidth={2} bgColor={"#7EBB94"} />
                <Box flexDir='column' width={61}>
                <DraggableFlatList
                  data={this.state.data}
                  extraData={this.state.data}
                  keyExtractor={(item, index) => `draggable-item-${index}`}
                  //onMoveBegin={() => this.setState({ scrollEnabled: false })}
                  onDragEnd={({ data }) => this.setState({ data: data })}
                  renderItem={({ item, index, drag, isActive }) => {
                    console.log('index', item)
                    return (
                      <TouchableOpacity
                        onLongPress={drag}
                      >
                        
                      {/* backgroundColor: isActive ? "white" : item.backgroundColor, */}
                      <Box mb={5} justifyContent="center" alignItems="center">
                          <Box h={90} w={230} mt={3}
                              borderRadius="30" borderWidth="1.5" borderColor="#1D1D1D"
                              bg="#F9BC75" alignSelf="center"
                          />
                          <Box position='absolute' h={90} w={240} 
                              borderRadius="30" borderWidth="1.5" borderColor="#1D1D1D"
                              bg="#fff"
                          >
                          <Input h={17} size="md" mt={25} ml={30} variant="unstyled">第 {index+1} 個行程</Input>
                          <Input h={17} size="sm" mt={2} ml={30} variant="unstyled">地址</Input>
                          {/* <DateTimePicker
                          mode="time"
                          value={new Date(12,00)}
                          display="inline"
                          textColor="red"
                          placeHolderText="Select time"
                          onChange={this.setDate}
                          /> */}
                          </Box>
                          
                      </Box>
                       
                      </TouchableOpacity>
                    );
                  }}
                /> 
                
                <Box mb={5} justifyContent="center" alignItems="center">
                          <Box h={90} w={230} mt={3}
                              borderRadius="30" borderWidth="1.5" borderColor="#1D1D1D"
                              bg="#F9BC75" alignSelf="center"
                          />
                          <Box position='absolute' h={90} w={240} 
                              borderRadius="30" borderWidth="1.5" borderColor="#1D1D1D"
                              bg="#fff" justifyContent='center'
                >
                <TouchableOpacity style={{marginLeft:30}} onPress={() => this.plusdata(Goal_data)}>
                  <Text>新增行程</Text>
                </TouchableOpacity>
                </Box>
                </Box>
                </Box>
              </Box>
              </View>
              </View>
            </ScrollView>
      
      
    </Box>
  );}
}

// export default DayScreen;