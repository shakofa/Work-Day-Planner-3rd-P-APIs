//Add current time
var d = new Date();
var time1 = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();


$(document).ready(function(){

 $('.saveBtn').on("click", function(){

    //getting the valuse of text area
    var textareaValue = $(this).siblings('description').val();

    //getting the attr of time blocks
    var time = $(this).parent().attr();

    // save the values to local storage
    localStorage.setItem(textareaValue, time);

 });


    function hourUPdt(){

    var currentH = moment().hours();

    $('.time-block').each(function(){

        var HourBlock = parseInt($(this).attr('id').split('-')[1]);

        //here check if the hour block is in past present or future
        if(HourBlock < currentH){
            $(this).addClass('past');
        } 
        else if(HourBlock === currentH){
            $(this).removeClass('past');
            $(this).addClass('present');
        } 
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
    });
}

    hourUPdt();

    var interval = setInterval(hourUPdt, 15000);

    // loading data from local storage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));



  $("#currentDate").text(moment().format("dddd, MMMM Do, YYYY"));
  
  $("#currentTime").text(time1);
  
}); 
