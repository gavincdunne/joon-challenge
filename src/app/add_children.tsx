import { Link } from 'expo-router';
import { Button, FlatList, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { editUserChild, removeUserChild, setUserChildren } from '../store/userReducer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import JoonButton from '../components/JoonButton';
import JoonTextInput from '../components/JoonTextInput';

// Handles adding, editing, and removing child names from list user.children.
// Creates a FlatList for user.children array, nests FlatList in ScrollView for potentially extensive list.
// Shows <Modal> when edit action is called, hides when edit is Saved/Discarded

const AddChildren = () => {
  const user = useSelector((state: RootState) => state.user)
  const children = user.children
  const dispatch = useDispatch()
  const [childName, setChildNameState] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [childToEdit, setChildToEdit] = useState({ childNameIndex: -1, nameEdit: '' });


  const handleTextInputChange = (name: string) => {
    setChildNameState(name)
  }

  const handleAddChild = (childName: string) => {
    console.log(childName)
    if (childName !== '') {
      dispatch(setUserChildren(childName))
      setChildNameState('')
    }
  }

  const handleRemoveChild = (childNameIndex: number) => {
    dispatch(removeUserChild(childNameIndex))
  }

  const handleEditChild = (childNameIndex: number, nameEdit: string) => {
    dispatch(editUserChild({ index: childNameIndex, update: nameEdit }))
    setModalVisible(!isModalVisible);
  }

  const handleEditChildInputChange = (childNameIndex: number, nameEdit: string) => {
    setChildToEdit({ childNameIndex, nameEdit })
  }

  const toggleModal = (childNameIndex: number, nameEdit: string) => {
    setChildToEdit({ childNameIndex, nameEdit })
    setModalVisible(!isModalVisible);
  };

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
          renderItem={({ item }) =>
            <View className='flex-row justify-between mb-2'>
              <Text className='text-[#0000ff] text-[24px]'>{item}</Text>
              <View className='flex-row justify-between items-center mb-2'>
                <TouchableOpacity
                  className='mx-4'
                  onPress={() => handleRemoveChild(children.indexOf(item))}>
                  <FontAwesome name="close" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => toggleModal(children.indexOf(item), children[children.indexOf(item)])}>
                  <FontAwesome5 name="edit" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>}
        />
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

      <Modal animationType="fade" transparent={true} visible={isModalVisible}>
        <View className='self-center items-center bg-white border my-32 p-16 border-gray-400 rounded shadow'>
          <Text className='mb-8 text-lg'>Edit child name</Text>
          <JoonTextInput
            onChangeText={text => handleEditChildInputChange(childToEdit.childNameIndex, text)}
            placeholder={user.children[childToEdit.childNameIndex]}
            accessibilityLabel="Edit name"
          />
          <View className='flex-row self-end'>
            <TouchableOpacity
              className='items-center p-4 w-[100] mx-4 border bg-green-500 border-gray-400 rounded'
              onPress={() => handleEditChild(childToEdit.childNameIndex, childToEdit.nameEdit)} >
              <Text className='text-[#ffffff]'>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className='items-center p-4 w-[100] border bg-red-500 border-gray-400 rounded'
              onPress={() => toggleModal(-1, '')} >
              <Text className='text-[#ffffff]'>Discard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default AddChildren
