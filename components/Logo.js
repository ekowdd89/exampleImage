import React from 'react'

import {Image, StyleSheet, View} from 'react-native'
import logo from '../assets/expo.png'
const Logo = () =>{
    return (
        <>
            <View style={styles.container}>
                <Image source={logo} style={styles.logo} />
            </View>
        </>
    )
}

export default Logo;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100
    }
})