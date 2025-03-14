import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Recipes() {

    const receitas = [
        {
            id: 1,
            title: 'Bolo de cenoura',
            time: '00:40',
            img: require('../../../assets/imgs/bolo-cenoura.jpeg'),
            descricao: 'A clássica combinação entre bolo de cenoura e cobertura de chocolate é uma versão super popular e querida entre os brasileiros.',
        },
        {
            id: 2,
            title: 'Petit gateau',
            time: '00:40',
            img: require('../../../assets/imgs/petti.jpg'),
            descricao: 'O petit gateau, que significa "pequeno bolo" em francês, é uma sobremesa clássica.',
        },
        {
            id: 3,
            title: 'Pé de moleque',
            time: '00:30',
            img: require('../../../assets/imgs/pe-de-moleque.jpg'),
            descricao: 'O pé de moleque é um doce de amendoim tradicional nas festas juninas, mas tão gostoso que pode ser servido o ano todo.',
        },
        {
            id: 4,
            title: 'Pudim',
            time: '00:50',
            img: require('../../../assets/imgs/pudim.png'),
            descricao: 'O pudim é delicioso, barato e bem rápido de preparar! Com sua textura macia e sabor inconfundíve',
        },
        
    ]

  return (
    <SafeAreaView style={styles.containerRecipes}>
        <FlatList
            data={receitas}
            renderItem={({item}) => (
                <View style={styles.areaReceitas}>
                    <ImageBackground
                    source={item.img}
                    style={styles.recipeImg}
                    imageStyle={{ borderRadius: 15 }}
                    >
                    
                        <View style={styles.areaTextos}>
                            <Text style={styles.tituloReceita}>{item.title}</Text>
                            <View style={styles.receitaTime}>
                            <Icon name="time-outline" size={32} color="white" />
                            <Text style={styles.timeText}>{item.time}</Text>
                            </View>
                            <Text style={styles.desc}>{item.descricao}</Text>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={styles.txtBtn}>Ver mais</Text>
                        </TouchableOpacity>
                        </View>

                    </ImageBackground>
            </View>
            )}
            keyExtractor={(item) => item.id}
        />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerRecipes: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    marginTop: 20,
  },
  areaReceitas: {
    position: 'relative',
    borderRadius: 15,
    marginBottom: 10,
  },
  recipeImg: {
    width: 350,
    height: 200,
    borderRadius: 15,
  },
  areaTextos: {
    flex: 1,
    justifyContent: '',
    alignItems: 'start',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
    padding: 15,
  },
  tituloReceita: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  receitaTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
    fontWeight: 'bold'
  },
  desc: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 5,
    marginTop: 5,
  },
  btn: {
    backgroundColor: '#3096e1',
    width: '30%',
    borderRadius: 100,
    paddingVertical: 6,
    position: 'absolute',
    bottom: 12,
    left: 15,
  },
  txtBtn: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
