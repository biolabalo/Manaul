import { useState } from "react";
import data from "../../quiz.json";
import Modal from "react-modal";
import { Animated } from "react-animated-css";
import Results from "./result";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "100%",
  },
};

Modal.setAppElement("#root");

const Quiz = ({ modalIsOpen, setIsOpen }) => {
  // questions are indexed from 0
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionAndAnswer, setquestionAndAnswer] = useState({});

  let typeOfResultUserWillSee = true;

  const answerQuestion = ({ value, isRejection }) => {
    const userResponse = { value, isRejection };
    const userResponseObject = { [currentQuestionIndex]: userResponse };

    // question has never been answered before
    if (!questionAndAnswer.hasOwnProperty(currentQuestionIndex)) {
      const updatedResponse = { ...questionAndAnswer, ...userResponseObject };
      setquestionAndAnswer(updatedResponse);
      return setCurrentQuestionIndex((prev) => prev + 1);

      // updating a question that has been answered before
    } else {

        const copyOfCurrentQuestion = {...questionAndAnswer}
        delete copyOfCurrentQuestion[currentQuestionIndex]; 
        const updatedResponse = { ...copyOfCurrentQuestion, ...userResponseObject };
        setquestionAndAnswer(updatedResponse);
        return setCurrentQuestionIndex((prev) => prev + 1);

    }

  };

  // Back to Home Button
  const BackToHomeButton = () => (
    <button
      className="m-t-b-5"
      onClick={() => {
        setCurrentQuestionIndex(0);
        setquestionAndAnswer({});
        setIsOpen(false);
      }}
    >
      {" "}
      ← Back to Home
    </button>
  );

  const BackButton = () => (
    <button
      className="m-t-b-5"
      onClick={() => {
        setCurrentQuestionIndex((prev) => prev - 1);
      }}
    >
      {" "}
      ← Back to question {currentQuestionIndex}
    </button>
  );

  // if block calculaitng what result the user should see after answering all question
  if (currentQuestionIndex + 1 > data?.questions.length) {
    for (var key in questionAndAnswer) {
      var obj = questionAndAnswer[key];
      for (var prop in obj) {
        if (prop === "isRejection" && obj[prop] === true) {
          typeOfResultUserWillSee = false;
        }
      }
    }
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {data &&
          data?.questions.length > 0 &&
          (currentQuestionIndex + 1 <= data?.questions.length ? (
            <Animated
              animationIn="bounceInLeft"
              animationOut="fadeOut"
              isVisible={true}
            >
              <div>
                <div className="d-flex space-between">
                  <h1 className="m-t-b-5">
                    Question {currentQuestionIndex + 1} of{" "}
                    {data?.questions.length}
                  </h1>

                  {currentQuestionIndex === 0 && <BackToHomeButton />}
                  {currentQuestionIndex > 0 && <BackButton />}
                </div>

                <p className="text_center m-t-b-5">
                  {data?.questions[currentQuestionIndex]?.question}
                </p>

                <div className="d-flex space-evenly flex-wrap">
                  {data?.questions[currentQuestionIndex]?.options.map(
                    (question, index) => {
                      if (
                        questionAndAnswer.hasOwnProperty(
                          currentQuestionIndex 
                        ) &&
                        questionAndAnswer[currentQuestionIndex].value ===
                          question.value
                      ) {
                        return (
                          <div
                            onClick={() => answerQuestion(question)}
                            className='hair-img-container selected-option'
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: question.display,
                            }}
                          ></div>
                        );
                      }

                      return (
                        <div
                          onClick={() => answerQuestion(question)}
                          className='hair-img-container'
                          key={index}
                          dangerouslySetInnerHTML={{
                            __html: question.display,
                          }}
                        ></div>
                      );
                    }
                  )}
                </div>
              </div>
            </Animated>
          ) : (
            <Results
              typeOfResultUserWillSee={typeOfResultUserWillSee}
              BackToHomeButton={BackToHomeButton}
            />
          ))}
      </Modal>
    </>
  );
};

export default Quiz;
