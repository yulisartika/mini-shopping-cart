import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./rootReducer";

// saving to local storage
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    alert(e.message);
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null)
      return localStorage.setItem("state", JSON.stringify([]));
    return JSON.parse(serializedState);
  } catch (e) {
    alert(e.message);
  }
}

const persistedData = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedData,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
