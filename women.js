 // <!-- =====================================================================================menu bar========================================================= -->
    // <!-- =====================================================================================menu bar========================================================= -->
    // <!-- =====================================================================================menu bar========================================================= -->
    // <!-- =====================================================================================menu bar========================================================= -->
    // <!-- =====================================================================================menu bar========================================================= -->
    var modal = document.getElementById("myModal");
    var newBar = document.querySelector("#newbar");

    function newBar1(){

        document.getElementById("newbar").innerHTML=""
        document.getElementById("newbar2").style.color="black";
        document.getElementById("newbar2").style.borderBottom="transparent"
        document.getElementById("newbar3").style.color="black";
        document.getElementById("newbar3").style.borderBottom="transparent"
        document.getElementById("newbar4").style.color="black";
        document.getElementById("newbar4").style.borderBottom="transparent"
        document.getElementById("newbar5").style.color="black";
        document.getElementById("newbar5").style.borderBottom="transparent"
        document.getElementById("newbar6").style.color="black";
        document.getElementById("newbar6").style.borderBottom="transparent"

        var a = 0;
       if(a==0){
        document.getElementById("newbar1").style.color="#FD7685";
        document.getElementById("newbar1").style.borderBottom="2px solid #FD7685"

// //  /* --------------------------------------------------------Women------------------------------------------------------ */
// -------------------------------------------------------------Whats new--------------------------------------------------------
        var btn1 = document.createElement("button");
        btn1.textContent="What's New";
        btn1.onclick = function() {
            modal.style.display = "block";
        }
            window.onclick = function(event) {
   if (event.target == modal) {
    modal.style.display = "none";
  }
}
        }
        

//  /* --------------------------------------------------------Women------------------------------------------------------ */
//  /* -----------------------------------------------------Indian Wear---------------------------------------------------- */

        var btn2 = document.createElement("button");
        btn2.textContent="Indian wear";

        var indianWear=document.getElementById("indianWear");
        btn2.onclick=function(){
            count=1;
            indianWear.style.display="block";
        }

        //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- western Wear----------------------------------------------------
        var btn3 = document.createElement("button");
        btn3.textContent="Western Wear";

                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- Bags----------------------------------------------------
        var btn4 = document.createElement("button");
        btn4.textContent="Bags";

                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- Footwear----------------------------------------------------
        var btn5 = document.createElement("button");
        btn5.textContent="Footwear";


                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- Jewllery----------------------------------------------------
        var btn6 = document.createElement("button");
        btn6.textContent="Jewellery";


                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- Lingerie----------------------------------------------------
        var btn7 = document.createElement("button");
        btn7.textContent="Lingerie";

                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- SportWear----------------------------------------------------
        var btn8 = document.createElement("button");
        btn8.textContent="Sportwear";


                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // -------------------------------------------------------- Sleep Lounge----------------------------------------------------
        var btn9 = document.createElement("button");
        btn9.textContent="Sleep & Lounge";


                //  /* --------------------------------------------------------Women------------------------------------------------------ */
        // --------------------------------------------------------Watches----------------------------------------------------
        var btn10 = document.createElement("button");
        btn10.textContent="Watches";

        newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10);
        a = 1;
    }
    var menmodal = document.getElementById("menModal");
    function newBar2(){
        document.getElementById("newbar").innerHTML=""
        document.getElementById("newbar1").style.color="black";
        document.getElementById("newbar1").style.borderBottom="transparent"
        document.getElementById("newbar3").style.color="black";
        document.getElementById("newbar3").style.borderBottom="transparent"
        document.getElementById("newbar4").style.color="black";
        document.getElementById("newbar4").style.borderBottom="transparent"
        document.getElementById("newbar5").style.color="black";
        document.getElementById("newbar5").style.borderBottom="transparent"
        document.getElementById("newbar6").style.color="black";
        document.getElementById("newbar6").style.borderBottom="transparent"
        a = 1;
        if (a==1){
        document.getElementById("newbar2").style.color="#FD7685";
        document.getElementById("newbar2").style.borderBottom="2px solid #FD7685"

        // var btn1 = document.createElement("button");
        // btn1.textContent="What's New";
       
        var btn1 = document.createElement("button");
        btn1.textContent="What's New";
        btn1.onclick = function() {
            menmodal.style.display = "block";
        }
            window.onclick = function(event) {
   if (event.target == menmodal) {
    menmodal.style.display = "none";
  }
}

        var btn2 = document.createElement("button");
        btn2.textContent="Top Wear";



        var btn3 = document.createElement("button");
        btn3.textContent="Bottomwear";


        var btn4 = document.createElement("button");
        btn4.textContent="Ethnicwear"


        var btn5 = document.createElement("button");
        btn5textContent="Footwear"


        var btn6 = document.createElement("button");
        btn6.textContent="Athleisure";


        var btn7 = document.createElement("button");
        btn7.textContent="Innerwear & Sleepwear"


        var btn8 = document.createElement("button");
        btn8.textContent="Watches"


        var btn9 = document.createElement("button");
        btn9.textContent="Accessories"


        var btn10 = document.createElement("button");
        btn10.textContent="Bags and Backpacks"


        newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10);
        a=2;
        }
        
    }
    var kidmodal = document.getElementById("kidModal");
    function newBar3(){

        document.getElementById("newbar").innerHTML=""
        document.getElementById("newbar1").style.color="black";
        document.getElementById("newbar1").style.borderBottom="transparent"
        document.getElementById("newbar2").style.color="black";
        document.getElementById("newbar2").style.borderBottom="transparent"
        document.getElementById("newbar4").style.color="black";
        document.getElementById("newbar4").style.borderBottom="transparent"
        document.getElementById("newbar5").style.color="black";
        document.getElementById("newbar5").style.borderBottom="transparent"
        document.getElementById("newbar6").style.color="black";
        document.getElementById("newbar6").style.borderBottom="transparent"

        a=2;
        document.getElementById("newbar3").style.color="#FD7685";
        document.getElementById("newbar3").style.borderBottom="2px solid #FD7685"

        var btn1 = document.createElement("button");
        btn1.textContent="What's New";

        btn1.onclick = function() {
            kidmodal.style.display = "block";
        }
            window.onclick = function(event) {
   if (event.target == kidmodal) {
    kidmodal.style.display = "none";
  }
}

        var btn2 = document.createElement("button");
        btn2.textContent="Indian Wear";

        var btn3 = document.createElement("button");
        btn3.textContent="Western Wear";

        var btn4 = document.createElement("button");
        btn4.textContent="Footwear"

        var btn5 = document.createElement("button");
        btn5.textContent="Jewellery"

        var btn6 = document.createElement("button");
        btn6.textContent="Feeding";

        var btn7 = document.createElement("button");
        btn7.textContent="Sportwear"

        var btn8 = document.createElement("button");
        btn8.textContent="Sleep & Lounge"

        var btn9 = document.createElement("button");
        btn9.textContent="Accesories"

        var btn10 = document.createElement("button");
        btn10.textContent="Toys & Games"


        newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10);

        a=3;
    }
    var homemodal = document.getElementById("homeModal");
    function newBar4(){

        document.getElementById("newbar").innerHTML=""
        document.getElementById("newbar1").style.color="black";
        document.getElementById("newbar1").style.borderBottom="transparent"
        document.getElementById("newbar2").style.color="black";
        document.getElementById("newbar2").style.borderBottom="transparent"
        document.getElementById("newbar3").style.color="black";
        document.getElementById("newbar3").style.borderBottom="transparent"
        document.getElementById("newbar5").style.color="black";
        document.getElementById("newbar5").style.borderBottom="transparent"
        document.getElementById("newbar6").style.color="black";
        document.getElementById("newbar6").style.borderBottom="transparent"

        a=3;
        document.getElementById("newbar4").style.color="#FD7685";
        document.getElementById("newbar4").style.borderBottom="2px solid #FD7685"

        var btn1 = document.createElement("button");
        btn1.textContent="What's New";

        
        btn1.onclick = function() {
            homemodal.style.display = "block";
        }
            window.onclick = function(event) {
   if (event.target == homemodal) {
    homemodal.style.display = "none";
  }
}


        var btn2 = document.createElement("button");
        btn2.textContent="Kitchen & Dining";


        var btn3 = document.createElement("button");
        btn3.textContent="Decor";


        var btn4 = document.createElement("button");
        btn4.textContent="Bedding"


        var btn5 = document.createElement("button");
        btn5.textContent="Bath"


        var btn6 = document.createElement("button");
        btn6.textContent="Storage";


        var btn7 = document.createElement("button");
        btn7.textContent="Floor Coverings"


        var btn8 = document.createElement("button");
        btn8.textContent="Rainwear"


        newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8);
        a=4;
    }
    var techmodal = document.getElementById("techModal");
    function newBar5(){

        document.getElementById("newbar").innerHTML=""
        document.getElementById("newbar1").style.color="black";
        document.getElementById("newbar1").style.borderBottom="transparent"
        document.getElementById("newbar2").style.color="black";
        document.getElementById("newbar2").style.borderBottom="transparent"
        document.getElementById("newbar3").style.color="black";
        document.getElementById("newbar3").style.borderBottom="transparent"
        document.getElementById("newbar4").style.color="black";
        document.getElementById("newbar4").style.borderBottom="transparent"
        document.getElementById("newbar6").style.color="black";
        document.getElementById("newbar6").style.borderBottom="transparent"

        a=4;
        document.getElementById("newbar5").style.color="#FD7685";
        document.getElementById("newbar5").style.borderBottom="2px solid #FD7685"

        var btn1 = document.createElement("button");
        btn1.textContent="What's New";

        btn1.onclick = function() {
            techmodal.style.display = "block";
        }
            window.onclick = function(event) {
   if (event.target == techmodal) {
    techmodal.style.display = "none";
  }
}

        var btn2 = document.createElement("button");
        btn2.textContent="Smart wearables & activity";


        var btn3 = document.createElement("button");
        btn3.textContent="Headpjones";


        var btn4 = document.createElement("button");
        btn4.textContent="Speakers"


        var btn5 = document.createElement("button");
        btn5.textContent="Charger & Cables"


        var btn6 = document.createElement("button");
        btn6.textContent="Power banks";


        var btn7 = document.createElement("button");
        btn7.textContent="Cases and Covers"

        newBar.append(btn1, btn2, btn3, btn4, btn5, btn6, btn7);

    a=5;
    }
    
    function newBar6(){
        
        document.getElementById("newbar").innerHTML=""
        document.getElementById("newbar1").style.color="black";
        document.getElementById("newbar1").style.borderBottom="transparent"
        document.getElementById("newbar2").style.color="black";
        document.getElementById("newbar2").style.borderBottom="transparent"
        document.getElementById("newbar3").style.color="black";
        document.getElementById("newbar3").style.borderBottom="transparent"
        document.getElementById("newbar4").style.color="black";
        document.getElementById("newbar4").style.borderBottom="transparent"
        document.getElementById("newbar5").style.color="black";
        document.getElementById("newbar5").style.borderBottom="transparent"


        a=5;
        if(a=5){
            document.getElementById("newbar6").style.color="#FD7685";
        document.getElementById("newbar6").style.borderBottom="2px solid #FD7685"
        var more = document.getElementById("newbar6");

        var myMore = document.getElementById("myMore");
        more.onclick=function(){
            myMore.style.display="block";
        }
        window.onclick = function(event) {
        if (event.target == myMore) {
            myMore.style.display = "none";
        }
        }
    a=6;
        }
    }


    //   ======================================================================================sign======================================================================
    var Usar = JSON.parse(localStorage.getItem("User"));
    document.getElementById("userValue").textContent= Usar;
