import { Link } from 'expo-router';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserGender } from '../store/userReducer';


const SetGender = () => {  
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  let gender = user.gender

  enum Gender {
    Male,
    Female,
    Other
  }

  const handleNextClick = () => {
    dispatch(setUserGender(gender))
  }

  return (
    <View className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>What is your gender?</Text>
      <View className='flex flex-row mb-8 space-x-10'>
        <TouchableOpacity className='bg-white py-2 px-4 border border-gray-400 rounded'>
          <Text>{Gender[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-white py-2 px-4 border border-gray-400 rounded'>
          <Text>{Gender[1]}</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-white py-2 px-4 border border-gray-400 rounded'>
          <Text>{Gender[2]}</Text>
        </TouchableOpacity>
      </View>
      <Link href={'/add_children'} asChild>
      <Button title='Next' onPress={() => handleNextClick()}/>
      </Link>
    </View>
  )
}

export default SetGender;