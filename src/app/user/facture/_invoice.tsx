// Invoice.js
import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#ffffff',
    padding: '10px 40px'
  },
  section: {
    margin: 10,
    padding: 10,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  company: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 32,
    width: 32,
    marginRight: 8
  },
  companyName: {
    fontSize: 14,
    color: '#4a5568',
    fontWeight: 'semibold'
  },
  invoiceDetails: {
    textAlign: 'right',
    color: '#4a5568'
  },
  invoiceTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#e2e8f0',
    paddingBottom: 8,
    marginBottom: 8
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4
  },
  text: {
    color: '#4a5568'
  },
  table: {
    width: '100%',
    marginBottom: 8
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    marginBottom: 4
  },
  tableRow: {
    flexDirection: 'row',
    marginBottom: 4
  },
  tableCell: {
    flex: 1,
    padding: 4
  },
  alignRight: {
    textAlign: 'right'
  },
  subtotal: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8
  },
  total: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: '#e2e8f0',
    paddingTop: 8,
    marginTop: 8,
    textAlign: 'center'
  }
});

const Invoice = ({ data }:any) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <View style={styles.company}>
          <Image style={styles.logo} src="https://tailwindflex.com/public/images/logos/favicon-32x32.png" />
          <Text style={styles.companyName}>Your Company Name</Text>
        </View>
        <View style={styles.invoiceDetails}>
          <Text style={styles.invoiceTitle}>INVOICE</Text>
          <Text style={styles.text}>Date: {data.date}</Text>
          <Text style={styles.text}>Invoice #: {data.invoiceNumber}</Text>
        </View>
      </View>

      <View style={[styles.section, styles.borderBottom]}>
        <Text style={styles.boldText}>Bill To:</Text>
        <Text style={styles.text}>{data.customer.name}</Text>
        <Text style={styles.text}>{data.customer.address}</Text>
        <Text style={styles.text}>{data.customer.city}</Text>
        <Text style={styles.text}>{data.customer.email}</Text>
      </View>

      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, { flex: 2 }]}>Description</Text>
          <Text style={styles.tableCell}>Quantity</Text>
          <Text style={styles.tableCell}>Price</Text>
          <Text style={[styles.tableCell, styles.alignRight]}>Total</Text>
        </View>
        {data.items.map((item:any, index:number) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.description}</Text>
            <Text style={styles.tableCell}>{item.quantity}</Text>
            <Text style={styles.tableCell}>${item.price.toFixed(2)}</Text>
            <Text style={[styles.tableCell, styles.alignRight]}>${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
      </View>

      <View style={styles.subtotal}>
        <Text style={styles.text}>Subtotal: </Text>
        <Text style={styles.text}>${data.subtotal.toFixed(2)}</Text>
      </View>

      <View style={styles.subtotal}>
        <Text style={styles.text}>Tax: </Text>
        <Text style={styles.text}>${data.tax.toFixed(2)}</Text>
      </View>

      <View style={styles.total}>
        <Text style={styles.text}>Total: </Text>
        <Text style={styles.text}>${data.total.toFixed(2)}</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.text}>Payment is due within 30 days. Late payments are subject to fees.</Text>
        <Text style={styles.text}>Please make checks payable to Your Company Name and mail to:</Text>
        <Text style={styles.text}>123 Main St., Anytown, USA 12345</Text>
      </View>
    </Page>
  </Document>
);

export default Invoice;
