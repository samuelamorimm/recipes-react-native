import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';  // Importando o Header corretamente

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#ccc', 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  gradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  
});
