import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 49,
    backgroundColor: "#131313",
    flexDirection: "row",
    width: "100%",
    borderWidth: 2,
    borderColor: "black",
    alignItems: 'center',
  },
  image: {
    width: 75,
    height: 75,
    marginRight: 10,
  },
  rightContainer: {
    justifyContent: 'space-around',
    marginLeft: 15,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 100,
    justifyContent: 'space-around'
  },
  title: {
    color: "white",
    fontSize: 18,
  },
  artist: {
    color: "lightgray",
    fontSize: 18,
  },
})

export default styles;
