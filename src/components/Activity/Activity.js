import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './Activity.styles';

const Activity = () => (
    <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#a2abbd" />
    </View>
);

export default Activity;
