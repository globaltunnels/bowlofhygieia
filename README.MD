Bowl Of Hygieia

This prototype displays common drug information for a patient. The user can type a drug name and click search to find FDA drug labelling information and side effect. The site will return the detail information of this drug from live FDA FEARS system.   If the result is found,  the site will display all side effect based in different serious level.  If any symptom is matched and found, the patient is able to submit his/her report from MedWatch.

What's included

The site is an one-page web application based on AngularJS. The site composed of

- APP
|
|----- views/: the HTML pages
|
|----- scripts/: AngularJS scripts
|
|----- images/: images files used by the web site
|
|----- styles/: CSS files
|
|----- index.html: entry html page


Install

1. Download the project from the Github
2. From root folder of the project run the following commands
	- npm install -g grunt-cli
  	- npm install -g bower
  	- bower install -f
3. Run command "grunt build" to generate the site
4. Copy the contents under APP folder to your web site

Test

Use "Grunt test" to run unit tests

Deployment

After compile, all files in "dist" folder is for final deployment.

Contributor:  Global Tunnels 

Copyright and license

Code released under the MIT license