import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
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
      <View style={{justifyContent:'flex-start'}}>
        <Text style={{color:'white',fontSize:35,fontWeight:'bold'}}>
          Add Money
        </Text>
      </View>
      <View style={styles.box}>
         <Icon name="arrow-left" size={20} color="white" />
         <Text style={{color:'white'}}>hailemichael</Text>
         
            <TouchableOpacity 
                  style={styles.button} 
                 
                >
                  <Text style={styles.buttonText}>Account</Text>
                </TouchableOpacity>

    


         




       

      </View>



    </View>
  
  );
};

const styles = StyleSheet.create({
 Main:{
  flex:1,
  backgroundColor:"black"
 },
 icons:{
  flexDirection:'row',
  gap:260,
  marginHorizontal:20,
  marginTop:20
  

 },


});

export default AddMoney;