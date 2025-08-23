import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function OfferingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1752]/5 via-purple-50 to-indigo-100">
      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="inline-block p-2 bg-gradient-to-r from-[#0D1752]/10 to-purple-600/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-[#0D1752] px-4 py-2 bg-white rounded-full shadow-sm">
              💼 Complete Solution Suite
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl mb-4">
            <span className="text-[#0D1752]">Our</span>
            <span className="text-[#24A354]"> Offering</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            <span className="font-semibold text-[#0D1752]">Effortlessly Distribute</span> & 
            <span className="font-semibold text-purple-600"> Onboard Investors</span> at Scale
          </p>
        </div>

        {/* Main Offering Cards */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Branded Investor Portal */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#0D1752] bg-gradient-to-br from-white to-[#0D1752]/5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D1752] to-purple-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#0D1752] mb-4">Branded Investor Portal</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Use your own branded investor portal to streamline onboarding, manage access, and scale investor participation with ease.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#0D1752] rounded-full mr-3"></span>
                Custom branding and white-label solutions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#0D1752] rounded-full mr-3"></span>
                Streamlined investor onboarding process
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#0D1752] rounded-full mr-3"></span>
                Automated access management
              </li>
            </ul>
          </Card>

          {/* Digital Asset Management */}
          <Card className="p-8 hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-[#24A354] bg-gradient-to-br from-white to-[#24A354]/5">
            <div className="w-12 h-12 bg-gradient-to-br from-[#24A354] to-green-500 rounded-lg flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-[#24A354] mb-4">Digital Asset & Investor Management</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Handle everything from investor onboarding to reporting, distributions, and cap table management—all from a single, efficient dashboard.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#24A354] rounded-full mr-3"></span>
                Comprehensive investor onboarding
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#24A354] rounded-full mr-3"></span>
                Automated reporting and distributions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-[#24A354] rounded-full mr-3"></span>
                Real-time cap table management
              </li>
            </ul>
          </Card>
        </div>

        {/* Additional Benefits Grid */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
              <span className="text-white text-sm font-semibold px-4 py-1">✨ Benefits</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Benefits</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Unlock the full potential of tokenized fundraising with our complete solution
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Expanded Capital Reach */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-purple-600 bg-gradient-to-br from-white to-purple-50">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-purple-600 mb-3">Expanded Capital Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Fractional ownership boosts investor participation, removing barriers, and attracts diverse investments, fostering inclusivity and diversity in fundraising.
              </p>
            </Card>

            {/* Efficient Funding Processes */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-orange-500 bg-gradient-to-br from-white to-orange-50">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-orange-600 mb-3">Efficient Funding Processes</h3>
              <p className="text-gray-600 leading-relaxed">
                Tokenized fundraising streamlines processes, reduces intermediaries, and enhances investment efficiency through automation, boosting liquidity.
              </p>
            </Card>

            {/* Global Investment Reach */}
            <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-l-4 border-l-teal-600 bg-gradient-to-br from-white to-teal-50">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-white">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-teal-600 mb-3">Global Investment Reach</h3>
              <p className="text-gray-600 leading-relaxed">
                Tokenization transcends geographical limitations. Investors from around the world can access your offerings, expanding your reach and diversifying your investor base.
              </p>
            </Card>
          </div>
        </div>

        {/* Features Breakdown */}
        <div className="mt-20 bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg p-8 border border-blue-100">
          <div className="text-center mb-12">
            <div className="inline-block p-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-600 text-lg">🔧</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in the digital asset ecosystem
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
                          <div className="w-12 h-12 bg-[#0D1752]/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-[#0D1752]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Investor Onboarding</h3>
              <p className="text-gray-600">
                Streamlined KYC/AML processes with automated verification
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance & Security</h3>
              <p className="text-gray-600">
                Built-in regulatory compliance and enterprise-grade security
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Real-time insights and automated reporting capabilities
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Access</h3>
              <p className="text-gray-600">
                Worldwide investor access with multi-currency support
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#0D1752] to-purple-800 rounded-xl shadow-xl p-8 text-white">
            <div className="inline-block p-2 bg-white/20 rounded-full mb-4">
              <span className="text-white text-lg">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Join the future of fundraising with our comprehensive tokenization platform
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
