<h1>Bowl Of Hygieia</h1>

Live Prototype URL: http://getunnel.com/bowlofhygieia/ .

This prototype is named “Bowl Of Hygieia”. Bowl of Hygieia is one of the symbols of pharmacy. Hygieia was the Greek goddess of hygiene, and the daughter of Asclepius.  Asclepius' symbol is his rod, with a snake twined around it; correspondingly, Hygieia's symbol is a cup or chalice with a snake twined around its stem and poised above it. This prototype displays pharmacy information using the FDA open data set. 

This prototype gives common information about specific drugs. The user/patient types a drug name and selects ‘search’ to find FDA drug labelling information and side effects. If the drug name is found, the site returns the details about this drug from the online FDA Adverse Event Reporting System (FAERS).  The left panel displays the results retrieved from the FDA on-line label repository. The side effects are shown in descending order according to the seriousness of each side effect. Any symptom experienced by the patient or observed by the health care professional can be reported to MedWatch using the link on the right corner of the page.  MedWatch is the FDA system for voluntary reporting of adverse events from medications.

The business concept of this prototype is to enable patients to take advantage of available FDA drug labelling data.  Although this prototype may not satisfy all patient needs it provides the patient with the ability to quickly and accurately obtain the most current drug data. From these data, the patient is able to identify the appropriate action based on the symptom experienced. The prototype could be extended to enable individuals to easily and practically build their personal medical record in an easy and practical way that HHS enterprise e-Health system may want to achieve.  It potentially provides a means for individuals to join a future real time e-Health data exchange.    The prototype is read-only from the FAERS database and does not collect or link any patient data.  The concept is potentially capable of linking different types of information in real time.
The prototype is a Single Page Application (SPA) developed using the AngularJS web application framework. It allows a user to enter or select a drug name to search the FAERS database. The application uses the OpenFDA API to retrieve the data from the FAERS database. It combines adverse drug event data for both serious and non-serious incidents. It graphs the data, presenting the reported drug side effects and number of incidents using the D3 Javascript charting library.  The application also queries the on-line drug labeling database and presents the drug label data, including dosage and warning information, in a tabular format. 

The prototype also uses the latest web application technologies, open source frameworks/libraries, and development and deployment methodologies. These include Twitter's Bootstrap, jQuery, D3, Ajax, JSON, Yoeman, NPM, Bower and Grunt toolkit. It also uses Karma Unit Test and Travis Continuous Integration software.

The project uses Karma unit test software to test basic functionality. The unit test is use-descriptive language based on the Karma framework to define test cases. The project uses the Travis CI system provided by GitHub, for a continuous build-test-deploy process to make sure the changed code will not break the web site.  Travis CI first installs the required Javascripts and CSS libraries using Bower. It then uses NPM (nodejs package management) to build and test the source code. If both the build and test are passed, it uploads the compiled code to the deployment server.

The project uses a two-level deployment system. The compiled code is first deployed to a test server location. After a manual sanity test, the compiled code is then copied to the production site and is then available to the public.  The project source code is stored in the GitHub repository at URL https://github.com/globaltunnels/bowlofhygieia.

As this is only a prototype, there are two known problems we decided not to fix at this time. The drug label item description is not translated to official item description since we leak the knowledge on what’s office description should be. Also, the side effect items are truncated if they exceed a specific length.  This is caused by a D3 chart display bug. 

<h3>Compiled Site Structure</h3>

- Root<br/>
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

<h3>Install</h3>

1. Download the project from the Github
2. From root folder of the project run the following commands
	- npm install -g grunt-cli
  	- npm install -g bower
  	- bower install -f
3. Run command "grunt build" to generate the site
4. Copy the contents under APP folder to your web site

<h3>Test</h3>

Use "Grunt test" to run unit tests

<h3>Deployment</h3>

After compile, all files in "dist" folder is for final deployment.

<h3>Contributor:</h3>  Global Tunnels 

<h3>Copyright and license</h3>

Code released under the MIT license
