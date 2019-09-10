/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, FlatList, TouchableOpacity } from 'react-native';
import styles from './src/styles';
import Header from './src/components/Header';

export default class App extends Component {
    state = {
        radioStationList: [],
        isLoading: true,
        radioStationActive: false
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        try {
            const radioStationData = await fetch('http://www.radio-browser.info/webservice/json/stations/bycodec/mp3?limit=20');
            const responseRadioStationList = await radioStationData.json();
            this.setState({
                radioStationList: responseRadioStationList,
                isLoading: false
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleRadioStation = () => {

    }

    render() {
        const { radioStationList, isLoading } = this.state;
        return (
            <View style={styles.main}>
                <Header />
                {!isLoading ? (
                    <FlatList
                        data={radioStationList}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View>
                                {console.log(item)}
                                <TouchableOpacity>
                                    <Text style={styles.radioStationName}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    null
                )}

            </View>
        );
    }
}
