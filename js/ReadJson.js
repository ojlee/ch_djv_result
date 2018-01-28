var ch = [];
var value=[];
var title = [];
var movies = [];
$.getJSON("/js/60CTC.json", function(data){
    movies = data;
      for(var i=0; i<movies.length; i++){
        ch[i] = movies[i].채널;
        title[i] = movies[i].제목;
        value[i] = movies[i].횟수;
      }
    console.log(title);
});
