import { Link } from 'expo-router';
import { Button, Text, TextInput, View } from 'react-native';

const CreateAccount = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white w-max">
      <Text className='mb-8 text-lg'>Create your account</Text>
      <TextInput
        className='mb-8 p-2 border'
        placeholder="email"
        clearButtonMode='while-editing'
        enterKeyHint='next'
      />
      <TextInput
        className='mb-8 p-2 border'
        placeholder="password"
        clearButtonMode='while-editing'
        enterKeyHint='next'
      />
      <Button title='Sign Up' />
    </View>
  )
}

export default CreateAccount;