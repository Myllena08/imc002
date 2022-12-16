import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text style= {styles.FonteBlue}>Titulo</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
    FonteBlue: {
      color: 'blue',
       fontWeight:'bold',
       fontSize: 30,
    }
});