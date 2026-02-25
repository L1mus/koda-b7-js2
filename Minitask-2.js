//Case Discount Belanja
let total = 10000000
function calculateDiscount(total){
  let result = 0
  if(total>=0 || !isNaN(total)){
     if(total>1000000){
       result = total - (total*(10/100))
     }else if(total>500000){
       result = total - (total * (5/100))
     }else{
       result = total
     }
   }else{
     return console.log("Nominal invalid")
   }
  return console.log(`Total yang harus dibayar Rp.${result}`)
}

calculateDiscount(total)
