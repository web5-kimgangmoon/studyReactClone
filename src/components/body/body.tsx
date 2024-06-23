import { ReactNode, Component } from "react";
import css from "../../css/body/body";
import { imgAttr } from "../../attributes/body";

import Top, { ITop } from "./top";
import Center, { ICenter } from "./center";

interface IProps {
  Top: ITop;
  Center: ICenter;
}
interface IState {}

class Body extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    console.log("body 들어갑니다");
  }
  render(): ReactNode {
    return (
      <div>
        <Top
          title={this.props.Top.title}
          userCount={this.props.Top.userCount}
        ></Top>
        <Center
          currentCate={this.props.Center.currentCate}
          superCateList={this.props.Center.superCateList}
          allCateList={this.props.Center.allCateList}
        ></Center>
      </div>
    );
  }
}

export interface IBody extends IProps {}
export default Body;
