validation-with-lightbox-v1.1
=========================

Execute jQuery validation if submitting a form , display error and success message with lightbox, files which are included in this project:

<ol>
<li> demo.html</li>
<li> success.html</li>
<li> css/<br />
   a) jquery-valid-lightbox-v1_1.css</li>
   b) style.css</li>
<li> scripts/
   a) jquery-valid-lightbox-v1.1.js<br />
</ol>

<hr />
<p><b>1) demo.html</b><br />
Demo Page with a few lines of css style<br />
This file can validate the input field and display error and success message with lightbox.<br />
http://tool.soyosolution.com/validation-with-lightbox/demo.html</p>

<p><b>2) success.html</b><br />
When validation is submitted, and also you set the config value "submit_form" in jquery-valid-lightbox-v1.1.js as true, You will see this page.<br />
http://tool.soyosolution.com/validation-with-lightbox/demo.html</p>

<p><b>3a) css (folder)/jquery-valid-lightbox-v1_1.css</b><br />
CSS style code of this page, for demo to public :<br />
http://tool.soyosolution.com/validation-with-lightbox/index.html</p>

<p><b>3b) css (folder)/style.css</b><br />
CSS style code of this page, for demo to public, if you want apply this plugin into your code, you can apply jquery-valid-lightbox-v1_1.css only:<br />
http://tool.soyosolution.com/validation-with-lightbox/index.html</p>

<p><b>4a) scripts/jquery-valid-lightbox-v1.1.js<</b><br />
All javascript was placing in this file.</p>

<hr />
<h2>Update</h2>
=== 18/12/2014 ===<br />
- Updated the pop-up message box position.

=== 17/12/2014 ===<br />
Fixed big bugs at IE7&IE8 and rewrote some function for better code.
- Validation-with-lightbox v1.1 released
- Rewrite some function for more easy to config.
- Bug fixed : No lightbox background to be displayed at IE7 and IE8.
- Add a "x" button at message box top-right corner for close the message box.
- Add a "close" button at message box botttom-right corner for close the message box.
- Move error message from hard-code valuables to an object for configing easier

=== 29/04/2014 ===<br />
Validation-with-lightbox released
<hr />

<h2>HOW TO USE</h2>
<h3>HTML part</h3>
There is HTML part and beware of these 3 points:

You must contain action="javascript:void(0)" onsubmit="return checking('your_url');" in the form tab. action="javascript:void(0)" is for stop submiiting the form, onsubmit="return checking('your_url'); mean run the javascript function named checking() and pass the form submittion target to the javascript funvtion.
Text box are idenified with the id name.
Radio and checkbox are idenified with the input flied name.
<pre>
&lt;form name="demo_form" method="POST" action="javascript:void(0)" onsubmit="return checking('success.html');"&gt;
    &lt;div class="item"&gt;
        &lt;h6&gt;&lt;label&gt;First Name&lt;/label&gt;&lt;/h6&gt;
        &lt;div class="input_panel"&gt;&lt;input type="text" id="firstname" name="firstname"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="item"&gt;
        &lt;h6&gt;&lt;label&gt;Last Name&lt;/label&gt;&lt;/h6&gt;
        &lt;div class="input_panel"&gt;&lt;input type="text" id="lastname" name="lastname"&gt;&lt;/div&gt;
     &lt;/div&gt;
     &lt;div class="item"&gt;
        &lt;h6&gt;&lt;label&gt;Age&lt;/label&gt;&lt;/h6&gt;
        &lt;div class="input_panel"&gt;
        &lt;select id="age" name="age"&gt;
        &lt;option value=""&gt; - Please select the range -&lt;/option&gt;
        &lt;option value="0"&gt;0-18&lt;/option&gt;
        &lt;option value="19"&gt;19-35&lt;/option&gt;
        &lt;option value="36"&gt;36-50&lt;/option&gt;
        &lt;option value="50"&gt;50-90&lt;/option&gt;
        &lt;option value="100"&gt;&gt;100&lt;/option&gt;
        &lt;/select&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="item"&gt;
        &lt;h6&gt;&lt;label&gt;Gender&lt;/label&gt;&lt;/h6&gt;
        &lt;div class="input_panel"&gt;
            &lt;input type="radio" name="gender" value="male"&gt;Male&lt;br&gt;
            &lt;input type="radio" name="gender" value="female"&gt;Female    
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="item"&gt;
        &lt;h6&gt;&lt;label&gt;Service you like&lt;/label&gt;&lt;/h6&gt;
        &lt;div class="input_panel"&gt;
            &lt;input type="checkbox" name="service" value="Bike"&gt;bike&lt;br&gt;
            &lt;input type="checkbox" name="service" value="Car"&gt;car  
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="item"&gt;
        &lt;h6&gt;&lt;label&gt;Where to know us&lt;/label&gt;&lt;/h6&gt;
        &lt;div class="input_panel"&gt;
        &lt;input type="checkbox" name="where_from" value="newspaper"&gt;newspaper&lt;br&gt;
        &lt;input type="checkbox" name="where_from" value="friend"&gt;friend&lt;br&gt;
        &lt;input type="checkbox" name="where_from" value="internet"&gt;internet
        &lt;/div&gt;
    &lt;/div&lt;
    &lt;input id="submit" type="submit" value="Submit form" &gt;
    &lt;br /&gt;&lt;br /&gt;
