import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View } from 'react-native';

const album = {
    id: '8',
    name: 'Good vibes',
    by: 'Spotify',
    numberOfLikes: 38,
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
    song: [{
        id: '1',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'High on You',
        artist: 'Helen',
    },
    {
        id: '2',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Neon Pursuit',
        artist: 'Helen',
    },
    {
        id: '3',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'Back to You',
        artist: 'Helen',
    },
    {
        id: '4',
        imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
        title: 'What ever yo want to be',
        artist: 'Helen',
    }]
  }

const AlbumScreen = () => {
    const route = useRoute();

    return (
        <View>
            <Text style={{color: 'white'}}>This is Album Screnn</Text>
        </View>
    )
}

export default AlbumScreen;