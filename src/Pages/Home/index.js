import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Header from '../../components/Header';  // Importando o Header corretamente
import Recipes from '../../components/Recipes';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#ccc', 'white']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradient}
      >
        <Header /> 

      <View style={styles.areaTopicos}>
        <ScrollView horizontal={true}>
          <TouchableOpacity style={styles.topico}><Text style={styles.txtTopico}>Destaques</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topico}><Text style={styles.txtTopico}>Rápidas</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topico}><Text style={styles.txtTopico}>Internacionais</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topico}><Text style={styles.txtTopico}>Receitas Destaques</Text></TouchableOpacity>
          <TouchableOpacity style={styles.topico}><Text style={styles.txtTopico}>Receitas Destaques</Text></TouchableOpacity>
        </ScrollView>
      </View>

      <Recipes style={{marginBottom: 20}}/>
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
  areaTopicos: {
    width: '100%',
  },
  topico: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginLeft: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#b5b5b5'
  },
  txtTopico: {
    fontWeight: 'bold',
    color: '#3096e1',
    
  }
});
