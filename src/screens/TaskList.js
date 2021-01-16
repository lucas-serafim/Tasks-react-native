import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

import commonStyles from '../commomStyles'
import todayImage from '../../assets/imgs/today.jpg'

import moment from 'moment'
import 'moment/locale/pt-br'

import Task from '../components/Task'
import { FlatList } from 'react-native-gesture-handler'

export default class TaskList extends Component {
   state = {
      tasks: [{
         id: Math.random(),
         desc: 'Comprar Livro de React',
         estimateAt: new Date(),
         doneAt: new Date(),
      }, {
         id: Math.random(),
         desc: 'Ler Livro de React',
         estimateAt: new Date(),
         doneAt: null,
      }]
   }

   toggleTask = taskId => {
      const tasks = [...this.state.tasks]
      tasks.forEach(task => {
         if (task.id === taskId) {
            task.doneAt = task.doneAt ? null : new Date()
         }
      })

      this.setState({ tasks })
   }

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
               <FlatList data = {this.state.tasks} 
                  keyExtractor = {item => `${item.id}`}
                  renderItem = {({item}) => <Task {...item} toggleTask = {this.toggleTask} />} />
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