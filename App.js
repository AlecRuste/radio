/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import styles from './src/styles';
import Header from './src/components/Header';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//     android:
//     'Double tap R on your keyboard to reload,\n'
//     + 'Shake or press menu button for dev menu',
// });

// type Props = {};
// export default class App extends Component<Props> {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text style={styles.welcome}>
// Welcome to React Native!
//                 </Text>
//                 <Text style={styles.instructions}>
// To get started, edit App.js
//                 </Text>
//                 <Text style={styles.instructions}>
//                     {instructions}
//                 </Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
// });

export default class App extends Component {
    state = {
        radioLithuania: []
    }

    componentDidMount() {
        this.getMovies();
    }

    async getMovies() {
        try {
            const radioLithuania = await fetch('http://www.radio-browser.info/webservice/json/stations/bycountry/lithuania');
            const responseRadioLithuania = await radioLithuania.json();
            this.setState({
                radioLithuania: responseRadioLithuania
            });
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        console.log(this.state.radioLithuania);
        return (
            <View style={styles.main}>
                <Header />
                <Text>
Hello, world!
                </Text>
            </View>
        );
    }
}
