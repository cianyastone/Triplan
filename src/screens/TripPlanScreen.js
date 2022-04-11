import React , { useState, Component } from "react";
import { Box, Input, ScrollView, Text } from "native-base";
import { View, Image, TouchableOpacity  } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import DayScreen from "./DayScreen";
import DatePicker from 'react-native-date-picker'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabView, SceneMap } from 'react-native-tab-view';
import { createStackNavigator } from '@react-navigation/stack';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const Goal_data = [
  {
    key: "1",
    label: "Tab",
    backgroundColor: "#black",
  }
]
const Goal_data1 = [
  {
    key: "1",
    label: "Group",
    backgroundColor: "#black",
  }
]

export default class  TripPlanScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Goal_data,
      data1: Goal_data1,
      scrollEnabled: true,
      viewSection :true,
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

  renderBottomComponent(){
    if(this.state.viewSection) {
        return (
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
                      data={this.state.data1}
                      extraData={this.state.data1}
                      keyExtractor={(item, index) => `draggable-item-${index}`}
                      //onMoveBegin={() => this.setState({ scrollEnabled: false })}
                      onDragEnd={({ data1 }) => this.setState({ data: data1 })}
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
                    <TouchableOpacity style={{marginLeft:30}} onPress={() => this.plusdata1(Goal_data1)}>
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
        )
    }
}

buttonPress=()=>{
  this.setState({viewSection:true})
}

  plusdata = (data) => {
    let d = this.state.data;
    const newRecord = {
      key: "2",
      label: "Tab",
    };
    this.setState({
      data: [...d, newRecord]
    })
  }

  plusdata1 = (data1) => {
    let h = this.state.data1;
    const newRecord1 = {
      key: "2",
      label: "Group",
    };
    this.setState({
      data1: [...h, newRecord1]
    })
  }
  // const [routes] = React.useState([
  //   { key: 'first', title: 'First' },
  //   { key: 'second', title: 'Second' },
  //   { key: 'second', title: 'Second' },
  // ]);

  // const [date, setDate] = useState(new Date())
  // const [open, setOpen] = useState(false)
  render(){
  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
      {/* <View 
      style={{
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 20,
        height: 75,
      }}
      >
        <Text style={{fontSize:14}}>時間：</Text>
        <Button 
        title="請選時間" 
        onPress={() => setOpen(true)} 
        style={{
          height:14,
          justifyContent: "flex-start"
        }}
        />
        <DatePicker
          modal
          open={open}
          date={date}
          onConfirm={(date) => {
            setOpen(false)
            setDate(date)
          }}
          onCancel={() => {
            setOpen(false)
          }}
        />
      </View> */}
      <View>
      <ScrollView>
        <View style={{
        flexDirection: "row",
        justifyContent:'flex-start',
        marginTop: 11,
        marginLeft: 40,
        marginRight:40,
        height: 100
       }}>
              <Box justifyContent='center'>
                <Box flexDir='row' alignItems="flex-end" >
                <DraggableFlatList
                  data={this.state.data}
                  extraData={this.state.data}
                  horizontal={true}
                  keyExtractor={(item, index) => `draggable-item-${index}`}
                  //onMoveBegin={() => this.setState({ scrollEnabled: false })}
                  onDragEnd={({ data }) => this.setState({ data: data })}
                  renderItem={({ item, index, drag, isActive }) => {
                    console.log('index', item)
                    return (
                      <TouchableOpacity
                        onLongPress={drag}
                        onPress={this.buttonPress}
                      >
                        
                      {/* backgroundColor: isActive ? "white" : item.backgroundColor, */}
                      <Box mb={5} justifyContent="flex-end" alignItems='center'>
                          <Box h={70} w={100} 
                              bg="#fff" justifyContent="center" alignItems="center"
                          >
                            <Text mt={3} mb={10}>第{index+1}天</Text>
                          {/* <DateTimePicker
                          mode="time"
                          value={new Date(12,00)}
                          display="inline"
                          textColor="red"
                          placeHolderText="Select time"
                          onChange={this.setDate}
                          /> */}
                            <Box h={1} w={80} bg="#F9BC75" alignSelf='flex-end' />
                          </Box>
                          
                      </Box>
                       
                      </TouchableOpacity>
                    );
                  }}
                /> 
                
                <Box mb={5} justifyContent="center" alignItems="center">
                <TouchableOpacity style={{marginLeft:30, marginBottom:5 }} onPress={() => this.plusdata(Goal_data)}>
                  <Text fontSize={40}>+</Text>
                </TouchableOpacity>
                </Box>
                </Box>
              </Box>
              </View>
            </ScrollView>
            </View>
            {this.renderBottomComponent()}
    </View>
  );}
};

// export default TripPlanScreen;
