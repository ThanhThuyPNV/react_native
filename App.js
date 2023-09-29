import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState(alphabet.map((letter, index) => ({ id: index, letter })));

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleRemove = () => {
    setCards(cards.filter(card => card.id !== currentIndex));
  };

  const handleReset = () => {
    setCards(alphabet.map((letter, index) => ({ id: index, letter })));
  };

  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Text style={styles.text}>Card ({cards.length} card)</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.text_card}>{cards[currentIndex].letter}</Text>
      </View>
      <View>
        <TouchableHighlight onPress={handlePrevious}>
          <Text style={styles.text2}>Previous</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleNext}>
          <Text style={styles.text3}>Next</Text>
        </TouchableHighlight>
      </View>
      <View>
        <TouchableHighlight onPress={handleRemove}>
          <Text style={styles.remove}>Remove</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleReset}>
          <Text style={styles.reset}>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFF3',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:40,
  },
  card:{
    backgroundColor:'#AE4559',
    width:370,
    height: 420,
    marginLeft:'auto',
    marginRight:'auto',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10,
    marginTop:20,
  },
  text_card:{
    color:'#fff',
    fontSize: 240,
    fontWeight:'bold',
  },
  text:{
    fontSize:20,
    textAlign:'center',
    marginBottom: 10,
    // marginTop:10,

  },
  text1:{
    borderBottomWidth:1,
    borderBottomColor:'#CCC',
    backgroundColor:'#FFF'
  },
  text2: {
    borderWidth: 1,
    padding: 12,
    borderColor: '#AE4559',
    backgroundColor: '#fff',
    color:'#AE4559',
    width:120,
    textAlign: 'center',
    // height:40,
    marginTop:30,
    borderRadius:5,
    marginLeft:20,
 },
 text3:{
  borderWidth: 1,
  padding: 12,
  borderColor: '#AE4559',
  backgroundColor: '#fff',
  color:'#AE4559',
  width:120,
  textAlign: 'center',
  // height:40,
  marginTop:-45,
  borderRadius:5,
  marginLeft:270,
 },
 remove:{
  borderWidth: 1,
  padding: 12,
  borderColor: '#AE4559',
  backgroundColor: '#fff',
  color:'#AE4559',
  width:370,
  textAlign: 'center',
  borderRadius:5,
  marginLeft:'auto',
  marginRight: 'auto',
  marginTop:20,
 },
 reset:{
  borderWidth: 1,
  padding: 12,
  borderColor: '#AE4559',
  backgroundColor: '#fff',
  color:'#AE4559',
  width:370,
  textAlign: 'center',
  borderRadius:5,
  marginLeft:'auto',
  marginRight: 'auto',
  marginTop:20,
 }
});
