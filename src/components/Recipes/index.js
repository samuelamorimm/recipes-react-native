import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground, TouchableOpacity, FlatList, Modal, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

export default function Recipes() {

    const [modalVisible, setModalVisible] = useState(false)
    const [recipeSelected, setRecipeSelected] = useState(null)

    function abrirModal(recipe) {
      setRecipeSelected(recipe)
      setModalVisible(true)
    }

    function fecharModal() {
      setRecipeSelected(null)
      setModalVisible(false)
    }

    const receitas = [
        {
            id: 1,
            title: 'Bolo de cenoura',
            time: '00:40',
            img: require('../../../assets/imgs/bolo-cenoura.jpeg'),
            descricao: 'A clássica combinação entre bolo de cenoura e cobertura de chocolate é uma versão super popular e querida entre os brasileiros.',
            modoPreparo: [
              'Numa forma para pudim, de 20 centímetros de diâmetro, coloque 6 colheres de sopa de açúcar e leve ao fogo médio até virar uma calda caramelada, por mais ou menos 3 minutos.',
              'Retire do fogo e vá virando a fôrma, de modo que a calda forre todo o fundo e lateral da mesma. Reserve.',
              'Num liquidificador coloque uma lata de leite condensado, uma lata de leite, a mesma medida da lata de leite condensado, e 3 ovos e bata bem por mais ou menos 1 minuto.',
              'Desligue o liquidificador e deixe a mistura descansar por 15 minutos.',
              'Com esta espera a espuma fica sobre a superfície, o pudim fica sem furinhos, mas macio.',
              'Com a ajuda de uma colher segure a espuma que está na superfície e despeje o conteúdo do liquidificador, com cuidado, na fôrma caramelada reservada acima e leve ao forno médio, em banho-maria, a 180 graus Celsius por uma hora e meia.',
              'Retire do forno, deixe esfriar e leve à geladeira por mais ou menos duas horas. Desenforme e sirva em seguida.'
            ],
            ingredientes: [
              '6 colheres de sopa de açúcar',
              '1 lata de leite condensado',
              '1 lata de leite, use a mesma medida do leite condensado',
              '3 ovos',
            ]
        },
        {
            id: 2,
            title: 'Petit gateau',
            time: '00:40',
            img: require('../../../assets/imgs/petti.jpg'),
            descricao: 'O petit gateau, que significa "pequeno bolo" em francês, é uma sobremesa clássica.',modoPreparo: [
              'Numa forma para pudim, de 20 centímetros de diâmetro, coloque 6 colheres de sopa de açúcar e leve ao fogo médio até virar uma calda caramelada, por mais ou menos 3 minutos.',
              'Retire do fogo e vá virando a fôrma, de modo que a calda forre todo o fundo e lateral da mesma. Reserve.',
              'Num liquidificador coloque uma lata de leite condensado, uma lata de leite, a mesma medida da lata de leite condensado, e 3 ovos e bata bem por mais ou menos 1 minuto.',
              'Desligue o liquidificador e deixe a mistura descansar por 15 minutos.',
              'Com esta espera a espuma fica sobre a superfície, o pudim fica sem furinhos, mas macio.',
              'Com a ajuda de uma colher segure a espuma que está na superfície e despeje o conteúdo do liquidificador, com cuidado, na fôrma caramelada reservada acima e leve ao forno médio, em banho-maria, a 180 graus Celsius por uma hora e meia.',
              'Retire do forno, deixe esfriar e leve à geladeira por mais ou menos duas horas. Desenforme e sirva em seguida.'
            ],
            ingredientes: [
              '6 colheres de sopa de açúcar',
              '1 lata de leite condensado',
              '1 lata de leite, use a mesma medida do leite condensado',
              '3 ovos',
            ]
        },
        {
            id: 3,
            title: 'Pé de moleque',
            time: '00:30',
            img: require('../../../assets/imgs/pe-de-moleque.jpg'),
            descricao: 'O pé de moleque é um doce de amendoim tradicional nas festas juninas, mas tão gostoso que pode ser servido o ano todo.',modoPreparo: [
              'Numa forma para pudim, de 20 centímetros de diâmetro, coloque 6 colheres de sopa de açúcar e leve ao fogo médio até virar uma calda caramelada, por mais ou menos 3 minutos.',
              'Retire do fogo e vá virando a fôrma, de modo que a calda forre todo o fundo e lateral da mesma. Reserve.',
              'Num liquidificador coloque uma lata de leite condensado, uma lata de leite, a mesma medida da lata de leite condensado, e 3 ovos e bata bem por mais ou menos 1 minuto.',
              'Desligue o liquidificador e deixe a mistura descansar por 15 minutos.',
              'Com esta espera a espuma fica sobre a superfície, o pudim fica sem furinhos, mas macio.',
              'Com a ajuda de uma colher segure a espuma que está na superfície e despeje o conteúdo do liquidificador, com cuidado, na fôrma caramelada reservada acima e leve ao forno médio, em banho-maria, a 180 graus Celsius por uma hora e meia.',
              'Retire do forno, deixe esfriar e leve à geladeira por mais ou menos duas horas. Desenforme e sirva em seguida.'
            ],
            ingredientes: [
              '6 colheres de sopa de açúcar',
              '1 lata de leite condensado',
              '1 lata de leite, use a mesma medida do leite condensado',
              '3 ovos',
            ]
        },
        {
            id: 4,
            title: 'Pudim',
            time: '00:50',
            img: require('../../../assets/imgs/pudim.png'),
            descricao: 'O pudim é delicioso, barato e bem rápido de preparar! Com sua textura macia e sabor inconfundíve',modoPreparo: [
              'Numa forma para pudim, de 20 centímetros de diâmetro, coloque 6 colheres de sopa de açúcar e leve ao fogo médio até virar uma calda caramelada, por mais ou menos 3 minutos.',
              'Retire do fogo e vá virando a fôrma, de modo que a calda forre todo o fundo e lateral da mesma. Reserve.',
              'Num liquidificador coloque uma lata de leite condensado, uma lata de leite, a mesma medida da lata de leite condensado, e 3 ovos e bata bem por mais ou menos 1 minuto.',
              'Desligue o liquidificador e deixe a mistura descansar por 15 minutos.',
              'Com esta espera a espuma fica sobre a superfície, o pudim fica sem furinhos, mas macio.',
              'Com a ajuda de uma colher segure a espuma que está na superfície e despeje o conteúdo do liquidificador, com cuidado, na fôrma caramelada reservada acima e leve ao forno médio, em banho-maria, a 180 graus Celsius por uma hora e meia.',
              'Retire do forno, deixe esfriar e leve à geladeira por mais ou menos duas horas. Desenforme e sirva em seguida.'
            ],
            ingredientes: [
              '6 colheres de sopa de açúcar',
              '1 lata de leite condensado',
              '1 lata de leite, use a mesma medida do leite condensado',
              '3 ovos',
            ]
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
                        <TouchableOpacity style={styles.btn} onPress={() => abrirModal(item)}>
                            <Text style={styles.txtBtn}>Ver mais</Text>
                        </TouchableOpacity>
                        </View>

                    </ImageBackground>
            </View>
            )}
            keyExtractor={(item) => item.id}
        />

        <Modal
          style={styles.modal}
          animationType='slide'
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.modalView}>
            <View style={styles.containerModal}>
              {recipeSelected && <ScrollView>
                <>
                <Text style={styles.tituloModal}>{recipeSelected.title}</Text>

                <Text style={styles.titulo2}>Ingredientes: </Text>

                {recipeSelected.ingredientes.map((ingredientes, index) => {
                  return <Text style={styles.titulo3}><Text style={{fontWeight: 'bold'}}>.</Text> {ingredientes}</Text>
                })}

                <Text style={styles.titulo2}>Modo de preparo: </Text>

                {recipeSelected.modoPreparo.map((passo, index) => {
                  return <Text style={styles.titulo3}><Text style={{fontWeight: 'bold'}}>{index + 1}.</Text> {passo}</Text>
                })}
                </>
              </ScrollView>}

              <TouchableOpacity style={styles.btnModal} onPress={fecharModal}>
                  <Text style={styles.txtBtn}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </Modal>
      
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
    width: 330,
    height: 200,
    borderRadius: 15,
  },
  areaTextos: {
    flex: 1,
    justifyContent: '',
    alignItems: 'start',
    backgroundColor: 'rgba(0, 0, 0, 0.53)',
    borderRadius: 15,
    padding: 15,
  },
  tituloReceita: {
    fontSize: 24,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
  },
  titulo2: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
  },
  titulo3: {
    color: '#fff',
    marginTop: 5,
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
    backgroundColor: '#ec9006',
    width: '30%',
    borderRadius: 100,
    paddingVertical: 6,
    position: 'absolute',
    bottom: 12,
    left: 15,
  },
  btnModal: {
    backgroundColor: '#ec9006',
    width: '80%',
    borderRadius: 100,
    paddingVertical: 12,
    alignSelf: 'center',
    bottom: 0,
    marginTop: 20,
  }, 
  txtBtn: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  modalView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerModal: {
    backgroundColor: 'gray',
    padding: 20,
    width: '90%',
    height: 550,
    borderRadius: 10,
  },
  tituloModal: {
    fontSize: 30,
    fontWeight: '900',
    color: '#fff',
    marginBottom: 5,
  },
  
});
