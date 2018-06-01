import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { height, width } = Dimensions.get("window");

class TodoList extends Component {
  state = {
    isEditing: false,
    isCompleted: false
  };
  toggleItem = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleItem}>
          <View
            style={[
              styles.circle,
              this.state.isCompleted
                ? styles.completeCircle
                : styles.incompleteCircle
            ]}
          />
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            this.state.isCompleted ? styles.strikeText : styles.unstrikeText
          ]}
        >
          Todo List will show here
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 50,
    borderBottomColor: "#bbb",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 20
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    marginRight: 20,
    marginLeft: 20
  },
  completeCircle: {
    borderColor: "#bbb"
  },
  incompleteCircle: {
    borderColor: "#DA4453"
  },
  strikeText: {
    color: "#bbb",
    textDecorationLine: "line-through"
  },
  unstrikeText: {
    color: "#29323c"
  }
});

export default TodoList;
