
function placeOrder(Callback){

    console.log("Payment is in progress");
    setTimeout(()=>{
        console.log("Payment received!");
        Callback();
    },3000)
}

function preparingOrder(Callback){
    console.log("Your food preparation started");
    setTimeout(()=>{
        console.log("Your order is now placed");
        Callback();
    },3000)
}


function PickupOrder(Callback){
    console.log("Delivery boy is on a way to pickup order");

    setTimeout(()=>{
        console.log("Delivery boy picked the order");
      Callback();
    },3000)
}

function deliverOrder(){
    console.log("order delivery is on the way");

    setTimeout(()=>{
        console.log("Order Delivered Successfully!");
    },3000)
}



// Callback Hell
placeOrder(()=>{
  preparingOrder(()=>{
    PickupOrder(()=>{
        deliverOrder();
    });
  });
})