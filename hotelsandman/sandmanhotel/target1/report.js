$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sandman.feature");
formatter.feature({
  "line": 1,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 150,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@Login_Test_onmobile"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "he/she tap on hamburger icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "he/she provides the userEmail as \"\u003cUserEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "he/she provides the password as \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "he/she verify \"\u003cPasswordVal\u003e\" for \"\u003cPassword\u003e\" validation message for password.",
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "he/she \"\u003cSignIn_ErrorMsg\u003e\" for \"\u003cUserEmail\u003e\" and \"\u003cPassword\u003e\" for invalid credentials.",
  "keyword": "And "
});
formatter.examples({
  "line": 160,
  "name": "",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;",
  "rows": [
    {
      "cells": [
        "UserEmail",
        "Password",
        "PasswordVal",
        "SignIn_ErrorMsg"
      ],
      "line": 161,
      "id": "signup-test-on-web-application;login-the-application.;;1"
    },
    {
      "cells": [
        "test+art@2pventures.com",
        "Test4321",
        "",
        "[OAuthLogin] Email and password combination is incorrect"
      ],
      "line": 162,
      "id": "signup-test-on-web-application;login-the-application.;;2"
    },
    {
      "cells": [
        "test+art01@2pventures.com",
        "Test1234",
        "",
        ""
      ],
      "line": 163,
      "id": "signup-test-on-web-application;login-the-application.;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 162,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@Login_Test_onmobile"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "he/she tap on hamburger icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "he/she provides the userEmail as \"test+art@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "he/she provides the password as \"Test4321\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "he/she verify \"\" for \"Test4321\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "he/she \"[OAuthLogin] Email and password combination is incorrect\" for \"test+art@2pventures.com\" and \"Test4321\" for invalid credentials.",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
formatter.result({
  "duration": 9408115819,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 4926006699,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 4687099695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 16805740975,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test4321",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 14984804895,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 10960356462,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "Test4321",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 1654666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "[OAuthLogin] Email and password combination is incorrect",
      "offset": 8
    },
    {
      "val": "test+art@2pventures.com",
      "offset": 71
    },
    {
      "val": "Test4321",
      "offset": 101
    }
  ],
  "location": "Sandman_Hotel.he_she_for_and_for_invalid_credentials(String,String,String)"
});
formatter.result({
  "duration": 1190221,
  "status": "passed"
});
formatter.scenario({
  "line": 163,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 149,
      "name": "@Login_Test_onmobile"
    }
  ]
});
formatter.step({
  "line": 151,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 152,
  "name": "he/she tap on hamburger icon.",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "he/she provides the userEmail as \"test+art01@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 155,
  "name": "he/she provides the password as \"Test1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 156,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 157,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 158,
  "name": "he/she \"\" for \"test+art01@2pventures.com\" and \"Test1234\" for invalid credentials.",
  "matchedColumns": [
    0,
    1,
    3
  ],
  "keyword": "And "
});
formatter.match({
  "location": "Sandman_Hotel.navigates_to_www_com_sandman_mobiusbookingengine()"
});
formatter.result({
  "duration": 8886966717,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_tap_on_hamburger_icon()"
});
formatter.result({
  "duration": 5056701753,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 4566541971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test+art01@2pventures.com",
      "offset": 34
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_userEmail_as(String)"
});
formatter.result({
  "duration": 16790162315,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 33
    }
  ],
  "location": "Sandman_Hotel.he_she_provides_the_password_as(String)"
});
formatter.result({
  "duration": 1636679717,
  "error_message": "java.lang.AssertionError: expected:\u003ctrue\u003e but was:\u003cfalse\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:834)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat TestRunner.loginSteps.Sandman_Hotel.he_she_provides_the_password_as(Sandman_Hotel.java:113)\r\n\tat ✽.Then he/she provides the password as \"Test1234\".(src/test/resources/Sandman.feature:155)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 15
    },
    {
      "val": "Test1234",
      "offset": 22
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    },
    {
      "val": "test+art01@2pventures.com",
      "offset": 15
    },
    {
      "val": "Test1234",
      "offset": 47
    }
  ],
  "location": "Sandman_Hotel.he_she_for_and_for_invalid_credentials(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
});