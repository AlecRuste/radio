import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Video from 'react-native-video';
import styles from './src/styles';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
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
            const radioStationData = await fetch('http://www.radio-browser.info/webservice/json/stations/bycountryexact/lithuania');
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
        const { radioStationList, radioStationActive, selectedRadioStation } = this.state;
        const filteredRadioStation = radioStationList.filter(radioStation => radioStation === item);
        if (radioStationActive && filteredRadioStation[0].id === selectedRadioStation[0].id) {
            this.setState({
                radioStationActive: false
            });
        } else {
            this.setState({
                radioStationActive: true,
                selectedRadioStation: filteredRadioStation
            });
        }
    }

    render() {
        const { radioStationList, isLoading, radioStationActive, selectedRadioStation } = this.state;
        return (
            <View style={styles.main}>
                <Header />
                {!isLoading ? (
                    <ScrollView style={[radioStationActive ? styles.radioStationList : null]}>
                        {radioStationList.map(radioStation => (
                            <View key={radioStation.id}>
                                <TouchableOpacity onPress={() => this.handleRadioStation(radioStation)}>
                                    <View style={styles.radioStationListItem}>
                                        <Text style={styles.radioStationName} numberOfLines={1}>
                                            {radioStation.name}
                                        </Text>
                                        <Text style={styles.radioStationFrequency} numberOfLines={1}>
                                            {radioStation.votes}
,
                                            {' '}
                                            {radioStation.votes[0]}
                                        </Text>
                                    </View>
                                    <View style={styles.seperator} />
                                </TouchableOpacity>
                                {radioStationActive && radioStation.id === selectedRadioStation[0].id ? (
                                    <View style={styles.radioStationDetails}>
                                        <TouchableOpacity>
                                            <Image
                                                style={{ width: 35, height: 35 }}
                                                source={require('./src/assets/minus.png')}
                                            />
                                        </TouchableOpacity>
                                        {radioStation.favicon === '' ? (
                                            <Image
                                                style={styles.radioStationLogo}
                                                source={require('./src/assets/radioFallBackImage.jpg')}
                                            />
                                        ) : (
                                            <Image
                                                style={styles.radioStationLogo}
                                                source={{ uri: `${radioStation.favicon}` }}
                                            />
                                        )}
                                        <TouchableOpacity>
                                            <Image
                                                style={{ width: 35, height: 35 }}
                                                source={require('./src/assets/plus.png')}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    null
                                )}
                            </View>
                        ))}
                    </ScrollView>
                ) : (
                    <Acitvity />
                )}
                {radioStationActive ? (
                    <Footer name={selectedRadioStation[0].name} />
                ) : (
                    null
                )}
                {radioStationActive ? (
                    <Video
                        source={{ uri: selectedRadioStation[0].url }}
                        ref={(ref) => {
                            this.player = ref;
                        }}
                        audioOnly
                        onBuffer={this.onBuffer}
                        onError={this.videoError}
                        style={styles.backgroundVideo}
                    />
                ) : (
                    null
                )}
            </View>
        );
    }
}
