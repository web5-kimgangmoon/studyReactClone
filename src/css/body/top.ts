import Css from "../../lib/mkClsName";

const css = new Css();

css.make({
  top: [
    "w-full",
    "h-[12rem]",
    "relative",
    "flex",
    "items-center",
    "before:absolute",
    `before:bg-[url('/src/imgs/top_bg.png')]`,
    "before:bg-center",
    "before:brightness-50",
    "before:w-full",
    "before:h-full",
  ],
  iconLine_container: ["absolute", "w-full"],
  iconLine: ["flex", "container", "items-center"],
  topIcon: ["w-14"],
  textBox: ["pl-4"],
  title: ["text-white", "text-3xl", "pb-2", "font-bold"],
  userCount: [
    "text-green-400",
    "flex",
    "items-center",
    "text-sm",
    "before:w-2",
    "before:h-2",
    "before:m-2",
    "before:rounded-full",
    "before:bg-green-400",
  ],
});

export default css.getCss();
