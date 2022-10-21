import React, { useState } from "react";
import Head from "next/head";
import web3Onboard from "../src/web3Onboard";
import WROSE from "../src/wrose";
import Nav from "../components/Nav";
import BalanceOfRose from "../components/BalanceOfRose";
import BalanceOfWrose from "../components/BalanceOfWrose";
import PriceOfRose from "../components/PriceOfRose";

export default function Wrap() {
  const [signer, setSigner] = useState(null);
  const [wrose, setWrose] = useState(null);
  const [amount, setAmount] = useState(null);

  async function connect() {
    const signer = await web3Onboard();
    setSigner(signer);
    setWrose(new WROSE(signer));
  }

  return (
    <>
      <Head>
        <title>WROSE Wrap</title>
        <meta name="description" content="Wrap Rose WROSE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <div className="flex min-h-full items-center justify-center py-12 px-4">
        <div className="w-full max-w-md p-2 rounded-xl border border-slate-700 bg-slate-900">
          <div className="m-2">Wrap</div>

          <div className="rounded-xl bg-slate-800">
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td className="pl-4 py-3 w-2/3">
                    <input onChange={(e) => setAmount(e.target.value)} className="text-4xl rounded-md w-full bg-transparent focus:outline-none" placeholder="0" />
                    {wrose ? <PriceOfRose amount={amount} /> : <></>}
                  </td>
                  <td className="text-right pr-4">
                    <div className="text-xl">ROSE</div>
                    {wrose ? <BalanceOfRose wrose={wrose} /> : <></>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center text-gray-500"> ↓ </div>

          <div className="rounded-xl bg-slate-800">
            <table className="min-w-full">
              <tbody>
                <tr>
                  <td className="pl-4 py-3 w-2/3">
                    <input disabled className="text-4xl rounded-md w-full bg-transparent focus:outline-none" placeholder="0" value={amount} />
                    {wrose ? <PriceOfRose amount={amount} /> : <></>}
                  </td>
                  <td className="text-right pr-4">
                    <div className="text-xl">WROSE</div>
                    {wrose ? <BalanceOfWrose wrose={wrose} /> : <></>}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <button onClick={() => connect()} className="text-xl w-full justify-center rounded-3xl mt-3 p-4 bg-sky-600 hover:bg-sky-500">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
