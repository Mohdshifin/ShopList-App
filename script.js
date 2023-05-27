var quantityA=0;
var quantityB=0;
var quantityC=0;
var total=0;
var totalQuantity=0;
let giftValue=0;
let grandTotal=0;
let discountValue=0;


function calculateTotal() {
    // Get the quantity values
     quantityA = parseInt(document.getElementById("quantityA").value);
     quantityB = parseInt(document.getElementById("quantityB").value);
     quantityC = parseInt(document.getElementById("quantityC").value);
  
    // Calculate the total amount
    total = (quantityA * 20) + (quantityB * 40) + (quantityC * 50);
    totalQuantity= quantityA + quantityB + quantityC;
  
    // Update the total amount on the page
    document.getElementById("total").innerHTML = "$" + total;
    document.getElementById("Qty").innerHTML = totalQuantity;

    // offer details
    if ( totalQuantity > 30 && (quantityA > 15 || quantityB > 15 || quantityC > 15)){
        let tiered_50_discount;
        if(quantityA > 15){
            tiered_50_discount =   (((quantityA - 15) * 20) * 50)/100;
           }else if(quantityB > 15){
               tiered_50_discount =  (((quantityB - 15) * 40) * 50)/100;
           }else if(quantityC > 15){
               tiered_50_discount = (((quantityC - 15) * 50) * 50)/100;
           }   
           document.getElementById("discount").innerHTML=total-tiered_50_discount;
        document.getElementById("offer").innerHTML="Your are eligible for {tiered_50_discount} offer";
    }else if(totalQuantity > 20){
        let bulk_10 = (total * 10 )/100;
        document.getElementById("discount").innerHTML=total-bulk_10;
        document.getElementById("offer").innerHTML="Your are eligible for  (bulk_10_discount)"; 
    }else if((quantityA > 10 || quantityB > 10 || quantityC > 10)){
        let bulk_5;
        if(quantityA > 10){
         bulk_5 =   ((quantityA * 20) * 5)/100;
        }else if(quantityB > 10){
            bulk_5 =  ((quantityB * 40) * 5)/100;
        }else if(quantityC > 10){
            bulk_5 = ((quantityC * 50) * 5)/100;
        }
        document.getElementById("discount").innerHTML=total-bulk_5;
        document.getElementById("offer").innerHTML="Your are eligible for  (bulk_5_discount)";  
    }else if(total>=200){
        document.getElementById("offer").innerHTML="Your are eligible for  (flat_10_discount)";  
        let flat_10= total-10;
        document.getElementById("discount").innerHTML=  flat_10;
    }else{
        document.getElementById("offer").innerHTML="Your are not eligible for any Offer!!.."; 
        document.getElementById("discount").innerHTML=0;
    }

    // Shipping fee details
    let Shipping=0;
    for(let i = 1; i <= totalQuantity; i+=10){
        // total=total+10;
        Shipping = Shipping + 5;
        document.getElementById("shipping").innerHTML = "Shipping charge is applicable of $"+ Shipping;
    }

    //   Grand total details

    discountValue = parseInt(document.getElementById("discount").innerHTML.trim());
    if(discountValue == 0){
        grandTotal = total  + Shipping;
    }else {
        grandTotal = discountValue  + Shipping;
    }
    document.getElementById("grandTotal").innerHTML = "$"+ grandTotal;
  }
  
  function totalOne(){
     quantityA = parseInt(document.getElementById("quantityA").value);
    document.getElementById("totalOne").innerHTML="$"+(quantityA*20)
  }

  function totalTwo(){
     quantityB = parseInt(document.getElementById("quantityB").value);
    document.getElementById("totalTwo").innerHTML="$"+(quantityB*40)
  }

  function totalThree(){
     quantityC = parseInt(document.getElementById("quantityC").value);
    document.getElementById("totalThree").innerHTML="$"+(quantityC*50)
  }

//   gift wrap details
  function add(){
    alert("Gift wrap contain : $"+totalQuantity);
     grandTotal = grandTotal + totalQuantity;
     document.getElementById("grandTotal").innerHTML = "$"+ grandTotal;
    // console.log(discountValue);
  }

