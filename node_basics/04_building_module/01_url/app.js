var log4js = require("log4js");
log4js.configure({
  appenders: { cheese: { type: "file", filename: "cheese.log" } },
  categories: { default: { appenders: ["cheese"], level: "error" } },
});

const logger = log4js.getLogger("cheese");
logger.level = "debug";

const url = require("url");

const urlString =
  "https://www.bilibili.com/video/BV1ca4y1n7u3?p=15&spm_id_from=pageDriver";

const myUrl = new URL(urlString);
// logger.debug(myUrl);

const urlObject = {
  href: "https://www.bilibili.com/video/BV1ca4y1n7u3?p=15&spm_id_from=pageDriver",
  origin: "https://www.bilibili.com",
  protocol: "https:",
  username: "",
  password: "",
  host: "www.bilibili.com",
  hostname: "www.bilibili.com",
  port: "",
  pathname: "/video/BV1ca4y1n7u3",
  search: "?p=15&spm_id_from=pageDriver",
  hash: "",
};

// logger.debug(myUrl);
// logger.debug(url.format(urlObject));
// logger.debug(urlObject.href);

const urlParams = new URLSearchParams(myUrl.searchParams);

// logger.debug(urlParams);
logger.debug(urlParams.get("p"));
