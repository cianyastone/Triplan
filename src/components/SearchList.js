import React, { Component } from "react";
import { FlatList, Box, Input, Text } from "native-base";
import SearchTrip from "./SearchTrip";
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
            newData = this.tripData;
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
            <Box>
                <Box width="80%" alignSelf="center" my={4}>
                    <Input
                        placeholder="在這裡搜尋"
                        onChangeText={text => this.searchItems(text)}
                        variant="rounded"
                    />
                </Box>
                <FlatList
                    data={this.state.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    mb={1}
                />
            </Box>
        );
    }
}

export default SearchFunction;