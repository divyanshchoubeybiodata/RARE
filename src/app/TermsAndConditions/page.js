import Link from 'next/link';
import React from 'react';

function TermsAndConditions() {
  return (
    <div className='mt-24 md:mt-40 px-4 md:px-8 lg:px-16'>
      <h1 className='text-4xl font-bold mb-6'>Terms and Conditions</h1>

      <section className='mb-8'>
        <p className='text-lg'>
          By using the services of Rare Professions, you agree to the following Terms and Conditions:
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Accuracy of Information</h2>
        <p className='text-lg'>
          You are responsible for providing accurate, complete, and up-to-date information about yourself during the application and recruitment process. Rare Professions is not liable for any consequences arising from inaccurate, incomplete, or misleading information provided by you. You agree to promptly update your information if there are any changes or inaccuracies.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Job Suitability</h2>
        <p className='text-lg'>
          Rare Professions makes reasonable efforts to match candidates with suitable job opportunities based on the information provided during the recruitment process, as well as the requirements and specifications provided by our clients and potential employers. However, we make no guarantees regarding job placements or employment opportunities, as the final hiring decision rests solely with the employer.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Confidentiality</h2>
        <p className='text-lg'>
          You agree to maintain the confidentiality of any proprietary, sensitive, or confidential information disclosed to you during the recruitment process or in connection with potential job opportunities. This includes, but is not limited to, trade secrets, business strategies, financial information, and any other non-public information about Rare Professions, our clients, or potential employers. You shall not disclose or use such information for any purpose other than the intended purpose of the recruitment process, unless explicitly authorized in writing.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Intellectual Property</h2>
        <p className='text-lg'>
          All intellectual property rights, including copyrights, trademarks, trade secrets, patents, and other proprietary rights related to Rare Professions services, materials, website, software, databases, and content, remain the property of Rare Professions or its licensors. You may not reproduce, distribute, modify, create derivative works from, or otherwise exploit any part of our intellectual property without our prior written consent.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Limitation of Liability</h2>
        <p className='text-lg'>
          In no event shall Rare Professions, its affiliates, directors, officers, employees, or agents be liable for any indirect, incidental, special, consequential, punitive, or exemplary damages arising out of or in connection with the use of our services, including but not limited to lost profits, data, business interruption, or any other commercial damages or losses, regardless of the cause of action, whether in contract, tort, or otherwise, even if advised of the possibility of such damages.
        </p>
        <p className='text-lg mt-4'>
          Our total liability to you for any direct damages arising out of or related to your use of our services shall not exceed the fees paid by you to Rare Professions for the services in question during the twelve (12) months preceding the event giving rise to the claim.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Indemnification</h2>
        <p className='text-lg'>
          You agree to indemnify, defend, and hold harmless Rare Professions, its affiliates, directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, costs, and expenses, including reasonable attorney&apos;s fees, arising from or related to your breach of these Terms and Conditions, your misuse of our services, or your violation of any applicable laws, regulations, or third-party rights.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Governing Law and Jurisdiction</h2>
        <p className='text-lg'>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of laws principles. Any dispute arising out of or in connection with these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Modifications</h2>
        <p className='text-lg'>
          Rare Professions reserves the right to modify or update these Terms and Conditions and our Privacy Policy at any time, without prior notice. The most current versions will be posted on our website, and your continued use of our services after any modifications constitutes your acceptance of the updated terms.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Entire Agreement</h2>
        <p className='text-lg'>
          These Terms and Conditions, together with our Privacy Policy, constitute the entire agreement between you and Rare Professions concerning the use of our services and supersede all prior or contemporaneous agreements, representations, warranties, or understandings, whether written or oral.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Severability</h2>
        <p className='text-lg'>
          If any provision of these Terms and Conditions is found to be invalid, illegal, or unenforceable, the remaining provisions shall remain in full force and effect, and the invalid, illegal, or unenforceable provision shall be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Termination</h2>
        <p className='text-lg'>
          Rare Professions reserves the right to terminate or suspend your access to our services at any time, without notice, for any reason, including but not limited to a violation of these Terms and Conditions or our Privacy Policy.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Assignment</h2>
        <p className='text-lg'>
          You may not assign or transfer your rights or obligations under these Terms and Conditions without our prior written consent. Rare Professions may assign or transfer its rights and obligations under these Terms and Conditions without restriction or notice.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Force Majeure</h2>
        <p className='text-lg'>
          Rare Professions shall not be liable for any delay or failure to perform its obligations under these Terms and Conditions if such delay or failure is caused by circumstances beyond its reasonable control, including but not limited to acts of God, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation facilities, fuel, energy, labor, or materials.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Relationship</h2>
        <p className='text-lg'>
          Nothing in these Terms and Conditions shall be construed as creating an employment, partnership, joint venture, or agency relationship between you and Rare Professions. You are solely responsible for paying all applicable taxes and statutory deductions related to any compensation or payments received from Rare Professions or our clients.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Notices</h2>
        <p className='text-lg'>
          Any notice or communication required or permitted under these Terms and Conditions shall be in writing and shall be deemed to have been duly given if delivered personally, sent by reputable overnight courier, or emailed to the other party at the address or email address provided during the registration or application process.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Waiver</h2>
        <p className='text-lg'>
          The failure of Rare Professions to exercise or enforce any right or provision of these Terms and Conditions shall not constitute a waiver of such right or provision. Any waiver of any provision of these Terms and Conditions must be in writing and signed by an authorized representative of Rare Professions.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Survival</h2>
        <p className='text-lg'>
          The provisions of these Terms and Conditions relating to intellectual property rights, confidentiality, indemnification, limitation of liability, and any other provisions that by their nature should survive termination, shall survive any termination or expiration of these Terms and Conditions.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Headings</h2>
        <p className='text-lg'>
          The section headings in these Terms and Conditions are for convenience only and shall not be used in the interpretation or construction of these Terms and Conditions.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Language</h2>
        <p className='text-lg'>
          These Terms and Conditions have been drafted in the English language, and any translation provided is for convenience only. In the event of any conflict or inconsistency between the English version and any translated version, the English version shall prevail.
        </p>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold mb-4'>Contact Information</h2>
        <p className='text-lg'>
          If you have any questions, concerns, or requests regarding these Terms and Conditions or our Privacy Policy, please contact us at:
        </p>
        <p className='text-lg mt-2'>
          Rare Professions
        
          <br />
          <Link href={'mailto:info@rareprofessions.com'} target='_blank'>
          info@rareprofessions.com
          </Link>
          <br />
          <Link href={'tel:+918962531280'} target='_blank'>
          +918962531280
          </Link>
        </p>
      </section>

      <section className='mb-8'>
        <p className='text-lg'>
          By using the services of Rare Professions, you acknowledge that you have read, understood, and agreed to these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you should not use our services.
        </p>
      </section>
    </div>
  );
}

export default TermsAndConditions;
