import React, {useState, useCallback, Component} from "react";
import { ScrollView, Linking, View, Image, TouchableOpacity } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';
import DraggableFlatList, { RenderItemParams, } from 'react-native-draggable-flatlist';

const Goal_data = [
  {
    key: "0",
    label: "Group",
    backgroundColor: "#ababab",
  },
  {
    key: "1",
    label: "Group",
    backgroundColor: "#ababab",
  }
]
  

export default class  DayScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: Goal_data,
      scrollEnabled: true
    }

  }
  onEnableScroll = (value) => {
    this.setState({
      enableScrollViewScroll: value,
    });
  }


  renderItem1 = ({ item, index, drag, isActive }) => {

    console.log('index', item)
    return (
      <TouchableOpacity
        style={{
          height: 70,
          backgroundColor: isActive ? "blue" : item.backgroundColor,
          alignItems: "center",
          justifyContent: "center"
        }}
        onLongPress={drag}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "white",
            fontSize: 20
          }}
        >
          {item.label}
        </Text>
      </TouchableOpacity>
    );
  };



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
    <View style={{flex: 1, backgroundColor:'white'}}>
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
      {/* <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}> */}
      <ScrollView>
              <View>

              
              <View style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 30 }}>
                
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
                        style={{
                          backgroundColor: isActive ? "gray" : item.backgroundColor,
                          //alignItems: "center",
                          justifyContent: "center",
                          marginVertical: 20

                        }}
                        onLongPress={drag}
                      >
                        <View style={{ backgroundColor: 'white', borderColor: '#000', borderWidth: 1, paddingHorizontal: 30 }}>
                          <Text>{item.label}{index}</Text>
                    

                          
                        </View>
                       
                      </TouchableOpacity>
                    );
                  }}
                /> 
                <TouchableOpacity style={{ marginTop: 50, alignSelf: 'center' }} onPress={() => this.plusdata(Goal_data)}>
                  <Text>Add</Text>
                </TouchableOpacity>
              </View>
              </View>
            </ScrollView>
      
      {/* </View> */}
    </View>
  );}
}

// export default DayScreen;
