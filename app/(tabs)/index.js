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
       <Text style={styles.text1}>Personal</Text>
      

          </View>





            <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
         <Icon name="exchange" size={20} color="white" style={styles.iconTab} />
      </TouchableOpacity>
       <Text style={styles.text1}>Personal</Text>
      

          </View>
            <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
         <Icon name="home" size={20} color="white" style={styles.iconTab} />
      </TouchableOpacity>
       <Text style={styles.text1}>Personal</Text>
      

          </View>
            <View style={styles.withtext}>
             <TouchableOpacity 
        style={styles.Tabbutton} 
       
      >
       <Icon name="ellipsis-v" size={20} color="white" style={styles.iconTab} />

      </TouchableOpacity>
       <Text style={styles.text1}>Personal</Text>
      

          </View>
          
</View>




       
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 

  MiddleTab:{
    flexDirection:'row',
     justifyContent:'space-between',
     marginBottom:70,
     marginEnd:10,
     marginStart:10,
    
     

  },
  Tabbutton:{
    backgroundColor: "#696969",
    alignItems:'center',
    color:'white',
   
    alignContent:'center',
     justifyContent:'center', 

alignItems:'center'    ,
    width: 50,
    height: 50,
    borderRadius: 50,

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
