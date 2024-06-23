import { ReactNode, Component } from "react";
import css from "../../css/body/body";
import { imgAttr } from "../../attributes/body";

interface IProps {
  title: string;
  userCount: number;
}
interface IState {}

class Top extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount(): void {
    console.log("body에 header 붙었어요~");
  }
  render(): ReactNode {
    return (
      <div className={css.top}>
        <div className={css.iconLine_container}>
          <div className={css.iconLine}>
            <div className={css.topIcon}>
              <img
                src={imgAttr.headerIcon.src}
                alt={imgAttr.headerIcon.alt}
              ></img>
            </div>
            <div className={css.textBox}>
              <h1 className={css.title}>{this.props.title}</h1>
              <div className={css.userCount}>온라인 {this.props.userCount}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export interface ITop extends IProps {}
export default Top;
