import { Link } from 'expo-router';
import { Text, View, Button, TextInput } from 'react-native';
import { NativeWindStyleSheet } from "nativewind";

// Needed for NativeWind styles to take effect on web app.
NativeWindStyleSheet.setOutput({
  default: "native",
});

const AddFirstName = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>What is your name?</Text>
      <TextInput
        placeholder="type name here..."
        clearButtonMode='while-editing'
        enterKeyHint='next'
      />
      <Link href={'/set_gender'} asChild>
        <Button title='Next' />
      </Link>
    </View>
  )
}

export default AddFirstName