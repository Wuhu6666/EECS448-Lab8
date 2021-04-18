var memes = ['meme1.jpg','meme2.jpg','meme3.jpg','meme4.jpg','meme5.jpg'];
var i = 0;
var index = 4;

function change(change){

  i = i + change;
  //when i>index, get next till the end
  if(i > index)
  {
    i = 0;
  }
  //when i<index, get previous till the end
  if(i < 0)
  {
    i = index;
  }
  document.getElementById("slideshow").src = memes[i];
}