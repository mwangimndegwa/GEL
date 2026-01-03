
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
    heading: 'Terms of Use',
    subheading: 'Effective Date: January 2026',
    body: `Welcome to the Global Educated Leaders' website. By accessing or using our website, you agree to comply with and be bound by the following Terms of Use. Please review them carefully.`
  },
  {
    heading: '1. Acceptance of Agreement',
    body: `By using this site, you signify your agreement to all terms, conditions, and notices contained or referenced herein. If you do not agree to these terms, please do not use this site. We reserve the right to update or revise these Terms of Use at any time.`
  },
  {
    heading: '2. Intellectual Property Rights',
    body: `All content on this website, including text, graphics, logos, icons, and images, is the property of Global Educated Leaders (GEL) or its content suppliers and is protected by international copyright and trademark laws. Unauthorized use of any content may violate copyright, trademark, and other laws.`
  },
  {
    heading: '3. Use of Site Content',
    body: `Global Educated Leaders grants you a limited, non-exclusive, non-transferable license to access and use the site for personal, non-commercial, and educational purposes. You may not modify, publish, transmit, participate in the transfer or sale of, or create derivative works from any of the content, in whole or in part, without prior written permission.`
  },
  {
    heading: '4. Limitation of Liability',
    body: `The information on this site is provided on an "as is" and "as available" basis. Global Educated Leaders makes no warranties, expressed or implied, regarding the accuracy or reliability of the content. To the fullest extent permitted by law, Global Educated Leaders shall not be liable for any damages of any kind arising from the use of this site, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.`
  },
  {
    heading: '5. Third-Party Links',
    body: `This website may contain links to third-party websites. Global Educated Leaders is not responsible for the content, accuracy, or opinions expressed in such websites. Inclusion of any linked website on our site does not imply approval or endorsement of the linked site by Global Educated Leaders.`
  },
  {
    heading: '6. User Conduct',
    body: `You agree to use the site only for lawful purposes. You are prohibited from posting on or transmitting through the site any material that is infringing, threatening, false, misleading, inflammatory, libelous, invasive of privacy, or otherwise objectionable.`
  },
  {
    heading: '7. Indemnification',
    body: `You agree to defend, indemnify, and hold harmless Global Educated Leaders, its officers, directors, employees, and agents, from and against any claims, actions, or demands, including without limitation reasonable legal and accounting fees, alleging or resulting from your use of the site or your breach of these Terms of Use.`
  },
  {
    heading: '8. Governing Law',
    body: `These Terms of Use shall be governed by and construed in accordance with the laws of Kenya, without regard to its conflict of law provisions.`
  },
  {
    heading: '9. Contact Information',
    body: `For questions regarding these Terms of Use, please contact us at `,
    email: 'info@globaleducatedleaders.org'
  }
];

export default function TermsOfUse() {
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
              <div className="text-lg md:text-xl text-gray-800 font-normal leading-relaxed max-w-3xl">
                {section.body}
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
