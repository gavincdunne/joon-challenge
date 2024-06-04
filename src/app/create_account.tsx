import { Link } from 'expo-router';
import { Button, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserEmail, setUserPassword } from '../store/userReducer';

const CreateAccount = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  let email = user.email
  let password = user.password
  let userCreated = false

  const handleEmailInputChange = (text: string) => {
    email = text
    dispatch(setUserEmail(email))
  }

  const handlePasswordInputChange = (text: string) => {
    password = text
    dispatch(setUserPassword(password))
  }

  const createAccount = (name: string, gender: string, childrenNames:
    string[], email: string, password: string) => { }

  return (
    <View className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>Create your account</Text>
      <TextInput
        className='mb-8 p-2 border'
        placeholder="email"
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={text => handleEmailInputChange(text)}
      />
      <TextInput
        className='mb-8 p-2 border'
        placeholder="password"
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={text => handlePasswordInputChange(text)}
      />
      <Button
        title='Sign Up'
        onPress={() => createAccount(user.email, user.gender, user.children, user.email, user.password)}
      />

      <View className="pt-16">
        <Text>Name: {user.firstname}</Text>
        <Text>Gender: {user.gender}</Text>
        <Text>Children: {user.children}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Password: {user.password}</Text>
      </View>

    </View>
  )
}

export default CreateAccount;