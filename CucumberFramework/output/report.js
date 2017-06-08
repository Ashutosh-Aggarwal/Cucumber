$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepdefinition/dailyroutine.feature");
formatter.feature({
  "line": 1,
  "name": "Attitude of a tester",
  "description": "\r\nIn order to understand Attitude\r\nAs a working It guy\r\nI want to know whom he is wishing",
  "id": "attitude-of-a-tester",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "I am an IT Guy",
  "description": "",
  "id": "attitude-of-a-tester;i-am-an-it-guy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I work latenights",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I meet watchmen",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I greet him",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I work morning",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet paperboy",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I skipgreeted him",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "latenights",
      "offset": 7
    }
  ],
  "location": "AttitudeTest.iWork(String)"
});
formatter.result({
  "duration": 143259148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchmen",
      "offset": 7
    }
  ],
  "location": "AttitudeTest.iMeet(String)"
});
formatter.result({
  "duration": 280529,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "greet",
      "offset": 2
    }
  ],
  "location": "AttitudeTest.iGreet(String)"
});
formatter.result({
  "duration": 130001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "morning",
      "offset": 7
    }
  ],
  "location": "AttitudeTest.iWork(String)"
});
formatter.result({
  "duration": 114036,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "paperboy",
      "offset": 7
    }
  ],
  "location": "AttitudeTest.iMeet(String)"
});
formatter.result({
  "duration": 235675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "skipgreeted",
      "offset": 2
    }
  ],
  "location": "AttitudeTest.iGreet(String)"
});
formatter.result({
  "duration": 237956,
  "status": "passed"
});
});