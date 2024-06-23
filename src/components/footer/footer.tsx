import { Component, ReactNode } from "react";
import css from "../../css/footer/footer";
import tagAttr from "../../attributes/footer";

interface IProps {}
interface IState {}

class Footer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    console.log("footer 들어갑니다~");
  }
  render(): ReactNode {
    return <div className={css.footer}></div>;
  }
}

export interface IFooter extends IProps {}
export default Footer;
