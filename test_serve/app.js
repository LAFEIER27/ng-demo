const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/api/info", (req, res) => {
  res.send({
    ok: 1,
  });
});
app.post("/api/login", (req, res) => {
  const { name, psd } = req.body;
  if (name === "admin" && String(psd) === "123456") {
    res.send({
      msg: "登陆成功！",
      data: {
        code: 1,
        name,
      },
    });
  } else {
    res.send({
      msg: "账号或者密码错误",
      data: {
        code: 0,
        name,
      },
    });
  }
  console.log(req.body);
});

app.listen("3003", () => {
  console.log("test serve run in 3003 !");
});
