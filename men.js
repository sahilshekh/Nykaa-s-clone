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


     //  <!-- =============================================================================body part================================================================= -->
    // <!-- =============================================================================body part================================================================= -->
    // <!-- =============================================================================body part================================================================= -->
    // <!-- =============================================================================body part================================================================= -->
    // <!-- =============================================================================body part================================================================= -->
    // =============================================================================men area=====================================================================
    obj = [
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/s/tshirt2000black_1_d2b52667.jpg?rnd=20200526195200",
         brand:"CHKOKKO",
         name : "Black Turtle Neck T-shirt",
        color : "",
        price:"802",
        size :"S", 

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/a/cantabil-ctsmh5235-greenmelange_1_5d35f63c.jpg?rnd=20200526195200",
         brand:"Canatabil",
         name : "Green melange mens polo T-shirt",
        color : "",
        price:"802",
        size :"M", 

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/r/rr_ran-red_1_ae9f18e2.jpg?rnd=20200526195200" ,
         brand:"Rare Rabbit",
         name : "Ran Plan Drawstring Mens Shots-Red",
        color : "",
        price:"802",
        size :"S", 

        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/w/aw20_jkdenim_m_pln_dnbl_1_40e44f2c.jpg?rnd=20200526195200" ,
         brand:"Campus Sutra",
         name : "Blue Solid Jacket",
         price:"1,300",
         color : "",
         size :"M",
        },
        {
         img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/h/n/hn-s-3004-bgreen_1_343cd053.jpg?rnd=20200526195200" ,
         brand:"Kvetto",
         name : "Men Woolen High Neck Full Sleeves",
        color : "",
        price:"840",
        size:"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/u/f/uf_aopleaffull-drgreen_1_cd59bb1c.jpg?rnd=20200526195200" ,
         brand:"Urbano  Fashion",
         name : "Men Dark Green Printed Full Sleeves fit",
         price:"",
         color : "",
         size :"S",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/a/jakt-denim-mblue_1_373b8ec8.jpg?rnd=20200526195200" ,
         brand:"Urbano Fashion",
         name : "Mens Blue Regular Fit Washed",
         price:"1,499",
         color : "",
         size :"S",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/h/vh-vdkpeslfa53928_1_003c16e7.jpg?rnd=20200526195200" ,
         brand:"V Dot",
         name : "Cream Polo T-shirt",
         price:"",
         color : "",
         size :"XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/t/jtjm194-1_1_b129106e.jpg?rnd=20200526195200" ,
         brand:"justanned",
         name : "Men Geniune Real Leather",
         price:"4,200",
         color : "",
         size :"S",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/h/n/hng_black5btnvelvetblazer_1_b9922f0b.jpg?rnd=20200526195200" ,
         brand:"Hangup",
         name : "Black Solid Velvet",
         price:"1,980",
         color : "",
         size :"2XL",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/c/sc-sckpcslf428212_1_e560156c.jpg?rnd=20200526195200" ,
         brand:"Simon Carter",
         name : "Navy Blue T-shirt",
         price:"1,040",
         color : "",
         size :"S",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/h/chmen13_1_9304dbeb.jpg?rnd=20200526195200" ,
         brand:"Chidiya",
         name : "Ivory Cotton shirt",
         price:"2,290",
         color : "",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/i/differenceofopinion-docrm101wine_1_01801937.jpg?rnd=20200526195200" ,
         brand:"Difference Of opinion",
         name : "Marron Graphic T-shirt",
         price:"444",
         color : "",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/p/lp-lysraslp752508_1_50570b2f.jpg?rnd=20200526195200" ,
         brand:"Louis Phillipine Sprts",
         name : "Blue Sports",
         price:"1,780",
         color : "",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/4/0/4063696992697_1_4f3d4bc7.jpg?rnd=20200526195200" ,
         brand:"Puma",
         name : "Pacer Sports Shoes",
         price:"1,599",
         color : "",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/h/chmen13_1_9304dbeb.jpg?rnd=20200526195200" ,
         brand:"Chidiyaa Crafts",
         name : "Ivory Cotton Shirt",
         price:"1,599",
         color : "",
         size :"L",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/i/differenceofopinion-docrm101wine_1_01801937.jpg?rnd=20200526195200" ,
         brand:"Difference of Opinion",
         name : "Maroon Graphic T-Shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/p/e/pe-pcsrorgp254196_1_bd77b7f2.jpg?rnd=20200526195200" ,
         brand:"Peter England Casuals",
         name : "Olive Shorts",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/s/ss21_jrpnrib_m_pln_grbl_1_51132776.jpg?rnd=20200526195200" ,
         brand:"Campus Sutra",
         name : "Grey Self Design Polo T-Shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/r/trendyol-tmnaw20kz1034-siyah_1_61c9e005.jpg?rnd=20200526195200" ,
         brand:"Trendyol",
         name : "Mens Black Sweater",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/u/s/uspa-arrow-2fd21030a01_1_69bc6a06.jpg?rnd=20200526195200" ,
         brand:"Puma",
         name : "Pacer Sports Shoes",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/4/0/4063696992697_1_4f3d4bc7.jpg?rnd=20200526195200" ,
         brand:"U.S. POLO ASSN.",
         name : "LEBRON 2.0 OFF WHITE Sneakers",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/u/f/uf_aopleafhalf-drgreen_1_ed3be7f7.jpg?rnd=20200526195200" ,
         brand:"Urbano Fashion",
         name : "Men Dark Green Printed Slim Fit Cotton T-Shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/c/sc-scbxcrgff28828_1_c2d23684.jpg?rnd=20200526195200" ,
         brand:"Simon Carter",
         name : "Maroon Boxer Shorts",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/h/n/hng_black5btnvelvetblazer_1_b9922f0b.jpg?rnd=20200526195200" ,
         brand:"HANGUP",
         name : "Black Solid Velvet Casual Blazer",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/h/chmen11_1_b796703b.jpg?rnd=20200526195200" ,
         brand:"Chidiyaa",
         name : "Mustard Cotton Shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/h/n/hn1003-black_1_7c4573f4.jpg?rnd=20200526195200" ,
         brand:"Kvetoo",
         name : "Men Woolen Black Turtle ",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/s/tshirt2000navyblue_1_b885b3f2.jpg?rnd=20200526195200" ,
         brand:"CHKOKKO",
         name : "Navy Blue Turtle Neck T-Shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/s/as-assrqsmf789504_1_19080294.jpg?rnd=20200526195200" ,
         brand:"Allen Solly",
         name : "Grey Shorts",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/n/mn-rdtp3423_1_f80c6de0.jpg?rnd=20200526195200" ,
         brand:"Red Tape",
         name : "Mens Dull Off White Hoodies",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/t/r/trendyol-tmnaw20kz1034-vizon_1_15b03ff5.jpg?rnd=20200526195200" ,
         brand:"Trendyol",
         name : "Mens Brown Sweater",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/a/w/aw20_csm-aw-jk0527_1.jpg?rnd=20200526195200" ,
         brand:"Campus Sutra",
         name : "Blue Color-Block Jacket",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/s/c/sc-sckccslp623687_1_61b94b98.jpg?rnd=20200526195200" ,
         brand:"Simon Carter",
         name : "Olive T-shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/1/d136_2button_blazer_1_c79baab0.jpg?rnd=20200526195200" ,
         brand:"HANGUP",
         name : "Multi-Color Printed Casual Blazer",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/h/p/hpsjogger-wgrey_1_6dd525a1.jpg?rnd=20200526195200" ,
         brand:"Urbano Fashion",
         name : "Men Slim Fit Joggers",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/w/w/ww-em22104grey_1_5f8b465d.jpg?rnd=20200526195200" ,
         brand:"Lure Urban",
         name : "Men Quilted Jacket",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/d/i/dillinger-dlcr18091awd_stw_1_49cc1bbf.jpg?rnd=20200526195200" ,
         brand:"DILLINGER",
         name : "Men's Mustard Colourblock T-shirt",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/l/mlw301tan_2_27485a73.jpg?rnd=20200526195200" ,
         brand:"Sapper",
         name : "Mens Grey Cotton Solid",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/j/k/jkt_1001_tan_1_09aed172.jpg?rnd=20200526195200" ,
         brand:"Teakwood",
         name : "Tan Solid Jacket",
         price:"1,599",
         color : "",
         size :"M",
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/a/campus-11g-787-g-wht-sil-borg_1_98d5d366.jpg?rnd=20200526195200" ,
         brand:"Campus",
         name : "First White Running Shoes",
         price:"1,599",
         color : "",
         size :"M",
        },


    ]


    var bag = "empty"
    if(bag=="empty"){
    for (var i = 0; i < obj.length; i++) {
     var mainDiv=document.querySelector(".menRight");

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
     var mainDiv=document.querySelector(".menRight");

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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
    var mainDiv=document.querySelector(".menRight");
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
// <!-- =============================================================================body part end================================================================= -->
//     <!-- =============================================================================body part end================================================================= -->
//     <!-- =============================================================================body part end================================================================= -->
//     <!-- =============================================================================body part end================================================================= -->
//     <!-- =============================================================================body part end================================================================= -->