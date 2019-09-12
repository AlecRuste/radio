import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {
        bottom: 0,
        position: 'absolute',
        width: '100%',
        height: '10%',
        backgroundColor: '#22222b',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#a2abbd',
    },
    currentlyPlaying: {
        textTransform: 'uppercase',
        color: '#edae61',
        fontSize: 15,
        fontWeight: 'bold'
    },
    stationName: {
        color: '#a2abbd',
        fontSize: 20
    },
    seperator: {

        width: '100%',

        bottom: '25%',
    }
});
