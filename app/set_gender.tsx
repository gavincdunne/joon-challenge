import { Link, useRouter } from 'expo-router';
import { Button, Text, View } from 'react-native';

const SetGender = () => {
  const router = useRouter();
  
  return (
    <View>
      <Text>What is your gender?</Text>
      <Link href={'/add_children'} asChild>
        <Button title='Next' />
      </Link>
    </View>
  )
}

export default SetGender;