type cssTy = {
  [name: string]: string;
};

class Css {
  private css: cssTy;
  constructor() {
    this.css = {};
  }
  private mk_clsLs(arr: string[], cssElem?: string): string {
    return cssElem ? [this.css[cssElem], ...arr].join(" ") : arr.join(" ");
  }
  public alter(arr: string[], cssName: string, cssElem?: string): void {
    this.css[cssName] = this.mk_clsLs(arr, cssElem);
  }
  public make(obj: { [name: string]: string[] }): void {
    Object.entries(obj).map((item) => {
      // this.alter도 가능하지만, 독립성을 위해 따로 만듬
      this.css[item[0]] = this.mk_clsLs(item[1]);
    });
  }
  public addCss(obj: { [name: string]: string }): void {
    Object.entries(obj).forEach((item) => {
      this.css[item[0]] = this.css[item[0]]
        ? this.css[item[0]] + " " + item[1]
        : item[1];
    });
  }
  public add_cls(arr: string[], cssName: string, cssElem?: string): void {
    this.css[cssName] = cssElem
      ? this.mk_clsLs([this.css[cssName], ...arr], cssElem)
      : this.mk_clsLs([this.css[cssName], ...arr]);
  }
  public alter_clsLs(
    cssObj: { [name: string]: string },
    cssName: string
  ): void {
    let temp: string = this.css[cssName];
    Object.keys(cssObj).forEach((item) => {
      temp = temp.replace(` ${item} `, ` ${cssObj[item]} `);
      temp = temp.replaceAll(` ${item} `, " ");
      const lastStrNum: number = temp.length - item.length;
      if (temp.slice(lastStrNum) === item)
        temp = temp
          .substring(0, lastStrNum)
          .trim()
          .concat(" " + cssObj[item]);
    });
    this.css[cssName] = temp;
  }
  public copy_clsLs(cssName: string | string[], cssSource: string): void {
    if (Array.isArray(cssName)) {
      for (let item of cssName) {
        this.css[item] = this.css[cssSource];
      }
    } else {
      this.css[cssName] = this.css[cssSource];
    }
  }

  public getCss(): cssTy {
    return this.css;
  }
}

export default Css;
