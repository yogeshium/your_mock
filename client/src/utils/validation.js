const checkFields = (mock) => {
  if (mock.title === "") {
    return "Title field is empty";
  }
  if (
    mock.duration.hours === "" &&
    mock.duration.minutes === "" &&
    mock.duration.seconds === ""
  ) {
    return "Duration field is empty";
  }

  //check sections
  if (mock.sections.length === 0) {
    return "Add at least one section";
  }
  let sectionDuration = false;
  for (let index = 0; index < mock.sections.length; index++) {
    let section = mock.sections[index];

    if (section.title === "") return `Section ${index + 1}'s title is empty`;
    if (
      section.duration.hours !== "" ||
      section.duration.minutes !== "" ||
      section.duration.seconds !== ""
    )
      sectionDuration = true;
    else {
      if (sectionDuration) return `Section ${index + 1}'s duration is empty`;
    }

    if (section.questions.length === 0)
      return `Add atleast 1 question in Section ${index + 1}`;

    //check questions
    let questionDuration = false;
    for (let qindex = 0; qindex < section.questions.length; qindex++) {
      let question = section.questions[qindex];
      if (question.title === "")
        return `Section ${index + 1} Question ${qindex + 1} content is empty`;
      if (
        question.duration.hours !== "" ||
        question.duration.minutes !== "" ||
        question.duration.seconds !== ""
      )
        questionDuration = true;
      else {
        if (questionDuration)
          return `Section ${index + 1} Question ${
            qindex + 1
          } duration is empty`;
      }
      if (question.options.length === 0)
        return `Section ${index + 1} Question ${qindex + 1} has no options`;
      if (question.answer === "")
        return `Section ${index + 1} Question ${qindex + 1}'s Answer is empty`;
      if (
        Number(question.answer) <= 0 ||
        Number(question.answer) > question.options.length
      )
        return `Section ${index + 1} Question ${
          qindex + 1
        }'s Answer should be valid option number`;
    }
  }
  return "ok";
};

// const checkDuration = (mock) => {
//   let mockDuration =
//     Number(mock.duration.hours) * 60 * 60 +
//     Number(mock.duration.minutes) * 60 +
//     Number(mock.duration.seconds);

//   for(let i=0;i<mock.sections.length;i++){
//     let sectionDuration = mock.sections[i].duration;
//     if(sectionDuration)
//   }
// };

export default function validate(mock) {
  return new Promise((resolve, reject) => {
    const resultCheckFields = checkFields(mock);
    if (resultCheckFields !== "ok") {
      reject(resultCheckFields);
    } else {
      resolve(
        // new Promise((resolve, reject) => {
        //   const resultCheckDuration = checkDuration(mock);
        //   if (resultCheckDuration !== "ok") reject(resultCheckDuration);
        //   else resolve(mock);
        // })
        mock
      );
    }
  });
}
