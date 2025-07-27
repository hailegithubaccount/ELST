import {
  View,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

const SearchScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/images/s.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/images/image.jpg')}
              style={styles.profileImage}
            />
          </View>

         <View style={styles.searchSection}>
  <View style={styles.searchInputContainer}>
    <Icon 
      name="search" 
      size={16} 
      color="white" 
      style={styles.searchIcon} 
    />
    <TextInput
      style={styles.searchInput}
      placeholder="Search..."
        placeholderTextColor="white"
    />
  </View>
</View>

          <View style={styles.iconsContainer}>
            <View style={styles.circle}>
              <Icon name="bar-chart" size={20} color="white" />
            </View>
            <View style={styles.circle}>
              <Icon name="credit-card" size={20} color="white" />
            </View>
          </View>
        </View>

        {/* Balance */}
        <View style={styles.text}>
          <View style={styles.firstandsecondtext}>
            <Text style={styles.text1}>Personal · Account</Text>
            <Text style={styles.text2}>
              $12.<Text style={styles.smallText}>54</Text>
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Account</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Action Buttons */}
        <View style={styles.MiddleTab}>
          <View style={styles.withtext}>
            <TouchableOpacity
              onPress={() => router.push('/AddMoney')}
              style={styles.Tabbutton}
            >
              <Icon name="plus" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.text1}>Add Money</Text>
          </View>

          <View style={styles.withtext}>
            <TouchableOpacity style={styles.Tabbutton}>
              <Icon name="exchange" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.text1}>Move</Text>
          </View>

          <View style={styles.withtext}>
            <TouchableOpacity style={styles.Tabbutton}>
              <Icon name="home" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.text1}>Details</Text>
          </View>

          <View style={styles.withtext}>
            <TouchableOpacity 
            onPress={() => router.push('/number')}
            style={styles.Tabbutton}>
              <Icon name="ellipsis-h" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.text1}>More</Text>
          </View>
        </View>

        {/* Transaction Boxes */}
        <View style={styles.Bigbox}>
          {[1, 2].map((_, idx) => (
            <View key={idx} style={styles.mainRow}>
              <View style={styles.flagwithText}>
                <View style={styles.flag}>
                  <Image
                    source={require('../../assets/images/America.png')}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 50,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 1,
                    }}
                  />
                  <Image
                    source={require('../../assets/images/Engliand.png')}
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 30,
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      zIndex: 0,
                      opacity: 0.7,
                    }}
                  />
                </View>
                <View style={styles.flagtext}>
                  <Text style={styles.flagtext1}>SGD - USD</Text>
                  <Text style={styles.flagtext2}>Today, 23:23</Text>
                </View>
              </View>

              <View style={styles.THEleftText}>
                <Text style={{ color: 'white' }}>+US$11.49</Text>
                <Text style={{ color: 'rgba(243, 242, 247, 0.5)' }}>-51</Text>
              </View>
            </View>
          ))}

          <View style={{ alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 20 }}>See all</Text>
          </View>
        </View>

        {/* Bottom Navigation Bar */}
        <View style={styles.bottomTab}>
          {[
            { name: 'home', label: 'Home' },
            { name: 'line-chart', label: 'Invest' },
            { name: 'exchange', label: 'Payments' },
            { name: 'bitcoin', label: 'Crypto' },
            { name: 'users', label: 'Lifestyle' },
          ].map((item, index) => (
            <TouchableOpacity key={index} style={styles.bottomTabItem}>
              <Icon name={item.name} size={20} color="#fff" />
              <Text style={styles.bottomTabText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Bigbox: {
    width: 300,
    height: 200,
    margin: 30,
    borderRadius: 30,
    borderWidth: 2,
    backgroundColor: 'rgba(37, 36, 42, 0.5)',
  },
  mainRow: {
    flexDirection: 'row',
    gap: 70,
    marginTop: 20,
    paddingBottom: 20
  },
  THeLEftText: {
    color: 'white'
  },
  flagwithText: {
    flexDirection: 'row',
    gap: 50,
    marginLeft: 30,
  },
  flagtext2: {
    color: 'rgba(243, 242, 247, 0.5)',
    fontSize: 11,
  },
  flagtext1: {
    color: 'white',
  },
  MiddleTab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginBottom: 1
  },
  withtext: {
    flex: 1,
    alignItems: 'center',
  },
  Tabbutton: {
    backgroundColor: 'gray',
    borderRadius: 30,
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  text1: {
    fontSize: 12,
    textAlign: 'center',
  },
  iconTab: {
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  profileContainer: {
    marginRight: 2,
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchSection: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: 195,
    borderWidth: 1,
       borderColor: '#ddd',
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  searchIcon: {
    marginLeft: 15,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color:"white"
    
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  icon: {
    marginHorizontal: 8,
  },
  firstandsecondtext: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  text1: {
    color: 'white',
    fontSize: 15,
  },
  text2: {
    color: 'white',
    fontSize: 50,
  },
  smallText: {
    fontSize: 25,
  },
  button: {
    backgroundColor: "#696969",
    padding: 10,
    borderRadius: 50,
    minWidth: 100,
    alignItems: 'center',
    marginBottom: 100,
  },
  buttonText: {
    color: '#D3D3D3',
    fontSize: 18,
    fontWeight: 'bold',
  },
  bottomTab: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(30, 30, 30, 0.9)',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottomTabItem: {
    alignItems: 'center',
  },
  bottomTabText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default SearchScreen;