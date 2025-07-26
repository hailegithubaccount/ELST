import { View, TextInput, StyleSheet, SafeAreaView, Image, ImageBackground,Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/s.png')} 
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
         
          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/images/image.jpg')}
              style={styles.profileImage}
            />
          </View>

          <View style={styles.searchSection}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#999"
            />
          </View>

       
          <View style={styles.iconsContainer}>
            <View style={styles.circle}>
    <Icon name="user" size={20} color="#333" />
  </View>
  <View style={styles.circle}>
    <Icon name="bell" size={20} color="#333" />
  </View>
          </View>
        </View>
        <View style={styles.text}>
          <View style={styles.firstandsecondtext}>
            <Text style={styles.text1}>Personal.Account</Text>
            <Text style={styles.text2}>$12.
               <Text style={styles.smallText}>54</Text>
            </Text>
           <TouchableOpacity 
        style={styles.button} 
       
      >
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>

          </View>
           






        </View>
{/* the following one is the four middle tab */}

        <View style={styles.MiddleTab}>

          <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
         <Icon name="plus" size={20} color="white" style={styles.iconTab} />
      </TouchableOpacity>
       <Text style={styles.text1}>Add Money</Text>
      

          </View>





            <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
         <Icon name="exchange" size={20} color="white" style={styles.iconTab} />
      </TouchableOpacity>
       <Text style={styles.text1}>Move</Text>
      

          </View>
            <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
         <Icon name="home" size={20} color="white" style={styles.iconTab} />
      </TouchableOpacity>
       <Text style={styles.text1}>Details</Text>
      

          </View>
            <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
       <Icon name="ellipsis-h" size={20} color="white" style={styles.iconTab} />

      </TouchableOpacity>
       <Text style={styles.text1}>more</Text>
      

          </View>
          
</View>

{/* the follwing one is the bigbox */}


<View style={styles.Bigbox}>
  <View style={styles.flagwithText}>
   <View style={{ width: 120, height: 120 }}>
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
      borderRadius:30,
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 0,
      opacity: 0.7, // optional transparency
    }}
  />
</View>
<View style={styles.flagtext}>
  <Text style={styles.flagtext1}>SGD-USD</Text>
  <Text style={styles.flagtext2}>Today,23:23</Text>

</View>

  </View>



</View>




       
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  //for big box
 Bigbox: {
  width: 300,
  height: 200,
  margin:20,
 
  borderColor: 'red',
  borderWidth: 2 // Add this if you want the border to appear
},
flagwithText:{
  flexDirection:'row'

},
flagtext2:{
  color:'white'

},
flagtext1:{
  color:'white'

},
 
// for MIDDLe tab
 MiddleTab: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginHorizontal: 10,
  marginBottom:30,
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
 
}
,
// for header
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
  searchInput: {
    height: 40,
    width:195,
    borderWidth: 1,
    borderColor: 'rgb(248,248,255)',
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 14,
    backgroundColor: '#f5f5f5', // Ensure input is readable
  },
  iconsContainer: {
    flexDirection: 'row',       // Align icons horizontally
    justifyContent:'center',  // Center icons inside the circle
    
  },
   circle: {
    width: 35,                  // Diameter of the circle
    height: 35, 
                 // Diameter of the circle
    borderRadius: 20,           // Half of width/height to make it circular
    backgroundColor:'#fff',    // Background color (white)
    justifyContent: 'center',   // Center icon vertically
    alignItems: 'center',       // Center icon horizontally
    borderWidth: 1,             // Optional border
    borderColor: '#ddd',        // Light gray border
                // Android shadow
  },
  icon: {
    marginHorizontal: 8,
  },
  // for middle text dollar
  firstandsecondtext:{
   
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,

    
  },
  text1:{
    color:'white',
    fontSize:15,

  },
  text2:{
    color:'white',
    fontSize:50,
    

  },
  smallText:{
     fontSize:25,

  },
    button: {
    backgroundColor: "#696969",
    padding: 10,
    borderRadius:50,
    minWidth: 100,
    alignItems: 'center',
     marginBottom:100,
  },
  buttonText: {
    color: '#D3D3D3',
    fontSize: 18,
    fontWeight: 'bold',
   
  },


});

export default SearchScreen;
