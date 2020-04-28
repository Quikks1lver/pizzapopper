import React from "react";
import "./App.css";
import EverythingContainer from "./components/EverythingContainer";
import Header from "./Header";
import Footer from "./Footer";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <EverythingContainer />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
