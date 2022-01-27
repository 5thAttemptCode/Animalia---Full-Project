


const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        const inc = target / speed;

        if(count < target){
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else {
            count.innerText = target;
        }
    }

    updateCount();
})


const amountElement = document.getElementById("amount")


console.log(amountElement.value)

paypal
    .Buttons({
        style: {
            color:  'blue',
            shape:  'rect',
            label:  'paypal'
          },
        createOrder: function(data, actions) {
        // This function sets up the details of the transaction, including the amount and line item details.
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amountElement.value,
                    },
                },
            ],
        })
    },
    onApprove: function(data, actions) {
      // This function captures the funds from the transaction.
      return actions.order.capture().then(function(details) {
        // This function shows a transaction success message to your buyer.
        alert('Transaction completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypall');
  //This function displays payment buttons on your web page.

