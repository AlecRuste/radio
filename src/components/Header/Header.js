import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './Header.styles';

const Header = () => (
    <View style={styles.main}>
        <TouchableOpacity>
            <Image
                source={require('./../../assets/back-arrow.png')}
                style={styles.headerImg}
            />
        </TouchableOpacity>
        <Text style={styles.headerText}>
Stations
        </Text>
        <TouchableOpacity>
            <Image
                source={require('./../../assets/switch.png')}
                style={styles.headerImg}
            />
        </TouchableOpacity>
    </View>

);

export default Header;
