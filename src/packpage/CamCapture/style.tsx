import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      message: {
        textAlign: 'center',
        paddingBottom: 10,
      },
      camera: {
        flex: 1,
      },
      buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 60,
      },
      buttonBack:{
        flex: 1,
        margin: 10
      },
      buttonCapture: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
        marginRight: -60
      },
      buttonCamRotate: {
        alignSelf: 'flex-end',
        alignItems: 'flex-end',
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
});

export default styles;