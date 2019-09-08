import React from 'react';
import { View, Text } from 'react-native';
import styles from './Header.styles';

const Header = () => (
    <View style={styles.main}>
        <Text style={styles.headerText}>
Stations
        </Text>
    </View>
);

export default Header;
