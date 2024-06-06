import { Link, useNavigation } from 'expo-router';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserEmail, setUserPassword } from '../store/userReducer';
import { useEffect, useState } from 'react';
import JoonButton from '../components/JoonButton';
import JoonTextInput from '../components/JoonTextInput';

const CreateAccount = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const [email, setEmailState] = useState(user.email);
  const [password, setPasswordState] = useState(user.password);
  const [isAccountCreated, setisAccountCreated] = useState(false);
  const navigation = useNavigation()

  useEffect(() => {
    handleEmailInputChange(email);
  }, [email]);

  useEffect(() => {
    handlePasswordInputChange(password);
  }, [password]);

  const handleEmailInputChange = (text: string) => {
    setEmailState(text)
    dispatch(setUserEmail(email))
  }

  const handlePasswordInputChange = (text: string) => {
    setPasswordState(text)
    dispatch(setUserPassword(password))
  }

  const resetToHome = async () => {
    setisAccountCreated(false)
    navigation.reset
  }

  const createAccount = (name: string, gender: string, childrenNames:
    string[], email: string, password: string) => {
    console.log(user)
    setisAccountCreated(true)
  }

  return (
    !isAccountCreated ?
      <View className="flex-1 items-center bg-white pt-16">
        <Text className='mb-8 text-lg'>Create your account</Text>

        <JoonTextInput
          onChangeText={text => handleEmailInputChange(text)}
          placeholder='Enter email'
          accessibilityLabel='Enter email'
          value={email} />

        <JoonTextInput
          onChangeText={text => handlePasswordInputChange(text)}
          placeholder='Enter a password'
          accessibilityLabel="Enter a password"
          value={password} />

        <JoonButton
          onPress={() => createAccount(user.email, user.gender, user.children, user.email, user.password)}
          label='Sign Up'
          accessibilityLabel='Create Account.' />
      </View>
      :
      <View className="flex-1 items-center bg-white pt-16">
        <Text className='mb-8 text-lg'>Account successfully created!</Text>

        <Link href={'/'} asChild>
          <JoonButton
            onPress={resetToHome}
            label='Start again'
            accessibilityLabel='Start again.' />
        </Link>
      </View>
  )
}

export default CreateAccount;