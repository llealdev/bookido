import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ConatainerHome:{
        width: '100%',
        height: '100%',
        backgroundColor: '#ffff',
        alignItems: 'center', 
        borderTopLeftRadius: 90,
        borderTopRightRadius: 90,
        marginTop: 30,
        
    },
    ButtonCapture:{
        borderRadius: 100,
        flexDirection: 'row',
        backgroundColor: '#0EA5F0',
        alignItems: 'center',
        width: "90%",
        height: '8%',
        paddingTop: 10,
        paddingBottom: 10,
        marginLeft: 10, 
        marginTop: 10,
        position: 'absolute',
        bottom: 150,
        
    },
    CamIcon:{
        marginRight: -80,
        marginLeft: 50
    },
    TextButton:{
        flex:1,
        textAlign:'center',
        textAlignVertical: 'center',
        fontSize: 20,
        fontWeight:'bold',
        color:'white',
        

    }
});

export default styles;