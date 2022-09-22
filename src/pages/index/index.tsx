
import { View } from '@tarojs/components'
import { OsInput } from 'ossaui'
import { useState } from 'react'
import './index.scss'

export default () => {
  const [concat, setConcat] = useState('')
  const [v1, setV1] = useState("186");
  return (
    <View>
      <OsInput label='收货人' placeholder='请填写收货人姓名' value={concat} onChange={setConcat} />
      <OsInput
        label='标题'
        placeholder='默认文案'
        placeholderStyle='color: #7f7f7f;'
        value={v1}
        onChange={(v) => {
          setV1(v);
        }}
      ></OsInput>
    </View>
  )
}
