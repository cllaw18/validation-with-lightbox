//Helper
function errorMsg(field_name, error_msg){
    return {name:field_name, msg:error_msg, status:false }
}

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

Array.prototype.contains = function(element){
    return this.indexOf(element) > -1;
};


function checking(){
    var msgContent ="";
    var checker = false;
    var notFalseChecker = false;
    var err_record = new Array();
    //Load input box's value
    for (var i=0; i < itemAmount; i++){
        var value = "";
        err_record[i] = false;
        value = $('#'+checkItem[i].name).val();
        //Check the input box type: text / radio, checkbox 
        if(typeof value != 'undefined'){ value = $('#'+checkItem[i].name).val();}
        else{ 
            //If is checkbox or radiobox, get the value.
            if ($('input[name='+checkItem[i].name+']:checked').val()){
                value = $('input[name='+checkItem[i].name+']').attr("value");
                console.log(checkItem[i].name+"checked:"+value);            
            }else{value = "";}
        }
        if (value.length > 0){ err_record[i] = true;}
        else {
            msgContent += "<li>"+checkItem[i].msg+"</li>";
            err_record[i] = false;
            if (i == itemAmount-1){}
        }
    }
    
    checker = checkForAllSame_butNotFalse(err_record);
    if ( checker == false) { displayErrorMsg(msgContent);} 
    else { displaySuccessMsg();}    
}//EOF of checking

function checkForAllSame_butNotFalse(arr){
    var x = arr[0];
    for(var i=1;i<arr.length;i++){
        if(x!=arr[i] || x!= true){return false;}
    }
    return true;
}

function displaySuccessMsg(){
    $("#title_box").css("background", "#65B688");
    $("#message_box").html('<div id="success_msg">'+successMsg+'</div>');
    append_lightbox(successMsgTitle, '<div id="success_msg">'+successMsg+'</div>');
    return true;
}

function displayErrorMsg(msg){
    $("#title_box").css("background", "#e69171");
    $("#modal-dialog-title").text("Error Message");
    $("#message_box").html(msg);
    append_lightbox(errorMsgTitle, "<ul>"+msg+"</ul>");
    $("#submit").attr("href", "#small_modal");
    return false;
}

    function append_lightbox(title, msg){
        //prevent default action (hyperlink)
        //e.preventDefault();
        //Get clicked link href
        //var image_href = $(this).attr("href");
        var msg ;
        /*  
        If the lightbox window HTML already exists in document, 
        change the img src to to match the href of whatever link was clicked
        If the lightbox window HTML doesn't exists, create it and insert it.
        (This will only happen the first time around) */
        if ($('#lightbox').length > 0) { // #lightbox exists
            //place href as img src value
            //$('#content').html('<img src="' + image_href + '" />');
            $('#content_box').html(msg);
            //show lightbox window - you could use .show('fast') for a transition
            $('#lightbox').show();
        }
        else { //#lightbox does not exist - create and insert (runs 1st time only)
            //create HTML markup for lightbox window
            var lightbox = 
            '<div id="lightbox">' +
                '<div id="dialog_box">'+
                '<div id="title_box">E'+title+'</div>'+
                '<div id="content_box">' + //insert clicked link's href into img src
                    '<div id="msg_title">Error Msg</div>'+
                    '<div id="detailed_msg">'+msg+'</div>' +    
                '</div>' +    
                '</div>' +
            '</div>';
            //insert lightbox HTML into page
            $('body').append(lightbox);
            $('#title_box').append(title);            
        }
    }
    
jQuery(document).ready(function($) {
    //Click anywhere on the page to get rid of lightbox window
    $('#lightbox').on('click', function() {
        $('#lightbox').hide();
    });
});

