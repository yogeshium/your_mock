export default function manipulate(mock) {
  return {
    title: mock.title,
    duration:
      Number(mock.duration.hours) * 60 * 60 +
      Number(mock.duration.minutes) * 60 +
      Number(mock.duration.seconds),
    sections: mock.sections.map((section, index) => {
      return {
        id: index,
        duration:
          Number(section.duration.hours) * 60 * 60 +
          Number(section.duration.minutes) * 60 +
          Number(section.duration.seconds),
        title: section.title,
        questions: section.questions.map((question, qindex)=>{
            return {
                id: qindex,
                duration: Number(question.duration.hours) * 60 * 60 +
                Number(question.duration.minutes) * 60 +
                Number(question.duration.seconds),
                content: question.title,
                answer: 1,
                optionChosen: 0,
                status: 0,
                options: question.options.map((option,oindex)=>{
                    return {
                        id: oindex,
                        content: option.title,
                    }
                })
            }
        })
      };
    }),
  };
}
