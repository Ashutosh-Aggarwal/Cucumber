$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("parametrizeddata/datadriven.feature");
formatter.feature({
  "line": 1,
  "name": "Attitude of a tester",
  "description": "\r\nIn order to understand Attitude\r\nAs a working It guy\r\nI want to know whom he is wishing",
  "id": "attitude-of-a-tester",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I am an IT Guy",
  "description": "",
  "id": "attitude-of-a-tester;i-am-an-it-guy",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "we work in \"\u003cweekdays\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "we meet \"\u003cguys\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "we \"\u003cgreetings\u003e\" him",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "attitude-of-a-tester;i-am-an-it-guy;",
  "rows": [
    {
      "cells": [
        "weekdays",
        "guys",
        "greetings"
      ],
      "line": 15,
      "id": "attitude-of-a-tester;i-am-an-it-guy;;1"
    },
    {
      "cells": [
        "monday",
        "watchman",
        "hello"
      ],
      "line": 16,
      "id": "attitude-of-a-tester;i-am-an-it-guy;;2"
    },
    {
      "cells": [
        "wednesday",
        "driver",
        "oye"
      ],
      "line": 17,
      "id": "attitude-of-a-tester;i-am-an-it-guy;;3"
    },
    {
      "cells": [
        "friday",
        "peon",
        "fuck"
      ],
      "line": 18,
      "id": "attitude-of-a-tester;i-am-an-it-guy;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "I am an IT Guy",
  "description": "",
  "id": "attitude-of-a-tester;i-am-an-it-guy;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "we work in \"monday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "we meet \"watchman\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "we \"hello\" him",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "monday",
      "offset": 12
    }
  ],
  "location": "GreetingTest.we_work_in(String)"
});
formatter.result({
  "duration": 364406657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "watchman",
      "offset": 9
    }
  ],
  "location": "GreetingTest.we_meet(String)"
});
formatter.result({
  "duration": 179796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hello",
      "offset": 4
    }
  ],
  "location": "GreetingTest.we_him(String)"
});
formatter.result({
  "duration": 178276,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "I am an IT Guy",
  "description": "",
  "id": "attitude-of-a-tester;i-am-an-it-guy;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "we work in \"wednesday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "we meet \"driver\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "we \"oye\" him",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "wednesday",
      "offset": 12
    }
  ],
  "location": "GreetingTest.we_work_in(String)"
});
formatter.result({
  "duration": 186638,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "driver",
      "offset": 9
    }
  ],
  "location": "GreetingTest.we_meet(String)"
});
formatter.result({
  "duration": 245937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "oye",
      "offset": 4
    }
  ],
  "location": "GreetingTest.we_him(String)"
});
formatter.result({
  "duration": 261141,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "I am an IT Guy",
  "description": "",
  "id": "attitude-of-a-tester;i-am-an-it-guy;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@Tester"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "we work in \"friday\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "we meet \"peon\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "we \"fuck\" him",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "friday",
      "offset": 12
    }
  ],
  "location": "GreetingTest.we_work_in(String)"
});
formatter.result({
  "duration": 180176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "peon",
      "offset": 9
    }
  ],
  "location": "GreetingTest.we_meet(String)"
});
formatter.result({
  "duration": 282809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fuck",
      "offset": 4
    }
  ],
  "location": "GreetingTest.we_him(String)"
});
formatter.result({
  "duration": 1228924,
  "status": "passed"
});
});