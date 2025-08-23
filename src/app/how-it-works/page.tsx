import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1752]/5 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-block p-2 bg-gradient-to-r from-[#0D1752]/10 to-green-600/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#0D1752] px-4 py-2 bg-white rounded-full shadow-sm">
              ⚙️ Step-by-Step Process
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-4">
            <span className="text-[#0D1752]">How it</span>
            <span className="text-[#24A354]"> Works</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover how our platform <span className="font-semibold text-[#0D1752]">revolutionizes asset tokenization</span> and 
            <span className="font-semibold text-purple-600"> investor management</span>
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Compliant Investor Outreach */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#0D1752] bg-gradient-to-br from-white to-[#0D1752]/5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D1752] to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#0D1752] mb-4">Compliant Investor Outreach</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Segment new and existing investors based on certification, geography and other bespoke tags to ensure compliant distribution.
            </p>
            <div className="bg-[#0D1752]/10 rounded-lg p-4">
              <p className="text-sm text-[#0D1752] leading-relaxed">
                Security tokens are representations of real world securities/unit trusts being issued using a blockchain infrastructure. As they are regulated financial assets, the typical securities laws from the issuer and investor jurisdictions apply. The global reach provided by the internet and the blockchain enables global compliance, during the issuance and during the lifecycle of the financial instruments.
              </p>
            </div>
          </Card>

          {/* Improved Collaboration */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#24A354] bg-gradient-to-br from-white to-[#24A354]/5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#24A354] to-green-500 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#24A354] mb-4">Improved Internal and External Collaboration</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Collaborate easily across internal teams and third-party administrators with seamless communication and workflow management.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#24A354] rounded-full mr-3"></span>
                Real-time team collaboration tools
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#24A354] rounded-full mr-3"></span>
                Third-party administrator integration
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#24A354] rounded-full mr-3"></span>
                Automated workflow management
              </li>
            </ul>
          </Card>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reallocated Time and Resource */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-600 bg-gradient-to-br from-white to-purple-50">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">Reallocated Time and Resource</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Remove manual tasks and reallocate teams to focus on sourcing deals and building investor relationships.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Automated manual processes
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Focus on deal sourcing
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                Enhanced investor relationship building
              </li>
            </ul>
          </Card>

          {/* ONCHAIN Custody */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-orange-500 bg-gradient-to-br from-white to-orange-50">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-orange-600 mb-4">ONCHAIN Custody</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Tokenized unit trusts and securities are centralized financial instruments using a decentralized infrastructure.
            </p>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-sm text-orange-800 leading-relaxed">
                It means issuers are always in control of the token supply and investors cannot lose their assets, even if they lose access to their wallet. Custody fees are drastically reduced for issuers and can totally disappear for investors.
              </p>
            </div>
          </Card>
        </div>

        {/* Process Flow Section */}
        <div className="mt-20 bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-gray-100 rounded-full mb-4">
              <span className="text-gray-600 text-lg">🔄</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The TokenPulse Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to asset tokenization and investor management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0D1752]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-[#0D1752]">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Asset Tokenization</h3>
              <p className="text-gray-600">
                Convert traditional assets into digital tokens on blockchain infrastructure
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance Setup</h3>
              <p className="text-gray-600">
                Configure regulatory compliance and investor segmentation rules
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investor Onboarding</h3>
              <p className="text-gray-600">
                Streamlined KYC/AML processes with automated verification
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Management</h3>
              <p className="text-gray-600">
                Continuous monitoring, reporting, and investor relationship management
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-4">
              <span className="text-white text-sm font-semibold px-4 py-1">💎 Advantages</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TokenPulse?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the advantages of our comprehensive tokenization platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Built-in compliance with securities laws across multiple jurisdictions
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">
                Reduced custody fees and automated processes lower operational costs
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Custody</h3>
              <p className="text-gray-600">
                Issuer-controlled token supply with enhanced security measures
              </p>
            </Card>
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
