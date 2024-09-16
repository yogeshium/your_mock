//Model Import
import Mock from "../models/Mock.js";

const getMockById = async (id) => {
  return await Mock.findById(id,{
    "sections.questions.answer":0,
  });
};

const insertMock = async (data) => {
  return await Mock.create(data);
};

export { getMockById, insertMock };
