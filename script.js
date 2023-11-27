const wage = parseFloat(prompt("Zadejte hrubou mzdu za hodinu (v celých korunách):"));
const hours = parseFloat(prompt("Zadejte průměrný počet hodin denně:"));
const days = parseFloat(prompt("Zadejte průměrný počet dní v měsíci:"));

function salary(wage, hours, days) {
  const monthlySalary = wage * hours * days;
  return monthlySalary;
}
function taxed(amount, taxPercentage) {
  const taxAmount = (amount * taxPercentage) / 100;
  const netAmount = amount - taxAmount;
  return netAmount; 
}

const monthlyGrossSalary = salary(wage, hours, days);
const taxPercentage = 15;
const monthlyNetSalary = taxed(monthlyGrossSalary, taxPercentage);

console.log(`Hrubá měsíční mzda: ${monthlyGrossSalary} Kč`);
console.log(`Netto měsíční mzda po 15% zdanění: ${monthlyNetSalary} Kč`);

document.body.innerHTML += `<p>Hrubá měsíční mzda je ${monthlyGrossSalary} Kč</p>`;
document.body.innerHTML += `<p>Netto měsíční mzda po 15% zdanění je ${monthlyNetSalary} Kč</p>`;
