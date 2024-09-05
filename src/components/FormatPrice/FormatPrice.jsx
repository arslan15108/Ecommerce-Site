
function FormatPrice({price}) {
  return (
    Intl.NumberFormat('pk-PK', { style: 'currency', currency: 'PKR', maximumFractionDigits:2 }).format(price/100)
  )
}

export default FormatPrice