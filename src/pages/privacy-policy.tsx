import React, { useRef, useEffect } from 'react';

function useFadeInOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < windowHeight - 60) {
        node.classList.add('fade-in-up');
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return ref;
}

const sections = [
  {
    heading: 'Privacy Policy',
    subheading: 'Effective Date: January 2026',
    body: `Global Educated Leaders is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or engage with our programs.`
  },
  {
    heading: '1. Information We Collect',
    body: (
      <>
        <div>We collect information that you voluntarily provide to us, such as:</div>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li>
            <strong>Contact Information:</strong> Name, email address, phone number, and mailing address (e.g., when signing up for newsletters or applying to GEL).
          </li>
          <li>
            <strong>Payment Information:</strong> Credit card or banking details provided securely through third-party processors for donations.
          </li>
          <li>
            <strong>Technical Data:</strong> IP addresses, browser types, and cookies to improve website functionality and user experience.
          </li>
        </ol>
      </>
    )
  },
  {
    heading: '2. How We Use Your Information',
    body: (
      <>
        <div>GEL uses the collected information for the following purposes:</div>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li>To process your applications for programs like BELM.</li>
          <li>To send updates, newsletters, and marketing communications (which you can opt-out of at any time).</li>
          <li>To process donations and provide tax receipts.</li>
          <li>To analyze website traffic and improve our digital presence.</li>
        </ol>
      </>
    )
  },
  {
    heading: '3. Data Sharing and Disclosure',
    body: (
      <>
        <div>Global Educated Leaders will never sell, rent, or trade your personal information to third parties for their marketing purposes. We may share information with:</div>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li><strong>Service Providers:</strong> Third parties who perform services on our behalf (e.g., email platforms, payment processors).</li>
          <li><strong>Legal Requirements:</strong> If required by law, such as to comply with a subpoena or similar legal process.</li>
        </ol>
      </>
    )
  },
  {
    heading: '4. International Data Transfers',
    body: `As an international organization, your data may be transferred to and maintained on servers located outside of your state, province, or country. We take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy, adhering to GDPR (General Data Protection Regulation) and other relevant standards.`
  },
  {
    heading: '5. Data Security',
    body: `We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
  },
  {
    heading: '6. Your Rights',
    body: (
      <>
        <div>Depending on your location, you may have the right to:</div>
        <ol className="list-decimal pl-6 mt-2 space-y-2">
          <li>Access the personal data we hold about you.</li>
          <li>Request the correction or deletion of your personal data.</li>
          <li>Object to the processing of your data for direct marketing.</li>
        </ol>
      </>
    )
  },
  {
    heading: '7. Cookies',
    body: `Our website uses "cookies" to enhance your experience. You can choose to set your web browser to refuse cookies, or to alert you when cookies are being sent. Note that some parts of the site may not function properly if cookies are disabled.`
  },
  {
    heading: '8. Changes to This Policy',
    body: `Global Educated Leaders has the discretion to update this privacy policy at any time. We encourage users to frequently check this page for any changes.`
  },
  {
    heading: '9. Contacting Us',
    body: `If you have any questions about this Privacy Policy or our treatment of your data, please contact us at:`,
    email: 'info@globaleducatedleaders.org'
  }
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {sections.map((section, idx) => {
          const ref = useFadeInOnScroll();
          if (idx === 0) {
            // Main title section
            return (
              <div ref={ref} key={section.heading} className="opacity-0 translate-y-8 transition-all duration-700 mb-12">
                <h1 className="text-5xl font-extrabold tracking-tight text-blue-900 mb-4 leading-tight" style={{fontFamily:'inherit'}}>{section.heading}</h1>
                <div className="text-lg font-medium text-gray-700 mb-2">{section.subheading}</div>
                <div className="text-xl text-gray-800 font-normal leading-relaxed max-w-3xl mb-2">{section.body}</div>
              </div>
            );
          }
          return (
            <div ref={ref} key={section.heading} className="opacity-0 translate-y-8 transition-all duration-700 mb-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-3 mt-8 tracking-tight uppercase leading-tight" style={{fontFamily:'inherit'}}>{section.heading}</h2>
              <div className="text-lg md:text-xl text-gray-800 font-normal leading-relaxed max-w-3xl whitespace-pre-line">
                {typeof section.body === 'string' ? section.body : section.body}
                {section.email && (
                  <a href={`mailto:${section.email}`} className="text-blue-800 underline ml-1">{section.email}</a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`
        .fade-in-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}
