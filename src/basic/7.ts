type OpenOrClose = "open" | "close";

type Details = {
  createAt: Date;
  updateAt: Date;
};

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: OpenOrClose;
  details?: Details;
};

let page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

let page2: Page = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};

export {page1, page2};
