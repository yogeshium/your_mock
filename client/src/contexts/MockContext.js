import { createContext, useContext, useReducer } from "react";
const MockContext = createContext(null);
const MockDispatchContext = createContext(null);

export function MockProvider({ children }) {
  const [mock, dispatch] = useReducer(mockReducer, {
    title: "",
    duration: { hours: "", minutes: "", seconds: "" },
    sections: [],
    authorized: {
      accessType: "public",
      emails: "",
    },
    author: "",
    instructions: "",
  });

  return (
    <MockContext.Provider value={mock}>
      <MockDispatchContext.Provider value={dispatch}>
        {children}
      </MockDispatchContext.Provider>
    </MockContext.Provider>
  );
}

export function useMock() {
  return useContext(MockContext);
}

export function useMockDispatch() {
  return useContext(MockDispatchContext);
}

function mockReducer(mock, action) {
  switch (action.type) {
    case "Change In Title": {
      // console.log("triggered");
      return {
        ...mock,
        title: action.title,
      };
    }
    case "Change In Duration": {
      // console.log("triggered");
      return {
        ...mock,
        duration: action.duration,
      };
    }
    case "Change In Instructions": {
      // console.log("triggered");
      return {
        ...mock,
        instructions: action.instructions,
      };
    }

    case "Change In Authorized": {
      // console.log("triggered");
      return {
        ...mock,
        authorized: {
          emails: action.emails,
          accessType: action.accessType,
        },
      };
    }

    case "Create New Section": {
      // console.log(mock);
      return {
        ...mock,
        sections: [
          ...mock.sections,
          {
            title: "",
            duration: { hours: "", minutes: "", seconds: "" },
            questions: [],
            edit: true,
          },
        ],
      };
    }
    case "Edit This Section": {
      return {
        ...mock,
        sections: mock.sections.map((section, index) =>
          index === action.sectionIndex
            ? { ...section, edit: true }
            : { ...section, edit: false }
        ),
      };
    }

    case "Save This Section": {
      return {
        ...mock,
        sections: mock.sections.map((section, index) =>
          index === action.sectionIndex
            ? { ...action.newSection, questions: section.questions }
            : section
        ),
      };
    }

    case "Create New Question": {
      return {
        ...mock,
        sections: mock.sections.map((section, index) =>
          index === action.sectionIndex
            ? {
                ...mock.sections[action.sectionIndex],
                questions: [
                  ...mock.sections[action.sectionIndex].questions,
                  {
                    content: "",
                    duration: { hours: "", minutes: "", seconds: "" },
                    options: [],
                    edit: true,
                  },
                ],
              }
            : section
        ),
      };
    }
    case "Edit This Question": {
      return {
        ...mock,
        sections: mock.sections.map((section, sIdx) =>
          sIdx === action.sectionIndex
            ? {
                ...section,
                questions: section.questions.map((question, qIdx) =>
                  qIdx === action.questionIndex
                    ? { ...question, edit: true }
                    : { ...question, edit: false }
                ),
              }
            : section
        ),
      };
    }

    case "Save This Question": {
      return {
        ...mock,
        sections: mock.sections.map((section, sIdx) =>
          sIdx === action.sectionIndex
            ? {
                ...section,
                questions: section.questions.map((question, qIdx) =>
                  qIdx === action.questionIndex ? action.question : question
                ),
              }
            : section
        ),
      };
    }

  }
}
