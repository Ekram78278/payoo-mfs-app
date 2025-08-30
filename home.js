
const validPin = 1234
const transactionsData = []

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

// functions to get inner text

    function getInnerText (id) {
        const element = document.getElementById(id)
        const   elementValue = element.innerText
        const elementValueNumber = parseInt (elementValue)
        return elementValueNumber;

    }

    // function to set inner text 

    function setInnerText(value) {

        const availableBalanceElement = document.getElementById("available-balance")
        availableBalanceElement.innerText = value
    }


    //  function to toggle features

    function handleToggle(id) {

        const forms = document.getElementsByClassName("form")

            for (const form of forms){
                form.style.display = "none"
            }
            document.getElementById(id).style.display = "block"
    }

        // function to toggle highlights 

    function toggleHighlights (id) {

        const formBtns = document.getElementsByClassName("form-btn")

            for(const btn of formBtns){
                btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
                btn.classList.add("border-gray-300")
            }
                
            document.getElementById(id).classList.remove("border-gray-300")

            document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]")

    }




//  Add money feature
document.getElementById("add-money-btn").addEventListener("click",
    function(e){
        e.preventDefault()
        const bank = getInputValue("bank"); 
        const accountNumber = document.getElementById("account-number").value 
        const ammount = getInputValueNumber("add-amount")
        
        if (ammount <= 0){
            alert("invalid amount")
            return;
        }

        const pin = getInputValueNumber("add-pin")

        const availableBalance = getInnerText("available-balance")

        if(accountNumber.length < 11){
            alert("Please Porvide Valid Account Number")
        return;
        }

        if(pin !== validPin){
            alert("please provide valid pin")
            return;
        }
        
        const totalNewAvailableBalance = ammount + availableBalance
        setInnerText(totalNewAvailableBalance)

        const data = {
            name:"Add Money",
            date: new Date().toLocaleTimeString()
        }

        transactionsData.push(data)

    })


const withdrawPin= 1234

    // withdraw money feature

    document.getElementById("withdraw-btn").addEventListener("click", 
        function(e){
            e.preventDefault()
            const agentNumber = getInputValue("agent-number")
            const ammountWithdraw = getInputValueNumber("amount-money")
            const pin = getInputValueNumber("withdraw-pin") 
            const availableBalance = getInnerText("available-balance")

            if (ammountWithdraw <=0 || ammountWithdraw> availableBalance){

                alert("invalid amount")
                return;

            }

              if(agentNumber.length < 11){
                alert("Please Enter Valid Agent Number")
                return;
            }

            if ( pin !== withdrawPin){
                alert("Please Provide Valid pin")
                return;
            }
            const totalNewAvailableBalance = availableBalance - ammountWithdraw
            setInnerText(totalNewAvailableBalance)

            const data = {
            name:"Cash Out",
            date: new Date().toLocaleTimeString()
        }

        transactionsData.push(data)
        console.log(transactionsData)
        })

// transactions money  history 

        document.getElementById("transactions-button").addEventListener("click", 
            function(){
                const transactionContainer = document.getElementById("transaction-container")

                transactionContainer.innerText = ""

                for (const data of transactionsData){
                    const div = document.createElement("div")
                    div.innerHTML = `
                    
                     <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#f4f5f7] ">
                    <img src="/assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                    <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
                    
                    `
        transactionContainer.appendChild(div)
                }
            })


    // toggling feature

    document.getElementById("add-button").addEventListener("click",
        function(){
            handleToggle("add-money-parent")
            toggleHighlights("add-button")
        })
    
    
    document.getElementById("cash-out-button").addEventListener("click",
        function(){
          handleToggle("cash-out-parent")
         toggleHighlights("cash-out-button")
        })

    document.getElementById("transfer-money-button").addEventListener("click",
        function(){
            handleToggle("transfer-money-parent")
            toggleHighlights("transfer-money-button")

        })


    document.getElementById("bonus-button").addEventListener("click",
        function(){
            handleToggle("get-bonus-parent")
            toggleHighlights("bonus-button")

        })
    document.getElementById("pay-bill-button").addEventListener("click",
        function(){
            handleToggle("pay-bill-parent")
            toggleHighlights("pay-bill-button")

        })
    document.getElementById("transactions-button").addEventListener("click",
        function(){
            handleToggle("transactions-parent")
            toggleHighlights("transactions-button")

        })