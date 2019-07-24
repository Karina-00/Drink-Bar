function cupClick(){
   let level = Number(this.getAttribute('level'));
   
   if(level<88){
      level+=22;
      this.style.backgroundPosition = "0 "+level+"%";
      this.setAttribute('level', level);
   }
   else{
      this.style.cursor = "not-allowed";
   }
   // else if(level==96){
   //    // while(level>=24){
   //       level=level-24;
   //       this.style.backgroundPosition = "0 "+level+"%";
   //       this.setAttribute('level', level);
   //    // }
   // }
}

let cup = document.querySelectorAll('.glass');
cup.forEach(cup => {
   cup.addEventListener('click', cupClick);
});


