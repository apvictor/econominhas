export interface InstallmentsModel {
  id: number
  transactionId: number
  currentInstallment: number
  value: number
  date: string
  paid: boolean
}