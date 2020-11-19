import React, { useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

const Home = () => {
  useEffect(() => {
    Keyboard.dismiss()
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={{ uri: 'https://www.moblee.com.br/blog/wp-content/uploads/sites/2/2018/04/gesta%CC%83o-de-promoters-1-8-1.png'}}
          style={styles.image}
        >
          <Text style={{fontSize: 48, width: 375, color: 'white', textAlign: "center", backgroundColor: 'rgba(0, 0, 0, .2)'}}>Nyous</Text>
        </ImageBackground>
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
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});


export default Home;