import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Atm = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity onPress={() => router.push('/openPage')} style={styles.backButton}>
        <Icon name="arrow-left" size={20} color="white" />
      </TouchableOpacity>

      {/* ATM Image */}
      <View style={styles.cardContainer}>
        <Image
          source={require('../../assets/images/atm3.png')}
          style={styles.cardImage}
        />
      </View>

      {/* Texts */}
      <View style={styles.textSection}>
        <Text style={styles.mainTitle}>Premium · Space Grey</Text>
        <Text style={styles.subText}>
          Made from plastic with a striking shimmer effect, our beautiful Premium card feels as good as it looks.
        </Text>
      </View>

      {/* Color Options */}
      <View style={styles.colorOptions}>
        <View style={[styles.colorCircle, { backgroundColor: '#3a3a3a' }]} />
        <View style={[styles.colorCircle, { backgroundColor: '#f2caca' }]} />
        <View style={[styles.colorCircle, { backgroundColor: '#aba9dc' }]} />
      </View>

      {/* Button */}
      <TouchableOpacity style={styles.ctaButton} onPress={() => router.push('/openPage')}>
        <Text style={styles.ctaButtonText}>Get card for free</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000012',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 2,
  },
  cardContainer: {
    marginTop: 100,   // moved image down a bit
    height: 260,      // increased height for bigger image
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '95%',    // larger width
    height: '100%',
    resizeMode: 'contain',
  },
  textSection: {
    marginTop: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mainTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: '#b8b8d1',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    gap: 20,
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  ctaButton: {
    backgroundColor: 'white',
    paddingVertical: 14,
    borderRadius: 30,
    marginTop: 40,
    alignItems: 'center',
    marginHorizontal: 40,
  },
  ctaButtonText: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export default Atm;
