import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Image } from 'react-native';

const ImagePreview = (props) => {
    if (props.uri) {
        return (
            <View style={{ height: 200, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    style={{ height: 100, width: 100 }}
                    source={{uri: props.uri}}
                />
            </View>
        );
    } else {
        return (
            <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                <Text>no image selected</Text>
            </View>
        )
    }
}

export default ImagePreview;