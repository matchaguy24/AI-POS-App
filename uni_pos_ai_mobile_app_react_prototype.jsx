import React, { useState } from 'react';

const statsData = [
  { label: 'Today Sales', value: '$4,820' },
  { label: 'Transactions', value: '124' },
  { label: 'Best Seller', value: 'Coffee Latte' },
  { label: 'Low Stock', value: '3 Items' },
];

const productsData = [
  { id: 1, name: 'Coffee Latte', price: 4.5 },
  { id: 2, name: 'Burger Combo', price: 8.99 },
  { id: 3, name: 'Shampoo', price: 12.0 },
  { id: 4, name: 'Water Bottle', price: 1.5 },
];

const aiInsights = [
  'Sales increased 18% today.',
  'Peak sales hour: 1 PM - 2 PM.',
  'Recommend restocking bottled water tomorrow.',
  'Bundle promotions increased order value by 12%.',
];

const paymentMethods = [
  'Cash',
  'Credit Card',
  'Debit Card',
  'GCash',
  'PayPal',
  'Apple Pay',
  'Google Pay',
];

export default function UniPosAIApp() {
  const [cart, setCart] = useState([]);
  const [barcode, setBarcode] = useState('');
  const [cloudStatus, setCloudStatus] = useState('Not Synced');

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleBarcodeScan = () => {
    const demoBarcode = '1234567890';
    setBarcode(demoBarcode);
  };

  const syncToCloud = async () => {
    try {
      const payload = {
        sales: total,
        transactions: cart.length,
        items: cart,
      };

      console.log('Cloud Sync Payload:', payload);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setCloudStatus('Cloud Sync Successful');
    } catch (error) {
      console.error(error);
      setCloudStatus('Cloud Sync Failed');
    }
  };

  const processPayment = (method) => {
    alert(`Payment processed using ${method}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 text-gray-900">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">UNI-POS AI</h1>
            <p className="text-gray-500 mt-1">
              Smart POS for Every Business
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex gap-3">
            <button className="bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:opacity-90">
              New Sale
            </button>

            <button className="bg-blue-600 text-white px-5 py-3 rounded-2xl font-semibold hover:opacity-90">
              AI Summary
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statsData.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-3xl shadow-md p-5"
            >
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <h2 className="text-2xl font-bold mt-2">{stat.value}</h2>
            </div>
          ))}
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-5 flex-wrap gap-3">
              <h2 className="text-2xl font-bold">POS Checkout</h2>

              <input
                type="text"
                placeholder="Search products..."
                className="border rounded-xl px-4 py-2 w-56"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {productsData.map((product) => (
                <div
                  key={product.id}
                  className="bg-gray-50 border rounded-2xl p-4 hover:shadow-md"
                >
                  <div className="h-20 bg-gray-200 rounded-xl mb-3" />

                  <h3 className="font-semibold">{product.name}</h3>

                  <p className="text-gray-500">
                    ${product.price.toFixed(2)}
                  </p>

                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 w-full bg-black text-white py-2 rounded-xl"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">AI Insights</h2>

            <div className="space-y-4">
              {aiInsights.map((insight) => (
                <div
                  key={insight}
                  className="bg-blue-50 border border-blue-100 rounded-2xl p-4"
                >
                  <p>{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Barcode Scanner</h2>

            <div className="bg-gray-100 rounded-2xl p-6 text-center">
              <p className="mb-4 text-gray-600">
                Simulated barcode scanner
              </p>

              <button
                onClick={handleBarcodeScan}
                className="bg-black text-white px-5 py-3 rounded-2xl"
              >
                Scan Barcode
              </button>

              <p className="mt-4 font-semibold">
                Barcode: {barcode || 'No barcode scanned'}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Payment System</h2>

            <div className="grid grid-cols-2 gap-3">
              {paymentMethods.map((method) => (
                <button
                  key={method}
                  onClick={() => processPayment(method)}
                  className="bg-blue-600 text-white py-3 rounded-2xl font-semibold hover:opacity-90"
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Daily Sales Summary</h2>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Total Revenue</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Transactions</span>
                <span className="font-semibold">{cart.length}</span>
              </div>

              <div className="flex justify-between">
                <span>Peak Hour</span>
                <span className="font-semibold">1 PM - 2 PM</span>
              </div>

              <div className="flex justify-between">
                <span>Best Seller</span>
                <span className="font-semibold">Coffee Latte</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-green-600 text-white py-3 rounded-2xl font-semibold hover:opacity-90">
              Export Report
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Cloud Sync</h2>

            <div className="space-y-4">
              <button
                onClick={syncToCloud}
                className="w-full bg-indigo-600 text-white py-3 rounded-2xl font-semibold hover:opacity-90"
              >
                Sync Sales to Cloud
              </button>

              <div className="bg-gray-100 rounded-2xl p-4">
                <p className="font-semibold">Status:</p>
                <p>{cloudStatus}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
            <h2 className="text-2xl font-bold">Business Modes</h2>

            <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:opacity-90">
              Switch Mode
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['Retail', 'Restaurant', 'Salon', 'Grocery', 'Services'].map(
              (mode) => (
                <div
                  key={mode}
                  className="bg-gray-50 border rounded-2xl p-5 text-center hover:shadow-md cursor-pointer"
                >
                  <div className="h-12 w-12 bg-black rounded-full mx-auto mb-3" />

                  <p className="font-semibold">{mode}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>

          {cart.length === 0 ? (
            <p className="text-gray-500">No items added yet.</p>
          ) : (
            <div className="space-y-3">
              {cart.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex justify-between bg-gray-50 rounded-2xl p-4"
                >
                  <span>{item.name}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <footer className="text-center text-gray-500 py-4">
          UNI-POS AI © 2026 — AI-Powered POS Platform
        </footer>
      </div>
    </div>
  );
}
