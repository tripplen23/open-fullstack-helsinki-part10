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
    marginTop: 5,
  },
});

const FormikTextInput = ({ name, style, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        style={[styles.inputContainer, style]}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
