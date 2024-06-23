import { ReactNode, Component } from "react";
import css from "../../css/body/body";
import { imgAttr } from "../../attributes/body";
import recentIcon from "../../svg/recentIcon.svg";

interface IProps {
  currentCate: string;
  superCateList: string[];
  allCateList: { [value: string]: string };
}
interface IState {}

class Center extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }
  componentDidMount() {
    console.log("body에 center 붙습니다.");
  }
  mk_dropDown = (
    optionList: { [value: string]: string },
    name: string,
    selectCls?: string,
    id?: string
  ): ReactNode => {
    return (
      <select
        className={selectCls ? selectCls : ""}
        id={id ? id : ""}
        name={name}
      >
        {Object.entries(optionList).map((item) => (
          <option value={item[0]}>{item[1]}</option>
        ))}
      </select>
    );
  };
  mk_IconButton = (
    img: { src: string; alt: string },
    name: string,
    id?: string
  ) => {
    return (
      <button type="button" className={css.IconButton} id={id ? id : ""}>
        <div>
          <img src={img.src} alt={img.alt} />
        </div>
        {name}
      </button>
    );
  };
  render(): ReactNode {
    return (
      <div className={css.centerWrapper}>
        <div className={css.center}>
          <div className={css.center_sideBox}>ss</div>
          <div className={css.center_middleBox}>
            <div className={css.center_sticker}>
              <div className="relative">
                <div className="absolute bg-white pointer-events-none">
                  <label className={css.dropDownButton}>
                    {this.props.currentCate}
                  </label>
                </div>
                {this.mk_dropDown(
                  this.props.allCateList,
                  "cateDrop",
                  css.categorySelect
                )}
              </div>
              <div>
                <img
                  src={imgAttr.writerIcon.src}
                  alt={imgAttr.writerIcon.alt}
                />
              </div>
            </div>
            <div className={css.searchLine}>
              <div className={css.IconBox}></div>
            </div>
            <div className={css.center_boardListBox}></div>
          </div>
          <div className={css.center_sideBox}></div>
        </div>
      </div>
    );
  }
}

export interface ICenter extends IProps {}
export default Center;
