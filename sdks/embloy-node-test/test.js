// const EmbloyClient = require('./../../../github/Embloy-Node');
EmbloyClient = require("embloy")

const embloy = new EmbloyClient('your-client-token', {
    mode: "job",
    job_slug: "job#1",
    success_url: "mypage.com/success",
    cancel_url: "mypage.com/failure"
});

embloy.makeRequest()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
