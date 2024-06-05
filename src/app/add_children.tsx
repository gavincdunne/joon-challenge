import { Link } from 'expo-router';
import { Button, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserChildren } from '../store/userReducer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const AddChildren = () => {
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()
  const [childName, setChildNameState] = useState('');

  const handleTextInputChange = (name: string) => {
    setChildNameState(name)
  }

  const handleAddChild = (childName: string) => {
    dispatch(setUserChildren(childName))
    setChildNameState('')
  }

  return (
    <SafeAreaView className="flex-1 items-center bg-white pt-16">
      <Text className='mb-8 text-lg'>Add your children</Text>
      <TextInput
        className='mb-8 p-4 border w-[275]'
        placeholder='Add Child...'
        placeholderTextColor="#d3d3d3"
        accessibilityLabel="Enter a child's name."
        clearButtonMode='while-editing'
        enterKeyHint='next'
        onChangeText={text => handleTextInputChange(text)}
        value={childName}
      />

      <ScrollView className='grow-0 mb-16'>
        <FlatList
          data={user.children}
          renderItem={({ item }) => <Text className='text-[#0000ff] text-[20px]'>{item}</Text>} />
      </ScrollView>


      <TouchableOpacity
        className='flex items-center p-4 border w-[175] border-gray-400 rounded mb-8'
        accessibilityLabel="Add child"
        onPress={() => handleAddChild(childName)}
      >
        <Text>Add Child</Text>
      </TouchableOpacity>
      <Link href={'/create_account'} asChild>
        <TouchableOpacity
          className='flex items-center p-4 border w-[225] bg-blue-500 border-gray-400 rounded'
          accessibilityLabel="Done with add children"
        >
          <Text className='text-[#ffffff]'>Next</Text>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  )
}

export default AddChildren