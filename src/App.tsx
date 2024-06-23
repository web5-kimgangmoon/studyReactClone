import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
import "./index.scss";
import Header, { IHeader } from "./components/header/header";
import Body, { IBody } from "./components/body/body";
import Footer, { IFooter } from "./components/footer/footer";

interface IProps {}
interface IState {
  Header: IHeader;
  Body: IBody;
  Footer: IFooter;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      Header: {},
      Body: {
        Top: { title: "리그오브레전드", userCount: 323 },
        Center: {
          currentCate: "전체",
          superCateList: ["전체", "어쩔"],
          allCateList: { haha: "하하", wt: "이런" },
        },
      },
      Footer: {},
    };
  }
  componentDidMount() {
    console.log("hello react");
  }
  render(): React.ReactNode {
    return (
      <div className="bg-gray-200 min-h-screen">
        <Header></Header>
        <Body Top={this.state.Body.Top} Center={this.state.Body.Center}></Body>
        <Footer></Footer>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
