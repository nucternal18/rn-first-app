import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals((currentGoal) => [
      ...currentGoal,
      { id: Math.random().toString(), value: enteredGoal },
    ]);
    setIsAddMode(false)
  };

  const onDelete = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter( goal => goal.id !== goalId)
    })
  }

  const cancelGoalInput = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add a New Goal' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} addGoalHandler={addGoalHandler} cancelGoalInput={cancelGoalInput} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(item) => <GoalItem id={item.item.id} item={item} onDelete={onDelete} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
