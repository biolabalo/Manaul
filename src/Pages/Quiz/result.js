const Results = ({
  typeOfResultUserWillSee,
  BackToHomeButton
}) => {

  return typeOfResultUserWillSee ? (
    <>
      <BackToHomeButton />
      <p className="text-center green-color m-t-b-5 ">
        Great news! We have the perfect treatment for your hair loss. Proceed to
        <a id="m-link" href="https://www.manual.co/">
          {" "}
          &nbsp;www.manual.co &nbsp;
        </a>
        , and prepare to say hello to your new hair!
      </p>
    </>
  ) : (
    <>
      <BackToHomeButton />
      <p className="text-center m-t-b-5 red-color">
        Unfortunately, we are unable to prescribe this medication for you. This
        is because finasteride can alter the PSA levels, which maybe used to
        monitor for cancer. You should discuss this further with your GP or
        specialist if you would still like this medication.
      </p>
    </>
  );
};

export default Results;