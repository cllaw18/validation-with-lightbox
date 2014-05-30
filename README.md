validation-with-lightbox
========================

Execute jQuery validation if submitting a form , display error and success message with lightbox, files which are included in this project:

<ol>
<li> basic_demo.html</li>
<li> index.html</li>
<li> css/<br />
   a) style.css</li>
<li> scripts/
   a) jquery-valid-lightbox.js<br />
   b) jquery-valid-lightbox.min.js</li>
</ol>

<hr />
<p><b>1) basic_demo.html</b><br />
Combined all html, css, javascript into a html file named basic_demo.html.<br />
This file can validate the input field and display error and success message with lightbox.</p>

<p><b>2) index.html</b><br />
HTML code of this page, for demo to public :<br />
http://tool.soyosolution.com/validation-with-lightbox/index.html</p>

<p><b>3) css (folder)/style.css</b><br />
CSS code of this page, for demo to public :<br />
http://tool.soyosolution.com/validation-with-lightbox/index.html</p>

<p><b>4a) scripts/jquery-valid-lightbox.js</b><br />
This is uncompressed jquery version</p>

<p><b>4b) scripts/jquery-valid-lightbox.min.js</b><br />
This is minified jquery version</p>

<hr />

<h2>HOW TO USE</h2>

<h3>HTML part</h3>
There is 2 parts of HTML: form and dialog lightbox, for the form part, beware of these 3 points:

You must contain action="javascript:void(0)" onsubmit="return checking();" in the form tab. action="javascript:void(0)" is for stop submiiting the form, onsubmit="return checking(); mean run the javascript function named checking()
Text box are idenified with the id name.
Radio and checkbox are idenified with the input flied name.
<pre>
&lt;form id="form" action="javascript:void(0)" onsubmit="return checking();"&gt;
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
    &lt;input id="submit" type="submit" value="Submit form" &gt;
    &lt;br /&gt;&lt;br /&gt;
&lt;/form&gt;
</pre>
<p>This part is the html code of the diolag box:</p>
<pre>
&lt;div id="lightbox" style="display:none;"&gt;
    &lt;p&gt;Click to close&lt;/p&gt;
        &lt;div id="dialog_box"&gt;
        &lt;div id="title_box"&gt;&lt;/div&gt;
        &lt;div id="content_box"&gt;&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;
</pre>

<h3>CSS PART</h3>
<p>We need these CSS is for creating the lightbox dialog:</p>
<pre>
&lt;style type="text/css"&gt;
    /* lightbox Style */
    #dialog_box {width:500px; margin:0 auto; overflow:hidden;}
    #title_box {float:left; width:100%; background:#e69171; color:#fff; font-size:1em; font-weight:bold; padding:10px 0;}
    #content_box {float:left; width:100%; background:#fff; text-align:left; }
    #content_box ul {list-style-type:square; color:#e69171}
    #content_box li {color:#555;}
    #content_box #msg_title {background:#e69171;}
    #content_box #success_msg {width:460px; padding:20px; color:#555;}
    #lightbox {
        position:fixed; /* keeps the lightbox window in the current viewport */
        top:0; left:0; width:100%; height:100%; background:rgba(0,0,0, 0.5); text-align:center;}
    #lightbox p { text-align:right; color:#fff; margin-right:20px; font-size:12px;}
&lt;/style&gt;
</pre>

<h3>Javascript part</h3>
<p>You need to import the jquery library first, and than import the javascript file of jquery-valid-lightbox plugin.</p>
<pre>
&lt;script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="scripts/jquery-valid-lightbox.min.js"&gt;&lt;/script&gt;
And than add the sentences below for config the input field name and the error message. For an example, there are 5 group of input fields in the demo example:

checkItem[array_index] = new errorMsg("field name", "error message");
Array index	:	Start from zero, and should be increased in alphabetical order.
Field name	:	Id name of the input field or field group.
Error message	:	Error message you want to display.
&lt;script type="text/javascript"&gt;
/* Change the value BELOW */
var checkItem = new Array();
var errorMsgTitle = "Error";
checkItem[0] = new errorMsg("firstname", "Title 1 is empty");
checkItem[1] = new errorMsg("lastname", "You have fogotten fill in Title 2");
checkItem[2] = new errorMsg("age", "Which is the range of your age ?");
checkItem[3] = new errorMsg("gender", "Please select your gender");
checkItem[4] = new errorMsg("service", "Which service you like most ?");
var successMsgTitle = "Submitted";
var successMsg = "Your application is submittted.";
var itemAmount = Object.size(checkItem);
var url = "";
/* Change the value ABOVE */
&lt;/script&gt;
</pre>
<h2>DEMO SITE</h2>
For demo, please visit:
http://tool.soyosolution.com/validation-with-lightbox/index.html


