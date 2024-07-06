import { Colors } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import IconButton from "../UI/Icon-Button";
import Button from "../UI/Button";
import { useNavigation } from "expo-router";
import { useDispatch } from "react-redux";
import { deleteExpenses } from "@/store/redux/expense";
import { ExpenseType } from "@/Types";

interface ManageInputPropsType {
  id?: string;
  method: string;
}

export default function ManageInput({ id, method }: ManageInputPropsType) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function addhandler() {}
  function updateHandler(id?: string) {
    console.log("update", id);
  }

  function deleteHandler(id?: string) {
    dispatch(deleteExpenses({ id }));
    navigation.goBack();
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      {/* Button Container */}
      <View style={styles.buttons}>
        <Button mode="flat" onPress={cancelHandler} newStyle={styles.button}>
          Cancel
        </Button>
        <Button
          newStyle={styles.button}
          onPress={method === "update" ? () => updateHandler(id) : addhandler}
        >
          {method === "update" ? "Update" : "Add"}
        </Button>
      </View>
      {/* Button Container End */}

      {method === "update" && (
        <View style={styles.deleteContainer}>
          <IconButton
            name="trash"
            color="red"
            size={36}
            onPress={() => deleteHandler(id)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.App.primary500,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: Colors.App.primary,
    alignItems: "center",
  },
});
