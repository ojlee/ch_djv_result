var kor = 0;
var forei = 0;

function calnation(start_index, end_index){
  for (var i = start_index; i<end_index; i++){
    if(nation[i] == "한국"){
      kor += value[i];
    }
    else{
      forei += value[i];
    }
  }
}
