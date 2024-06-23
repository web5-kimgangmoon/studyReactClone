import Css from "../../lib/mkClsName";
import topcss from "./top";

const css = new Css();

css.make({
  centerWrapper: ["w-full", "-translate-y-12"],
  center: ["container", "flex", "gap-x-3", "h-auto"],
  center_middleBox: ["grow-[2]", "bg-white", "h-auto"],
  center_sideBox: ["grow-[1]", "bg-white", "sticky", "h-max", "top-12"],
  center_sticker: [
    "w-full",
    "sticky",
    "flex",
    "justify-between",
    "top-12",
    "p-3",
    "font-bold",
    "text-xl",
  ],
  categorySelect: [
    "text-sm",
    "outline-0",
    "appearance-none",
    "p-2",
    "min-w-20",
  ],
  dropDownButton: [
    "gap-3",
    "align-baseline",
    "flex",
    "items-center",
    "after:w-0",
    "after:h-0",
    "after:border-t-[0.7rem]",
    "after:border-x-[0.4rem]",
    "after:border-x-transparent",
    "after:border-t-gray-500",
    "after:p-0",
    "after:m-0",
    "after:inline-block",
  ],
  center_boardListBox: [""],
});
css.addCss(topcss);

export default css.getCss();
