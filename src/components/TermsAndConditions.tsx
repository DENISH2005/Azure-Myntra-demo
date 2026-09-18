import { useState } from 'react';
import { 
  FileText, 
  RotateCcw, 
  Truck, 
  Lock, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  Search
} from 'lucide-react';

export default function TermsAndConditions() {
  const [activeTab, setActiveTab] = useState<
    'terms' | 'returns' | 'shipping' | 'privacy' | 'faq'
  >('terms');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      q: 'How does the 30-day doorstep return pickup work?',
      a: 'If you are unsatisfied with the fit, fabric, or finish of your item, go to your Orders page and select "Request Return". Our delivery partner will arrive at your registered address within 24 to 48 hours to inspect tags and collect the garment. No printing or packaging labels required on your end.'
    },
    {
      q: 'How quickly will my refund be processed?',
      a: 'For Cash on Delivery (COD) orders, refunds are credited to your verified bank account or UPI ID within 2 hours of pickup. For prepaid credit card/debit card transactions, your issuing bank typically reconciles the credit within 2-4 business days.'
    },
    {
      q: 'Can I exchange my garment for a different size without paying extra?',
      a: 'Yes! Exchanges for alternate sizes of the exact same product are 100% free of charge. We dispatch the requested replacement size as soon as the return pickup scan is initiated.'
    },
    {
      q: 'Are all products sold on MYRA authentic and original?',
      a: 'Every single product sold on MYRA comes with a 100% Authenticity Guarantee. We enter into strict supply contracts directly with fashion design houses and authorized license holders. We strictly prohibit unauthorized third-party counterfeit reselling.'
    },
    {
      q: 'What are the delivery timelines for standard vs. express orders?',
      a: 'Metro cities (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata) typically receive deliveries within 24 to 48 hours. Non-metro and regional locations receive deliveries within 3 to 5 business days.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-[#fafaf9] py-12 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal & Policy Center</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-900">
            Terms of Use & Customer Policies
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm max-w-xl mx-auto">
            Transparent, customer-friendly policies governing your purchases, returns, deliveries, and data privacy on MYRA.
          </p>
        </div>

        {/* Tab Navigation Pill Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white border border-stone-200 rounded-2xl shadow-xs">
          <button
            id="policy-tab-terms"
            onClick={() => setActiveTab('terms')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Terms of Use</span>
          </button>

          <button
            id="policy-tab-returns"
            onClick={() => setActiveTab('returns')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'returns'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Returns & Exchanges</span>
          </button>

          <button
            id="policy-tab-shipping"
            onClick={() => setActiveTab('shipping')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'shipping'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Shipping & Delivery</span>
          </button>

          <button
            id="policy-tab-privacy"
            onClick={() => setActiveTab('privacy')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Privacy & Security</span>
          </button>

          <button
            id="policy-tab-faq"
            onClick={() => setActiveTab('faq')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeTab === 'faq'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-950 hover:bg-stone-50'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>FAQ Guide</span>
          </button>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-xs">
          {/* TAB 1: Terms of Use */}
          {activeTab === 'terms' && (
            <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  1. Terms of Use & User Agreement
                </h2>
                <p className="text-stone-400 text-xs mt-1">Last revised: September 2026</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 text-sm">1.1 Eligibility & Account Registration</h3>
                <p>
                  By accessing or utilizing the MYRA fashion portal (website or application), you warrant that you are at least 18 years of age or accessing under the supervision of a parent/legal guardian. You agree to provide accurate, up-to-date shipping credentials and contact numbers to ensure proper delivery execution.
                </p>

                <h3 className="font-bold text-stone-900 text-sm">1.2 Pricing & Product Representation</h3>
                <p>
                  All catalog prices are listed in your selected currency (Indian Rupees ₹ INR or US Dollars $ USD) inclusive of applicable goods and services taxes. While we take meticulous care to calibrate digital photography to true-to-life dye tones, slight natural hue variations may occur depending on your display panel technology.
                </p>

                <h3 className="font-bold text-stone-900 text-sm">1.3 Order Acceptance & Fraud Prevention</h3>
                <p>
                  Receipt of an order confirmation does not signify our final acceptance of your order. MYRA reserves the right to verify high-value transactions or cancel orders flagged by automated anti-fraud security protocols. In the unlikely event of stock unavailability after checkout, an instantaneous refund is issued.
                </p>

                <h3 className="font-bold text-stone-900 text-sm">1.4 Coupon Codes & Promotional Discounts</h3>
                <p>
                  Promotional codes (such as MYRA15 or FIRSTBUY) are non-transferable and may not be combined with corporate bulk purchase credits unless explicitly stipulated. Minimum cart subtotal thresholds apply prior to shipping calculations.
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Returns & Exchanges */}
          {activeTab === 'returns' && (
            <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  2. 30-Day Hassle-Free Return & Exchange Policy
                </h2>
                <p className="text-stone-400 text-xs mt-1">
                  Try in the comfort of your home with complete peace of mind
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                  <div className="text-2xl font-serif font-bold text-rose-600">30 Days</div>
                  <div className="text-xs font-bold text-stone-900">Window Period</div>
                  <div className="text-[11px] text-stone-500">From date of delivery</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                  <div className="text-2xl font-serif font-bold text-rose-600">Free</div>
                  <div className="text-xs font-bold text-stone-900">Doorstep Pickup</div>
                  <div className="text-[11px] text-stone-500">No courier fees charged</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-center space-y-1">
                  <div className="text-2xl font-serif font-bold text-rose-600">Instant</div>
                  <div className="text-xs font-bold text-stone-900">Refund Trigger</div>
                  <div className="text-[11px] text-stone-500">Processed upon pickup scan</div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-stone-900 text-sm">Conditions for Return:</h3>
                <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
                  <li>Garments must remain unwashed, unworn (other than brief size-fitting), with original brand tags intact.</li>
                  <li>Footwear must be tested indoors on clean surfaces and returned in the original branded shoe box.</li>
                  <li>Beauty and fragrance items must remain in their original sealed cellophane wrap for hygienic safety.</li>
                  <li>Intimates, earrings, and custom-stitched sarees are eligible for exchange only in the case of transit defects.</li>
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: Shipping & Delivery */}
          {activeTab === 'shipping' && (
            <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  3. Shipping & Delivery Guidelines
                </h2>
                <p className="text-stone-400 text-xs mt-1">
                  Speedy fulfillment powered by premier courier logistics
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-900 block font-bold">Free Shipping on Orders over $50 / ₹3,999</strong>
                    <span className="text-xs text-emerald-800">
                      Standard nominal delivery surcharge of $5 applies solely to single minor cart items below threshold.
                    </span>
                  </div>
                </div>

                <h3 className="font-bold text-stone-900 text-sm">Delivery Schedules:</h3>
                <div className="space-y-2 text-stone-600">
                  <p><strong>Tier 1 Metro Hubs:</strong> 24 to 48 Hours Express Dispatch</p>
                  <p><strong>Tier 2 & 3 Cities:</strong> 2 to 4 Business Days</p>
                  <p><strong>Rural / Remote Outposts:</strong> 4 to 6 Business Days via Postal Service</p>
                </div>

                <h3 className="font-bold text-stone-900 text-sm">Tamper-Proof Packaging:</h3>
                <p>
                  All luxury attire and jewelry shipments are dispatched in discreet, reinforced tamper-evident security containers with dual verification OTPs on delivery to ensure safety against porch piracy.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Privacy & Security */}
          {activeTab === 'privacy' && (
            <div className="space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  4. Privacy, Security & Cookie Policy
                </h2>
                <p className="text-stone-400 text-xs mt-1">
                  Your personal shopping preferences remain private and safe
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-stone-900 text-sm">4.1 Data Minimization Promise</h3>
                <p>
                  We collect strictly the bare minimal information necessary to fulfill your fashion shipments: recipient name, physical street address, contact phone number, and transaction audit trails. We never sell, lease, or monetize your contact records to third-party telemarketers.
                </p>

                <h3 className="font-bold text-stone-900 text-sm">4.2 Payment Tokenization</h3>
                <p>
                  We do NOT store your complete raw credit card numbers or banking CVVs on our web servers. All payment flows are handled through PCI-DSS Level 1 compliant payment gateways protected with 256-bit AES encryption.
                </p>

                <h3 className="font-bold text-stone-900 text-sm">4.3 Right to Erasure</h3>
                <p>
                  You retain full ownership of your profile. You may request complete deletion of your order logs, addresses, and wishlist history at any time by contacting privacy@myra-atelier.com.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: FAQ Guide */}
          {activeTab === 'faq' && (
            <div className="space-y-6">
              <div className="border-b border-stone-200 pb-4">
                <h2 className="text-xl font-serif font-bold text-stone-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-stone-400 text-xs mt-1">
                  Quick answers to common order, return, and sizing questions
                </p>
              </div>

              {/* Search FAQ */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search questions like 'pickup', 'refund', 'exchange'..."
                  className="w-full pl-9 pr-4 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Accordion */}
              <div className="space-y-3">
                {filteredFaqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-stone-200 rounded-2xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-4 text-left flex items-center justify-between gap-3 bg-white hover:bg-stone-50 cursor-pointer"
                      >
                        <span className="font-bold text-xs sm:text-sm text-stone-900">
                          {faq.q}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-4 pt-1 bg-stone-50/70 text-xs sm:text-sm text-stone-600 border-t border-stone-100 leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
