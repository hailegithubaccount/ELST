import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const AddMoney = () => {
  const router = useRouter();

  return (
    <View style={styles.Main}>
      <View style={styles.icons}>
        <TouchableOpacity
          onPress={() => router.push('/openPage')}
          style={styles.container}
        >
          <View style={styles.iconarrow}>
            <Icon name="arrow-left" size={20} color="white" />

          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => router.push('/openPage')}
          style={styles.container}
        >
          <View style={styles.iconarrow}>
            <Icon name="shield" size={30} color="white" />
          </View>
        </TouchableOpacity>
        <View style={styles.icons}></View>



      </View>
      <View style={{ justifyContent: 'flex-start' }}>
        <Text style={{ color: 'white', fontSize: 35, fontWeight: 'bold' }}>
          Add Money
        </Text>
      </View>
      {/*  this one is the first box */}
      <View style={styles.box}>

        <View style={styles.circle}>
          <Icon name="credit-card" size={20} color="rgba(0, 0, 255, 0.5)
" />

        </View>

        <View style={styles.twotext}>
          <Text style={{
            color: 'white',

          }}>WISE ASIA-PACIFIC</Text>
          <Text style={{
            color: 'rgba(243, 242, 247, 0.5)',

          }}>VISA-7390</Text>
        </View>


        <TouchableOpacity
          style={styles.button}

        >
          <Text style={styles.buttonText}>change</Text>
        </TouchableOpacity>


      </View>
      {/* the second box */}
      <View style={styles.box}>
        <View style={{ justifyContent: 'center', alignContent: "center", alignItems: "center" }}>
          <View style={{ justifyContent: 'center', alignContent: "center", alignItems: "center", flexDirection: 'row' }}>
            <Image
              source={require('../../assets/images/America.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
                left: 15,


              }}
            />
            <Text style={{ color: 'white', marginLeft: 30 }}>
              SGd  
               <Icon name=  'chevron-down'size={13} color="white" />
            </Text>

          </View>


          <Text style={{
            color:
              "rgba(243, 242, 247, 0.5)"
          }}> balance is 0</Text>


        </View>
        <View style={{ marginRight: 15 }}>
          <Text style={{ color: 'white',fontWeight:'bold',fontSize:20 }}>$20</Text>
          <Text style={{ color: ' "rgba(243, 242, 247, 0.5)"' }}>No fee</Text>
        </View>
      </View>





    </View>

  );
};

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: "black"
  },
  icons: {
    flexDirection: 'row',
    gap: 260,
    marginHorizontal: 20,
    marginTop: 20


  },
  button: {
    backgroundColor: "gray",
    width: 100,
    height: 40,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
     marginRight:20






  },
  buttonText: {
    color: '#D3D3D3',
    fontSize: 18,
    fontWeight: 'bold',
   






  },
  box: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#171515ff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 20,
    height: 70,
    alignItems: 'center'



  },
  circle: {
    backgroundColor: '#201a1aff',
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderRadius: 50


  }

});


export default AddMoney;