/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './src/styles';
import Header from './src/components/Header';
import Acitvity from './src/components/Activity';

export default class App extends Component {
    state = {
        radioStationList: [],
        isLoading: true,
        radioStationActive: false,
        selectedRadioStation: null
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        try {
            const radioStationData = await fetch('http://www.radio-browser.info/webservice/json/stations/bycodec/mp3?limit=1000');
            const responseRadioStationList = await radioStationData.json();
            this.setState({
                radioStationList: responseRadioStationList,
                isLoading: false
            });
        } catch (error) {
            console.error(error);
        }
    }

    handleRadioStation = (item) => {
        const { radioStationList, selectedRadioStation } = this.state;
        const filteredRadioStation = radioStationList.filter(radioStation => radioStation === item);
        this.setState({
            selectedRadioStation: filteredRadioStation,
            radioStationActive: true
        });
    }

    render() {
        const { radioStationList, isLoading, radioStationActive, selectedRadioStation } = this.state;
        console.log(selectedRadioStation);
        return (
            <View style={styles.main}>
                <Header />
                {!isLoading ? (
                    <FlatList
                        data={radioStationList}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View>
                                <TouchableOpacity onPress={() => this.handleRadioStation(item)}>
                                    <View style={styles.radioStationList}>
                                        <Text style={styles.radioStationName} numberOfLines={1}>
                                            {item.name}
                                            {' '}
FM
                                        </Text>
                                        <Text style={styles.radioStationFrequency} numberOfLines={1}>

                                            {item.votes}
,
                                            {' '}
                                            {item.votes[0]}
                                        </Text>
                                    </View>
                                    {radioStationActive && (
                                        <View style={styles.radioStationDetails}>
                                            <TouchableOpacity>
                                                <Image
                                                    style={{ width: 35, height: 35 }}
                                                    source={require('./src/assets/minus.png')}
                                                />
                                            </TouchableOpacity>
                                            {item.favicon === '' ? (
                                                <Image
                                                    style={styles.radioStationLogo}
                                                    source={require('./src/assets/radioFallBackImage.jpg')}
                                                />
                                            ) : (
                                                <Image
                                                    style={styles.radioStationLogo}
                                                    source={{ uri: `${item.favicon}` }}
                                                />
                                            )}
                                            <TouchableOpacity>
                                                <Image
                                                    style={{ width: 35, height: 35 }}
                                                    source={require('./src/assets/plus.png')}
                                                />
                                            </TouchableOpacity>
                                        </View>
                                    ) }
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                ) : (
                    <Acitvity />
                )}
            </View>
        );
    }
}
