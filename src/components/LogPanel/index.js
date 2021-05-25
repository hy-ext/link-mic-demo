import React from 'react'
import { UI } from '@hyext/hy-ui'

const { View, Text } = UI

export default props => {
  const { logs } = props
  return (
    <View>
      <View style={{
        paddingHorizontal: 20
      }}
      >
        {
          logs.length
            ? (logs || []).map(({ time, msg }, index) => (
              <Text key={index} style={{ wordBreak: 'break-all', paddingVertical: 5, color: '#000' }} numberOfLines={0}>
                【{time.toLocaleTimeString()}】{msg}
              </Text>
            ))
            : <Text numberOfLines={0} style={{ paddingVertical: 5, color: '#000' }}>暂时没有日志</Text>
        }
      </View>
    </View>
  )
}
