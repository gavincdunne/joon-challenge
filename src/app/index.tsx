import { Link } from 'expo-router';
import { Text, View, Button, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserFirstname } from '../store/userReducer';


const AddFirstName = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  let firstname = user.firstname

  const handleTextInputChange = (text: string) => {
    firstname = text
  }

  const handleNextClick = () => {
    dispatch(setUserFirstname(firstname))
  }

  const handlePlaceholder = () => {
    return firstname ? firstname : "Please enter your name"
  }

  return (
    <View className="flex-1 items-center bg-white pt-16">
        <Text className='mb-8 text-lg'>What is your name?</Text>
        <TextInput
          className='mb-8 p-2 border'
          placeholder={handlePlaceholder()}
          accessibilityLabel="Enter your first name."
          clearButtonMode='while-editing'
          enterKeyHint='next'
          onChangeText={text => handleTextInputChange(text)}
        />
        <Link href={'/set_gender'} asChild>
          <Button accessibilityLabel="Done with first name entry." title='Next' onPress={() => handleNextClick()}/>
        </Link>
      </View>
  )
}

export default AddFirstName