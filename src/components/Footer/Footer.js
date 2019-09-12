import React from 'react';
import { View, Text } from 'react-native';
import styles from './Footer.styles';

const Footer = props => (
    <View style={styles.main}>
        <View style={styles.seperator} />
        <Text style={styles.currentlyPlaying}>
Currently Playing
        </Text>
        <Text style={styles.stationName} numberOfLines={1}>
            {props.name}
        </Text>
    </View>
);

export default Footer;
