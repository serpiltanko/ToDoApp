import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fallback = () => {
  return (
    <View style={styles.container}>
     <Image source={require("../../assets//to-do-list.png")} style={styles.image}/>
     <Text>Start Adding Your Task</Text>
    </View>
  )
}

export default Fallback

const styles = StyleSheet.create({

    container:{
        alignItems:"center",
        justifyContent:"center",
        padding:20,
    },

    image:{
        height:200,
        width:200,
    }
})