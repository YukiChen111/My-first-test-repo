$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberJava.feature");
formatter.feature({
  "line": 1,
  "name": "CucumberJava",
  "description": "",
  "id": "cucumberjava",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Login functionality exists",
  "description": "",
  "id": "cucumberjava;login-functionality-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.openBrowser()"
});
formatter.result({
  "duration": 3466665916,
  "status": "passed"
});
formatter.match({
  "location": "Steps.goToFacebook()"
});
formatter.result({
  "duration": 4464390817,
  "status": "passed"
});
formatter.match({
  "location": "Steps.loginButton()"
});
formatter.result({
  "duration": 2181863628,
  "status": "passed"
});
});