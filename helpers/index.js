export const formatAmount = (amount) => {
    return amount.toLocaleString("es", {
        style: "currency",
        currency: "EUR"
    })
}