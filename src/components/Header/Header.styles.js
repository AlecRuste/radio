import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    main: {
        width: '100%',
        height: '10%',
        backgroundColor: '#edae61',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10
    },
    headerText: {
        textTransform: 'uppercase',
        fontSize: 20
    },
    headerImg: {
        width: 25,
        height: 25,
        resizeMode: 'contain'
    }
});
