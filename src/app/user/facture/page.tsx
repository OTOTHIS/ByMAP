'use client';

import { axiosClient } from "@/components/axios/axios";
import { useEffect, useState } from "react";
import { notFound, useSearchParams } from "next/navigation";
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from "./_invoice";
import Page404 from "@/app/not-found";
import { useUser } from "@/context/userContext";
import { OrderType } from "@/data/types";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";

const UserFacture = () => {
  const searchParams = useSearchParams();
  const order = searchParams.get("order");
  const [orderData, setOrderData] = useState<OrderType | null>(null);
  const [loading, setLoading] = useState(true);
  const { userApi, getUser } = useUser();

  const fetchOrder = async () => {
    try {
      const response = await axiosClient.get(`/user/order/${order}`);
      if (response.status === 401 || response.status === 404) {
        notFound();
      } else {
        setOrderData(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrder();
    getUser(); // Fetch user data
  }, [order]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!orderData || !userApi) {
    return <Page404 />;
  }

  const invoiceData = {
    invoiceNumber: `INV${orderData.id}`,
    date: orderData.created_at,
    customer: {
      name: userApi.firstname,
      address: userApi.adresse || 'Adresse non disponible', // Update with dynamic data if available
      city: userApi.city || 'Ville non disponible', // Update with dynamic data if available
      email: userApi.email
    },
    items: orderData.items.map(item => ({
      description: `Produit ${item.product_id}`,
      quantity: item.quantity,
      price: 100 // Assuming price is static for this example
    })),
    subtotal: orderData.items.reduce((sum, item) => sum + (item.quantity * 100), 0), // Assuming price is 100
    tax: 25.50,
    total: orderData.items.reduce((sum, item) => sum + (item.quantity * 100), 0) + 25.50 // Assuming price is 100 and adding tax
  };

  return (
    <div className="App flex justify-center flex-col">
      <ButtonPrimary className="my-5 mx-auto ">
        <PDFDownloadLink
          document={<Invoice data={invoiceData} />}
          fileName="facture.pdf"
        >
          {({  loading }) =>
            loading ? 'Chargement du document...' : 'Télécharger le PDF'
          }
        </PDFDownloadLink>
      </ButtonPrimary>
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <img className="h-8 w-8 mr-2" src="/assets/images/logo.png" alt="Logo BYMAP" />
            <div className="text-gray-700 font-semibold text-lg">BYMAP</div>
          </div>
          <div className="text-gray-700">
            <div className="font-bold text-xl mb-2">FACTURE</div>
            <div className="text-sm">Date : {invoiceData.date}</div>
            <div className="text-sm">Facture # : {invoiceData.invoiceNumber}</div>
          </div>
        </div>
        <div className="border-b-2 border-gray-300 pb-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Facturer à :</h2>
          <div className="text-gray-700 mb-2">{invoiceData.customer.name}</div>
          <div className="text-gray-700 mb-2">{invoiceData.customer.address}</div>
          <div className="text-gray-700 mb-2">{invoiceData.customer.city}</div>
          <div className="text-gray-700">{invoiceData.customer.email}</div>
        </div>
        <table className="w-full text-left mb-8">
          <thead>
            <tr>
              <th className="text-gray-700 font-bold uppercase py-2">Description</th>
              <th className="text-gray-700 font-bold uppercase py-2">Quantité</th>
              <th className="text-gray-700 font-bold uppercase py-2">Prix</th>
              <th className="text-gray-700 font-bold uppercase py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr key={index}>
                <td className="py-4 text-gray-700">{item.description}</td>
                <td className="py-4 text-gray-700">{item.quantity}</td>
                <td className="py-4 text-gray-700">{item.price.toFixed(2)}€</td>
                <td className="py-4 text-gray-700">{(item.price * item.quantity).toFixed(2)}€</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Sous-total :</div>
          <div className="text-gray-700">{invoiceData.subtotal.toFixed(2)}€</div>
        </div>
        <div className="text-right mb-8">
          <div className="text-gray-700 mr-2">Taxe :</div>
          <div className="text-gray-700">{invoiceData.tax.toFixed(2)}€</div>
        </div>
        <div className="flex justify-end mb-8">
          <div className="text-gray-700 mr-2">Total :</div>
          <div className="text-gray-700 font-bold text-xl">{invoiceData.total.toFixed(2)}€</div>
        </div>
        <div className="border-t-2 border-gray-300 pt-8 mb-8">
          <div className="text-gray-700 mb-2">Le paiement est dû dans les 30 jours. Les paiements en retard sont soumis à des frais.</div>
          <div className="text-gray-700 mb-2">Veuillez libeller les chèques à l'ordre de BYMAP et les envoyer à :</div>
          <div className="text-gray-700">123 Main St., Anytown, USA 12345</div>
        </div>
      </div>
    </div>
  );
}

export default UserFacture;
