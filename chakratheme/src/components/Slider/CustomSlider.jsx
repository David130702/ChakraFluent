import { useState, useRef } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export default function CustomSlider() {
  const [drag, setDrag] = useState(false);
  const [color, setColor] = useState(false);
  const thumbRef = useRef();
  return (
    <Slider
      aria-label="slider-ex-1"
      defaultValue={30}
      w={"20%"}
      onChangeStart={() => {
        setDrag(!drag);
      }}
      onBlur={() => {
        setDrag(!drag);
      }}
      onChangeEnd={() => {
        thumbRef.current.blur();
      }}
    >
      <SliderTrack
        onMouseEnter={() => {
          console.log("enterd");
          setColor(!color);
        }}
        onMouseLeave={() => {
          console.log("leaved");
          setColor(!color);
        }}
      >
        <SliderFilledTrack bg={drag || color ? "#3978d2" : "black"} />
      </SliderTrack>
      <SliderThumb
        ref={thumbRef}
        onMouseEnter={() => {
          console.log("enterd");
          setColor(!color);
        }}
        onMouseLeave={() => {
          console.log("leaved");
          setColor(!color);
        }}
      />
    </Slider>
  );
}
