import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1752]/5 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-block p-2 bg-gradient-to-r from-[#0D1752]/10 to-[#24A354]/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#0D1752] px-4 py-2 bg-white rounded-full shadow-sm">
              🚀 Revolutionary Asset Tokenization
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-4">
            <span className="text-[#0D1752]">TOKEN</span> 
            <span className="text-[#24A354]"> PULSE</span>
          </h1>
          <div className="mt-6 mb-8">
            <p className="text-2xl font-semibold text-[#0D1752] italic bg-gradient-to-r from-[#0D1752] to-purple-600 bg-clip-text text-transparent">
              "A unified market where every asset is liquid, accessible, and on-chain."
            </p>
            <p className="text-sm text-gray-500 mt-2 font-medium">— Our Vision</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed mb-4">
              We <span className="font-semibold text-[#0D1752]">tokenize real-world assets</span>, creating a seamless bridge between 
              <span className="font-semibold text-[#24A354]"> traditional finance</span> and the 
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0D1752] to-purple-600"> multi-trillion dollar digital asset ecosystem</span>.
            </p>
            <div className="flex justify-center items-center space-x-6 mt-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#0D1752] rounded-full mr-2"></div>
                <span>Asset Tokenization</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#24A354] rounded-full mr-2"></div>
                <span>Traditional Finance</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-600 rounded-full mr-2"></div>
                <span>Digital Assets</span>
              </div>
            </div>
          </div>
        </div>

        {/* For Unit Trust & Asset Managers Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-[#0D1752] to-purple-600 rounded-full mb-4">
              <span className="text-white text-sm font-semibold px-4 py-1">💰 Asset Managers</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Unit Trust & Asset Managers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unlock new opportunities in the digital asset market and enhance your fund's liquidity
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#0D1752] bg-gradient-to-br from-white to-[#0D1752]/5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0D1752] to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0D1752] mb-4">Unlock New Capital</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain direct access to the $3.5+ trillion digital asset market, introducing your products to a new, global 
                generation of investors.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#24A354] bg-gradient-to-br from-white to-[#24A354]/5">
              <div className="w-12 h-12 bg-gradient-to-br from-[#24A354] to-green-500 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#24A354] mb-4">Enhance Liquidity</h3>
              <p className="text-gray-600 leading-relaxed">
                Increase the liquidity and accessibility of your funds by offering them in a tokenized, 24/7 market.
              </p>
            </Card>
          </div>
        </div>

        {/* Problem Statement Section */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl shadow-lg p-8 border-l-4 border-l-red-500">
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-red-100 rounded-full mb-4">
              <span className="text-red-600 text-lg">⚠️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Problem We Solve</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Investment funds suffer from a lack of liquidity, high barriers to entry and are laden with manual processes. 
              Through tokenization, units in a fund can be freely traded on a distributed ledger, reducing barriers to entry, 
              enabling automation and bringing liquidity to a market that has little access to it.
            </p>
          </div>
        </div>

        {/* For Crypto Traders & Investors Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
              <span className="text-white text-sm font-semibold px-4 py-1">🚀 Crypto Traders</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Crypto Traders & Investors</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access real-world yield and seamless diversification within the crypto ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-600 bg-gradient-to-br from-white to-purple-50">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-purple-600 mb-4">Access Real-World Yield</h3>
              <p className="text-gray-600 leading-relaxed">
                Invest directly in stable, regulated assets like money market funds without ever leaving the crypto ecosystem.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-orange-500 bg-gradient-to-br from-white to-orange-50">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-orange-600 mb-4">Seamless Diversification</h3>
              <p className="text-gray-600 leading-relaxed">
                Instantly move capital from volatile crypto assets to traditional funds—no off-ramping to fiat currency required.
              </p>
            </Card>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-20 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="text-center mb-8">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600 text-lg">✨</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform bridges the gap between traditional and digital finance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0D1752]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0D1752]">🌉</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Bridge Traditional & Digital</h3>
              <p className="text-gray-600">
                Seamlessly connect traditional financial assets with the digital asset ecosystem
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">💧</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Liquidity</h3>
              <p className="text-gray-600">
                24/7 trading capabilities with reduced barriers to entry and automated processes
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">🔒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulated & Secure</h3>
              <p className="text-gray-600">
                Access to stable, regulated assets while staying within the crypto ecosystem
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
                              <div className="text-3xl font-bold text-[#0D1752]">$3.5T+</div>
              <div className="text-gray-600">Digital Asset Market</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-gray-600">Trading Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">Global</div>
              <div className="text-gray-600">Market Access</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">Automated</div>
              <div className="text-gray-600">Processes</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0D1752] to-purple-800 rounded-xl shadow-xl p-8 text-white">
            <div className="inline-block p-2 bg-white/20 rounded-full mb-4">
              <span className="text-white text-lg">🚀</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Asset Management?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of compliant, efficient, and secure asset tokenization
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#0D1752] hover:bg-gray-100 font-semibold">
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">TokenPulse</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bridging traditional finance and the multi-trillion dollar digital asset ecosystem through asset tokenization.
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 TokenPulse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
