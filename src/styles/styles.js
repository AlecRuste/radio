import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#2f2f3a'
    },
    radioStationList: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    radioStationName: {
        fontSize: 24,
        color: '#a2abbd',
        width: 200,
        margin: 10,
        marginLeft: 15
    },
    radioStationFrequency: {
        fontSize: 24,
        color: '#a2abbd',
        margin: 10,
        marginRight: 15
    },
    radioStationDetails: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    radioStationLogo: {
        borderRadius: 60,
        width: 125,
        height: 125,
        borderWidth: 3,
        borderColor: '#a2abbd'
    }
});
