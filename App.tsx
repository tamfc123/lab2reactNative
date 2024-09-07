/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {Alert, SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState(''); 
  const [result, setResult] = useState<number | null>(null); 
  const [isCheck, setIsCheck] = useState(false);

  // ham xu ly nut bamm
  const handlePress = (value: string) => {
    if (isCheck) {
      // Nếu kết quả đã được tính và bấm toán tử, tiếp tục tính từ kết quả
      if (['+', '-', '*', '/'].includes(value)) {
        setInput(result?.toString() + value);
      } else {
        setInput(value);
      }
      setIsCheck(false);
    } else {
      setInput((prev) => prev + value); 
    }
  };

  // ham xu ly phep tinh
  const calculateResult = () => {
    try {
      const res = eval(input); 
      setResult(res); 
      setIsCheck(true); // Đánh dấu đã tính toán 
    } catch (error) {
      Alert.alert('Phép tính không hợp lệ!');
    }
  };
  //ham tinh căn bậc 2
  const square = () => {
    try {
      const value = parseFloat(input);
      if (isNaN(value)) {
        Alert.alert('Vui lòng nhập một số hợp lệ!');
      } else {
        const squareRootResult = Math.sqrt(value); 
        setResult(squareRootResult); 
        setInput(`√(${value})`); 
        setIsCheck(true); // Đánh dấu đã tính toán
      }
    } catch (error) {
      Alert.alert('Phép tính không hợp lệ!');
    }
  };
  // ham tinh mu 2
  const powerTwo = () => {
    try {
      const value = parseFloat(input);
      if (isNaN(value)) {
        Alert.alert('Vui lòng nhập một số hợp lệ!');
      } else {
        const powerTwoResult = Math.pow(value, 2); 
        setResult(powerTwoResult); 
        setInput(`sqr(${value})`); 
        setIsCheck(true); // Đánh dấu đã tính toán
      }
    } catch (error) {
      Alert.alert('Phép tính không hợp lệ!');
    }
  };
  // ham tinh log2
  const logTwo = () => {
    try {
      const value = parseFloat(input);
      if (isNaN(value) || value <= 0) {
        Alert.alert('Vui lòng nhập một số hợp lệ và lớn hơn 0!');
      } else {
        const logTwoResult = Math.log2(value); 
        setResult(logTwoResult); 
        setInput(`log2(${value})`); 
        setIsCheck(true); // Đánh dấu đã tính toán
      }
    } catch (error) {
      Alert.alert('Phép tính không hợp lệ!');
    }
  };
  // ham tinh sin 
  const sin = () => {
    try {
      const value = parseFloat(input);
      if (isNaN(value)) {
        Alert.alert('Vui lòng nhập một số hợp lệ!');
      } else {
        const sinResult = Math.sin(value * Math.PI / 180); 
        setResult(sinResult); 
        setInput(`sin(${value})`); 
        setIsCheck(true); // Đánh dấu đã tính toán
      }
    } catch (error) {
      Alert.alert('Phép tính không hợp lệ!');
    }
  };
  // ham tinh cos
  const cos = () => {
    try {
      const value = parseFloat(input);
      if (isNaN(value)) {
        Alert.alert('Vui lòng nhập một số hợp lệ!');
      } else {
        const cosResult = Math.cos(value); 
      setResult(cosResult); 
      setInput(`cos(${value})`); 
      setIsCheck(true); // Đánh dấu đã tính toán xong
    }
  } catch (error) {
    Alert.alert('Phép tính không hợp lệ!');
  }
};
  // ham xoa toan bo du lieu
  const clear = () => {
    setInput('');
    setResult(null);
    setIsCheck(false);
  };

  // ham xoa ki tu cuoi cung
  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.inputText}>{input}</Text>
        {result !== null && <Text style={styles.resultText}>{result}</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.side}>
          <View style={styles.row}>
          <Button label="sin" onPress={sin} />
          <Button label="cos" onPress={cos} />
            <Button label="C" onPress={clear} />
            <Button label="DEL" onPress={deleteLast} />
          </View>
          <View style={styles.row}>
            <Button label="log2" onPress={logTwo} />
            <Button label="√" onPress={square} />
            <Button label="sqr" onPress={powerTwo} />
            <Button label="/" onPress={() => handlePress('/')}/>
          </View>
          <View style={styles.row}>
            <Button label="7" onPress={() => handlePress('7')} />
            <Button label="8" onPress={() => handlePress('8')} />
            <Button label="9" onPress={() => handlePress('9')} />
            <Button label="*" onPress={() => handlePress('*')}/>
          </View>
          <View style={styles.row}>
            <Button label="4" onPress={() => handlePress('4')} />
            <Button label="5" onPress={() => handlePress('5')} />
            <Button label="6" onPress={() => handlePress('6')} />
            <Button label="-" onPress={() => handlePress('-')}/>
          </View>
          <View style={styles.row}>
            <Button label="1" onPress={() => handlePress('1')} />
            <Button label="2" onPress={() => handlePress('2')} />
            <Button label="3" onPress={() => handlePress('3')} />
            <Button label="+" onPress={() => handlePress('+')}/>
          </View>
          <View style={styles.row}>
            <Button label="0" onPress={() => handlePress('0')} />
            <Button label="." onPress={() => handlePress('.')} />
            <Button label="=" onPress={calculateResult} style={styles.operatorButton} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
// Component Button
const Button = ({ label, onPress, style = {} }: { label: string; onPress: () => void; style?: object }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  resultContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
    backgroundColor: '#ddd',
  },
  inputText: {
    fontSize: 24,
  },
  resultText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#00bcd4',
  },
  buttonContainer: {
    flex: 7, 
    flexDirection: 'row',
  },
  side: {
    flex: 3,  
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1
  },
  buttonText: {
    fontSize: 25,
  },
  operatorButton: {
    backgroundColor: '#33CCFF',
    color: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
