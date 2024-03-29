import "../../../../src/styles/App.css";
import Stepper from "react-stepper-horizontal/lib/Stepper";

const UplaodingDocView = (props) => {
  const { steps, activeStep, onClickNext, errorMessage, onClickBack } = props;

  return (
    <div className="box-container">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        activeColor={"#d80825"}
        size={40}
        circleTop={50}
        circleFontSize={15}
        completeBarColor={"#d80825"}
        completeColor={"#d80825"}
      />
      {steps[activeStep].componenet}
      <div className="error-section">
        <small>{errorMessage}</small>
      </div>
      <div className="btn-container">
      <button
        className="btn btn-primary btn-next1"
        id="next-btn"
        onClick={() => onClickNext()}
      >
        Next
      </button>
      {console.log(activeStep)}
      {activeStep !== 0 && <button
        className="btn btn-primary btn-next"
        id="back-btn"
        onClick={() => onClickBack()}
      >
        Back
      </button>}
      </div>
    </div>
  );
};

export default UplaodingDocView;
