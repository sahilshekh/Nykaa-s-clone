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

     // ===============================================================================body part==============================================================
    // ===============================================================================body part==============================================================
    // ===============================================================================body part==============================================================
    // ===============================================================================body part==============================================================
    // ===============================================================================body part==============================================================

    // =============================================================================kid area=====================================================================
    var obj = [
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/n/k/nkcsrbr27_f1713eb8.jpg?rnd=20200526195200",
            brand : "KNITROOT",
            name : "Red My First Christmas Bodysuit",
            price : "637",
            color:"Red",
            size : "0-3 Months",
            age : "0-3 months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/n/k/nkacbr939pi_1_06dbeaa7.jpg?rnd=20200526195200",
            brand : "KNITROOT",
            name : "Pink Pyari Bua Printed onesie",
            price : "450",
            color:"Pink",
            size : "0-1 months",
            age : "0-1 months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/k/nkacbr735pe_1_509932d7.jpg?rnd=20200526195200",
            brand : "KNITROOT",
            name : "Peach Sher Bachha Printed Onesie",
            price : "450",
            color:"Yellow",
            size : "0-6 Months",
            age : "0-6 Monts"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/o/toyfk1902a-pink_1_61d42a69.jpg?rnd=20200526195200",
            brand : "Baby Moo",
            name : "Bunny Pink Rattle",
            price : "399",
            color:"Pink",
            size : "",
            age : ""
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/a/caps-k-153-greyblue_1_a97a7564.jpg?rnd=20200526195200",
            brand : "Baby Moo",
            name : "Fawn Grey And Blue 2 Pack Cap",
            price : "749",
            color:"Blue",
            size : "",
            age : ""
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/a/caps38649-19-1_1_581d3006.jpg?rnd=20200526195200",
            brand : "Baby Moo",
            name : "pom pom maroon And pink 2 pack",
            price : "699",
            color:"Multi Color",
            size : "",
            age : ""
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/g/agsworgfo40757_1_64975b3b.jpg?rnd=20200526195200",
            brand : "Allen Solly Junior",
            name : "Black sweater",
            price : "1007",
            color:"Black",
            size : "",
            age : ""
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/i/aibjkergpk88065_1_5fc84470.jpg?rnd=20200526195200",
            brand : "Allen Solly Junior",
            name : "Brown Jacket",
            price : "817",
            color:"Multi Color",
            size : "",
            age : "3-6 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/i/aigjkergfb58411_1_2fb5fe74.jpg?rnd=20200526195200",
            brand : "Allen Solly Junior",
            name : "White Jacket",
            price : "1330",
            color:"Multi Color",
            size : "",
            age : "6-9 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/s/lswdq6ipfsk_1_229d5476.jpg?rnd=20200526195200",
            brand : "U.S. Polo ASSN.",
            name : "Baby Yellow And Navy Short Sleeve",
            price : "400",
            color:"Yellow",
            size : "0-6 Months",
            age : "12-18 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/r/wr8n5p3os2i_1_ae613fe1.jpg?rnd=20200526195200",
            brand : "U.S. Polo ASSN.",
            name : "Baby Yellow Polo Coller printed Bodysut",
            price : "600",
            color:"Yellow",
            size : "0-3 Months",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/2/n/2nzbc43ecjq_1_e02a90e3.jpg?rnd=20200526195200",
            brand : "U.S. Polo ASSN.",
            name : "Girls Yellow Embroidered Woven Top",
            price : "585",
            color:"Yellow",
            size : "Tiny baby",
            age : "3-6 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/f/w/fw20kbsw022_1_93de6a23.jpg?rnd=20200526195200",
            brand : "Ed-a-Mamma",
            name : "All Over Printed Sweat Shirt for Boys - Yellow",
            price : "549",
            color:"Yellow",
            size : "0-3 Months",
            age : "6-9 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgjs131_1_ea0aa123.jpg?rnd=20200526195200",
            brand : "Ed-a-Mamma",
            name : "Yellow shibori Jumpsuit",
            price : "899",
            color:"Yellow",
            size : "0-6 Months",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/f/w/fw20kgsw012_1_ff9983fd.jpg?rnd=20200526195200",
            brand : "Ed-a-Mamma",
            name : "Sweater Dress With hoodies & Pockets for Girls - Yellow",
            price : "499",
            color:"Yellow",
            size : "Tiny baby",
            age : "12-18 Months"
        }
        ,
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/a/w/aw21usts644_1_08886f2e.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Full Sleeves Unisex Logo T-shirt Blue",
            price : "488",
            color:"Blue",
            size : "0-3 Months",
            age : "3-6 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/f/w/fw20kgsw001_1_62b8e7a2.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Front Open Sweatshirt with Lace Ruffle for Girls",
            price : "649",
            color:"Blue",
            size : "0-6 Months",
            age : "18-24 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgse247__1__ae4640ff.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Track Pants + Crop Tee Set - Blue",
            price : "1169",
            color:"Blue",
            size : "0-6 Months",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokbpk557__1__4213b961.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Pack of 3 Graphic T-shirts - Off White/green/red",
            price : "809",
            color:"Multi Color",
            size : "0-6 Months",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgdr431__1__a1866c55.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Printed Tier dress - pink",
            price : "899",
            color:"Pink",
            size : "0-6 MOnths",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokbjr324__1__32918160.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Pull-Up Knit Joggers - Navy",
            price : "719",
            color:"Blue",
            size : "0-6 Months",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/f/w/fw20kgjk008_1_a2aa85a2.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Checks Poncho with Ruffle for Girls - Red",
            price : "749",
            color:"Multi Color",
            size : "0-6 Months",
            age : "6-9 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgsw528__1__595eb5f8.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Embroidered Sweatshirt - Pink",
            price : "719",
            color:"Pink",
            size : "New born",
            age : "0-3 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgts601__1__f05fe98a.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Printed Ruffle Top - Pink",
            price : "539",
            color:"Pink",
            size : "0-6 Months",
            age : "18-24 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokbjk489__1__1c2cf82d.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Solid Hoodie With open Zipper - olive",
            price : "899",
            color:"Multi Color",
            size : "0-3 Months",
            age : "9-12 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgsw529__1__41d54f57.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Embroidered Sweatshirt - Grey",
            price : "719",
            color:"Black",
            size : "New born",
            age : "0-3 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokgjg621__1__fe5ba0b9.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "Schiffi Embroidered Jeggings - Light Blue",
            price : "1169",
            color:"Blue",
            size : "0-6 Months",
            age : "18-24 Months"
        },
        {
            img : "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-708,/pub/media/catalog/product/e/a/eatokbts419__1__a63b3782.jpg?rnd=20200526195200",
            brand : "Ed-a-Mumma",
            name : "All Over print T-shirt - Green",
            price : "449",
            color:"Multi Color",
            size : "0-6 Months",
            age : "9-12 Months"
        }
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
      Div4.textContent=("₹") +obj[i].price;
            var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);

      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);

    //   Div.addEventListener("click", myfun);
    //   function myfun(){
    //       console.log("ys");
    //       window.location.href="redSanta.html";
    //   }
    }
    function myfun(event){
        var price = (event.target.previousElementSibling);
        var name = price.previousElementSibling.textContent;
        for(var i = 0; i < obj.length; i++) {
            if(obj[i].name==name){
                localStorage.setItem("addedItem", JSON.stringify(obj[i]));
                localStorage.setItem("Item", JSON.stringify("added"));
            }
        } var signStatus = JSON.parse(localStorage.getItem("signIn"));
        if(signStatus=="signedUp"){
            alert("1 Item added in your bag")
        } else{
            alert("you have to sign in first")
        }
         
    }
}

