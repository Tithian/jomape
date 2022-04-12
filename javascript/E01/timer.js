function updateTimer() {
  date_input  = Date.parse("2022/04/11");
  date_now     = new Date();
  diff    = date_now - date_input;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer").innerHTML = '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );

/*
    var fecha = setInterval(function(){
        date_future = new Date(new Date().getFullYear() +1, 0, 1);
        date_now = new Date();

        seconds = Math.floor((date_future - (date_now))/1000);
        minutes = Math.floor(seconds/60);
        hours = Math.floor(minutes/60);
        days = Math.floor(hours/24);

        hours = hours-(days*24);
        minutes = minutes-(days*24*60)-(hours*60);
        seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);

        document.getElementById("time").innerHTML = "Time until new year:\nDays: " + days + " Hours: " + hours + " Minutes: " + minutes + " Seconds: " + seconds;
    },1000);
};

*/

