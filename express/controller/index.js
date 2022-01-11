const list = (req, res) => {
  //   let data = `<ul>`;
  //   for (let index = 0; index < 10; index++) {
  //     data += `<li>line ${index}</li>`;
  //   }
  //   data += `</ul>`;

  //   let dataObj = {
  //     res: true,
  //     data: [],
  //   };
  //   for (let index = 0; index < 10; index++) {
  //     dataObj.data.push(`line ${index}`);
  //   }
  const dataArray = require("../model/list");
  res.render("list", {
    dataArray,
  });
};
module.exports = { list };
