let images = [];
images[0]='https://media.gettyimages.com/photos/cigarette-butts-in-a-public-ashtray-picture-id957852396?s=2048x2048';
images[1]='https://thetitlemag.com/wp-content/uploads/2018/12/cigarette-butt-2-2560x1440-c-default.jpg';
images[2]='https://i.imgur.com/O2qfBJa.jpg';
images[3]='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9KLQmiwovpKkpojnz641eN7_m60o4z8AyMGEU7KRVtTu4QAiH';
images[4]='https://darrellcreswell.files.wordpress.com/2010/05/big-but.jpg';
images[5]='https://static01.nyt.com/images/2017/01/11/public-editor/11pubedphoto/11pubedphoto-jumbo.png';

chrome.runtime.onMessage.addListener(
    function (request) {
        if (request.message === "clicked_browser_action") {
            $('p').click(function() {
                fColor = $(this).css('background-color'); // This function is executed every time someone clicks on a P element
                  //var paragraphText = $(this).css({'background-color': fColor});
                  
                    var paragraphText = $(this).css({'color': fColor});
                    //$('img').remove()
              
            });
           
          $('h1').click(function () {
              $('h1').text("BIG BUTT");
            });
          $('h2').click(function () {
            $('h2').text("BUTT");
          });
          $('h3').click(function () {
            $('h3').text("Butt");
          });
          $('h4').click(function () {
            $('h4').text("butt");
          });
          $('button').click(function() {
            location.reload();
        });
          // This function is executed every time someone clicks on a P element
                //var paragraphText = $(this).css({'background-color': fColor});
                
                  //var paragraphText = $(this).css({'color': fColor});
                  //$('img').remove()
              //});
                
          $(document).ready(function () {
            var x = Math.floor((Math.random() * images.length));
            $('img').attr('src', images[x]);
            //$('button').attr('disabled', true);
            $('a').text("BUTTY McBUTTFACE");
          
                })



        }
    }
)