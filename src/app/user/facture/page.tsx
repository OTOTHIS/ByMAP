'use client'
import { axiosClient } from "@/components/axios/axios";
import { useEffect } from "react";
import Page404 from "../../not-found";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from "./_invoice";

const UserFacture = ()  =>{
const fetchOrder  = async() =>{
try {
    const response = await axiosClient.get('/user/order/2')
    console.log(response.data)
    if(response.status == 401 || response.status == 404){
        console.log("auth")
        Page404();
    } 
} catch (error) {
    console.log(error)
}
}
    useEffect(() => {
        fetchOrder()
      
    }, []);
    const invoiceData = {
      invoiceNumber: 'INV12345',
      date: '01/05/2023',
      customer: {
        name: 'John Doe',
        address: '123 Main St.',
        city: 'Anytown, USA 12345',
        email: 'johndoe@example.com'
      },
      items: [
        { description: 'Product 1', quantity: 1, price: 100 },
        { description: 'Product 2', quantity: 2, price: 50 },
        { description: 'Product 3', quantity: 3, price: 75 }
      ],
      subtotal: 425,
      tax: 25.50,
      total: 450.50
    };

return (
    <div className="App">
    <h1>Generate Invoice</h1>
    <PDFDownloadLink
      document={<Invoice data={invoiceData} />}
      fileName="invoice.pdf"
    >
      {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download PDF'
      }
    </PDFDownloadLink>
  </div>
)
}

export default UserFacture