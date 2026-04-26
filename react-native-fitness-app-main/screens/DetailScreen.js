import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Image source={{ uri: exercise.image }} style={styles.image} />
      <Text style={styles.desc}>{exercise.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  desc: {
    fontSize: 16,
  },
});