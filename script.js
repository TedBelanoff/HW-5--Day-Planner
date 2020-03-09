//This creates a clock, looking to moment, which updates every second
function setTime() {
    setInterval(function() {
    CurForm= moment().format('LLLL')
    $(currentDay).text(CurForm)
    }, 1000);
  };

//if else & switch case function to format hour background colorings, which update every second
function hourFormats(){
    setInterval(function() {
    var CurHour = moment().format('HH');
    if (CurHour>'17') {
    $("#hournine").removeClass("future"); 
    $("#hournine").addClass("past");
    $("#hourten").removeClass("future"); 
    $("#hourten").addClass("past");
    $("#houreleven").removeClass("future"); 
    $("#houreleven").addClass("past");
    $("#hourtwelve").removeClass("future"); 
    $("#hourtwelve").addClass("past");
    $("#hourone").removeClass("future"); 
    $("#hourone").addClass("past");
    $("#hourtwo").removeClass("future"); 
    $("#hourtwo").addClass("past");
    $("#hourthree").removeClass("future"); 
    $("#hourthree").addClass("past");
    $("#hourfour").removeClass("future"); 
    $("#hourfour").addClass("past");
    $("#hourfive").removeClass("future"); 
    $("#hourfive").addClass("past");}
    else {switch(CurHour)
    { case '17':  
                $("#hourfive").removeClass("future"); 
                $("#hourfive").addClass("present");
                $("#hourfour").removeClass("future"); 
                $("#hourfour").addClass("past");
                $("#hourthree").removeClass("future"); 
                $("#hourthree").addClass("past");
                $("#hourtwo").removeClass("future"); 
                $("#hourtwo").addClass("past");
                $("#hourone").removeClass("future"); 
                $("#hourone").addClass("past");
                $("#hourtwelve").removeClass("future"); 
                $("#hourtwelve").addClass("past");
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("past");
                $("#hourten").removeClass("future"); 
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;  
       case '16':
                $("#hourfour").removeClass("future"); 
                $("#hourfour").addClass("present");
                $("#hourthree").removeClass("future"); 
                $("#hourthree").addClass("past");
                $("#hourtwo").removeClass("future"); 
                $("#hourtwo").addClass("past");
                $("#hourone").removeClass("future"); 
                $("#hourone").addClass("past");
                $("#hourtwelve").removeClass("future"); 
                $("#hourtwelve").addClass("past");
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("past");
                $("#hourten").removeClass("future"); 
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '15':
                $("#hourthree").removeClass("future"); 
                $("#hourthree").addClass("present");
                $("#hourtwo").removeClass("future"); 
                $("#hourtwo").addClass("past");
                $("#hourone").removeClass("future"); 
                $("#hourone").addClass("past");
                $("#hourtwelve").removeClass("future"); 
                $("#hourtwelve").addClass("past");
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("past");
                $("#hourten").removeClass("future"); 
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '14':
                $("#hourtwo").removeClass("future"); 
                $("#hourtwo").addClass("present");
                $("#hourone").removeClass("future"); 
                $("#hourone").addClass("past");
                $("#hourtwelve").removeClass("future"); 
                $("#hourtwelve").addClass("past");
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("past");
                $("#hourten").removeClass("future"); 
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '13':
                $("#hourone").removeClass("future"); 
                $("#hourone").addClass("present");
                $("#hourtwelve").removeClass("future"); 
                $("#hourtwelve").addClass("past");
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("past");
                $("#hourten").removeClass("future");
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '12':
                $("#hourtwelve").removeClass("future"); 
                $("#hourtwelve").addClass("present");
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("past");
                $("#hourten").removeClass("future");
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '11':
                $("#houreleven").removeClass("future"); 
                $("#houreleven").addClass("present");
                $("#hourten").removeClass("future");
                $("#hourten").addClass("past");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '10':
                $("#hourten").removeClass("future");
                $("#hourten").addClass("present");
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
    case '9':
                $("#hournine").removeClass("future"); 
                $("#hournine").addClass("past");  
    break;
}}
}, 1000)};

//Executing the dynamic clock and hour formatting
setTime();
hourFormats();

//Functions to save input fields into local storage
function saveNine(){
    localStorage['NineData'] =  $("#hournine").val();
}
function saveTen(){
    localStorage['TenData'] =  $("#hourten").val();
}
function saveEleven(){
    localStorage['ElevenData'] =  $("#houreleven").val();
}
function saveTwelve(){
    localStorage['TwelveData'] =  $("#hourtwelve").val();
}
function saveOne(){
    localStorage['OneData'] =  $("#hourone").val();
}
function saveTwo(){
    localStorage['TwoData'] =  $("#hourtwo").val();
}
function saveThree(){
    localStorage['ThreeData'] =  $("#hourthree").val();
}
function saveFour(){
    localStorage['FourData'] =  $("#hourfour").val();
}
function saveFive(){
    localStorage['FiveData'] =  $("#hourfive").val();
}

//Function to input localStorage into cells
function localRetrieve(){
    $("#hournine").val(localStorage['NineData']);
    $("#hourten").val(localStorage['TenData']);
    $("#houreleven").val(localStorage['ElevenData']);
    $("#hourtwelve").val(localStorage['TwelveData']);
    $("#hourone").val(localStorage['OneData']);
    $("#hourtwo").val(localStorage['TwoData']);
    $("#hourthree").val(localStorage['ThreeData']);
    $("#hourfour").val(localStorage['FourData']);
    $("#hourfive").val(localStorage['FiveData']);
}

//Execution of localStorage function
localRetrieve();
