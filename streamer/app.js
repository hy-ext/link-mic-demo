import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'

import {StreamerDemo} from '../src/components/LinkMicForm'

const { View } = UI

class App extends Component {
  render () {
    return (
      <View className='container'>
        <StreamerDemo />
      </View>
    )
  }
}

export default App
