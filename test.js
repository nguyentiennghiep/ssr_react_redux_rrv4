var axios = require("axios");

axios.get("http://5b84ef64db24a100142dce76.mockapi.io/todos")
.then(res => console.log(res.data))
.catch(err => err)