import imgAttrTy from "./tagTypes/img";
import topIcon from "../imgs/lol_icon.png";
import writerIcon from "../imgs/icon-write.png";

type tagAttrTy = {
  img: imgAttrTy;
};

export const imgAttr: imgAttrTy = {
  headerIcon: { src: topIcon, alt: "none" },
  writerIcon: { src: writerIcon, alt: "none" },
};

const tagAttr: tagAttrTy = {
  img: imgAttr,
};

export default tagAttr;