// function myfun(){
//     console.log(Div2)
// }
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
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].brand=="KNITROOT"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].brand=="Baby Moo"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].brand=="Allen Solly Junior"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].brand=="U.S. Polo ASSN."){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].brand=="Ed-a-Mumma"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].size=="New born"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].size=="Tiny baby"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].size=="0-1 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].size=="0-3 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].size=="0-6 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
        if(obj[i].age=="0-3 Months"){
            var Div = document.createElement("div");
      var img = document.createElement("img");
      img.setAttribute("src", obj[i].img);
      var Div2 = document.createElement("div");
      Div2.textContent=obj[i].brand;
      var Div3 = document.createElement("div");
      Div3.textContent=obj[i].name;
      var Div4=document.createElement("div");
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
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
      Div4.textContent=("₹") +obj[i].price;
            var BTN = document.createElement("button");
      BTN.textContent= "Add To Bag";
      
      BTN.addEventListener("click", myfun);

      mainDiv.append(Div);
      Div.append(img, Div2, Div3, Div4, BTN);
        }
    }
}
// ===============================================================================body part end==============================================================
    // ===============================================================================body part end==============================================================
    // ===============================================================================body part end==============================================================
    // ===============================================================================body part end==============================================================
    // ===============================================================================body part end==============================================================