import * as React from 'react'
import {
    View,
    Text,
    TextInput,
    Button
} from 'react-native'

const InputDemo = props => (
      <View key={props.id} style={{borderColor: 'green', borderWidth: 1}}>
          <TextInput
              placeholder='Search'
          />
      </View>
);

export default InputDemo;