var signStatus = JSON.parse(localStorage.getItem("signIn"));
if(signStatus=="signedUp"){
    function acFunction(){
    var account=document.getElementById("acountSign");
    account.style.display="block";

    window.onclick = function(event) {
  if (event.target == account) {
    account.style.display = "none";
  }
}
   }
} else{
    function acFunction(){
    var account=document.getElementById("Account");
    acount.style.display="block";

    console.log(signStatus);8

    window.onclick = function(event) {
  if (event.target == acount) {
    acount.style.display = "none";
  }
}
   }
}

    // ================================================================================logout====================================================================================
   function logOut(){
       localStorage.removeItem("User");
       localStorage.removeItem("signIn");
       window.location.href="mainpage.html";
   }

// ===================================================================================Wish List=========================================================================
    if(signStatus=="signedUp"){
        function wishFun(){
            window.location.href="wish.html"
        }
    }else{
        function wishFun(){
        var span = document.getElementById("crossed");
       var signupOrLogin= document.getElementById("loginOrSignup");
       signupOrLogin.style.display="block";
       window.onclick=function(event){
           if(event.target == signupOrLogin){
               signupOrLogin.style.display="none";
               document.getElementById("acount").style.display="none";
           }
       }
       span.onclick=function(){
           signupOrLogin.style.display="none";
           document.getElementById("acount").style.display="none";
       }
    
    }
    }
    // ====================================================================================empty cart=================================================================
    var cartStatus = JSON.parse(localStorage.getItem("Item"));
    if(cartStatus=="added" && signStatus=="signedUp"){
      function openCart(){
          var Cart = document.getElementById("cart");
          Cart.style.display="block";
          var data = JSON.parse(localStorage.getItem("addedItem"));
          document.getElementById("prodName").textContent=data.name;
          document.getElementById("prodColor").textContent=data.color;
          document.getElementById("prodSize").textContent=data.size;
          document.getElementById("prodPrice").textContent=("₹") + data.price;
          document.getElementById("prodPrice1").textContent=("₹") + data.price;
          document.getElementById("prodPrice2").textContent=("₹") + data.price;
          document.getElementById("prodPrice3").textContent=("₹") + data.price;

          console.log(data);
          var image = document.createElement("img")
          image.setAttribute("src",(data.img))
          document.getElementById("cartimg").append(image);
          window.onclick=function(event){
             if(event.target==Cart){
                //  Cart.style.display="none"
                window.location.href="mainpage.html";
             }
         }
      }
    }else{    
        function openCart(){
    var Cart = document.getElementById("Cart");
    Cart.style.display="block";
    window.onclick=function(event){
      if(event.target==Cart){
          Cart.style.display="none";
      }
} 
}}


    function goToShop(){
        // Cart.style.display="none";
        // cart.style.display="none";
        window.location.href="mainpage.html"
    }

