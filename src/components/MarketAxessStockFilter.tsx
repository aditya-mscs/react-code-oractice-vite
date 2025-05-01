import React, { useCallback, useEffect, useMemo, useState } from "react";
import GoBackToHome from "./GoBacktoHome";

type Stock = {
  company?: string;
  description?: string;
  symbol?: string;
  open?: number;
  high?: number;
  low?: number;
  close?: number;
};

export default function MarketAxessStockFilter() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [selectedStock, setSelectedStock] = useState<Stock>({});
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    fetch("https://api.mockfly.dev/mocks/a19150f9-8f9c-4553-823c-cea122f6d932/stock")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        setStocks(data);
      })
      .catch((error) => console.error("Error fetching stocks:", error));
  }, []);

  const handleStockClick = (stock: Stock) => {
    setSelectedStock(stock);
  };

  const handleSearchStock = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchText(e.target.value);
    },
    []
  );

  // Dynamically filter stocks (no need to store filtered stocks)
  const filteredStocks = useMemo(() => {
    if (searchText.trim() === "") return stocks; //________ FORGOT THIS

    return stocks.filter(
      (stock) =>
        stock.company?.toLowerCase().includes(searchText.toLowerCase()) ||
        stock.symbol?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, stocks]); //__________ FORGOT THIS

  return (
    <main className="App">
      <GoBackToHome />
      <div className="flex min-h-screen justify-center p-4 h-full">
        <div className="flex bg-gray-200 flex-col w-full h-full max-w-[50%] shadow-lg">
          <div className="bg-gray-50 border border-1 border-gray-500 shadow-sm">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search stock"
                onChange={handleSearchStock}
                value={searchText} //___________ FORGOT THIS
              />
            </div>
          </div>
          <div className="text-gray-600 text-left mt-0 flex h-full">
            <div className="p-2 w-[200px] border border-gray-500 border-t-0 min-w-[200px] overflow-y-auto">
              {/*_________ THIS IMP: filteredStocks */}
              {filteredStocks.map((stock) => (
                <div
                  key={stock?.symbol}
                  className="cursor-pointer hover:bg-gray-400 p-1 rounded"
                  onClick={() => handleStockClick(stock)}
                >
                  {stock?.company}
                </div>
              ))}
            </div>
            <div className="p-2 bg-gray-300 flex-grow h-full border border-gray-500 border-l-0 border-t-0">
              {selectedStock?.description || "Select a stock to see description."}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}