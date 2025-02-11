import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ColorButton = ({ backgroundColor, text, textColor, setBgColor }) => {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]}
      onPress={() => setBgColor(backgroundColor)}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const App = () => {
  const [bgColor, setBgColor] = useState('#eef');

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ColorButton 
        backgroundColor='green' 
        text="GREEN" 
        textColor='white' 
        setBgColor={setBgColor}
      />
      <ColorButton 
        backgroundColor='blue' 
        text="BLUE" 
        textColor='white' 
        setBgColor={setBgColor} 
      />
      <ColorButton 
        backgroundColor='brown' 
        text="BROWN" 
        textColor='white' 
        setBgColor={setBgColor} 
      />
      <ColorButton 
        backgroundColor='yellow' 
        text="YELLOW" 
        textColor='black' 
        setBgColor={setBgColor} 
      />
      <ColorButton 
        backgroundColor='red' 
        text="RED" 
        textColor='white' 
        setBgColor={setBgColor} 
      />
      <ColorButton 
        backgroundColor='black' 
        text="BLACK" 
        textColor='white' 
        setBgColor={setBgColor} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eef',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    margin: 30,
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default App;