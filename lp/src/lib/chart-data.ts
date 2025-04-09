// Dados para os gráficos
export const incomeVsExpensesData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  datasets: [
    {
      label: "Receitas",
      data: [4500, 4200, 5100, 5300, 4800, 5200, 5500, 5700, 5400, 5800, 6000, 6200],
      backgroundColor: "rgba(34, 197, 94, 0.5)",
      borderColor: "rgb(34, 197, 94)",
      borderWidth: 1,
    },
    {
      label: "Despesas",
      data: [3200, 3100, 3400, 3300, 3500, 3600, 3400, 3800, 3700, 3900, 4100, 4000],
      backgroundColor: "rgba(239, 68, 68, 0.5)",
      borderColor: "rgb(239, 68, 68)",
      borderWidth: 1,
    },
  ],
}

export const categoryExpensesData = {
  labels: ["Alimentação", "Moradia", "Transporte", "Entretenimento", "Saúde", "Educação", "Outros"],
  datasets: [
    {
      data: [1200, 1800, 800, 600, 500, 400, 300],
      backgroundColor: [
        "rgba(239, 68, 68, 0.7)",
        "rgba(59, 130, 246, 0.7)",
        "rgba(245, 158, 11, 0.7)",
        "rgba(139, 92, 246, 0.7)",
        "rgba(16, 185, 129, 0.7)",
        "rgba(236, 72, 153, 0.7)",
        "rgba(107, 114, 128, 0.7)",
      ],
      borderColor: [
        "rgb(239, 68, 68)",
        "rgb(59, 130, 246)",
        "rgb(245, 158, 11)",
        "rgb(139, 92, 246)",
        "rgb(16, 185, 129)",
        "rgb(236, 72, 153)",
        "rgb(107, 114, 128)",
      ],
      borderWidth: 1,
    },
  ],
}

export const financialTrendsData = {
  labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
  datasets: [
    {
      label: "Saldo",
      data: [1300, 1400, 1700, 2000, 1800, 2100, 2300, 2500, 2700, 2900, 3100, 3400],
      borderColor: "rgb(59, 130, 246)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      borderWidth: 2,
      fill: true,
      tension: 0.4,
    },
  ],
}

export const monthlyBudgetData = {
  labels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
  datasets: [
    {
      label: "Gastos Semanais",
      data: [850, 1200, 950, 1100],
      backgroundColor: "rgba(59, 130, 246, 0.5)",
      borderColor: "rgb(59, 130, 246)",
      borderWidth: 1,
    },
  ],
}

