import { useState, useRef, useLayoutEffect } from "react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

export default function CustomSlider({
  size,
  orientation = "horizontal",
  disabled = false,
  ...rest
}) {
  const [drag, setDrag] = useState(false);
  const [color, setColor] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const thumbRef = useRef();

  useLayoutEffect(() => {
    if (disabled === true) {
      setIsDisabled(!isDisabled);
      return;
    }
  }, []);

  return (
    <Slider
      defaultValue={30}
      orientation={orientation}
      aria-label="slider-ex-1"
      minH={orientation === "vertical" && size}
      width={orientation === "horizontal" && size}
      isDisabled={disabled}
      {...rest}
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
          setColor(!color);
        }}
        onMouseLeave={() => {
          setColor(!color);
        }}
        bg={isDisabled ? "#f3f2f1" : "#8a8886"}
      >
        <SliderFilledTrack
          bg={drag || color ? "#3978d2" : isDisabled ? "#a19f9d" : "black"}
        />
      </SliderTrack>
      <SliderThumb
        ref={thumbRef}
        onMouseEnter={() => {
          setColor(!color);
        }}
        onMouseLeave={() => {
          setColor(!color);
        }}
      />
    </Slider>
  );
}
