import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Search, Bell, Wallet, Star } from "lucide-react";

const mockData = [
  { name: "1pm", price: 1.2 },
  { name: "2pm", price: 1.4 },
  { name: "3pm", price: 1.35 },
  { name: "4pm", price: 1.6 },
  { name: "5pm", price: 1.8 },
];

export default function DexIntelDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    website: "",
    logo: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submitted token listing:", formData);
    setSubmitted(true);
    // Add POST request to backend API here
  };

  return (
    <div className="p-4 grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* Left Panel: Search & Filters */}
      <div className="lg:col-span-1 space-y-4">
        <Card>
          <CardContent className="p-4 space-y-4">
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4" />
              <Input placeholder="Search token or address" className = "mb-2 placeholder-black" />
            </div>
            <Tabs defaultValue="trending" className="w-full">
              <TabsList className="grid grid-cols-3">
                <TabsTrigger value="trending">🔥 Trending</TabsTrigger>
                <TabsTrigger value="alerts">🔔 Alerts</TabsTrigger>
                <TabsTrigger value="favorites">⭐ Starred</TabsTrigger>
              </TabsList>
              <TabsContent value="trending">
                <ul className="space-y-2" style={{ color: "black" }}>
                  <li>PEPE - Up 21%</li>
                  <li>BASEDEX - New Pair</li>
                  <li>SOLBULL - Volume Surge</li>
                </ul>
              </TabsContent>
              <TabsContent value="alerts">
                <ul className="space-y-2" style={{ color: "black" }}>
                  <li>WHALE bought 250 ETH of $JITO</li>
                  <li>Rug Risk Detected: $FLOOP</li>
                </ul>
              </TabsContent>
              <TabsContent value="favorites">
                <ul className="space-y-2" style={{ color: "black" }}>
                  <li>LINK - Watchlist</li>
                  <li>RLB - Alert Active</li>
                </ul>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Right Panel: Chart and Token Info */}
      <div className="lg:col-span-3 space-y-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold" style={{ color: "black" }}>$DEXI / USDC</h2>
                <p className="text-sm" style={{ color: "black" }}>DexIntel AI Token</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm"><Bell className="w-4 h-4 mr-1" /> Alert</Button>
                <Button variant="outline" size="sm"><Wallet className="w-4 h-4 mr-1" /> Track</Button>
                <Button variant="outline" size="sm"><Star className="w-4 h-4 mr-1" /> Star</Button>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockData}>
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line type="monotone" dataKey="price" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Token Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card><CardContent className="p-4"><p style={{ color: "black" }}>📊 Volume: $2.1M</p></CardContent></Card>
          <Card><CardContent className="p-4"><p style={{ color: "black" }}>💧 Liquidity: $830K</p></CardContent></Card>
          <Card><CardContent className="p-4"><p style={{ color: "black" }}>🤖 AI Score: 87 / 100</p></CardContent></Card>
        </div>

        {/* DEX Trading Panel */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>🔁 DEX Trading</h3>
            <iframe
              src="https://app.1inch.io/#/1/simple/swap/ETH/USDC"
              width="100%"
              height="420"
              style={{ border: "none" }}
              title="DexIntel Trading Widget"
            />
          </CardContent>
        </Card>

        {/* Token Listing Panel */}
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2" style={{ color: "black" }}>🚀 Token Listing</h3>
            <p className="text-sm mb-2" style={{ color: "black" }}>
              Submit your token to be listed and scored on DexIntel.
            </p>
            <Input placeholder="Token Name" name="name" className="mb-2 placeholder-black" onChange={handleChange} />
            <Input placeholder="Token Contract Address" name="address" className="mb-2 placeholder-black" onChange={handleChange} />
            <Input placeholder="Project Website" name="website" className="mb-2 placeholder-black" onChange={handleChange} />
            <Input placeholder="Logo URL" name="logo" className="mb-2 placeholder-black" onChange={handleChange} />
            <Button variant="default" size="sm" onClick={handleSubmit}>Submit for Review</Button>
            {submitted && <p className="text-green-500 text-sm mt-2">✅ Token submitted successfully!</p>}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
