Feature: Attitude of a tester

In order to understand Attitude
As a working It guy
I want to know whom he is wishing

@Tester
Scenario Outline: I am an IT Guy

Given we work in "<weekdays>"
When we meet "<guys>"
Then we "<greetings>" him

Examples:
|   weekdays    |   guys      |   greetings   |
|   monday      |   watchman  |   hello       |
|   wednesday   |   driver    |   oye         |
|   friday      |   peon      |   fuck        |