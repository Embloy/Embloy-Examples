// const EmbloyClient = require('./../../../github/Embloy-Node');
const { EmbloyClient } = require("embloy");

client_token = "your-client-token"

const embloy = new EmbloyClient(client_token, {
    mode: "ashby",
    job_slug: "your-job-slug",
    success_url: "mypage.com/success",
    cancel_url: "mypage.com/failure"
});

embloy.makeRequest()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
