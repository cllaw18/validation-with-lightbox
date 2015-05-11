validation-with-lightbox-v1.1
=========================

 Execute jQuery validation if submitting a form , display error and success message with lightbox, files which are included in this project:

1.  css/  
     1. jquery-valid-lightbox-v1_1.css (necessary file)
     2. demo.css
2.  demo/  
     1. html  
         1. demo.html  
         2. index.html  
         3. success.html
     2. php  
         1. index.php  
         2. success.php
3.  scripts/  
     a) jquery-valid-lightbox-v1.1.js (necessary file)

* * *
**1i) css (folder)/jquery-valid-lightbox-v1_1.css**<br/>
 CSS style code of this page, for demo to public

**1ii) css (folder)/demo.css**<br/>
 CSS style code of this page, for demo to public, if you want apply this plugin into your code, you can apply jquery-valid-lightbox-v1_1.css only:
 
**2ia) demo(folder)/html(folder)/demo.html**<br/>
 Simple demo page of without interface style in HTML version
 http://tool.soyosolution.com/validation-with-lightbox/demo/html/demo.html

**2ib) demo(folder)/html(folder)/index.html**<br/>
 HTML version of the offical demo page
 
**2ic) demo(folder)/html(folder)/success.html**<br/>
 A webpage with the sentance showing form submittion suceess only.
 
**2iia) demo(folder)/php(folder)/index.php**<br/>
 HTML version of the offical demo page:
 http://tool.soyosolution.com/validation-with-lightbox/index.html 

**2iib) demo(folder)/php(folder)/success.php**<br/>
 That's what you see at offical demo site , after sumittted the form, shows what you have filled in the input with php.
 
**3a) scripts/jquery-valid-lightbox-v1.1.js**<br/>
 All javascript was placing in this file, including the part for configuration.

* * *

## HOW TO USE
### HTML part
 There is HTML part and beware of these 3 points:

 You must contain `action="javascript:void(0)" onsubmit="return checking('your_url');"` in the form tab. action="javascript:void(0)" is for stop submiiting the form, onsubmit="return checking('your_url'); mean run the javascript function named checking() and pass the form submittion target to the javascript funvtion.
 Text box are idenified with the id name.sty
 Radio and checkbox are idenified with the input flied name.
 
```
    <form name="demo_form" method="POST" action="javascript:void(0)" onsubmit="return validation_check('result.php');">
        <div class="item">
            <h6><label>First Name</label></h6>
            <div class="input_panel"><input type="text" id="firstname" name="firstname"></div>
        </div>
        <div class="item">
            <h6><label>Last Name</label></h6>
            <div class="input_panel"><input type="text" id="lastname" name="lastname"></div>
        </div>
        <div class="item">
            <h6><label>Age</label></h6>
            <div class="input_panel">
                <select id="age" name="age">
                    <option value=""> - Please select the range -</option>
                    <option value="0">0-18</option>
                    <option value="19">19-35</option>
                    <option value="36">36-50</option>
                    <option value="50">50-90</option>
                    <option value="100">>100</option>
               </select>
            </div>
        </div>
        <div class="item">
            <h6><label>Gender</label></h6>
            <div class="input_panel">
                <input type="radio" name="gender" value="male">Male<br>
                <input type="radio" name="gender" value="female">Female    
            </div>
        </div>
        <div class="item">
            <h6><label>Service you like</label></h6>
            <div class="input_panel">
                <input type="checkbox" name="service" value="design">Design<br>
                <input type="checkbox" name="service" value="cs">Customer Service
            </div>
        </div>
        <div class="item">
            <h6><label>Where to know us</label></h6>
            <div class="input_panel">
                <input type="checkbox" name="where_from" value="newspaper">newspaper<br>
                <input type="checkbox" name="where_from" value="friend">friend<br>
                <input type="checkbox" name="where_from" value="internet">internet
            </div>
        </div>
        <input id="submit" type="submit" value="Submit form" class="btn btn-primary" data-toggle="modal" role="button">
    </form>
```

### CSS part
 You can import the file `jquery-valid-lightbox-v1_1.css` only for apply the styles.
 We need these CSS is for creating the lightbox dialog:
  ```
    <link href="css/jquery-valid-lightbox-v1_1.css" rel="stylesheet" type="text/css" />
  ```


### Javascript part
 You need to import the jquery library first, and than import the javascript file of jquery-valid-lightbox plugin.
 ```
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
    <script type="text/javascript" src="scripts/jquery-valid-lightbox-v1.1.js"></script>
 ```

And than Config the sentences below in jquery-valid-lightbox-v1.1.js:

 ```
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
 ```    

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

* * *
## Update
=== 13/04/2015 ===<br />
 Many Thanks for a user reporting the fatal problems at the github master-zip package. This update is for fixing the bugs
 - Changed file structure in github master zip folder for adding php version demo files
 - Fix the bugs if user submited the form, can't access the missing "success.html" webpage
 - Update incorrect js and css part at demo.html and index.html
 - Update css style for better appearance in index.html & demo.html
 - follow markup format to tidy up README.md format
    
=== 02/01/2015 ===
 - If there is too much error messages (the list of message is more than 500px height), use a scroll bar to display  message content.
 - Change the position where the message box to display (5% height of browser screen height).
 - Fixed bug: IE7, IE8 and Firefox can’t click the grid layer to close pop up message box.

=== 18/12/2014 ===
 - Updated the pop-up message box position.

=== 17/12/2014 ===
 Fixed big bugs at IE7&IE8 and rewrote some function for better code.
 - Validation-with-lightbox v1.1 released
 - Rewrite some function for more easy to config.
 - Bug fixed : No lightbox background to be displayed at IE7 and IE8.
 - Add a "x" button at message box top-right corner for close the message box.
 - Add a "close" button at message box botttom-right corner for close the message box.
 - Move error message from hard-code valuables to an object for configing easier

=== 29/04/2014 ===  
 Validation-with-lightbox released
 
* * *

## DEMO SITE

 For demo, please visit: http://tool.soyosolution.com/validation-with-lightbox

* * *
If there is any bugs in this plugin, please feel free to report us at: info@soyosolution.com


