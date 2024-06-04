import { Link } from 'expo-router';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserGender } from '../store/userReducer';


const SetGender = () => {  
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  let gender = user.gender
  const unselectedStyle = 'bg-white py-2 px-4 border border-gray-400 rounded'
  const selectedStyle = 'bg-blue-500 py-2 px-4 border border-gray-400 rounded'

  const handleGenderSelect = (newgender: string) => {
    gender = newgender
    dispatch(setUserGender(gender))
  }

  const handleNextClick = () => {
    dispatch(setUserGender(gender))
  }
  
  return (
    <View className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>What is your gender?</Text>
      <View className='flex flex-row mb-8 space-x-10'>
        <TouchableOpacity className={gender != 'Male' ? unselectedStyle : selectedStyle}  onPress={() => handleGenderSelect('Male')}>
          <Text className={gender != 'Male' ? 'text-[#000000]' : 'text-[#ffffff]'}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity className={gender != 'Female' ? unselectedStyle : selectedStyle}  onPress={() => handleGenderSelect('Female')}>
        <Text className={gender != 'Female' ? 'text-[#000000]' : 'text-[#ffffff]'}>Female</Text>
        </TouchableOpacity>
        <TouchableOpacity className={gender != 'Other' ? unselectedStyle : selectedStyle}  onPress={() => handleGenderSelect('Other')}>
          <Text className={gender != 'Other' ? 'text-[#000000]' : 'text-[#ffffff]'}>Other</Text>
        </TouchableOpacity>
      </View>

      <Link href={'/add_children'} asChild>
        <Button title='Next' onPress={() => handleNextClick()}/>
      </Link>
    </View>
  )
}

export default SetGender;