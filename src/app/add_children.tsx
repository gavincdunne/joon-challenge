import { Link } from 'expo-router';
import { Button, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setUserChildren } from '../store/userReducer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import JoonButton from '../components/JoonButton';
import JoonTextInput from '../components/JoonTextInput';

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

      <JoonTextInput
        onChangeText={text => handleTextInputChange(text)}
        placeholder='Add Child...'
        accessibilityLabel="Enter a child's name."
        value={childName} />

      <ScrollView className='mb-16 w-[275]'>
        <FlatList
          data={user.children}
          renderItem={({ item }) => <Text className='text-[#0000ff] text-[18px]'>{item}</Text>} />
      </ScrollView>

      <View className='flex items-center mb-16'>
        <TouchableOpacity
          className='flex items-center p-4 border w-[175] border-gray-400 rounded mb-8'
          accessibilityLabel="Add child"
          onPress={() => handleAddChild(childName)}
        >
          <Text>Add Child</Text>
        </TouchableOpacity>

        <Link href={'/create_account'} asChild>
          <JoonButton
            onPress={() => { }}
            label='Next'
            accessibilityLabel='Done with add children.' />
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default AddChildren