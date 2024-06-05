import { Link } from 'expo-router';
import { Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserFirstname } from '../store/userReducer';
import { SafeAreaView } from 'react-native-safe-area-context';


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

  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-16">
        <Text className='mb-4 text-lg'>What is your name?</Text>
        <TextInput
          className='mb-16 p-4 border w-[275]'
          placeholder='Enter your first name...'
          placeholderTextColor="#d3d3d3" 
          accessibilityLabel="Enter your first name."
          clearButtonMode='while-editing'
          enterKeyHint='next'
          onChangeText={text => handleTextInputChange(text)}
        />
        <Link href={'/set_gender'} asChild>
          <TouchableOpacity 
            className='flex items-center p-4 border w-[225] bg-blue-500 border-gray-400 rounded'
            accessibilityLabel="Done with first name entry." 
            onPress={() => handleNextClick()}
          >
            <Text className='text-[#ffffff]'>Next</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
  )
}

export default AddFirstName