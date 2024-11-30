import {MybaBank} from '../../declarations/MybaBank';

window.addEventListener("load", async function () {
  updateBalance();
});

document.querySelector("form").addEventListener("submit",async function(event){

  event.preventDefault();

  const transactionType = document.querySelector(".transaction-type:checked").value;
  const amoutComponent = document.querySelector(".amount")
  const amountInput = amoutComponent.value;
  const amount = BigInt(amountInput);
  const button = document.querySelector("button");

  button.setAttribute("disabled", true);
try{
  if(transactionType =='withdrawal'){
   await MybaBank.withdrawAmount(amount);
   
  }else if(transactionType =='deposit'){
    await MybaBank.addBalance(amount);
    } 
    updateBalance();
 
  }catch{
  
    console.log("transaction error");
    
  }
    button.removeAttribute("disabled"); 
    amoutComponent.value="";
});


async function updateBalance(){
  try {
    // Fetch balance from the canister
    let balance = await MybaBank.getBalance();
    
    // Update the HTML element with the balance
    document.getElementById("currentBalance").innerHTML = "Current Account Balance: " + balance;
  } catch (error) {
    console.error("Error fetching balance:", error);
  }
}