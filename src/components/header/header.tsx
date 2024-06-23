import { ReactNode, Component } from "react";
import css from "../../css/header/header";

interface IProps {}
interface IState {}

class Header extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    console.log("header 들어갑니다~");
  }
  render(): ReactNode {
    return <div></div>;
  }
}

export interface IHeader extends IProps {}
export default Header;
