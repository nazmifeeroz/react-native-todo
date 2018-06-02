import React from "react";
import {
  Dimensions,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView
} from "react-native";
import { AppLoading, LinearGradient } from "expo";
import TodoList from "./components/TodoList";

const { height, width } = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newTodoItem: "",
    dataIsReady: false
  };

  componentDidMount = () => {
    this.loadTodos();
  };

  loadTodos = () => {
    this.setState({ dataIsReady: false });
  };

  newTodoItem = textValue => {
    this.setState({
      newTodoItem: textValue
    });
  };

  addTodo = () => {
    if (this.state.newTodoItem !== "") {
      this.setState({
        // this will make the input field empty on clicking the done button
        newTodoItem: ""
      });
    }
  };

  render() {
    const { newTodoItem, dataIsReady } = this.state;

    if (!dataIsReady) {
      return <AppLoading />;
    }

    return (
      <LinearGradient style={styles.container} colors={["#DA4453", "#89216B"]}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.appTitle}>Syura's Todo List</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Add an item!"
            value={this.state.newTodoItem}
            onChangeText={this.newTodoItem}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView>
            <TodoList textValue={this.state.newTodoItem} />
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f23657",
    alignItems: "center"
  },
  appTitle: {
    color: "#fff",
    fontSize: 36,
    marginTop: 60,
    marginBottom: 30,
    fontWeight: "300"
  },
  card: {
    backgroundColor: "#fff",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 24
  }
});
