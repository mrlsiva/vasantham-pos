import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={[styles.sidebar, expanded ? styles.expanded : styles.collapsed]}>
      <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.menuButton}>
        <Ionicons name={expanded ? "close" : "menu"} size={24} color="white" />
      </TouchableOpacity>

      {expanded && (
        <>
          <Text style={styles.menuItem}>Sales</Text>
          <Text style={styles.menuItem}>Inventory</Text>
          <Text style={styles.menuItem}>Accounting</Text>
          <Text style={styles.menuItem}>People</Text>
          <Text style={styles.menuItem}>Reports</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: "#19AD9F",
    paddingTop: 40,
    paddingHorizontal: 10,
    height: "100%",
  },
  collapsed: { width: 60 },
  expanded: { width: 200 },
  menuButton: { marginBottom: 20 },
  menuItem: { color: "white", fontSize: 18, marginVertical: 10 },
});

export default Sidebar;
