import { Text, View } from "react-native";
import { render, screen } from "@testing-library/react-native";

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

describe("Greeting", () => {
  it("Renders a greeting message based on the name prop", () => {
    render(<Greeting name="Ben" />);

    screen.debug;

    expect(screen.getByText("Hello Ben!")).toBeDefined(); //Jest matcher
  });
});
