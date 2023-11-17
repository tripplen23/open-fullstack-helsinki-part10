import { StyleSheet } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 2,
    paddingHorizontal: 10,
    height: 50,
  },
  errorText: {
    marginLeft: 10,
    color: "#d73a4a",
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);

  // TODO: Check if the field is touched and the error message is present
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={[
          styles.inputContainer,
          style,
          showError && { borderColor: "#d73a4a" }, // Apply red border if there is an error
        ]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {/* Show the error message if the value of showError variable is true */}
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
