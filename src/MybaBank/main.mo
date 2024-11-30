import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Nat "mo:base/Nat";

actor MybaBank {
stable var initialAmount:Nat=0;

  public query func getBalance() : async (Nat) {
    let triggeredTimestamp = Time.now();
    return (initialAmount/100);
  };

public func addBalance(addingAmount:Nat):async (Nat,Int){
initialAmount+=addingAmount*100;
Debug.print(debug_show(initialAmount));
    let triggeredTimestamp=Time.now();
    return (initialAmount/100,triggeredTimestamp);
};

public func withdrawAmount (withdrawingAmount:Nat):async Text{
    let withdrawalInCents = withdrawingAmount * 100;

  if(withdrawingAmount<=initialAmount){
  
  initialAmount-=withdrawalInCents;
  
  Debug.print(debug_show(initialAmount/100));
  
  return "Withdrawal successful. Remaining balance: " # debug_show(initialAmount/100) # " at " #debug_show(Time.now());
 
 }else{
 
  Debug.print("Error: Insufficient balance. Withdrawal not possible.");
  return "Error: Insufficient balance. Withdrawal not possible."#debug_show(Time.now());
};

};
};
