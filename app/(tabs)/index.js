import React from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Atm = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/s.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.atmContainer}>
          <Image
            source={require('../../assets/images/atm2.png')}
            style={styles.atmImage}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center', // Center horizontally
    justifyContent: 'flex-start', // Align content to the top
  },
  backButton: {
    marginTop: 30,
    alignSelf: 'flex-start', // Align to the left
    marginLeft: 30,
  },
  atmContainer: {
    width: '80%', // Adjust as needed
    height: 300, // Adjust as needed
    marginTop: 20, // Adjust as needed
    alignItems: 'center',
    justifyContent: 'center',
  },
  atmImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain', // Or 'cover' depending on desired behavior
    opacity: 0.7, // Optional transparency
  },
});

export default Atm;
