import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Eventos = () => {
  const [eventos, setEventos] = useState([]);

  const listarEventos = () => {
    fetch(`${url}/eventos`)
      .then(response => response.json())
      .then(data => {
        setEventos(data.data);
      })
      .catch(err => console.error(err));

  }

  const Item = ({ nome, link }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.nome}>{link}</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    return (
      <View>
        <Item nome={item.nome} />
        <Item nome={item.link} />
      </View>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Eventos</Text>
        <FlatList
          data={eventos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />

      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#2a2a2a',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  }
});


export default Eventos;