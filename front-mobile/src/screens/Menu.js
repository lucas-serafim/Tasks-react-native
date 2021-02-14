import React from 'react'
import { Platform, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation-drawer'

import commomStyles from '../commomStyles'

import { Gravatar } from 'react-native-gravatar'

import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {

   const logout = () => {
      delete axios.defaults.headers.common['Authorization']
      AsyncStorage.removeItem('userData')
      props.navigation.navigate('AuthOrApp')
   }

   return (
      <ScrollView>
         <View style = {styles.header}>
            <Text style = {styles.title}>Tasks</Text>
            <Gravatar style = {styles.avatar} 
               options = {{
                  email: props.navigation.getParam('email'),
                  secure: true
               }} />
            <View style = {styles.userInfo}>
               <Text style = {styles.name}>
                  {props.navigation.getParam('name')}
               </Text>
               <Text style = {styles.email}>
                  {props.navigation.getParam('email')}
               </Text>
            </View>
            <TouchableOpacity onPress = {logout}>
               <View style = {styles.logoutIcon}>
                  <Icon name = 'sign-out' size = {30} color = '#800' />
               </View>
            </TouchableOpacity>
         </View>
         <DrawerItems {...props} />
      </ScrollView>
   )
}

const styles = StyleSheet.create({
   header: {
      borderBottomWidth: 1,
      borderColor: '#DDD'
   },
   title: {
      color: '#000',
      fontSize: 30,
      paddingTop: 30,
      marginTop: Platform.OS === 'ios' ? 70 : 0,
      padding: 10
   },
   avatar: {
      width: 60,
      height: 60,
      borderWidth: 3,
      borderRadius: 30,
      margin: 10,
      backgroundColor: '#222',
   },
   userInfo: {
      marginLeft: 10,
   },
   name: {
      fontSize: 20,
      color: commomStyles.colors.mainText,
      marginBottom: 5,
   },
   email: {
      fontSize: 15,
      color: commomStyles.colors.subText,
      marginBottom: 10
   },
   logoutIcon: {
      marginLeft: 10,
      marginBottom: 10
   }
})