
function buyNow() {
    let divContent = document.getElementById("content");
    
      for (let i = 0; i < 5; i++) {
       setTimeout(function() {
            divContent.style.transition="all 5s ease-in-out 8s "
            divContent.style.backgroundColor="lightblue"
            divContent.style.display="flex";
            divContent.style.flexWrap="wrap";
            divContent.style.gap="10px";
            divContent.style.padding="10px"
            divContent.innerHTML += `<div style="border:2px solid;text-align:center;border-radius:15px;padding:10px"><h1>Sneakers</h1>  
                    <div style="display:flex; flex-direction:column;border:1px;">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-0C8cabFWYOJYuGZRwjnFc39zZS8LqBdETw&s" 
                        width="200" >
                        <button style="width:150px; margin-top:10px; margin-left:30px;">Buy Now</button>
                    </div>
               </div>`
            },i*2000);
            }
        }






















// // let arr=1;
// // while(arr<=5){
// //     if(arr%2!=0){
// //         console.log(arr)
// //     }
// //     arr++;
// // }


// // for(let i=1;i<=100;i++){
// //     if(i%1==0 && i%2!=0){
// //         console.log(i);
// //     }
// // }
// // //1 3 5 7 11 13


// // let n=1234;
// // sum=0;
// // while(n>0){
    
// // }