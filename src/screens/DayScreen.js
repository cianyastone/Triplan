import React from "react";
import { ScrollView, Linking, View, Image } from 'react-native';
import { Button, Card, Text, PricingCard, Tile } from 'react-native-elements';

const DayScreen = () => {
  return(
    <View style={{flex: 1}}>
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
      <View style={{
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Card
        containerStyle={{
          borderRadius: 20,
          height: 80,
          width: 330,
          // justifyContent: "center",
        }}
      >
        <View
        style={{
          marginLeft: 25,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}>
          <View style={{
            flexDirection: "column",
            alignItems: "center",}}
          >
            <Text style={{fontSize:12}}>時間</Text>
            <View style={{
              borderColor: 'black',
              borderBottomWidth: 15,
              width: 1,
              }} 
            />
            <Text style={{fontSize:12}}>時間</Text>
          </View>
          <View style={{
            justifyContent: "center",
            marginLeft:25,}}>
            <View style={{
              height: 18,
              width: 18,
              borderRadius: 9,
              backgroundColor: "gray"
              }} />
          </View>
          <View style={{
            flexDirection: "column",
            justifyContent: "center",
            marginLeft:25,}}>
            <Text style={{fontSize:14}}>第一個行程</Text>
            <Text style={{fontSize:12,marginTop:5,}}>地址</Text>
          </View>
        </View>
        
      </Card>
      
      </View>
    </View>
  );
}

export default DayScreen;
