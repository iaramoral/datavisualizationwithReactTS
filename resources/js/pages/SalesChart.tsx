import React, { useEffect, useState } from 'react'
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  CartesianGrid, BarChart, Bar
} from "recharts";

interface Sale {
  id: number;
  product: string;
  quantity: number;
  amount: number;
}

const SalesChart = () => {
  const [sales, setSales] = useState<Sale[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/sales")
      .then((res) => res.json())
      .then((data) => setSales(data));
  }, []);

  return (
    <div className="p-10 flex flex-col items-center bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 rounded-2xl shadow-lg">

  {/* Sales Quantity Chart */}
  <BarChart width={1200} height={300} data={sales} className="mb-6">
    <defs>
      <linearGradient id="quantityGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4f46e5" stopOpacity={0.9}/>
        <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.6}/>
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
    <XAxis dataKey="product" stroke="#374151" tick={{ fontSize: 14, fontWeight: 600 }} />
    <YAxis stroke="#374151" tick={{ fontSize: 14, fontWeight: 600 }} />
    <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }} />
    <Bar dataKey="quantity" fill="url(#quantityGradient)" radius={[10,10,0,0]} label={{ position: 'top', fill: '#111827', fontWeight: 'bold' }} />
  </BarChart>
  <h2 className="text-2xl font-bold text-gray-800 mb-8">Sales Quantity</h2>

  {/* Sales Amount Chart */}
  <LineChart width={1200} height={300} data={sales}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
    <XAxis dataKey="product" stroke="#374151" tick={{ fontSize: 14, fontWeight: 600 }} />
    <YAxis stroke="#374151" tick={{ fontSize: 14, fontWeight: 600 }} />
    <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.15)' }} />
    <Line
      type="monotone"
      dataKey="amount"
      stroke="#ef4444"
      strokeWidth={3}
      dot={{ r: 6, fill: '#facc15', stroke: '#b91c1c', strokeWidth: 2 }}
      activeDot={{ r: 8 }}
      label={{ position: 'top', fill: '#111827', fontWeight: 'bold' }}
    />
  </LineChart>
  <h2 className="text-2xl font-bold text-gray-800 mt-6">Sales Amount</h2>

</div>
  );
};

export default SalesChart;
