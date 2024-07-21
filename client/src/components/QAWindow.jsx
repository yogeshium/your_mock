import Heading from "./Heading";

const QAWindow = () => {
  return (
    <div className="qa-container">
      <Heading />
      <div className="question-container">
        <div className="question-id">Q1</div>
        <br className="line-break"/>
        <div className="question-content">
          The IAS Exam for 2024 prelims phase was scheduled to take place on 26
          May 2024. However, due to the impending general elections, the IAS
          prelims has been postponed to 16 June 2024. IAS Mains 2024 will
          commence on 20 September 2024. Check the links below for more details.
        </div>
        
        <div className="question-images"></div>
        <div className="options-container">
          <div className="option-content">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label>
          </div>
          <div className="option-content">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label>
          </div>
          <div className="option-content">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label>
          </div>
          <div className="option-content">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">HTML</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QAWindow;
