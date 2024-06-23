type attrTy = {
  src: string;
  alt: string;
};
type imgAttrTy = {
  [name: string]: attrTy;
};
export default imgAttrTy;
