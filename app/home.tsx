import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Sidebar from "../components/Sidebar";
import { Picker } from '@react-native-picker/picker';
import styles from '../assets/scss/styles.js';

const HomeScreen = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <View style={styles.fullWidth}>

        <Text style={styles.h2}>Welcome to Vasantham POS</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={styles.picker}
            dropdownIconColor="#ffffff" // for Android, optional
          >
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="Python" value="python" />
          </Picker>
        </View>
        {/* Dropdowns & Search */}
        <View style={styles.filters}>
          <Text>Category: All</Text>
          <Text>Sub-Category: All</Text>
        </View>

        {/* Product Grid */}
        <ScrollView>
          <View style={styles.productGrid}>
            <Text>Products will be listed here</Text>
          </View>
        </ScrollView>

        {/* Order Summary */}
        <View style={styles.orderSummary}>
          <Text>Sub Total: ₹0</Text>
          <Text>Discount: ₹0</Text>
          <Text>Tax: ₹0</Text>
          <Text>Grand Total: ₹0</Text>
        </View>
      </View>
     </View>
  );
};

export default HomeScreen;
