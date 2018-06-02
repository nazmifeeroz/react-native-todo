import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const { height, width } = Dimensions.get("window");

class TodoList extends Component {
  state = {
    isEditing: false,
    isCompleted: false,
    todoValue: ""
  };

  toggleItem = () => {
    this.setState(prevState => {
      return {
        isCompleted: !prevState.isCompleted
      };
    });
  };

  startEditing = () => {
    const { textValue } = this.props;
    this.setState({
      isEditing: true,
      todoValue: textValue
    });
  };

  finishEditing = () => {
    this.setState({
      isEditing: false
    });
  };

  controlInput = textValue => {
    this.setState({ todoValue: textValue });
  };

  render() {
    const { isEditing, isCompleted, todoValue } = this.state;
    const { textValue } = this.props;

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
        {isEditing ? (
          <TextInput
            value={todoValue}
            style={[
              styles.text,
              styles.input,
              isCompleted ? styles.strikeText : styles.unstrikeText
            ]}
            multiline={true}
            returnKeyType={"done"}
            onBlur={this.finishEditing}
            onChangeText={this.controlInput}
          />
        ) : (
          <Text
            style={[
              styles.text,
              isCompleted ? styles.strikeText : styles.unstrikeText
            ]}
          >
            {textValue}
          </Text>
        )}
        {this.state.isEditing ? (
          <View style={styles.buttons}>
            <TouchableOpacity onPressOut={this.finishEditing}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>✅</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.buttons}>
            <TouchableOpacity onPressOut={this.startEditing}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>✏</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>❌</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
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
    alignItems: "center",
    justifyContent: "space-between"
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
  },
  rowContainer: {
    flexDirection: "row",
    width: width / 2,
    alignItems: "center",
    justifyContent: "space-between"
  },
  buttons: {
    flexDirection: "row"
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10
  },
  input: {
    marginVertical: 15,
    width: width / 2,
    paddingBottom: 5
  }
});

export default TodoList;
