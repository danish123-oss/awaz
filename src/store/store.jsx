import { createStore, combineReducers } from "redux";

function userSection(oldData = { cu: {} }, newData) {
  if (newData.type === "LoginUser") {
    oldData.cu = newData.payload;
  } else {
    oldData.cu = {};
  }
  return { ...oldData };
}

function artistSection(oldData = { Acu: {} }, newData) {
  if (newData.type === "loginArtist") {
    oldData.Acu = newData.payload;
  } else {
    oldData.Acu = {};
  }
  return { ...oldData };
}
let allSections = combineReducers({ userSection, artistSection });
let myStore = createStore(allSections);
export default myStore;
