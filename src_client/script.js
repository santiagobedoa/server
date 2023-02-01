function init() {
  let res_elm = document.createElement("div");
  res_elm.innerHTML = "Hello! I am a bot that helps you convert COP to USD";
  res_elm.setAttribute("class", "left");

  document.getElementById("msg").appendChild(res_elm);
}

function sendRequest() {
  let req = $("#msg_send").val().match(/(\d+)/)[0];
  console.log(req);
  $.ajax({
    contentType: "application/json",
    data: JSON.stringify({
      COP_amount: req,
    }),
    processData: false,
    url: `http://localhost:4000/api/currency/convert`,
    type: "get",
    success: function (res) {
      res = res.USD;
      let data_req = document.createElement("div");
      let data_res = document.createElement("div");

      let container1 = document.createElement("div");
      let container2 = document.createElement("div");

      container1.setAttribute("class", "msgCon1");
      container2.setAttribute("class", "msgCon2");

      data_req.innerHTML = req;
      data_res.innerHTML = res;

      data_req.setAttribute("class", "right");
      data_res.setAttribute("class", "left");

      let message = document.getElementById("msg");

      message.appendChild(container1);
      message.appendChild(container2);

      container1.appendChild(data_req);
      container2.appendChild(data_res);

      document.getElementById("msg_send").value = "";

      function scroll() {
        var scrollMsg = document.getElementById("msg");
        scrollMsg.scrollTop = scrollMsg.scrollHeight;
      }
      scroll();
    },
  });
}
