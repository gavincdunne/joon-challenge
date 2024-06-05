import { Link } from 'expo-router';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserGender } from '../store/userReducer';
import { SafeAreaView } from 'react-native-safe-area-context';


const SetGender = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  let gender = user.gender
  const unselectedStyle = 'flex items-center max-w-100 bg-white py-4 px-6 border border-gray-400 rounded'
  const selectedStyle = 'flex items-center max-w-100 bg-blue-500 py-4 px-6 border border-gray-400 rounded'

  const handleGenderSelect = (newgender: string) => {
    gender = newgender
    dispatch(setUserGender(gender))
  }

  const handleNextClick = () => {
    dispatch(setUserGender(gender))
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>What is your gender?</Text>
      <View className='flex flex-row mb-16 space-x-10'>
        <TouchableOpacity
          className={gender != 'Male' ? unselectedStyle : selectedStyle}
          accessibilityLabel="Select male gender."
          onPress={() => handleGenderSelect('Male')}
        >
          <Text className={gender != 'Male' ? 'text-[#000000]' : 'text-[#ffffff]'}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={gender != 'Female' ? unselectedStyle : selectedStyle}
          accessibilityLabel="Select female gender."
          onPress={() => handleGenderSelect('Female')}
        >
          <Text className={gender != 'Female' ? 'text-[#000000]' : 'text-[#ffffff]'}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={gender != 'Other' ? unselectedStyle : selectedStyle}
          accessibilityLabel="Select other gender."
          onPress={() => handleGenderSelect('Other')}>
          <Text className={gender != 'Other' ? 'text-[#000000]' : 'text-[#ffffff]'}>Other</Text>
        </TouchableOpacity>
      </View>

      <Link href={'/add_children'} asChild>
        <TouchableOpacity 
          className='flex items-center p-4 border w-[225] bg-blue-500 border-gray-400 rounded' 
          accessibilityLabel="Done with select gender."
          onPress={() => handleNextClick()}
        >
          <Text className='text-[#ffffff]'>Next</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  )
}

export default SetGender;