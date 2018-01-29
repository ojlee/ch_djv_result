var g_action = 0;
var g_sf = 0;
var g_thriler = 0;
var g_adventure = 0;
var g_crime = 0;
var g_comedy = 0;
var g_animation = 0;
var g_romance = 0;
var g_total = 0;

function calgenre(s,e){
  for (var i = s; i<e; i++){

    if(/액션*/.exec(genre[i]) != null){
      g_action += value[i];
      g_total += value[i];
    }
    if(/SF*/.exec(genre[i]) != null){
      g_sf += value[i];
      g_total += value[i];
    }
    if(/스릴러*/.exec(genre[i]) != null){
      g_thriler += value[i];
      g_total += value[i];
    }
    if(/어드벤처*/.exec(genre[i]) != null){
      g_adventure += value[i];
      g_total += value[i];
    }
    if(/범죄*/.exec(genre[i]) != null){
      g_crime += value[i];
      g_total += value[i];
    }
    if(/코미디*/.exec(genre[i]) != null){
      g_comedy += value[i];
      g_total += value[i];
    }
    if(/애니메이션*/.exec(genre[i]) != null){
      g_animation += value[i];
      g_total += value[i];
    }
    if(/로맨스*/.exec(genre[i]) != null){
      g_romance += value[i];
      g_total += value[i];
    }
    else{

    }
  }

}
