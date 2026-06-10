# Older changes
## 4.0.0 (2026-03-05)

- update packages
- remove deprecated widgets

## 3.6.1 (2025-09-22)

- remove dist/ folder from lint

## 3.6.0 (2025-09-22)

- revert to node 18
- remove deprecated marquee4 widget
- improve widget build
- integrate translations and css into build process
- remove unused css
- deprecate JSON-Template widgets, please use new adapter iobroker.vis-jsontemplate
- add message for the update to inform users

## 3.5.2 (2025-03-20)

- improve build

## 3.5.1 (2025-03-20)

- improve build

## 3.5.0 (2025-03-18)

- make async function calls available in templates

## 3.4.1 (2025-02-18)

- fix eslint
- introducing a new attribute opentype to open the links in the marquee widget

## 3.3.1 (2025-01-23)

- add an accept request header, because axios send only application/json

## 3.3.0 (2025-01-21)

- upgrade version js-controller
- switch from request to axios

## 3.2.0 (2024-11-27)

- update jsonconfig responsive
- switch to iobroker/eslint
- improver adapter code
- improve widget code

## 3.1.0 (2024-08-11)

- adjust dependency to js-controller in a minor release

## 3.0.2 (2024-08-09)

- add keyword in package.json

## 3.0.1 (2024-08-09)

- add template example for articles as a Diashow
- adjust dependency to js-controller

## 3.0.0 (2024-07-24)

- update multifeed widget 3 and deprecate multifeed widget 2
- breaking change: in rssfeed widget 2: articles and meta have to be changed to rss.articles and rss.meta

## 2.10.0 (2024-07-11)

- fine tuning on templates and available variables
- fine tuning on format and translation
- move widget documentation form doc.html to readme

## 2.9.10 (2024-07-11)

- update images for dark and light theme

## 2.9.9 (2024-07-11)

- update packages
- update formating and improve error logging
- remove detailed sentry status reporting
- fix subscribing states

## 2.9.8 (2024-07-09)

- ignore widgets in vis-2
- add restart vis/vis2

## 2.9.7 (2024-06-22)

- formating code
- remove common.main from io-package.json

## 2.9.6 (2024-06-06)

- fix branch name in link

## 2.9.4 (2024-06-05)

- test release after rename branch from master to main

## 2.9.3 (2024-06-05)

- switch branchname from master to main
- add node 22 to tests

## 2.9.2 (2024-06-04)

- add some translations
- fix warning from adapter checker

## 2.9.1 (2024-06-03)

- update iobroker files and settings

## 2.8.2 (2024-04-21)

- (bluefox) Fixed loading of words.js in vis

## 2.8.1 (2023-03-15)

- (bluefox) Corrected vis widget
- admin changed to jsonConfig, dev-environment now devcontainer

## 2.7.0 (2022-12-11)

## 2.6.1 (2022-07-30)

- added more information to sentry

## 2.6.0 (2022-07-26)

- added sentry

## 2.4.0 (2022-07-25)

- added name option to marquee widget

## 2.0.0

- Rework of the admin dialog
- Fix some errors and glitches

## 1.0.0

- Released in stable

## 0.9.0

- fixed/extended json template

## 0.8.0

- adapted configuration pages to react.
- Prepared for stable release

## 0.0.30

- added some template examples to the widget documentation

## 0.0.29

- improved error messages
- removed deprecated widget / change widget beta flag
- changed createObject/setState logic due iobroker-controller >3.0

## 0.0.28

- removed customtab

## 0.0.27

- adapter configuration is now editable

## 0.0.26

- corrected changelog size

## 0.0.25

- the error messages for the template are improved

## 0.0.24

- errors in the request of feeds are now real errors in the iobroker log
- loading of rules for ejs in the editor is improved
- marquee3 widget: options to show time and date

## 0.0.23

- republish to npm

## 0.0.22

- improvements in the configuration dialog
- remove unused admintab
- new RSS Feed multi widget. in this widget you can add your one or more datapoints, that are available in the template.
- New marquee widget 3 replaces the existing marquee widget 2.The marquee widget 3 is now a multi widget and can handle more than one feed. The Headlines are now aggregated.
- the existing widget JSON template is improved. in this widget you can add your one or more datapoints, that are available in the template.
- Remove several deprecated widgets (RSS Feed widget 1, Article Helper 1, Marquee 1, JSON template 1)

## 0.0.21

- add link option to marquee widget
- widget help added
- marquee widget: the divider characters (default: +++) are configurable

## 0.0.20

- add ejs syntax to template editor

## 0.0.19

- try to fix marquee widget.

## 0.0.18

- try to fix the wrong NoSave dialog

## 0.0.17

- rework setting objects and states

## 0.0.16

- improve logic adding rssfeed in configuration dialog
- fix wrong icon for marquee widget
- define default template for rssfeed widget
- deprecate existing and replace with new version of widgets to improve naming of the attributes in case of translation
- widget rss marquee: replace duration attribute with speed attribute and improved the calculation algorithm. now same number is same speed regardless of the length of the titles

## 0.0.15

- fix bug saving last request in adapter configuration / improve debug messages

## 0.0.14

- update package.json and install new tools for stream encoding/decoding detection
- implement encoding detection and stream encoding
- change the ejs lib with a real browserified lib

## 0.0.13

- new widget as a guest, because it is not directly related to the rssfeed functionality, but reuse the same code base. maybe later i transfer it to an own adapter. the new widget can take a json datapoint and you can visualize the data with the ejs template system.

## 0.0.12

- now you can download the adapter configuration in the admin dialog. upload is not possible due to security restrictions in modern browsers.

## 0.0.11

- improve admin layout
- implement a forceRefresh button

## 0.0.10

- fix bug a bug in marquee widget. not all styles should applied to the span tag.

## 0.0.9

- apply widget styles also to the inner span element, because they had not any effect on the marquee.
- renew the package-lock.json
- add categories to save feeds in subfolders
- improve mechanism to write only updated feeds to datapoint. the feed has new data if comparision of articles in title and description is different.

## 0.0.8

- improve lasrequest logic of the adapter
- fix problem with datapoint naming

## 0.0.7

- test with encapsulation of ejs.js, because of error in some browsers

## 0.0.6

- add attribute duration for widget marquee to control animation duration

## 0.0.5

- new widget marquee for article titles
- add filter function for articles. the filter searches in title,description and categories, several filter criteria can be seperated by semicolon

## 0.0.4

- some adjustments in readme, io-package

## 0.0.3

- add addveyor build

## 0.0.2

- added widgets meta helper and article helper

## 0.0.1

- initial release
