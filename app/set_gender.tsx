import { Link, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

const SetGender = () => {  
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='mb-8 text-lg'>What is your gender?</Text>
      <View className='flex flex-row mb-8'>
        <Button title='male' />
        <Button title='female' />
        <Button title='other' />
      </View>
      <Link href={'/add_children'} asChild>
        <Button title='Next' />
      </Link>
    </View>
  )
}

export default SetGender;