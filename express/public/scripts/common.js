fetch("/api/list", {
  method: "get",
})
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
