// const EmbloyClient = require('./../../../github/Embloy-Node');
EmbloyClient = require("embloy")

const embloy = new EmbloyClient('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImV4cCI6MTcwODM4NTg1NSwidHlwIjoicHJlbWl1bSIsImlhdCI6MTcwNTcwOTkxNywiaXNzIjoic3J2LWNtZGVyY3VkM25tYzczZGppZW4wLWhpYmVybmF0ZS03N2M4NDY1ZDZjLWs2aHNsIn0.r30CBcTXNfZaOgKlRM3fVqOzYnlSuHv6lT6CUNV5WKg', {
    mode: "job",
    job_slug: "job#1",
    success_url: "mypage.com/success",
    cancel_url: "mypage.com/failure"
});

embloy.makeRequest()
  .then(result => console.log(result))
  .catch(error => console.error(error.message));
