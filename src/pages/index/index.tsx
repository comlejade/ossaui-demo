
import { View } from '@tarojs/components'
import { OsInput } from 'ossaui'
import { useState } from 'react'
import './index.scss'

export default () => {
  const [concat, setConcat] = useState('')
  return (
    <View>
      <OsInput label='收货人' placeholder='请填写收货人姓名' value={concat} onChange={setConcat} />
    </View>
  )
}
