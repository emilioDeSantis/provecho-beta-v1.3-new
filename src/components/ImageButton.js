import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image  } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function ImageButton(props) {
    if(props.isCamera) {
        var title = 'camera'
        var func = take_image
    } else {
        var title = 'library'
        var func = pick_image        
    }
    return(
        <TouchableOpacity
            style={{
                height: 50,
                width: 200,
                borderRadius: 50,
                backgroundColor: '#ffe488'
            }}
            onPress={() => func(props.setUri, props.is_profile_picture)}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

function pick_image(setUri, is_profile_picture) {
    //update dimantsion for real size 
    let height = 250
    let width = 200
    if(is_profile_picture) {
        height = 100
        width = 100
    }
    ImagePicker.openPicker({
        width,
        height,
        cropping: true
    }).then(image => {
        console.log(image);
        setUri(image.path)
    });
}

function take_image(setUri, is_profile_picture) {
    //update dimantsion for real size 
    let height = 250
    let width = 200
    if(is_profile_picture) {
        height = 100
        width = 100
    }
    ImagePicker.openPicker({
        width,
        height,
        cropping: true
    }).then(image => {
        console.log(image);
        setUri(image.path)
    });
}  

export default ImageButton