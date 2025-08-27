
const validPin = 1234


// function to get input values 

function getInputValueNumber(id){
   const inputField= document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber;
}

function getInputValue (id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue;
}

//  Add money feature
document.getElementById("add-money-btn").addEventListener("click",
    function(e){
        e.preventDefault()
        const bank = getInputValue("bank"); 
        const accountNumber = document.getElementById("account-number").value 
        const ammount = getInputValueNumber("add-amount")
        
        const pin = getInputValueNumber("add-pin")

        const availableBalance = parseInt (document.getElementById("available-balance").innerText)

        if(accountNumber.length < 11){
            alert("Please Porvide Valid Account Number")
        return;
        }

        if(pin !== validPin){
            alert("please provide valid pin")
            return;
        }
        
        const totalNewAvailableBalance = ammount + availableBalance
         
        document.getElementById("available-balance").innerText = totalNewAvailableBalance


    })


const withdrawPin= 1234

    // withdraw money feature

    document.getElementById("withdraw-btn").addEventListener("click", 
        function(e){
            e.preventDefault()
            const agentNumber = getInputValue("agent-number")
            const ammountWithdraw = getInputValueNumber("amount-money")
            const pin = getInputValueNumber("withdraw-pin") 
            const availableBalance = parseInt (document.getElementById("available-balance").innerText)

              if(agentNumber.length < 11){
                alert("Please Enter Valid Agent Number")
                return;
            }

            if ( pin !== withdrawPin){
                alert("Please Provide Valid pin")
                return;
            }
            const totalNewAvailableBalance = availableBalance - ammountWithdraw
            console.log(totalNewAvailableBalance)
            document.getElementById("available-balance").innerText = totalNewAvailableBalance            
          
        })

    // toggling feature

    document.getElementById("add-button").addEventListener("click",
        function(){
            document.getElementById("cash-out-parent").style.display = "none"
            document.getElementById("transfer-money-parent").style.display = "none"
            document.getElementById("add-money-parent").style.display ="block"

        })
    document.getElementById("cash-out-button").addEventListener("click",
        function(){
            document.getElementById("add-money-parent").style.display = "none"
            document.getElementById("cash-out-parent").style.display ="block"
            document.getElementById("transfer-money-parent").style.display = "none"


        })

    document.getElementById("transfer-money-button").addEventListener("click",
        function(){
            document.getElementById("add-money-parent").style.display = "none"
            document.getElementById("cash-out-parent").style.display = "none"
            document.getElementById("transfer-money-parent").style.display = "block"

        })