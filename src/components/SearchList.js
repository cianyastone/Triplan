import React, { Component } from "react";
import { FlatList, Box, Input, ScrollView, Text } from "native-base";
import SearchTrip from "./NewTrip";
import tripData from '../json/trip.json';

class SearchFunction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            value: '',
        };
        
        this.tripData = tripData.TripList;
        this.state.data = this.tripData;
    }

    renderSeparator = () => {
        return (
            <Box
            style={{
                height: 1,
                width: '100%',
                backgroundColor: '#CED0CE',
            }}
            />
        );
    };

    searchItems = text => {
        let newData = this.tripData.filter(item => {
            const itemData = `${item.title.toUpperCase()}`;
            const textData = text.toUpperCase();
        if(text.length >0 ){
            return itemData.indexOf(textData) > -1;
        }else{
            return this.tripData;
        }
        });
        this.setState({
            data: newData,
            value: text,
        });
    };

    render() {
        const renderItem = ({ item }) => <SearchTrip trip={item}/>;
        return (
            <Box flex={1}>
                <Box my={5} justifyContent="center" alignItems="center">
                    <Box h={50} w={300} mt={3}
                        borderRadius="20" borderWidth="1.5" borderColor="#1D1D1D"
                        bg="#F9BC75" alignSelf="center"
                    />
                    <Box position='absolute' h={50} w={320} 
                        borderRadius="30" borderWidth="1.5" borderColor="#1D1D1D"
                        bg="#fff"
                    />
                    <Input position='absolute' w={300} onChangeText={text => this.searchItems(text)} placeholder="在這裡搜尋" variant="unstyled"/>
                </Box>
                <ScrollView>
                    <FlatList
                        numColumns={2}
                        data={this.state.data}
                        renderItem={renderItem}
                        keyExtractor={item => item.title}
                        mb={1}
                        columnWrapperStyle={{ justifyContent: 'space-between'}}
                    />
                </ScrollView>
            </Box>
        );
    }
}

export default SearchFunction;