import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function AddExerciseScreen({ route, navigation }) {
  const { setExercises } = route.params;

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');

  const addExercise = () => {
    const newExercise = {
      id: Math.random().toString(),
      name: name,
      description: desc,
      image: 'https://via.placeholder.com/150'
    };

    setExercises(prev => [...prev, newExercise]);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Exercise Name"
        style={styles.input}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Description"
        style={styles.input}
        onChangeText={setDesc}
      />
      <Button title="Add Exercise" onPress={addExercise} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});