import { Link } from 'expo-router';
import { Button, Text, View } from 'react-native';

const AddChildren = () => {
  return (
    <View>
      <Text>Add your children</Text>
      <Link href={'/create_account'} asChild>
        <Button title='Done' />
      </Link>
    </View>
  )
}

export default AddChildren