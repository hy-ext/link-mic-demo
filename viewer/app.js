import { UI } from '@hyext/hy-ui'
import React, { Component } from 'react'
import './app.hycss'

import { ViewerDemo } from '../src/components/LinkMicForm'

const { View } = UI

class App extends Component {
  render () {
    return (
      <View className='container'>
        <ViewerDemo />
      </View>
    )
  }
}

export default App
