import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './Footer.styles';

const Footer = props => (
    <View style={styles.main}>
        <Text style={styles.currentlyPlaying}>
Currently Playing
        </Text>
        <Text style={styles.stationName}>
            {props.name}
            {' '}
FM
        </Text>
    </View>
);

export default Footer;
