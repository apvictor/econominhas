export function formatCurrencyFloat(value: string) {
  const valorSemSeparadores = value.replace(/\./g, "");

  let [valor, decimal] = valorSemSeparadores.split(",");

  valor = valor.replace(/[^\d]/g, "");
  if (decimal) decimal = decimal.replace(/[^\d]/g, "");

  const formatado = Number(`${valor}${decimal ? "." + decimal : ""}`);

  return formatado;
}