&lt;/form&gt;
</pre>

<h3>CSS PART</h3>
<p>You can import the file "jquery-valid-lightbox-v1_1.css" only for apply the styles:
We need these CSS is for creating the lightbox dialog:</p>
<pre>
&lt;link href="css/jquery-valid-lightbox-v1_1.css" rel="stylesheet" type="text/css" /&gt;
</pre>

<h3>Javascript part</h3>
<p>You need to import the jquery library first, and than import the javascript file of jquery-valid-lightbox plugin.</p>
<pre>
&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="scripts/jquery-valid-lightbox-v1.1.js"&gt;&lt;/script&gt;
</pre>
And than Config the sentences below in jquery-valid-lightbox-v1.1.js:

<pre>
var config = {
    "form_name"          : "demo_form",                       //Your form name, not id name
    "submit_form"        : true,                              //"true" is submit form, "false" would pop-up an error message.
    "title-message"      : {
        "success_title"  :"Validation Success",               //Lightbox title when validation was success.
        "error_title"    :"Error!"                            //Lightbox title when validation was fail.
    },
    "success-message"    :"Your application is submittted.",  //Lightbox content when validation was succes.
    "error-message"      : [
        {"name"      :"firstname",                            //1st input field name (name bt not id)
         "err_msg"   :"Title 1 is empty"},                    //Related error (1st input field) if validation was incorrect.
        {"name"      :"lastname" ,                            //2st input field name
         "err_msg"   :"You have fogotten fill in Title 2"},   //Related error (2st input field) if validation was incorrect.
        {"name"      :"age",                                  //3st input field name
         "err_msg"   :"Which is the range of your age"},      //Related error (3st input field) if validation was incorrect.
        {"name"      :"gender",                               //4st input field name
         "err_msg"   :"Please select your gender"},           //Related error (4st input field) if validation was incorrect.
        {"name"      :"service"  ,                            //5st input field name
         "err_msg"   :"Which service you like most ?"},       //Related error (5st input field) if validation was incorrect.
        {"name"      :"where_from"  ,                         //6st input field name
         "err_msg"   :"You havn't fill in where to know us."} //Related error (6st input field) if validation was incorrect.         
    ],
    "footer_close_btn_text" :"Close",     //Close button tex on the bottom-right corner of pop-up message box
    "close_btn_icon"        :"X",         //Close button icon on the top-right corner of pop-up message box
};
</pre>

An overview of the value for config:
<table>
    <thead><tr><td>value</td><td>Default demo value e.g.</td><td>Description</td></tr></thead>
    <tbody>
        <tr><td>form_name</td><td>demo_form</td><td>Your form name</td></tr>
        <tr><td>submit_form</td><td>true</td><td>"true" is submit form, "false" would pop-up an error message.</td></tr>
        <tr><td>title-message.success_title</td><td>Validation Success</td><td>Lightbox title when validation was success.</td></tr>
        <tr><td>title-message.error_title</td><td>Error!</td><td>Lightbox title when validation was fail.</td></tr>
        <tr><td>success-message</td><td>Your application is submittted.</td><td>Lightbox content when validation was succes.</td></tr>
        <tr><td>error-message.name</td><td>gender</td><td>Your form name, not id name</td></tr>
        <tr><td>error-message.err_msg</td><td>Please select your gender</td><td>Your form name, not id name</td></tr>
        <tr><td>footer_close_btn_text</td><td>Close</td><td>Close button tex on the bottom-right corner of pop-up message box</td></tr>
        <tr><td>close_btn_icon</td><td>X</td><td>Close button tex on the bottom-right corner of pop-up message box</td></tr>
    <tbody>
</table>

<h2>DEMO SITE</h2>
For demo, please visit:
http://tool.soyosolution.com/validation-with-lightbox/index.php


