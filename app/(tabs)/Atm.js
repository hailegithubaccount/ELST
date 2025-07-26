import React from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Atm = () => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require('../../assets/images/s.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={() => router.push('/openPage')}

          style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="white" />
        </TouchableOpacity>
        <View style={styles.atmContainer}>
          <Image
            source={require('../../assets/images/atm2.png')}
            style={styles.atmImage}
          />
        </View>
        <View style={{
          marginTop: 30,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={styles.mainText}>
            Permium :space Gray

          </Text>
          <Text style={styles.TitleText}>
            made from plastic  with stream shimmer effect our beautifly permium crad feels as good as it looks

          </Text>
        </View>

        <View style={styles.Boxes}>
          <View style={[styles.box]}>


          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>

        </View>

        <View style={styles.button}>
          <TouchableOpacity
          onPress={() => router.push('/openPage')}
          >
   <Text>Get card for free</Text>
          </TouchableOpacity>
          
        </View>




      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 40,
    width: 300,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 30,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },


  Boxes: {
    flexDirection: 'row',
    gap: 30,
    marginTop: 50,
    marginLeft: 100,
  },
  box: {
    width: 50,
    height: 50,
    borderColor: "red",
    borderRadius: 50,
    backgroundColor: 'gray'


  },

  mainText: {
    color: 'white',


  },

  TitleText: {
    color: "rgba(243, 242, 247, 0.5)",
  },



  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backButton: {
    marginTop: 30,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },
  atmContainer: {
    width: '90%',
    height: 300,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  atmImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    opacity: 0.7,
  },
});

export default Atm;