import { Text, View, Button,TouchableOpacity} from 'react-native';
import styles from './style';
import Icons from '@expo/vector-icons'
import Feather from '@expo/vector-icons/Feather';
import CamCapture from '../CamCapture';



export default function HomeScreen() {
    return(
        <View style={styles.ConatainerHome}>                           
            <TouchableOpacity onPress={() => CamCapture()} style={styles.ButtonCapture}>
                <Feather name="camera" size={40} color="white"  style={styles.CamIcon}/>
                <Text style={styles.TextButton}>Capturar Citção</Text>
            </TouchableOpacity>
        </View>
    )
}