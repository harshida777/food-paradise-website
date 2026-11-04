
function orderNow() {
    const message = "Hello Food Paradise! I would like to place an order.";

    navigator.clipboard.writeText(message)
        .then(() => {
            alert("Order message copied! You can paste it into WhatsApp.");
        })
        .catch(() => {
            prompt("Copy this order message:", message);
        });
}
