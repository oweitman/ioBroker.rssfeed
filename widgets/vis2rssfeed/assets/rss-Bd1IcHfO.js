import { R as r, __tla as __tla_0 } from "./vis2rssfeedWidgets__loadShare__react__loadShare__-DZcZP6XT.js";
let c, n;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  const s = window.visRxWidget;
  c = class extends s {
    static getI18nPrefix() {
      return "rssfeed";
    }
    getPropertyValue(e) {
      const t = this.state.rxData[e];
      return this.state.values[`${String(t)}.val`];
    }
    renderScrollableContent(e) {
      return r.createElement("div", {
        style: {
          width: "100%",
          height: "100%",
          minWidth: 0,
          minHeight: 0,
          boxSizing: "border-box",
          overflow: "auto"
        }
      }, e);
    }
  };
  let a, i;
  a = {
    title: "meta.title",
    description: "meta.desciption - Please enter a data point for a rssfeed",
    link: "https://meta.link.org",
    xmlurl: "meta.xmlurl",
    date: "2024-01-01T00:00:00.000Z",
    pubdate: "2024-01-01T00:00:00.000Z",
    author: "meta.author",
    language: "de",
    image: {},
    favicon: "meta.favicon",
    copyright: "met.copyright",
    generator: "meta.generator",
    categories: [
      "meta.categories"
    ]
  };
  i = [
    {
      title: "articles.title 1",
      description: 'articles.description<br><img class="rssfeed" src="../adapter/rssfeed/rssfeed.png" /><br>Please enter a data point for a rssfeed',
      summary: "articles.summary",
      link: "atricles.link",
      origlink: "articles.origlink",
      permalink: "00000000-0000-0000-0000-000000000000",
      date: "2024-01-01T00:00:00.000Z",
      pubdate: "2024-01-01T00:00:00.000Z",
      author: "articles.author",
      guid: "00000000-0000-0000-0000-000000000000",
      comments: "articles.comments",
      image: {},
      categories: [
        "articles.categories"
      ],
      source: {},
      enclosures: [
        "articles.enclosures"
      ]
    },
    {
      title: "articles.title 2",
      description: 'articles.description<br><img class="rssfeed" src="../adapter/rssfeed/rssfeed.png" /><br>Please enter a data point for a rssfeed',
      summary: "articles.summary",
      link: "atricles.link",
      origlink: "articles.origlink",
      permalink: "00000000-0000-0000-0000-000000000000",
      date: "2024-01-01T00:00:00.000Z",
      pubdate: "2024-01-01T00:00:00.000Z",
      author: "articles.author",
      guid: "00000000-0000-0000-0000-000000000000",
      comments: "articles.comments",
      image: {},
      categories: [
        "articles.categories"
      ],
      source: {},
      enclosures: [
        "articles.enclosures"
      ]
    }
  ];
  n = {
    meta: a,
    articles: i
  };
});
export {
  c as G,
  __tla,
  n as r
};
