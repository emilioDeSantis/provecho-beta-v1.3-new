import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { StackActions, useNavigation  } from '@react-navigation/native';

import ChefThumbnail from './ChefThumbnail'

function RecipeButton() {

    const navigation = useNavigation();

    return (
        <View>
            <Button 
                title='view recipe'
                onPress={() => navigation.navigate('recipe')}
            />
        </View>
    );
}

function PostPreview(props) {
    return (
        <View style={{ height: 300, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{props.title}</Text>
            <ChefThumbnail></ChefThumbnail>
            <RecipeButton></RecipeButton>
        </View>
    );
}

export default PostPreview;