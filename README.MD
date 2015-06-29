<h1>Bowl Of Hygieia</h1>

This prototype displays common drug information for a patient. The user can type a drug name and click search to find FDA drug labelling information and side effect. The site will return the detail information of this drug from live FDA FEARS system.   If the result is found,  the site will display all side effect based in different serious level.  If any symptom is matched and found, the patient is able to submit his/her report from MedWatch.

<br/>
<br/>

<h3>What's included</h3>

The site is an one-page web application based on AngularJS. The site composed of

- APP<br/>
|<br/>
|----- views/: the HTML pages<br/>
|<br/>
|----- scripts/: AngularJS scripts<br/>
|<br/>
|----- images/: images files used by the web site<br/>
|<br/>
|----- styles/: CSS files<br/>
|<br/>
|----- index.html: entry html page<br/>
<br/>

<br/>
<br/>

<h3>Install</h3>

1. Download the project from the Github
2. From root folder of the project run the following commands
	- npm install -g grunt-cli
  	- npm install -g bower
  	- bower install -f
3. Run command "grunt build" to generate the site
4. Copy the contents under APP folder to your web site

<br/>
<br/>

<h3>Test</h3>

Use "Grunt test" to run unit tests

<br/>
<br/>

<h3>Deployment</h3>

After compile, all files in "dist" folder is for final deployment.


<h3>Contributor:</h3>  Global Tunnels 

<br/>
<br/>

<h3>Copyright and license</h3>

Code released under the MIT license