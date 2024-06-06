import { TextInput, View } from 'react-native';

export interface JoonTextInputProps {
  onChangeText: (text: string) => any,
  placeholder: string,
  accessibilityLabel: string
  value?: string
}

const JoonTextInput = (props: JoonTextInputProps) => {
  return (
    <View>
      <TextInput
        className='mb-4 p-4 border w-[275]'
        placeholder={props.placeholder}
        autoCapitalize='none'
        placeholderTextColor="#d3d3d3"
        accessibilityLabel={props.accessibilityLabel}
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={(text) => props.onChangeText(text)}
        value={props.value}
      />
    </View>
  )
}

export default JoonTextInput


