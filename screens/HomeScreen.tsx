import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Google',
  albums: [
    {
      id: '1',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
      artistsHeadline: 'Taylor Swift, Avicii'
    },
    {
      id: '2',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
      artistsHeadline: 'Post Malone, Avicii'
    },
    {
      id: '3',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
      artistsHeadline: 'Journey, Avicii'
    },
    {
      id: '4',
      imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjzC2JyZDZ_RaWf0qp11K0lcvB6b6kYNMoqtZAQ9hiPZ4cTIOB',
      artistsHeadline: 'Escape, Avicii'
    },
  ]
}

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory 
        title={albumCategory.title} 
        albums={albumCategory.albums}
      />
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
