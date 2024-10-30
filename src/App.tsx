import "./index.css";

import { Provider } from "react-redux";
import { store } from "./app/store";

import Layout from "./components/Layout";

export default function App() {

  return (
    <Provider store={store}>
      <Layout/>
    </Provider>
  );
}
