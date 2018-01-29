var value=[];
var title = [];
var movies = [];
var nation = [];
var genre = [];

$.getJSON("/js/join.json", function(data){
    movies = data;
      for(var i=0; i<movies.length; i++){
        title[i] = movies[i].제목;
        value[i] = movies[i].횟수;
        nation[i] = movies[i].국가;
        genre[i] = movies[i].장르;
      }
    console.log(title);
});
