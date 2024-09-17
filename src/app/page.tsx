import { Metadata } from "next";
import Converter from "@/features/converter/ui/converter";
import { IConverterData } from "@/features/converter/model/types";

export const metadata: Metadata = {
  title: "Cryptocurrency converter",
  description: "Test task for Mobyrix",
};

export default async function Home() {
  let data: IConverterData|undefined;

  try{
    const res = await fetch(process.env.NEXT_PUBLIC_COIN_GEKO_API_URL + "/exchange_rates", {
        headers: {
            'Accept': 'application/json'
        },
    });
    const dataJson = await res.json();
    data = {
      coins: dataJson.rates,
    }
  }
  catch (e) {
    console.log(e);
  }

  return (
    <main className="flex min-h-screen flex-col  p-8">
      <h1 className="text-3xl mb-2">Cryptocurrency converter</h1>
      <Converter data={data} />
    </main>
  );
}
