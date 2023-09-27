import { Box, Button } from "@chakra-ui/react";
import ButtonPreview from "./components/Buttons/ButtonPreview";
import Landingpage from "./components/Landingpage";
import SecondButtonPreview from "./components/Buttons/secondButtonPreview";
import CheckboxPreview from "./components/Buttons/CheckboxPreview";
import IconButtonPreview from "./components/Buttons/IconButtonPreview";
import DropdownPreview from "./components/dropdowns/DropdownPreview";

function App() {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} bg={"White"}>
        <Landingpage />
        <ButtonPreview />
        <SecondButtonPreview />
        <IconButtonPreview />
        <CheckboxPreview />
        <DropdownPreview />
      </Box>
    </>
  );
}

export default App;
