import { Link } from 'expo-router';
import { Text, View, Button} from 'react-native';

const AddFirstName = () => {
  return (
    <View>
      <Text>What is your name?</Text>
      <Link href={'/set_gender'} asChild>
        <Button title='Next' />
      </Link>
    
    </View>
  )
}

export default AddFirstName