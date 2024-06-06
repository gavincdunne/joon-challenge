import { Text, View, TouchableOpacity } from 'react-native';

export interface JoonButtonProps {
  onPress: () => any,
  label: string,
  accessibilityLabel: string
}

const JoonButton = (props: JoonButtonProps) => {
  return (
    <View>
      <TouchableOpacity
        className='flex items-center p-4 border w-[225] bg-blue-500 border-gray-400 rounded'
        accessibilityLabel={props.accessibilityLabel}
        onPress={() => props.onPress()}
      >
        <Text className='text-[#ffffff]'>{props.label}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default JoonButton