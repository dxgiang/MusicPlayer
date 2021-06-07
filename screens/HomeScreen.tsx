import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Album from '../components/Album';

const album = {
  id: '1',
  imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
  artistsHeadline: 'Taylor Swift, Avicii'
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Album album={album}>
      </Album>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
