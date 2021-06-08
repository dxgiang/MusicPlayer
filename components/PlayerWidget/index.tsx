import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from './styles';

import { Audio } from 'expo-av';
import { Sound } from "expo-av/build/Audio";
const song = {
    id: '1',
    uri: 'https://the-weeknd-albums.s3.amazonaws.com/The+Weeknd+-+Blinding+Lights.mp3am',
    imageUri: 'https://www.spectrumcentercharlotte.com/assets/img/GV_NATL_0121_TheWeeknd_AfterHours_SpectrumCenter_1080x1080-526e5d3be5.jpg',
    title: 'Blindling Lights',
    artist: 'The Weeknd',
}

const PlayerWidget = () => {

    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }

    useEffect(() => {
        playCurrentSong();
    }, [])

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        <AntDesign name="hearto" size={30} color={"white"} />
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )

}

export default PlayerWidget;