import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Head() {

  return (
    
    <View style={styles.containerHeader}>
        <Icon
            name='menu'
            size={32}
            color='#000'
        />
        
        <Text style={styles.txtLogo}>Easy Recipes</Text>
        <Icon
            name='search'
            size={32}
            color='#000'
        />
    </View>
  );
}

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%'
    },
  txtLogo: {
    fontSize: 33,
    fontWeight: '900',
    color: '#ec9006',
    marginTop: 20,
    marginBottom: 20,
  },
});