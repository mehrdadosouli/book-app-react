import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
// import { Provider } from "react-redux";
// import store from "./app/store";

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
        <div>
          <Header />
          <Body />
        </div>
      {/* </Provider> */}
    </>
  );
}

export default App;
