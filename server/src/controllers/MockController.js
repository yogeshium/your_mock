//Service Import
import * as mockService from "../services/MockService.js";

const getMockById = async (req, res) => {
  try {
   
    const result = await mockService.getMockById(req.params.id);

    /* Adding status and optionChosen in every question */
    const data = {
      ...result.toObject(),
      sections: result.toObject().sections.map((section) => {
          return {
            ...section,
            questions: section.questions.map((question) => {
              return { ...question, status: 0, optionChosen: 0 };
            }),
          };
        }),
    };
    
    return res.status(200).json({ success: true, data: data });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

const dummyData = {
  title: "Exam1",
  duration: 2 * 60 * 60,
  sections: [
    {
      id: 1,
      title: "Mathematics",
      questions: [
        {
          id: 1,
          content: "How are U?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
        {
          id: 2,
          content: "How U doin?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
      ],
    },
    {
      id: 2,
      title: "Physics",
      questions: [
        {
          id: 1,
          content: "How are U?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
        {
          id: 2,
          content: "How U doin?",
          options: [
            {
              id: 1,
              content: "I am fine",
            },
            {
              id: 2,
              content: "I am not fine",
            },
            {
              id: 3,
              content: "I am yogesh",
            },
          ],
          optionChosen: 0,
          status: 0,
        },
      ],
    },
  ],
};

const insertMock = async (req, res) => {
  let data = req.body;
  // console.log(data);
  try {
    const result = await mockService.insertMock(data);
    return res.status(200).json({ success: true, id: result._id });
    // return res.status(200).json({ success: true});
  } catch (err) {
    console.log(err);
    return res.status(500).json({ success: false, message: err.message });
  }
};

export { getMockById, insertMock };
