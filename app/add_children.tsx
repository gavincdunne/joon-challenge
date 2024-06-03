import { Link } from 'expo-router';
import { Button, Text, TextInput, View } from 'react-native';

const AddChildren = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='mb-8 text-lg'>Add your children</Text>
      <TextInput
        className='mb-8 p-2 border'
        placeholder="add child..."
        clearButtonMode='while-editing'
        enterKeyHint='next'
      />
      <Link href={'/create_account'} asChild>
        <Button title='Done' />
      </Link>
    </View>
  )
}

export default AddChildren