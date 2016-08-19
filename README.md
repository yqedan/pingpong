# _Ping Pong_

#### _August, 19th, 2016_

#### By _**Yusuf Qedan**_

## Description

_This is a web page of my ping pong project written in JavaScript and uses the jQuery framework._
_Enter a number and  your result will display in a list below._

## Setup/Installation Requirements

_Clone the repo and open up index.html to view in your web browser._
_Link to site on gh-pages coming soon but it will be: https://yqedan.github.io/pingpong_

## Specifications

* Behavior: A single list item is added if user enters a 1, item removed when form is re submitted input: 1 output: 1 formatted into a list
  * **Example input:** "1"
  * **Example output:** 1 formatted into a list in HTML
* Behavior: Takes a number from a user and returns a range of numbes from 1 up to and including the chosen number
  * **Example input:** 2
  * **Example output:** 1,2 formatted into a list in HTML
* Behavior: Numbers divisible by 3 are replaced with "ping"
  * **Example input:** 5
  * **Example output:** 1,2,ping,4,5
* Behavior: Numbers divisible by 5 are replaced with "pong"
  * **Example input:** 7
  * **Example output:** 1,2,ping,4,pong,ping,7
* Behavior: Numbers divisible by 15 are replaced with "ping-pong"
  * **Example input:** 16
  * **Example output:** 1,2,ping,4,pong,ping,7,8,ping,pong,11,ping,13,14,pingpong,16
* Behavior: A user that enters number larger than 1 followed by a new number sees accurate results after each new submit
  * **Example input:** enter 7, click submit, enter 3, click submit...etc
  * **Example output:** after first submit 1,2,ping,4,pong,ping,7 shows. User hits submit and old list clears and 1,2,ping appars...etc

## Known Bugs

_None so far_

## Support and contact details

_Any issues email me at yusuf9191@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, bootstrap framework, jQuery framework._

### License

*This software is licensed under the MIT license*

Copyright (c) 2016 **_Yusuf Qedan_**
