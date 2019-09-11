import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Button } from 'react-native';
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
            const radioStationData = await fetch('http://www.radio-browser.info/webservice/json/stations/bycountryexact/lithuania?limit=15');
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
        const { radioStationList } = this.state;
        const filteredRadioStation = radioStationList.filter(radioStation => radioStation === item);
        this.setState({
            radioStationActive: true,
            selectedRadioStation: filteredRadioStation
        });
    }

    playTrack = () => {

    }

    render() {
        const { radioStationList, isLoading, radioStationActive, selectedRadioStation } = this.state;
        console.log(selectedRadioStation);
        console.log(radioStationActive);
        return (
            <View style={styles.main}>
                <Header />
                {!isLoading ? (
                    <ScrollView>
                        {radioStationList.map(radioStation => (
                            <View key={radioStation.id}>
                                <TouchableOpacity onPress={() => this.handleRadioStation(radioStation)}>
                                    <View style={styles.radioStationList}>
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
                        source={{ uri: selectedRadioStation[0].url }} // Can be a URL or a local file.
                        ref={(ref) => {
                            this.player = ref;
                        }} // Store reference
                        audioOnly
                        onBuffer={this.onBuffer} // Callback when remote video is buffering
                        onError={this.videoError} // Callback when video cannot be loaded
                        style={styles.backgroundVideo}
                    />
                ) : (
                    null
                )}

            </View>
        );
    }
}
