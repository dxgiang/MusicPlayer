import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { Text, View , FlatList } from 'react-native';
import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import { useEffect } from 'react';

const AlbumScreen = () => {
    const route = useRoute();

    useEffect( () => {
        console.log(route);
    })

    return (
        <View>
            <FlatList
                data={albumDetails.songs}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={( item ) => item.id}
            />
        </View>
    )
}

export default AlbumScreen;