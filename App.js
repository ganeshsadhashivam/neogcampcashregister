
var totalBillAmount = document.getElementById("billAmount")

var cashGiven = document.getElementById("cashGiven")


var check = document.getElementById("button");


var noOfNotesReturned = document.querySelectorAll(".noOfNotes");


var errorMessage = document.querySelector("#errorMessage");

const amount=[2000,500,200,100,50,20,10,5,2,1];

check.addEventListener("click",function clickEventListener(){

 

    hideErrorMessage();
   
    if(Number(totalBillAmount.value) > 0 ) 
    {
        
        if(Number(cashGiven.value) >= Number(totalBillAmount.value))
        {
      
        var remainingToGive = cashGiven.value-totalBillAmount.value;


                amountToReturn(remainingToGive);

                // if(remainingToGive === 0)
                // {
                //     var msg = "Thank You visit again... "
                //    amountToReturn(msg);

                // }
                // else{
                //     var msg =  remainingToGive +"we have to return Rs =" ;
                //     showErrorMessage(msg);
                //     amountToReturn(remainingToGive);

                // }
               
        }
        else{

           
            showErrorMessage("please provide cash amount equal to bill Amount Otherwise you have to wash plates");
        }
          
    }
    else{
        
        showErrorMessage("The bill Amount should be positive or should not me empty") ;
    }
});


// Message to show
function showErrorMessage(Message){

    errorMessage.style.display = "block";
    errorMessage.innerHTML = Message;

}

//Message to hide
function hideErrorMessage(Message){
   

    errorMessage.style.display = "none";
    errorMessage.innerHTML = Message;
}


//calculation
function amountToReturn(remainingToGive)
{
    
   
   showErrorMessage(remainingToGive);
    var notesReturned;
    for(let i=0;i<amount.length;i++)
    {
        notesReturned = Math.trunc((remainingToGive/amount[i]));

       remainingToGive %= amount[i];

       noOfNotesReturned[i].innerText = notesReturned;

       

    }

    



}