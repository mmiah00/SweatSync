import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View } from 'react-native';


export default function GymPage (props) { 
    const posts = props.posts; 

    return ( 
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text> {props.name} </Text>
            <Text> {props.address} </Text>
            <FlatList 
                data={posts}
                renderItem={({item}) => (
                    <View>
                      <Text>{item.text}</Text> 
                      <Text>{item.timestamp}</Text>
                    </View>
                  )}
            />
            {/* {renderPosts(posts)} */}
        </View> 
    ); 
}

function renderPosts (posts) { 

}