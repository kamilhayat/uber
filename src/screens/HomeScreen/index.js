import React from 'react'
import { View, Dimensions, Text } from "react-native";
import HomeMap from '../../components/HomeMap';
import Messages from '../../components/Messages';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = (props) => {
    return (
       
      <View style={{height: Dimensions.get('window').height - 400}}>
       <HomeMap/>
       <Messages/>
       <HomeSearch/>
      </View>
      

      
     
    
    )
}

export default HomeScreen