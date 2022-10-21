import axios from "axios";
// const {stringify} = require('query-string');

let smomUrl = "http://localhost:8080/api/dataportal/invoke";

// const service = axios.create({
//   baseURL: "http://localhost:8080/api/dataportal/invoke",
//   timeout: 5000, // 请求超时时间
// });

export function smomRequest(controller, method, values) {
  var v = [];
  if (Array.isArray(values)) {
    values.forEach((element) => {
      var r = { Value: element };
      v.push(r);
    })
  } else {
    v = values;
  }

  var p = {
    ApiType: controller,
    Parameters: v,
    Method: method,
    Context: {
      Ticket: "5/XqbfbaH9LMYYyB01Vf6uB3bi2uSEbnzmXsym36ppszy/cbHhJFPmtd1gHS6YnD",
      InvOrgId: 1,
    },
  };
  return axios
    .post(smomUrl, p)
    .then((m) => {
      if (m.status != 200) {
        throw m.statusText;
      }
      if (!m.data.Success) {
        throw m.data.Message;
      }
      return m.data.Result;
    })
    .catch((m) => {
      // Modal.error({
      //     title: "系统提示",
      //     content: m,
      // });
    });
}
