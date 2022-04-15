
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


     //  <!-- =====================================================================body part====================================================================== -->
    // <!-- =====================================================================body part====================================================================== -->
    // <!-- =====================================================================body part====================================================================== -->
    // <!-- =====================================================================body part====================================================================== -->
    // <!-- =====================================================================body part====================================================================== -->
    // =============================================================================home area=====================================================================
    obj = [
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/u/mugpor00h00028623-black-1_f37f88b8_1.jpg?rnd=20200526195200",
         brand:"Ritu kumar",
         name : "Gray Round Mug",
         color:"",
         price:"1399 , 657",
          

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/e/veedaasku721_9318d0ef.jpg?rnd=20200526195200",
         brand:"Veedea",
         name : "Wiled voilet refined oil",
         color:"",
         price:"802",
      

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/y/a/yank-nyfyank000033_1_4de2c631.jpg?rnd=20200526195200" ,
         brand:"Yankeeni Candle",
         name : "Classsic smal jaar ",
         color:"",
         price:"802",
       

        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/a/maspar_19-41032_1_7a9600fe.jpg?rnd=20200526195200" ,
         brand:"Maspar",
         name : "Inhouse Glam Fiesta Neutral",
         color:"",
         price : "1,300",
        
        },
        {
         img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/p/space_1049504_1_e45a9170.jpg?rnd=20200526195200" ,
         brand:"spaces",
         name : "jometric dark brown",
         color:"",
         price:"840 ",
      
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/freelance-283901c-1_01dc3ec1.jpg?rnd=20200526195200" ,
         brand:"Living With eln",
         name : "Three tire cup cake",
         color:"",
         price : "1,399",
         
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/w/lwe-cup-cs-3-flou-iv_1_f57504ad.jpg?rnd=20200526195200" ,
         brand:"Mason",
         name : "lava cake stand set",
         color:"",
         price : "1,499",
      
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/a/aa1051_1_0d5aeb07.jpg?rnd=20200526195200" ,
         brand:"Freelance",
         name : "For piece bathroom set",
         color:"",
         price : "1,730",
        
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/d/tdr-tdrbl65_1_425d3df6.jpg?rnd=20200526195200" ,
         brand:"Decoverd Redmi",
         name : "RepelCut Brass bathrroom set3 ",
         color:"",
         price : "4,200",
     
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/j/gj230-01e00_1_e6f8094a.jpg?rnd=20200526195200" ,
         brand:"Balzano",
         name : "Yoga blender",
         color:"",
         price : "1,980",
      
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/u/duo60_1_0a7533e6.jpg?rnd=20200526195200" ,
         brand:"Instant pot",
         name : "instant pot bed set",
         color:"",
         price : "1,040",
         
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/h/chumbak_8907605103346-1_1018fbd6.jpg?rnd=20200526195200" ,
         brand:"chumbuk bed",
         name : "owl bet shit and to",
         color:"",
         price : "2,290",
         
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/e/c/ec_bggdb121_1_0bb0da26.jpg?rnd=20200526195200" ,
         brand:"ecraft india",
         name : "brass pirot show piese",
         color:"",
         price : "444",
        
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/x/c/xcs-1060_1_cef126ae.jpg?rnd=20200526195200" ,
         brand:"crasy corner",
         name : "red soces krismas gift",
         color:"",
         price : "1,780",
        
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/b/pb-pipab00003260_1_a5d68058.jpg?rnd=20200526195200" ,
         brand:"pipa balla",
         name : "creismas tree decored",
         color:"",
         price : "1,599,26% Off ",
      
        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/c/mcc-4_1_18e8b306.jpg?rnd=20200526195200",
         brand:"Vinod",
         name : "Master Chef Cookware 4Pcs Set",
         color:"",
         price:"1399 , 657",
          

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/d/cdbs1049957_1_dd7be486.jpg?rnd=20200526195200",
         brand:"CORE Designed by SPACES",
         name : "CORE Designed by SPACES set",
         color:"",
         price:"802",
      

        },
        {img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/c/h/chumbak_8907605103513-2_d762357c.jpg?rnd=20200526195200" ,
         brand:"Chumbk",
         name : "TEAL by Arizona Hummingbird ",
         color:"",
         price:"802",
       

        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/a/maspar_19-41032_1_7a9600fe.jpg?rnd=20200526195200" ,
         brand:"Maspar",
         name : "Inhouse Glam Fiesta Neutral",
         color:"",
         price : "1,300",
        
        },
        {
         img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/f/r/freelance-sckklw2-1_0dcf38df.jpg?rnd=20200526195200" ,
         brand:"Frelance",
         name : "Crackle Bath Shower Bathroom ",
         color:"",
         price:"840 ",
      
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/a/maspar_19-41645_2cb71e5e.jpg?rnd=20200526195200" ,
         brand:"Maspar",
         name : "Vintage Grandeur Classic",
         color:"",
         price : "1,399",
         
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-160,/pub/media/catalog/product/m/u/mugpor00h00059363-blue_1_1c163786.jpg?rnd=20200526195200" ,
         brand:"Ritu Kumar",
         name : "Blue Jalmahal Mug (Set Of 2)",
         color:"",
         price : "1,499",
      
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/a/aa1051_1_0d5aeb07.jpg?rnd=20200526195200" ,
         brand:"Freelance",
         name : "For piece bathroom set",
         color:"",
         price : "1,730",
        
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/d/tdr-tdrbl65_1_425d3df6.jpg?rnd=20200526195200" ,
         brand:"Decoverd Redmi",
         name : "RepelCut Brass bathrroom set3 ",
         color:"",
         price : "4,200",
     
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/j/gj230-01e00_1_e6f8094a.jpg?rnd=20200526195200" ,
         brand:"Balzano",
         name : "Yoga blender",
         color:"",
         price : "1,980",
      
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/u/duo60_1_0a7533e6.jpg?rnd=20200526195200" ,
         brand:"Instant pot",
         name : "instant pot bed set",
         color:"",
         price : "1,040",
         
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/h/chumbak_8907605103346-1_1018fbd6.jpg?rnd=20200526195200" ,
         brand:"chumbuk bed",
         name : "owl bet shit and to",
         color:"",
         price : "2,290",
         
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/e/c/ec_bggdb121_1_0bb0da26.jpg?rnd=20200526195200" ,
         brand:"ecraft india",
         name : "brass pirot show piese",
         color:"",
         price : "444",
        
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/x/c/xcs-1060_1_cef126ae.jpg?rnd=20200526195200" ,
         brand:"crasy corner",
         name : "red soces krismas gift",
         color:"",
         price : "1,780",
        
        },
        {
            img:"https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/p/b/pb-pipab00003260_1_a5d68058.jpg?rnd=20200526195200" ,
         brand:"pipa balla",
         name : "creismas tree decored",
         color:"",
         price : "1,599,26% Off ",
      
        }
    ]


    var bag = "empty"
    if(bag=="empty"){
    for (var i = 0; i < obj.length; i++) {
     var mainDiv=document.querySelector(".homeRight");

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
     var mainDiv=document.querySelector(".homeRight");

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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="KNITROOT"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Baby Moo"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Allen Solly Junior"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="U.S. Polo ASSN."){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].brand=="Ed-a-Mumma"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="New born"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="Tiny baby"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="0-1 Months"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="0-3 Months"){
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].size=="0-6 Months"){
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
    mainDiv.innerHTML="";
    for(var i = 0; i < obj.length; i++) {
        if(obj[i].age=="0-3 Months"){
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
    var mainDiv=document.querySelector(".homeRight");
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
// <!-- =====================================================================body part end====================================================================== -->
//     <!-- =====================================================================body part end====================================================================== -->
//     <!-- =====================================================================body part end====================================================================== -->
//     <!-- =====================================================================body part end====================================================================== -->
//     <!-- =====================================================================body part end====================================================================== --></script>