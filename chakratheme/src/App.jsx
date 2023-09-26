import { Box, Button } from "@chakra-ui/react";
import ButtonPreview from "./components/Buttons/ButtonPreview";
import Landingpage from "./components/Landingpage";
import SecondButtonPreview from "./components/Buttons/secondButtonPreview";
import CheckboxPreview from "./components/Checkbox/CheckboxPreview";
import IconButtonPreview from "./components/IconButtons/IconButtonPreview";
import ChoiceGroup from "./components/ChoiceGroup/ChoiceGroup";

function App() {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} bg={"White"}>
        <Landingpage />
        <ButtonPreview />
        <SecondButtonPreview />
        <IconButtonPreview />
        <CheckboxPreview />
        <ChoiceGroup />
      </Box>
    </>
  );
}

export default App;
