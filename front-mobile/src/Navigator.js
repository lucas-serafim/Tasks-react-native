import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

import Menu from './screens/Menu'
import commonStyles from './commomStyles'

const menuConfig = {
   initialRouteName: 'Today',
   contentComponent: Menu,
   contentOptions: {
      labelStyle: {
         fontWeight: 'normal',
         fontSize: 20
      },
      activeLabelStyle: {
         color: '#080',
         fontWeight: 'bold',
      }
   }
}

const menuRoutes = {
   Today: {
      name: 'Today',
      screen: props => <TaskList title = 'Hoje' daysAhead = {0} {...props} />,
      navigationOptuons: {
         title: 'Hoje'
      }
   },
   Tomorrow: {
      name: 'Tomorrow',
      screen: props => <TaskList title = 'Amanhã' daysAhead = {1} {...props} />,
      navigationOptuons: {
         title: 'Amanhã'
      }
   },
   Week: {
      name: 'Week',
      screen: props => <TaskList title = 'Semana' daysAhead = {7} {...props} />,
      navigationOptuons: {
         title: 'Semana'
      }
   },
   Month: {
      name: 'Month',
      screen: props => <TaskList title = 'Mês' daysAhead = {30} {...props} />,
      navigationOptuons: {
         title: 'Mês'
      }
   }
}

const menuNavigator = createDrawerNavigator(menuRoutes, menuConfig)

const mainRoutes = {
   Auth: {
      name: 'Auth',
      screen: Auth
   },
   Home: {
      name: 'Home',
      screen: menuNavigator
   }
}

const mainNavigator = createSwitchNavigator(mainRoutes, {
   initialRouteName: 'Auth'
})

export default createAppContainer(mainNavigator)