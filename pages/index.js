import NavIndex from "../components/NavIndex";
export default function Index() {
  return (
    <div className="bg-slate-100 text-black">
      <NavIndex />

      <section className="px-2 pt-32 md:px-0">
        <div className="container items-center max-w-6xl px-5 mx-auto space-y-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-left sm:text-5xl md:text-6xl md:text-center">
            <span className="block">
              <span className="block mt-1 text-sky-500 lg:inline lg:mt-0">WROSE</span>
            </span>
          </h1>
          <p className="w-full mx-auto text-base text-left sm:text-lg lg:text-2xl md:max-w-3xl md:text-center">Wrapped ROSE on Oasis Sapphire enables DeFi swapping and sending ROSE while preserving privacy.</p>
          <div className="my-10">
            <a href="/send" className="px-6 py-3 mb-10 text-lg text-white bg-sky-500 rounded-md md:mb-0 hover:bg-sky-400 md:w-auto">
              Launch App
            </a>
          </div>
        </div>
        <div className="max-w-xl mx-auto mt-16 text-center">
          <img alt="" src="/images/hero.svg" />
        </div>
      </section>

      <section className="w-full mt-40 mb-10">
        <div className="text-center text-5xl">How It Works</div>
      </section>

      <section className="w-full mb-40">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none">
            <img alt="" src="/images/wrap.svg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
          </div>
          <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-3xl font-semibold leading-tight border-0 border-gray-300">Wrap</h2>
            <p className="pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 text-lg">To “wrap”, send ROSE to the smart contract to get an equal amount of WROSE.</p>
          </div>
        </div>
      </section>

      <section className="w-full mb-40">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none">
            <img alt="" src="/images/smart-contract.svg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
          </div>
          <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-3xl font-semibold leading-tight border-0 border-gray-300">Smart Contract</h2>
            <p className="pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 text-lg">The smart contract holds your funds. To get ROSE back, simply “unwrap” it.</p>
          </div>
        </div>
      </section>

      <section className="w-full mb-40">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none">
            <img alt="" src="/images/send.svg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
          </div>
          <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-3xl font-semibold leading-tight border-0 border-gray-300">Send</h2>
            <p className="pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 text-lg">To send, sign a special message with your wallet to authorize sending. A relayer will tell the smart contract to start the send.</p>
          </div>
        </div>
      </section>

      <section className="w-full mb-40">
        <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">
          <div className="box-border relative w-full max-w-md mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none">
            <img alt="" src="/images/recieve.svg" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20" />
          </div>
          <div className="box-border order-first w-full border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-3xl font-semibold leading-tight border-0 border-gray-300">Recieve</h2>
            <p className="pt-4 pb-8 m-0 leading-7 border-0 border-gray-300 text-lg">The smart contract will unwrap WROSE to ROSE and anonymously send it to your crypto crush.</p>
          </div>
        </div>
      </section>

      {/* Smart Contracts */}
      <section className="w-full mt-40 mb-10">
        <div className="text-center text-5xl">Smart Contracts</div>
        <div className="flex flex-col items-center pt-4">
          <div className="text-center text-xl max-w-lg text-gray-500">The Oasis Network separates consensus and execution into two layers — the Consensus Layer and The ParaTime Layer. This means there are multiple WROSE smart contracts.</div>
        </div>
      </section>

      {/* table */}
      <section className="md:flex flex-col items-center">
        <div class="px-4 sm:px-6 lg:px-8 pb-40">
          <div class="mt-8 flex flex-col">
            <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-gray-50">
                      <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          Paratime
                        </th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Network
                        </th>
                        <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Contract
                        </th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-white text-gray-500">
                      <tr>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">Sapphire</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">Mainnet</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          <a href="#">---</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">Sapphire</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">Testnet</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          <a href="https://testnet.explorer.sapphire.oasis.dev/address/0xC6C6A205ec3031E0C61ce2d0bd4A415C5509C1C0/transactions">0xC6C6A205ec3031E0C61ce2d0bd4A415C5509C1C0</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">Emerald</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">Mainnet</td>
                        <td class="whitespace-nowrap px-3 py-4 text-sm">
                          <a href="https://explorer.emerald.oasis.dev/address/0x21C718C22D52d0F3a789b752D4c2fD5908a8A733/transactions">0x21C718C22D52d0F3a789b752D4c2fD5908a8A733</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
