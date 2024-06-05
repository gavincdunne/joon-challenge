import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserEmail, setUserPassword } from '../store/userReducer';
import { useEffect, useState } from 'react';

const CreateAccount = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const [email, setEmailState] = useState(user.email);
  const [password, setPasswordState] = useState(user.password);

  const handleEmailInputChange = (text: string) => {
    setEmailState(text)
    dispatch(setUserEmail(email))
  }

  const handlePasswordInputChange = (text: string) => {
    setPasswordState(text)
    dispatch(setUserPassword(password))
  }

  useEffect(() => {
    handleEmailInputChange(email);
  }, [email]);

  useEffect(() => {
    handlePasswordInputChange(password);
  }, [password]);

  const createAccount = (name: string, gender: string, childrenNames:
    string[], email: string, password: string) => {
    console.log(user)
  }

  return (
    <View className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>Create your account</Text>
      <TextInput
        className='mb-4 p-4 border w-[275]'
        placeholder="Enter email"
        autoCapitalize='none'
        placeholderTextColor="#d3d3d3"
        accessibilityLabel="Enter email"
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={text => handleEmailInputChange(text)}
      />
      <TextInput
        className='mb-16 p-4 border w-[275]'
        placeholder="Enter a password"
        placeholderTextColor="#d3d3d3"
        autoCapitalize='none'
        accessibilityLabel="Create password"
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={text => handlePasswordInputChange(text)}
      />
      <TouchableOpacity
        className='flex items-center p-4 border w-[225] bg-blue-500 border-gray-400 rounded'
        accessibilityLabel="Create Account"
        onPress={() => createAccount(user.email, user.gender, user.children, user.email, user.password)}
      >
        <Text className='text-[#ffffff]'>Sign Up</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreateAccount;