import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Sidebar from "../components/Sidebar";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.header}>Select Sales Person</Text>
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

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  mainContent: { flex: 1, padding: 20 },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  filters: { marginBottom: 10 },
  productGrid: { borderWidth: 1, padding: 10, borderRadius: 5 },
  orderSummary: { padding: 10, borderTopWidth: 1, marginTop: 10 },
});

export default HomeScreen;
