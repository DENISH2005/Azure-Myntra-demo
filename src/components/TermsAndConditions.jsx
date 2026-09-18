import { Shield, RotateCcw, Truck, FileText, Lock, HelpCircle } from 'lucide-react';

export default function TermsAndConditions() {
  const sections = [
    {
      id: 'general',
      title: '1. General Terms & Conditions of Use',
      icon: FileText,
      content: `Welcome to MYRA Atelier & Studio ("Platform", "we", "our", or "us"). By accessing or using our website, purchasing products, or engaging with our customer care concierges, you agree to be bound by these Terms & Conditions. If you do not accept these terms, please do not use the Platform. All designs, catalog imagery, typography, and branded identifiers are exclusive proprietary assets of MYRA Studios.`
    },
    {
      id: 'returns',
      title: '2. 14-Day Hassle-Free Returns & Exchange Policy',
      icon: RotateCcw,
      content: `We offer a seamless 14-day return and exchange window from the date of package delivery. 
      • Items must be unworn, unwashed, and undamaged with all original designer tags, safety seals, and packaging intact.
      • Innerwear, intimate apparel, customized alterations, and opened beauty / fragrance products are strictly non-returnable due to hygiene and safety standards.
      • Doorstep reverse pickups are complimentary for your first exchange per order.
      • Refunds are credited back to the original payment source within 3–5 business days following quality verification at our fulfillment hub.`
    },
    {
      id: 'shipping',
      title: '3. Shipping, Transit & Express Delivery Policy',
      icon: Truck,
      content: `• Standard Delivery: Ships within 24 hours and delivers within 2–4 business days across metropolitan areas (4–6 business days for regional zones).
      • Express Priority: Next-day delivery available for select urban postal codes.
      • Complimentary standard shipping applies on all eligible cart totals exceeding $50 (or ₹999).
      • Real-time SMS and email tracking links are activated immediately upon courier dispatch.`
    },
    {
      id: 'pricing',
      title: '4. Pricing, Currency Conversion & Secure Payments',
      icon: Lock,
      content: `• All prices displayed are inclusive of statutory goods and services taxes (GST / VAT).
      • We support dynamic currency toggling between USD ($) and INR (₹) at standard market benchmark rates.
      • Transactions are guarded with end-to-end 256-bit SSL encryption. We accept Visa, MasterCard, American Express, Apple Pay, Google Pay, UPI, and Cash on Delivery (COD) for eligible domestic zip codes.`
    },
    {
      id: 'privacy',
      title: '5. Privacy, Data Protection & User Rights',
      icon: Shield,
      content: `Your privacy is sacred to us. MYRA does not sell, lease, or monetize your personal identity, contact details, or purchase histories with third-party advertising brokers. Contact data is utilized solely for order fulfillment, dispatch updates, and personalized styling recommendations when opt-in consent is provided.`
    },
    {
      id: 'contact',
      title: '6. Customer Support & Dispute Resolution',
      icon: HelpCircle,
      content: `For any inquiries regarding your orders, product sizing, or terms interpretation, reach our dedicated concierge at care@myrastudio.com or call our toll-free support line at 1-800-419-MYRA (9 AM – 9 PM IST, Monday through Sunday).`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="border-b border-stone-200 pb-6 mb-8 text-center sm:text-left">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold uppercase tracking-wider mb-3">
          <Shield className="w-3.5 h-3.5 text-rose-600" />
          <span>Legal & Consumer Protection</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-stone-950">
          Terms of Service & Return Policy
        </h1>
        <p className="text-xs sm:text-sm text-stone-500 mt-2">
          Effective Date: January 1, 2026 • Last updated for consumer clarity and transparency
        </p>
      </div>

      {/* Accordion / Content Blocks */}
      <div className="space-y-6">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <div
              key={sec.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-xs"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-rose-600" />
                </div>
                <h2 className="text-base sm:text-lg font-bold text-stone-900">
                  {sec.title}
                </h2>
              </div>
              <div className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-0 sm:pl-12 whitespace-pre-line">
                {sec.content}
              </div>
            </div>
          );
        })}
      </div>

      {/* Summary Box */}
      <div className="mt-10 p-6 rounded-2xl bg-rose-50/70 border border-rose-200/80 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-rose-950">
            Have a question about our policies or your order?
          </h3>
          <p className="text-xs text-rose-800 mt-0.5">
            Our stylist and client care team is available 7 days a week to assist you.
          </p>
        </div>
        <a
          href="mailto:care@myrastudio.com"
          className="px-4 py-2 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-xs"
        >
          Contact Support Desk
        </a>
      </div>
    </div>
  );
}