//  -----------------------------------------------------------------------------------open signup page
function openSign(){
   var logUp= document.getElementById("logUp");
   logUp.style.display="block";

   window.onclick=function(event){
       if(event.target==logUp){
           logUp.style.display="none";
       }
   }
   var span = document.getElementById("back")
   span.onclick =function(){
    logUp.style.display="none";
   }
    document.getElementById("gbsignIn").onclick=function(){
        logUp.style.display="none"; 
    }
}
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~signup entry``~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.getElementById("signUp").addEventListener("click", signUp);
    userData=JSON.parse(localStorage.getItem("userDatabase"))||[]
    function signUp(){
       var user = document.getElementById("userName").value;
       var phone = document.getElementById("mobileNumber").value;
       var mail = document.getElementById("mailId").value;
       var password=document.getElementById("passWord").value;

       var userobj={
           user:user,
           phone:phone,
           mail:mail,
           password:password
       }

       userData.push(userobj);
       localStorage.setItem("userDatabase", JSON.stringify(userData));
       window.location.href="mainpage.html";
       alert("Signed Up Succesfuly Now you can sign in")
    }

    // ================================================================================================Sign in===================================================================
    document.getElementById("signInn").addEventListener("click", signInfu);
    var regUserData = JSON.parse(localStorage.getItem("userDatabase"));


