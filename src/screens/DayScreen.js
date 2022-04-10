import React, {useState, useCallback, Component} from "react";
import { FlatList, Box, Input, ScrollView, Text } from "native-base";
import { Linking, View, Image, TouchableOpacity, TextInput } from 'react-native';
import DraggableFlatList, { RenderItemParams, } from 'react-native-draggable-flatlist';
import DateTimePicker from '@react-native-community/datetimepicker';


const Goal_data = [
  {
    key: "1",
    label: "Group",
    backgroundColor: "#white",
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

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onEnableScroll = (value) => {
    this.setState({
      enableScrollViewScroll: value,
    });
  }



  plusdata = (data) => {
    let d = this.state.data;
    const newRecord = {
      key: "3",
      label: "Group",
    };
    this.setState({
      data: [...d, newRecord]
    })
  }
  render() {
  return(
    <View style={{flex: 1, backgroundColor:'white' ,}}>
      <View style={{
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
      </View>
      
      <ScrollView>
        <View style={{
        flexDirection: "row",
        justifyContent:'center',
       }}>
              <View style={{width:300}}>
              
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
      
      
    </View>
  );}
}

// export default DayScreen;
