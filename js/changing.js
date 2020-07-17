//Replace Text function		
(function () {
  var count = 0;
  var wordsArray = ["WordPress Designer", "Front-End Developer", "Web-content Writer"];
  setInterval(function () {
    count++;
    ("#changing").fadeOut(500, function () {
      (this).text(wordsArray[count % wordsArray.length]).fadeIn(500);
    });
  }, 2000);
});
//End Replace Text function