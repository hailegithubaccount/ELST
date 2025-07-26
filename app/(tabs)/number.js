// App.tsx
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';

const App = () => {
  const [amount, setAmount] = useState('50');
  const [spentAmount] = useState('0');

  const handleNumberPress = (num: string) => {
    if (amount === '0') {
      setAmount(num);
    } else {
      setAmount(amount + num);
    }
  };

  const handleDelete = () => {
    if (amount.length > 1) {
      setAmount(amount.slice(0, -1));
    } else {
      setAmount('0');
    }
  };

  const handleDecimal = () => {
    if (!amount.includes('.')) {
      setAmount(amount + '.');
    }
  };

  const handleOperator = (operator: string) => {
    // Basic calculator operations
    switch (operator) {
      case '+':
        setAmount(amount + '+');
        break;
      case '-':
        setAmount(amount + '-');
        break;
      case '×':
        setAmount(amount + '*');
        break;
      case '÷':
        setAmount(amount + '/');
        break;
      case '=':
        try {
          const result = eval(amount);
          setAmount(result.toString());
        } catch {
          setAmount('0');
        }
        break;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000000" />
      
  
    
     

      {/* the header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Set a monthly limit</Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>${amount}</Text>
          <View style={styles.cursor} />
        </View>
        <Text style={styles.spentText}>Spent this month: ${spentAmount}</Text>
      </View>

      {/* Set Limit Button */}
      <TouchableOpacity style={styles.setLimitButton}>
        <Text style={styles.setLimitText}>Set limit</Text>
      </TouchableOpacity>

      {/* Numeric Keypad */}
      <View style={styles.keypad}>
        {/* Operators Row */}
        <View style={styles.operatorsRow}>
          {['+', '-', '×', '÷', '='].map((op) => (
            <TouchableOpacity
              key={op}
              style={styles.operatorButton}
              onPress={() => handleOperator(op)}
            >
              <Text style={styles.operatorText}>{op}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Number Grid */}
        <View style={styles.numberGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <TouchableOpacity
              key={num}
              style={styles.numberButton}
              onPress={() => handleNumberPress(num.toString())}
            >
              <Text style={styles.numberText}>{num}</Text>
              <Text style={styles.letterText}>
                {num === 1 ? '' : num === 2 ? 'ABC' : num === 3 ? 'DEF' : 
                 num === 4 ? 'GHI' : num === 5 ? 'JKL' : num === 6 ? 'MNO' :
                 num === 7 ? 'PQRS' : num === 8 ? 'TUV' : 'WXYZ'}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Bottom Row */}
        <View style={styles.bottomRow}>
          <TouchableOpacity style={styles.decimalButton} onPress={handleDecimal}>
            <Text style={styles.decimalText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zeroButton} onPress={() => handleNumberPress('0')}>
            <Text style={styles.numberText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
            <Text style={styles.deleteText}>⌫</Text>
          </TouchableOpacity>
        </View>
      </View>

    
      
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
 
  statusText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  statusIcons: {
    flexDirection: 'row',
    gap: 5,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    left: 20,
    top: 20,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  mainContent: {
    alignItems: 'center',
    paddingVertical: 30,
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  amount: {
    color: '#FFFFFF',
    fontSize: 48,
    fontWeight: 'bold',
  },
  cursor: {
    width: 2,
    height: 48,
    backgroundColor: '#007AFF',
    marginLeft: 2,
  },
  spentText: {
    color: '#8E8E93',
    fontSize: 16,
  },
  setLimitButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginHorizontal: 40,
    marginBottom: 30,
  },
  setLimitText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  keypad: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  operatorsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  operatorButton: {
    width: 20,
    height: 20,
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  operatorText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  numberGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  numberButton: {
    width: '30%',
    height: 40,
    backgroundColor: '#929295ff',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  numberText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  letterText: {
    color: '#8E8E93',
    fontSize: 10,
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  decimalButton: {
    width: 50,
    height: 50,
    backgroundColor: '#1C1C1E',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decimalText: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  zeroButton: {
    width: '60%',
    height: 60,
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    width: 50,
    height: 50,
    backgroundColor: '#1C1C1E',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  footerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  revolutText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  footerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  curatedText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  mobbinText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default App;