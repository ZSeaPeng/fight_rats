    var time = 1000;
    var score = 0;
    var play = false;
    var timeId = null;
    var countDowm = 30;
    var count = 1;
    var countDownId;
    function start() {
        play = true;
        score = 0;
        count = 1;
        timeId = setInterval("show()",(time/count+300));
        countDowm = 30;
        showTime();
    }
    function show(){

        if (play) {
            var rand = Math.floor(Math.random() * 15 + 1);
            document.getElementById("burrow[" + rand + "]").innerHTML = '<img src="img/chinchilla.png"/>';
            setTimeout("document.getElementById('burrow[" + rand + "]').innerHTML=''", 2000);
        }else {
            alert("Please click on the start of the game.");
        }
    }
    function clearAll(){
        for(var i=0;i<16;i++){
            document.getElementById("burrow["+i+"]").innerHTML="";
        }
    }
    function stop(){
        alert("your score is" + score +".");
        clearInterval(timeId);
        clearTimeout(countDownId);
        clearAll();
        play = false;
        score = 0;
        countDowm = 30;
        document.getElementById("score").value = score;
        document.getElementById("count_down").value = countDowm;
    }
    function showTime(){
        //document.form1.remtime.value = countDown;
        document.getElementById("count_down").value = countDowm;
        if(countDowm == 0)
        {
            stop();
            return;
        }
        else
        {
            countDowm = countDowm - 1;
            countDownId = setTimeout("showTime()",1000);
        }
    }

    function hit(id){
        if(count < 4) {
            count = score / 3;
        }else {
            count = 1000;
        }
        if(!play){
            alert("Please click on the start of the game.");
        }else {
            if(document.getElementById("burrow["+id+"]").innerHTML!=""){
                score++;
                document.getElementById("score").value = score;
                document.getElementById("burrow["+id+"]").innerHTML="";
            }else {
                document.getElementById("burrow["+id+"]").innerHTML = '<img src="img/1.png"/>';
                setTimeout("document.getElementById('burrow["+id+"]').innerHTML=''",300);
            }
        }
    }
    function showScore(){
        document.getElementById("score").setAttribute("value",score);
    }