import { View, Text, TouchableOpacity, Button } from 'react-native';
import { useState } from 'react';
import  { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import styles from './style';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';

 
export default function CamCapture() {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if(!permission){
        return <View />;
    }

    if(permission.granted){
        return(<View style={styles.container}>
            <Text style={styles.message}>Precisamos da sua permissão para mostrar a câmera</Text>
            <Button onPress={requestPermission} title="Permitir" />
        </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    return(
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing}>
                <TouchableOpacity style={styles.buttonBack}>
                    <Ionicons name="chevron-back-outline" size={50} color="white" />
                </TouchableOpacity>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buttonCapture}>
                        <Feather name="camera" size={75} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.buttonCamRotate} onPress={toggleCameraFacing}>
                        <Ionicons name="camera-reverse-outline" size={50} color="white" />
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>

    );
}