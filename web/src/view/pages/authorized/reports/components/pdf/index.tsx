import { Page, Document, View, Text, Image } from "@react-pdf/renderer"
import { Fragment } from "react/jsx-runtime"
import logo from "@/assets/logo.png"
import { styles } from "./styles"
import { Loading } from "@/view/components/loading"
import { formatCurrency } from "@/lib/format-currency"
import { formatDate } from "@/lib/format-date"
import { getReportsResponse } from "@/shared/services/transactions"

interface Props {
  transactions?: getReportsResponse
}
export function Pdf({ transactions }: Props) {
  if (!transactions) return <Loading />

  interface HeaderProps {
    title: string
  }
  const Header = ({ title }: HeaderProps) => (
    <View style={styles.titleContainer}>
      <View style={styles.spaceBetween}>
        <Image style={styles.logo} src={logo} />
        <Text style={styles.reportTitle}>{title}</Text>
        <Text style={styles.reportP}>{formatDate(new Date())}</Text>
      </View>
    </View>
  )

  const TablePayment = () =>
    transactions.transactions.map((transaction) => {
      return (
        <Fragment key={transaction.date}>
          {transaction.transactions.map((item) => (
            <Fragment key={item.id}>
              <View style={{ width: "100%", flexDirection: "row" }}>
                <View style={[styles.tbody, styles.tbody2]}>
                  <Text>{item.title}</Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{item.account.name} </Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{item.category.name} </Text>
                </View>
                <View style={styles.tbody}>
                  <Text>{item.date && formatDate(item.date)} </Text>
                </View>
                <View style={styles.tbody}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: item.category.type === "INCOME" ? "green" : "red",
                    }}
                  >
                    {item.category.type === "EXPENSE" && "-"}
                    {formatCurrency(item.value)}
                  </Text>
                </View>
              </View>
            </Fragment>
          ))}
        </Fragment>
      )
    })

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header title="Relatório" />

        <View
          style={{
            marginTop: 30,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text>Receita</Text>
            <Text style={{ fontWeight: "bold", color: "green" }}>
              {formatCurrency(transactions.income.total)}
            </Text>
          </View>
          <View>
            <Text>Despesa</Text>
            <Text style={{ fontWeight: "bold", color: "red" }}>
              {formatCurrency(transactions.expenses.total)}
            </Text>
          </View>
          <View>
            <Text>Total</Text>
            <Text
              style={{
                fontWeight: "bold",
                color: transactions.balance > 0 ? "green" : "red",
              }}
            >
              {formatCurrency(transactions.balance)}
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <View style={[styles.theader, styles.theader2]}>
              <Text>Titulo</Text>
            </View>
            <View style={styles.theader}>
              <Text>Conta</Text>
            </View>
            <View style={styles.theader}>
              <Text>Categoria</Text>
            </View>
            <View style={styles.theader}>
              <Text>Data</Text>
            </View>
            <View style={styles.theader}>
              <Text>Valor</Text>
            </View>
          </View>
          <TablePayment />
        </View>
      </Page>
    </Document>
  )
}
