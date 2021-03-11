import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const GoalInput = ({ addGoalHandler, visible, cancelGoalInput }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
    
    const onAddGoal = () => {
        addGoalHandler(enteredGoal)
        setEnteredGoal('')
    }

    const onCancelHandler = () => {
        cancelGoalInput();
        setEnteredGoal('')
    }

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Course Goal'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='ADD' onPress={onAddGoal} />
        <Button color='#ff4500' title='Cancel' onPress={onCancelHandler} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  
});

export default GoalInput;
