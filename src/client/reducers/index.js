import { combineReducers } from "redux";
import { basics } from "./basicsReducer";
import { formations } from "./formationsReducer";
import { projects } from "./projectsReducer";
import { skills } from "./skillsReducer";

export const rootReducer = combineReducers({
  basics,
  skills,
  projects,
  formations,
});
