$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Sandman.feature");
formatter.feature({
  "line": 1,
  "name": "signup Test On Web Application",
  "description": "",
  "id": "signup-test-on-web-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "#login the application"
    }
  ],
  "line": 74,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the userEmail as \"\u003cUserEmail\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she provides the password \"\u003cPassword\u003e\".",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she verify \"\u003cPasswordVal\u003e\" for \"\u003cPassword\u003e\" validation message for password.",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "he/she \"\u003cSignIn_ErrorMsg\u003e\" for \"\u003cUserEmail\u003e\" and \"\u003cPassword\u003e\" for invalid credentials.",
  "keyword": "And "
});
formatter.examples({
  "line": 84,
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
      "line": 85,
      "id": "signup-test-on-web-application;login-the-application.;;1"
    },
    {
      "cells": [
        "test+art@2pventures.com",
        "",
        "This filed is required",
        ""
      ],
      "line": 86,
      "id": "signup-test-on-web-application;login-the-application.;;2"
    },
    {
      "cells": [
        "test+art@2pventures.com",
        "Test4321",
        "",
        "[OAuthLogin] Email and password combination is incorrect"
      ],
      "line": 87,
      "id": "signup-test-on-web-application;login-the-application.;;3"
    },
    {
      "cells": [
        "test+art01@2pventures.com",
        "Test1234",
        "",
        ""
      ],
      "line": 88,
      "id": "signup-test-on-web-application;login-the-application.;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 86,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the userEmail as \"test+art@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she provides the password \"\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she verify \"This filed is required\" for \"\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "he/she \"\" for \"test+art@2pventures.com\" and \"\" for invalid credentials.",
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
  "duration": 24355502666,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 334049333,
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
  "duration": 533047555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "duration": 140539555,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2174526667,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 1458422667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This filed is required",
      "offset": 15
    },
    {
      "val": "",
      "offset": 44
    }
  ],
  "location": "Sandman_Hotel.he_she_verify_for_validation_message_for_password(String,String)"
});
formatter.result({
  "duration": 449778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 8
    },
    {
      "val": "test+art@2pventures.com",
      "offset": 15
    },
    {
      "val": "",
      "offset": 45
    }
  ],
  "location": "Sandman_Hotel.he_she_for_and_for_invalid_credentials(String,String,String)"
});
formatter.result({
  "duration": 390222,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the userEmail as \"test+art@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she provides the password \"Test4321\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she verify \"\" for \"Test4321\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
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
  "duration": 8580712444,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 250652000,
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
  "duration": 479406667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test4321",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "duration": 177713334,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2147884000,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 1273959111,
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
  "duration": 584000,
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
  "duration": 422667,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the userEmail as \"test+art01@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she provides the password \"Test1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
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
  "duration": 8499950666,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 251271556,
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
  "duration": 446129778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "duration": 178043112,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "duration": 2173569777,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login()"
});
formatter.result({
  "duration": 1266180445,
  "status": "passed"
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
  "duration": 321334,
  "status": "passed"
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
  "duration": 457334,
  "status": "passed"
});
});n Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Sandman_Hotel.he_she_provides_the_userEmail_as(Sandman_Hotel.java:78)\r\n\tat ✽.Then he/she provides the userEmail as \"test+art@2pventures.com\".(src/test/resources/Sandman.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test4321",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "status": "skipped"
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
      "val": "Test4321",
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
  "status": "skipped"
});
formatter.scenario({
  "line": 88,
  "name": "login the application.",
  "description": "",
  "id": "signup-test-on-web-application;login-the-application.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 73,
      "name": "@Loginttest"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "navigates to integration-www-sandman.mobiusbookingengine.com",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "he/she click on login CTA.",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "he/she provides the userEmail as \"test+art01@2pventures.com\".",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "he/she provides the password \"Test1234\".",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "he/she minimize the booking banner.",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "he/she click on login cta.",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "he/she verify \"\" for \"Test1234\" validation message for password.",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 82,
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
  "duration": 4044316889,
  "status": "passed"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_click_on_login_CTA()"
});
formatter.result({
  "duration": 4030603555,
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
  "duration": 4025069778,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d67.0.3396.99)\n  (Driver info: chromedriver\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4.03 seconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027AMW-G1\u0027, ip: \u0027169.254.26.86\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.36.540470 (e522d04694c7ebea4ba8821272dbef4f9b818c91), userDataDir\u003dC:\\Users\\ALMOIN~1\\AppData\\Local\\Temp\\scoped_dir1244_19330}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d67.0.3396.99, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dfalse, acceptInsecureCerts\u003dfalse, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 4dd73355668de2e505f63230ba9ac69f\n*** Element info: {Using\u003dname, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:485)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat TestRunner.loginSteps.Sandman_Hotel.he_she_provides_the_userEmail_as(Sandman_Hotel.java:78)\r\n\tat ✽.Then he/she provides the userEmail as \"test+art01@2pventures.com\".(src/test/resources/Sandman.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test1234",
      "offset": 30
    }
  ],
  "location": "Sandman_Hotel.he_she_login_the_app(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Sandman_Hotel.he_she_minimize_the_booking_banner()"
});
formatter.result({
  "status": "skipped"
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