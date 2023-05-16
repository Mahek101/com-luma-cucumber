$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("geartest.feature");
formatter.feature({
  "line": 1,
  "name": "Gear Page Test",
  "description": "",
  "id": "gear-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3391135000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should add product to cart successfully",
  "description": "",
  "id": "gear-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Bags tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see product name Overnight Duffle on that product page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I change Qty to 3",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see You added Overnight Duffle to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see product name Overnight Duffle",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see Qty is 3",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see price is $135.00",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I change Qty 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Update Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 57686600,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 2177741500,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnBagsTab()"
});
formatter.result({
  "duration": 20089237300,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d113.0.5672.126)\nBuild info: version: \u00274.9.0\u0027, revision: \u0027d7057100a6\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c97ee1f47ac83e4b47edde246c340f04, clickElement {id\u003d8AEF85E1BFAA2912A66CFB5704260B06_element_30}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 113.0.5672.126, chrome: {chromedriverVersion: 113.0.5672.63 (0e1a4471d5ae..., userDataDir: C:\\Users\\MEGHAM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:56008}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56008/devtoo..., se:cdpVersion: 113.0.5672.126, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (c97ee1f47ac83e4b47edde246c340f04)] -\u003e xpath: //span[contains(text(),\u0027Bags\u0027)]]\nSession ID: c97ee1f47ac83e4b47edde246c340f04\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:193)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:183)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:543)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:257)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:78)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy24.click(Unknown Source)\r\n\tat com.softwaretestingboard.magento.utilities.Utility.clickOnElement(Utility.java:52)\r\n\tat com.softwaretestingboard.magento.pages.HomePage.clickOnBag(HomePage.java:113)\r\n\tat com.softwaretestingboard.magento.steps.GearTestSteps.iClickOnBagsTab(GearTestSteps.java:26)\r\n\tat ✽.And I click on Bags tab(geartest.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnOvernightDuffle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffleOnThatProductPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.iChangeQtyTo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.iClickOnAddToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffle()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "GearTestSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "GearTestSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.iChangeQty(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GearTestSteps.iClickOnUpdateShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "GearTestSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1159807800,
  "status": "passed"
});
formatter.uri("mentest.feature");
formatter.feature({
  "line": 1,
  "name": "Men Page Test",
  "description": "",
  "id": "men-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2175644000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Add Product to Cart Successfully",
  "description": "",
  "id": "men-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover Men menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Bottoms menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Pant menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on product name Cronus Yoga Pant and click on size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on Cronus Yoga Pant and click on colour Black",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on Cronus Yoga Pant and click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message You added Cronus Yoga Pant to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see that product name Cronus Yoga Pant",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see product size is 32",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see product colour Black",
  "keyword": "And "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverMenMenu()"
});
formatter.result({
  "duration": 2177048800,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnBottomsMenu()"
});
formatter.result({
  "duration": 163579900,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iClickOnPantMenu()"
});
formatter.result({
  "duration": 1068965400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 65
    }
  ],
  "location": "MenTestSteps.iMouseHoverOnProductNameCronusYogaPantAndClickOnSize(int)"
});
formatter.result({
  "duration": 196739000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnCronusYogaPantAndClickOnColourBlack()"
});
formatter.result({
  "duration": 159729500,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnCronusYogaPantAndClickOnAddToCartButton()"
});
formatter.result({
  "duration": 177493100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeMessageYouAddedCronusYogaPantToYourShoppingCart()"
});
formatter.result({
  "duration": 1454166900,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 1760523300,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 48460000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeThatProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 40180200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 29
    }
  ],
  "location": "MenTestSteps.iShouldSeeProductSizeIs(int)"
});
formatter.result({
  "duration": 35634100,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeProductColourBlack()"
});
formatter.result({
  "duration": 24995600,
  "status": "passed"
});
formatter.after({
  "duration": 721662100,
  "status": "passed"
});
formatter.uri("womentest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Page Test",
  "description": "",
  "id": "women-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2246526600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "User should Sort by Product Name Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Sort By filter Product Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2172644200,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 163879500,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1057952100,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iSelectSortByFilterProductName()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldSeeProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 1396035400,
  "status": "passed"
});
formatter.after({
  "duration": 744761300,
  "status": "passed"
});
formatter.before({
  "duration": 2243477000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "User should Sort by Price Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-price-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@smoke"
    },
    {
      "line": 13,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I mouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I Select Sort By filter Price",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see products price display in Low to High",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2171358300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 168994100,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1034181300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iSelectSortByFilterPrice()"
});
formatter.result({
  "duration": 24900,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldSeeProductsPriceDisplayInLowToHigh()"
});
formatter.result({
  "duration": 3137354200,
  "status": "passed"
});
formatter.after({
  "duration": 725014100,
  "status": "passed"
});
});