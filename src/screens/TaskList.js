import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyles from '../commomStyles'
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
                  <Text style = {styles.title}>Hoje</Text>
                  <Text style = {styles.subTitle}>{today}</Text>
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
   },
   title: {
      // fontFamily: "Lato",
      color: commonStyles.colors.secondary,
      fontSize: 50,
      marginLeft: 20,
      marginBottom: 20
   },
   subTitle: {
       // fontFamily: "Lato",
       color: commonStyles.colors.secondary,
       fontSize: 20,
       marginLeft: 20,
       marginBottom: 30
   }
})