// JQUERY
// function changeText(){
//   const wielkośćSkrola = $(document).scrollTop();  
//   const sekcja1 = $('.sekcja1').height();
//   const sekcja2 = $('.sekcja2').height() + sekcja1;
//   const sekcja3 = $('.sekcja3').height() + sekcja2;
//   const sekcja4 = $('.sekcja4').height() + sekcja3;

//   if(wielkośćSkrola < sekcja1){
//       $('.info').text("1");
//   } else if(wielkośćSkrola < sekcja2){
//     $('.info').text("2");
// } else if(wielkośćSkrola < sekcja3){
//     $('.info').text("3");
// } else if(wielkośćSkrola < sekcja4){
//     $('.info').text("4");
// }

// }
// $(document).on("scroll", changeText)

//JAVASCRIPT

// document.addEventListener("scroll", changeText);
// function changeText(){
//     const wielkoscSkrola = window.scrollY;
//       const sekcja1 = document.querySelector('.sekcja1').clientHeight;
//   const sekcja2 = document.querySelector('.sekcja2').clientHeight + sekcja1;
//   const sekcja3 = document.querySelector('.sekcja3').clientHeight + sekcja2;
//   const sekcja4 = document.querySelector('.sekcja4').clientHeight + sekcja3;

//     if(wielkoscSkrola < sekcja1){
//           document.querySelector('.info').textContent= "1";
//       } else if(wielkoscSkrola < sekcja2){
//         document.querySelector('.info').textContent= "2";
//     } else if(wielkoscSkrola < sekcja3){
//         document.querySelector('.info').textContent= "3";
//     } else{
//         document.querySelector('.info').textContent= "4";

// }
// }

// JAVASCRIPT WJEŻDŻAJĄCA SEKCJA
document.addEventListener("scroll", changeText);
function changeText(){
    const wielkoscSkrola = window.scrollY;
      const sekcja1 = document.querySelector('.sekcja1').clientHeight;
  const sekcja2 = document.querySelector('.sekcja2').clientHeight + sekcja1;
  const sekcja3 = document.querySelector('.sekcja3').clientHeight + sekcja2;
  const sekcja4 = document.querySelector('.sekcja4').clientHeight + sekcja3;

    if(wielkoscSkrola < sekcja1){
          document.querySelector('.info').textContent= "1";
      } else if(wielkoscSkrola < sekcja2){
        document.querySelector('.info').textContent= "2";
        document.querySelector('.sekcja3').classList.add("active");
    } else if(wielkoscSkrola < sekcja3){
        document.querySelector('.info').textContent= "3";
       

    } else{
        document.querySelector('.info').textContent= "4";

}
}