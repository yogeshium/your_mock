const Response = () => {
  return (
    <div className="response-container">
      <div className="button-container">
        <div className="submit-button-container">
          <button className="btn btn-submit">End</button>
        </div>
        <div className="prev-next-mark-buttton-container">
          <button className="btn btn-mark">Mark for Review</button>
          <div className="prev-next-button-container">
            <button className="btn btn-prev">Previous</button>
            <button className="btn btn-next">Next</button>
          </div>
        </div>
      </div>
      <div className="color-info-container">
        <div className="color-info">
          <div className="color-circle current"></div>
          <div className="color-mark">Current</div>
        </div>
        <div className="color-info">
          <div className="color-circle not-attempted"></div>
          <div className="color-mark">Not Attempted</div>
        </div>
        <div className="color-info">
          <div className="color-circle answered"></div>
          <div className="color-mark">Answered</div>
        </div>
        <div className="color-info">
          <div className="color-circle not-answered"></div>
          <div className="color-mark">Not Answered</div>
        </div>
        <div className="color-info">
          <div className="color-circle marked-review"></div>
          <div className="color-mark">Marked For Review</div>
        </div>
      </div>
    </div>
  );
};
export default Response;
