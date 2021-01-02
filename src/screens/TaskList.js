import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

export default class TaskList extends Component {
   render() {
      const today = moment().local('pt-br').format('ddd, D [de] MMMM')

      return (
         <View style = {styles.container}>
            <ImageBackground source = {todayImage} style = {styles.background}>
               <View style = {styles.titlebar}>
                  <Text>Hoje</Text>
                  <Text>{today}</Text>
               </View>
            </ImageBackground>

            <View style = {styles.taskList}>
               <Text>TaskList</Text>
            </View>  
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1
   },
   background: {
      flex: 3
   },
   taskList: {
      flex: 7
   },
   titlebar: {
      flex: 1,
      justifyContent: 'flex-end'
   }
})