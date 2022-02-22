x = 0;
y = 0;
draw_circle = "";
draw_rect = "";
 
var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "system is listening please speak";
    recognition.start();
}
recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as :" +content;
    if(content == "circle")
    {
        x = math.floor(math.random()*900);
        y = math.floor(math.random()*600);
        document.getElementById("status").innerHTML = "started drawing circle";
        draw_cirle = "set";
    }
    if (content == "rectangle")
    {
        x = math.floor(math.random()*900);
        y = math.floor(math.random()*600);
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rect = "set";
    }
    function setup(){
        canvas = createCanvas(900 , 600);

    }
    function draw() {
        if (draw_circle == "set")
        {
            radius = math.floor(math.random()*100);
            circle (x,y,radius);
            document.getElementById("status").innerHTML = "circle is drawn";
            draw_circle = "";
        }
        if (draw_rect == "set")
        {
            rect (x,y,70,50);
            document.getElementById("status").innerHTML = "rectangle is drawn";
            draw_rect= "";
        }
    }
}
