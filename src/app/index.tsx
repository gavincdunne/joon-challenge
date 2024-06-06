import { Link } from 'expo-router';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserFirstname } from '../store/userReducer';
import { SafeAreaView } from 'react-native-safe-area-context';
import JoonButton from '../components/JoonButton';
import JoonTextInput from '../components/JoonTextInput';
import { useState } from 'react';

// Homescreen for expo-router (index)
// Updates and persists user.firstname

const AddFirstName = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const [firstname, setFirstNameState] = useState(user.firstname);

  const handleTextInputChange = (text: string) => {
    setFirstNameState(text)
  }

  const handleNextClick = () => {
    dispatch(setUserFirstname(firstname))
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-16">
      <Text className='mb-4 text-lg'>What is your name?</Text>

      <JoonTextInput
        onChangeText={text => handleTextInputChange(text)}
        placeholder='Enter your first name...'
        accessibilityLabel='Enter your first name.' 
        value={firstname}/>

      <Link href={'/set_gender'} asChild>
        <JoonButton
          onPress={handleNextClick}
          label='Next'
          accessibilityLabel='Done with first name entry.' />
      </Link>
    </SafeAreaView>
  )
}

export default AddFirstName