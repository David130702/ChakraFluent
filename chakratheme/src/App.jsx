import { Box } from "@chakra-ui/react";
import ButtonPreview from "./components/Buttons/ButtonPreview";
import Landingpage from "./components/Landingpage";
import SecondButtonPreview from "./components/Buttons/secondButtonPreview";
import CheckboxPreview from "./components/Buttons/CheckboxPreview";

function App() {
  return (
    <>
      <Box w={"100vw"} h={"100vh"} bg={"White"}>
        <Landingpage />
        <ButtonPreview />
        <SecondButtonPreview />
        <CheckboxPreview />
      </Box>
    </>
  );
}

export default App;
