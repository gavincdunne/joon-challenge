import { Link } from 'expo-router';
import { Button, FlatList, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserChildren } from '../store/userReducer';

const AddChildren = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  let childName = ''
  
  const handleTextInputChange = (text: string) => {
    childName = text
  }

  const handleAddChild = (childName: string) => {
    dispatch(setUserChildren(childName))
  }

  return (
    <View className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>Add your children</Text>
      <TextInput
        className='mb-8 p-2 border'
        placeholder="add child..."
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={text => handleTextInputChange(text)}
      />

      <FlatList data={user.children} renderItem={({item}) => <Text>{item}</Text>}/>

      <Button title='Add Child' onPress={() => handleAddChild(childName)}/>

      <Link href={'/create_account'} asChild>
        <Button title='Done' />
      </Link>
    </View>
  )
}

export default AddChildren