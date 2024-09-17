'use client'

import Dropdown, { DropdownOption } from "@/shared/ui/dropdowm";
import {useEffect, useState} from "react";
import { ConverterProps } from "../model/types";
import IconButton from "@/shared/ui/iconButton";
import Button from "@/shared/ui/button";
import Image from "next/image";
import swapSvg from '../../../assets/swap.svg'

const Converter = (props: ConverterProps) => {
  const [options, setOptions] = useState<DropdownOption[]>([]);
  const [amount, setAmount] = useState<number|undefined>(1);
  const [fromCryptoCurrency, setFromCryptoCurrency] = useState<string>("btc");
  const [toCryptoCurrency, setToCryptoCurrency] = useState<string>("eth");
  const [convertedRes, setConvertedRes] = useState<string|null>(null);

  useEffect(() => {
    const dropdownOptions: DropdownOption[] = Object.entries(props?.data?.coins ?? {}).map(([coinKey, coin]) => ({
      value: coinKey,
      title: coin.name,
    }));
    setOptions(dropdownOptions);    
  }, [props.data]);

  const convertCurrency = async () => {
    if (!amount) {
      setConvertedRes(null);
      return;
    };

    const fromCoin = props?.data?.coins[fromCryptoCurrency];
    const toCoin = props?.data?.coins[toCryptoCurrency];
    const firstSelRate = fromCoin.value;
    const secondSelRate = toCoin.value;
    const resultVal = (amount * secondSelRate) / firstSelRate;
    setConvertedRes(`${amount} ${fromCoin?.unit} = ${resultVal.toFixed(5)} ${toCoin?.unit}`)
  };

  const swapCurrencies = () => {
    setFromCryptoCurrency(toCryptoCurrency);
    setToCryptoCurrency(fromCryptoCurrency);
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className="mb-5 text-2xl font-semibold text-gray-700">
        Converter
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <Dropdown
          options={options}
          title="From:"
          selectedOption={fromCryptoCurrency}
          setOption={setFromCryptoCurrency}
        />
        <div className="flex justify-center -mb-5 sm:mb-0">
          <IconButton
            onClick={swapCurrencies}
          >
            <Image
              priority
              src={swapSvg}
              height={32}
              width={32}
              alt={'-><-'}
            />
          </IconButton>
        </div>
        <Dropdown
          options={options}
          selectedOption={toCryptoCurrency}
          setOption={setToCryptoCurrency}
          title="To:"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700"
        >
          Amount:
        </label>
        <input
          value={String(amount ?? '')}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
        />
      </div>
      <div className="flex mt-4 min-h-4">
        {convertedRes && (
            <span className="font-bold">
              Converted: {convertedRes}
            </span>
        )}
      </div>
      <div className="flex justify-end mt-6">
        <Button
          onClick={convertCurrency}
        >
          Convert
        </Button>
      </div>
    </div>
  )
}

export default Converter