function signInfu(){
     var email=document.getElementById("emailId").value;
     var password=document.getElementById("pasword").value;

              var func = "Noworking";
            for(var i = 0; i < regUserData.length; i++){
                if (regUserData[i].mail==email && regUserData[i].password==password){
                    localStorage.setItem("signIn", JSON.stringify("signedUp"));
                    localStorage.setItem("User", JSON.stringify(regUserData[i].mail));
                    func = "working";
                    alert("Signed in Succesfully Now fill your Bag with happiness!")
                    window.location.href="mainpage.html";
                   
                }
            } if(func=="Noworking"){
                document.getElementById("paragraph").textContent="! Wrong username and Password";
            }
        }


        function openSignIn(){
            var signin = document.getElementById("Signin")

            signin.style.display="block";
            window.onclick=function(event){
                if(event.target==signin){
                    signin.style.display="none";
                }
            }
            var span = document.getElementById("Crosser")
            span.onclick=function(){
                signin.style.display="none";
            }
        }
        function jumpToKid(){
            window.location.href="kid.html"
        }
        function jumpToWomen(){
            window.location.href="women.html"
        }
        function jumpToMen(){
            window.location.href= "men.html";
        }
        function jumpToHome(){
            window.location.href="home.html";
        }
        function jumpToTech(){
            window.location.href="tech.html";
        }
        function goToBuy(){
            window.location.href="address.html"
        }
        function jumpToAll(){
            window.location.href="allbrands.html"
        }

    //     <!-- =====================================================================================menu bar end========================================================= -->
    // <!-- =====================================================================================menu bar end========================================================= -->
    // <!-- =====================================================================================menu bar end========================================================= -->
    // <!-- =====================================================================================menu bar end========================================================= -->
    // <!-- =====================================================================================menu bar end========================================================= -->

    //     <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
    // =============================================================================kid area=====================================================================
    var obj = [
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/7/n724_1_bad65d5d.jpg?rnd=20200526195200",
         brand:"Gillori",
         name : "Blossom Pink Evening Jacket Dress ",
         price:"3,600",
         color: "Pink",
         size :"S", 
         

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/7/1/7190-1_63d3f212_8.jpg?rnd=20200526195200",
         brand:"Yufta",
         name : "Navy Blue Dobby Weaved Kurta",
         price:"1,782",
         color: "Blue",
         size :"S", 

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/h/bhayset031_1_f5d3e82b.jpg?rnd=20200526195200" ,
         brand:"Bhyali",
         name : "Maroon Printed Yoke Detail ",
         price:"1440",
         color: "Multi Color",
         size :"S", 

        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0030_1_e935734d.jpg?rnd=20200526195200" ,
         brand:"RustOrange",
         name : "Multi Color Striped Front Gather",
         price:"1,300",
         color: "Multi Color",
         size :"M",
        },
        {
         img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/h/shy_2064ks-1.jpg?rnd=20200526195200" ,
         brand:"Shaily",
         name : "White Printed Kurta With Sharara",
         price:"1,553 ",
         color: "Multi Color",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0853_1_3a469294.jpg?rnd=20200526195200" ,
         brand:"Shaily",
         name : "Black High On Trend Polka Dresses",
         price:"1,479",
         color: "Black",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/h/pheeta-pht0067_1_96256fbd.jpg?rnd=20200526195200" ,
         brand:"Shaily",
         name : "Yellow Pemlum Skirt",
         price:"1,499",
         color: "Black",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/g/lg-01tpb_1.jpg?rnd=20200526195200" ,
         brand:"RUstOrange",
         name : "Black Label Solid Regular Fit",
         price:"520",
         color: "Pink",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/h/khhalisi-2064-purple_051a2339.jpg?rnd=20200526195200" ,
         brand:"RustOrange",
         name : "Cute Blue Printed",
         price:"4,200",
         color: "Yellow",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/e/seerat_1089_1_26d6db76.jpg?rnd=20200526195200" ,
         brand:"Seerat",
         name : "Mustard Jackard Kurti With Dubatta",
         price:"5,400",
         color: "Multi Color",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/a/kaajh-k_167_1_0f2f8b18.jpg?rnd=20200526195200" ,
         brand:"Kaajh",
         name : "Maroon Embelished Suit",
         price:"1,800",
         color: "Black",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/l/black-lehenga-choli-set_1_c7aeb0ad.jpg?rnd=20200526195200" ,
         brand:"Label Shaurya Sandhya",
         name : "Black Lhenga And Choli With Dubatta",
         price:"5,250",
         color: "Pink",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/7/7/779a-b009-du004_1_0cc78ba7.jpg?rnd=20200526195200" ,
         brand:"Ambraee",
         name : "Berry Suit",
         price:"2,430",
         color: "Pink",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/w/swtantra_086_1_0e4fd8c8.jpg?rnd=20200526195200" ,
         brand:"Swntarara",
         name : "Plum Satin Saree",
         price:"2,699",
         color: "Multi Color",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-854_1_90a1ad17.jpg?rnd=20200526195200" ,
         brand:"Mish",
         name : "Olive Puff Style Caff",
         price:"1,560",
         color: "Multi Color",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/c/mcaw18tp11-96-192_1.jpg?rnd=20200526195200" ,
         brand:"Gillori",
         name : "Multi Color",
         price:"945",
         color:"Multi Color",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/s/ssdamntdlf7344_1_4aa2e931.jpg?rnd=20200526195200" ,
         brand:"Gillori",
         name : "Rani Pink Lhenga",
         price:"5,625",
         color:"Pink",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/b/lbl101ks218_1_f1952c43.jpg?rnd=20200526195200" ,
         brand:"Gillori",
         name : "Marron Nothing",
         price:"1,872",
         color:"Pink",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/t/tt_br-awu-bdl-kl_12-bl_1-cw_234_1_6dcddcb4.jpg?rnd=20200526195200" ,
         brand:"Yufta",
         name : "Embroided Lhenga",
         price:"15,000",
         color:"Multi Color",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/y/a/ya7499_1_717f7455.jpg?rnd=20200526195200" ,
         brand:"Yufta",
         name : "Blue And Golden Kurta",
         price:"4,000",
         color:"Multi Color",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/n/onedp0009_1_2a05c3e5.jpg?rnd=20200526195200" ,
         brand:"Yufta",
         name : "One We India",
         price:"4,500",
         color:"Pink",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/e/resha241_1_26513252.jpg?rnd=20200526195200" ,
         brand:"Bhyali",
         name : "Nushrat Anarkali",
         price:"5,220",
         color:"Multi Color",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/3/l/3lspl-silk35n27155381-green_1_97e7f060.jpg?rnd=20200526195200" ,
         brand:"Bhyali",
         name : "Sweetheart Neckline",
         price:"8,900",
         color:"Multi Color",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/e/red-anarkali-suit-set-with-palazzo-with-net-dupatta_1_d6921e71.jpg?rnd=20200526195200" ,
         brand:"Twenty Dresses By Nyka",
         name : "Black Skipping Into Poland",
         price:"1,725",
         color:"Pink",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/e/red-anarkali-suit-set-with-palazzo-with-net-dupatta_1_d6921e71.jpg?rnd=20200526195200" ,
         brand:"Label The Sharya",
         name : "Bhyali",
         price:"5,3020",
         color:"Pink",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/a/lavanyathelabel_lbl101ks110_01_4c9ecdb2.jpg?rnd=20200526195200" ,
         brand:"Lavanya The Label",
         name : "Green Georgatte Saree",
         price:"6,300",
         color:"Multi Color",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/t/rtor0011_1_67335460.jpg?rnd=20200526195200" ,
         brand:"RustOrange",
         name : "Pink Neck Gathered",
         price:"1,440",
         color:"Pink",
         size :"S,XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/ind187-pnk_1_f37804fa.jpg?rnd=20200526195200" ,
         brand:"Indi Inside",
         name : "Pink Gota",
         price:"1,902",
         color:"Pink",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/a/fashor_kb1030-2153610507_1_61d6d776.jpg?rnd=20200526195200" ,
         brand:"Fashor",
         name : "White Chinkan Kari Set",
         price:"6,840",
         color:"Pink",
         size :"2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/k/-/k-026_1_4a0c774e.jpg?rnd=20200526195200" ,
         brand:"Shrutkirti",
         name : "Egg White Kurti",
         price:"2,903",
         color:"Black",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/w/swtantra_023_5_ab0a67c3.jpg?rnd=20200526195200" ,
         brand:"Swantarara ",
         name : "Black Saree",
         price:"1,999",
         color:"Blue",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/a/bai_ass_47_1_ef9bb055.jpg?rnd=20200526195200" ,
         brand:"Baisa Craft",
         name : "Dabu Printed",
         price:"4,356",
         color:"Black",
         size :"2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/b/lbl101ks255_1_35c4fcca.jpg?rnd=20200526195200" ,
         brand:"Lavanya The Label",
         name : "Blue Lace Lhenga",
         price:"9,000",
         color:"Blue",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/l/blue-kurta-set-with-dupatta_1_6ce2d2cf.jpg?rnd=20200526195200" ,
         brand:"Label Shaurya ",
         name : "Blue Kurta And Pyjama ",
         price:"2,635",
         color:"Black",
         size :"2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0678_1_504cd0e9.jpg?rnd=20200526195200" ,
         brand:"Twenty Dresses By Nyka",
         name : "Black Count ",
         price:"1,476",
         color:"Pink",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/u/suta_sutatp0038_1_062d5c4d.jpg?rnd=20200526195200" ,
         brand:"Suta",
         name : "Pink Gold",
         price:"3,100",
         color:"Black",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/n/jnpr0897_1_803d9635.jpg?rnd=20200526195200" ,
         brand:"Juniper",
         name : "Black Rayon Printed ",
         price:"1,756",
         color:"Pink",
         size :"XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-859_1_84d80f74.jpg?rnd=20200526195200" ,
         brand:"Mish",
         name : "Red Solid Ruffle",
         price:"2,040",
         color:"Black",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/w/swtantra_024_5_02157664.jpg?rnd=20200526195200" ,
         brand:"Swntarar",
         name : "Black Sequenin",
         price:"1,999",
         color:"Black",
         size :"XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/i/n/insd113-blk_1_395c47db.jpg?rnd=20200526195200" ,
         brand:"Indie Inside",
         name : "BLack Block Printed",
         price:"990",
         color:"black",
         size :"M,XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/o/colorme16348aw20owht_1.jpg?rnd=20200526195200" ,
         brand:"Biba",
         name : "Off White Embelished Kurti ",
         price:"1,000",
         color:"Multi color",
         size :"M,XL,2XL,3XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/2/5/2516black-1_85ee97cf.jpg?rnd=20200526195200" ,
         brand:"Juniper",
         name : "Black Alphin Chiffon printed",
         price:"1,368",
         color:"Black",
         size :"XL,2XL,3XL",
        },
    ]


    var bag = "empty"
    if(bag=="empty"){
    for (var i = 0; i < obj.length; i++) {
     var mainDiv=document.querySelector(".kidRight");

      var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);

    }
    function myfun(event){
        var price = (event.target.previousElementSibling);
        var name = price.previousElementSibling.textContent;
        for(var i = 0; i < obj.length; i++) {
            if(obj[i].name==name){
                localStorage.setItem("addedItem", JSON.stringify(obj[i]));
                localStorage.setItem("Item", JSON.stringify("added"));
            }
        } alert("1 Item added in your bag")
    }
}

function Default(){
        var bag = "empty"
    if(bag=="empty"){
    for (var i = 0; i < obj.length; i++) {
     var mainDiv=document.querySelector(".kidRight");

      var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);

    }
}
}

function knitRoot(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Gillori"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function babymoo(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Yufta"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function allen(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Bhyali"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function usPolo(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="RustOrange"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function mamma(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Shaily"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function newBorn(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="S"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function tinyBaby(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="M"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function zeroTOne(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="L"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function zeroTThree(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="XL"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}

function zeroTSix(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="2XL"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function blue(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].color=="Blue"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function multiColor(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].color=="Multi Color"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function pink(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].color=="Pink"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function black(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].color=="Black"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function yellow(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].color=="Yellow"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function zeroTThree(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].age=="XL"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function threeTSix(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].age=="3-6 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function sixTNine(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].age=="6-9 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function ninetTwelve(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].age=="9-12 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
function eighteenTTwenty(){
    bag="full";
    var mainDiv=document.querySelector(".kidRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].age=="18-24 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹")+obj[i].price;
                 var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);


      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}

//     <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->
// <!-- ============================================================================body part=============================================================== -->