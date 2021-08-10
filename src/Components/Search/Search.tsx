import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import LeftAside from "../LeftAside/LeftAside";
import "./Search.css";
import Containers from "../Containers/Containers";
import { useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const Search: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [displayText, setDisplayText] = useState<string>("");

  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    const readyText = setTimeout(() => setDisplayText(text), 500);
    return () => clearTimeout(readyText);
  }, [text]);

  return (
    <div className="search">
      <LeftAside />
      <div className="search__wrapper">
        <form className="" noValidate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="TextSearch"
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />
        </form>

        {displayText ? (
          <>
            <MobileStepper
              variant="dots"
              steps={5}
              position="static"
              activeStep={activeStep}
              className="root"
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === 4}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
            <Containers text={displayText} page={activeStep} />
          </>
        ) : (
          <div>No images here. Would you try to search for anything else?</div>
        )}
      </div>
    </div>
  );
};

export default Search;
