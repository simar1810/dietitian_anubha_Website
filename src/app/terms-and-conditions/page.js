"use client";

import Link from "next/link";

const TermsAndConditionsPage = () => {
  return (
    <section className="bg-[#FAFAFA] min-h-screen py-12 px-6 sm:px-10 lg:px-20 xl:px-32 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-2xl p-6 sm:p-10 lg:p-12 border border-gray-100">
        <div className="text-center mb-10">
          <h1 className="w-full mx-auto text-3xl sm:text-4xl font-bold text-[#3D3D3D] mb-3 border-b-4 border-[#009048]">
            Terms &amp; Conditions
          </h1>
          <p className="text-[#494848] text-sm sm:text-base font-semibold">
            Master Website, Mobile Application &amp; EULA Agreement
          </p>
          <p className="text-[#494848] text-sm sm:text-base mt-2">
            Dietitian Anubha |{" "}
            <a
              href="https://www.dietitiananubha.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009048] hover:underline"
            >
              www.dietitiananubha.com
            </a>
            {" / "}
            <a
              href="https://www.dietitiananubha.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#009048] hover:underline"
            >
              www.dietitiananubha.in
            </a>
            {" "}
            | Android &amp; iOS Application
          </p>
          <p className="text-[#494848] text-xs sm:text-sm mt-2">
            Last updated: <strong>01-04-2026</strong>
          </p>
        </div>

        <div className="space-y-6 text-[#494848] leading-relaxed text-sm sm:text-base">
          <p>
            This Master Website, Mobile Application and End User License Agreement
            (&quot;Agreement&quot;) is made and issued by Clinical Dietitian Anubha Taparia
            (&quot;Dietitian&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;) and governs the use of the
            website, mobile application, digital tools, online services, offline support made
            available through digital channels, and all associated content, communications,
            consultations, plans, materials, and interactions, whether accessed through Android,
            iOS, website, email, WhatsApp, video meeting platforms, telephone, or any other
            electronic medium.
          </p>
          <p>
            By downloading, installing, accessing, browsing, registering, signing in, clicking
            &quot;I Agree&quot;, submitting forms, making payment, opening messages, joining a
            consultation, or otherwise using the website, the application, or any communication
            channel of ours, the user (&quot;User&quot;, &quot;you&quot;, &quot;your&quot;) expressly acknowledges and
            agrees to be bound by this Agreement.
          </p>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            1. Definitions
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">1.1. App</h3>
              <p>
                means the Android and iOS mobile application, including updates, patches,
                upgrades, plugins, and any related software, interface, or functionality provided
                by us.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">1.2. Services</h3>
              <p>
                means nutrition counselling, diet planning, wellness support, follow-up
                assistance, educational material, care coordination, and other non-medical services
                offered through the website, app, or communication channels.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">1.3. Communication Channels</h3>
              <p>
                means WhatsApp, email, SMS, telephone, video conferencing tools, website forms,
                push notifications, in-app messaging, and any similar electronic or digital
                channel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">1.4. User Content</h3>
              <p>
                means any information, data, reports, photographs, messages, files, measurements,
                or other material submitted by the User.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">1.5. Sensitive Information</h3>
              <p>
                means health-related information, medical history, medication details, allergies,
                laboratory reports, biometric or lifestyle details, and any other personal
                information furnished for service delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">1.6. Store Platform</h3>
              <p>
                means any third-party app marketplace or distributor, including Apple App Store and
                Google Play Store, through which the App may be downloaded or updated.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            2. Scope and nature of services
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">2.1. Nutrition-based services only</h3>
              <p>
                The Services are strictly nutrition-based and wellness-oriented. They are not
                medical services, and nothing in this Agreement shall be construed as medical
                diagnosis, treatment, prescription, prognosis, therapy, emergency care, or a
                substitute for a registered medical practitioner.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">2.2. No replacement for doctor consultation</h3>
              <p>
                The User must consult a qualified doctor, specialist, or hospital for any disease,
                symptom, emergency, complication, abnormal report, medication query, pregnancy
                complication, mental health concern, or any condition requiring medical evaluation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">2.3. No emergency use</h3>
              <p>
                The App, website, and communication channels are not intended for emergencies. The
                User shall immediately seek emergency medical assistance in case of chest pain,
                breathlessness, fainting, severe weakness, allergic reaction, uncontrolled bleeding,
                seizures, suicidal thoughts, or any other urgent condition.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">2.4. Professional judgement</h3>
              <p>
                We may refuse, postpone, modify, or discontinue any plan or communication if we
                reasonably believe that the User requires medical evaluation, there is incomplete
                disclosure, or continued nutritional intervention would be unsafe or inappropriate.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            3. Acceptance, e-contracts, and electronic consent
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">3.1. Electronic acceptance</h3>
              <p>
                The User agrees that acceptance through clicking, tapping, signing digitally,
                checking a box, submitting an online form, paying online, sending a WhatsApp
                message, sending an email, or continuing to use the App or website constitutes valid
                acceptance of this Agreement and related notices to the fullest extent permitted by
                law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">3.2. Electronic records</h3>
              <p>
                The User consents to the use of electronic records, electronic acknowledgements,
                electronically stored forms, and digital communications as valid evidence of
                instructions, consent, and receipt, to the extent permitted by applicable Indian law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">3.3. English language prevails</h3>
              <p>
                This Agreement and all related notices shall be in the English language. If any
                translation is provided, the English version shall prevail in case of inconsistency,
                ambiguity, or dispute.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">3.4. Entire agreement by use</h3>
              <p>
                By using the website or App, the User confirms that the User has read, understood,
                and agreed to this Agreement in full and is legally bound by it.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            4. End user license (EULA) for mobile application
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.1. Limited license</h3>
              <p>
                Subject to continuous compliance with this Agreement, we grant the User a personal,
                limited, revocable, non-exclusive, non-transferable, non-sublicensable license to
                install and use the App on one or more personally controlled Android or iOS devices
                solely for lawful, private, and non-commercial access to the Services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.2. No ownership transfer</h3>
              <p>
                The App is licensed, not sold. All rights, title, and interest in and to the App,
                underlying code, interface, design, logic, database structures, algorithms,
                workflows, content, and trademarks remain with us or our licensors.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.3. Updates and modifications</h3>
              <p>
                We may deploy updates, corrections, security patches, feature changes, or
                discontinuation of features without prior notice where reasonably necessary.
                Continued use after such update shall constitute acceptance of the updated version.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.4. App store terms</h3>
              <p>
                If the App is downloaded through Apple App Store, Google Play Store, or any other
                Store Platform, the User shall also comply with the relevant store terms. This
                Agreement supplements, and does not override, any mandatory store terms applicable
                to the distribution of the App.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.5. Device permissions</h3>
              <p>
                To the extent features are enabled, the App may request access to device
                permissions such as notifications, camera, photos, microphone, storage, calendar,
                health inputs, or location. The User may manage permissions through device settings,
                but disabling permissions may restrict functionality and we shall not be liable for
                such restriction.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.6. Push notifications</h3>
              <p>
                The User consents to receive push notifications, in-app alerts, reminders, and
                service updates, which may include appointment reminders, follow-up prompts, plan
                updates, payment notices, and policy communications.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.7. User account security</h3>
              <p>
                The User is solely responsible for maintaining the confidentiality of login
                credentials, OTPs, passwords, and device access. Any activity conducted through the
                User&apos;s account shall be presumed authorized unless promptly disputed and verified
                otherwise.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.8. Prohibited app use</h3>
              <p>
                The User shall not copy, modify, reverse engineer, decompile, disassemble, scrape,
                attempt unauthorized access, interfere with security features, upload malware,
                automate misuse, or use the App for unlawful, abusive, defamatory, or harmful purposes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">4.9. Reliance on mobile functionality</h3>
              <p>
                The App is provided on an as-is and as-available basis. We do not warrant
                uninterrupted connectivity, compatibility with all devices, battery behavior,
                network stability, operating system changes, store availability, or error-free
                performance.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            5. Website, website-to-app, and digital communication terms
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">5.1. Unified service ecosystem</h3>
              <p>
                This Agreement applies equally to the website, app, booking pages, intake forms,
                dashboards, emails, WhatsApp, telephone calls, video consultations, and any other
                electronic or digital interaction used for service delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">5.2. Informal communication disclaimer</h3>
              <p>
                Any suggestion, reminder, message, voice note, or clarification sent over WhatsApp,
                email, SMS, social platforms, or other messaging tools is provided for convenience
                only. Such communication may be incomplete, delayed, forwarded, misread, or viewed
                out of context. We shall not be liable for any loss arising from reliance on an
                incomplete, misunderstood, or out-of-sequence communication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">5.3. No override by informal channels</h3>
              <p>
                No informal message shall override a formal plan, written update, or latest
                instructions issued by us. In the event of inconsistency, the latest written
                instruction from us shall prevail.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">5.4. Communication monitoring and response</h3>
              <p>
                The User acknowledges that response times may vary and that immediate replies are
                not guaranteed on any channel. The User shall not rely on any assumed response time
                for medical decisions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">5.5. Third-party platforms</h3>
              <p>
                The User understands that WhatsApp, email providers, video platforms, and similar
                tools are third-party services controlled by their respective providers. We do not
                control their uptime, encryption standards, outages, storage behavior, or policy
                changes.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            6. Video consultations, tele-consults, and offline consultation support
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">6.1. Video consultation limitations</h3>
              <p>
                Video consultations conducted through Zoom, Google Meet, WhatsApp video,
                Microsoft Teams, or any other platform are subject to internet quality, device
                performance, background noise, camera quality, network interruptions, and platform
                errors. We shall not be responsible for any missed detail, interruption, or
                inability to complete a consultation due to such issues.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">6.2. User environment</h3>
              <p>
                The User is responsible for joining consultations in a private, quiet, and safe
                environment and for ensuring that the device, headset, camera, microphone, and
                internet connection are functioning properly.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">6.3. Offline consultation support</h3>
              <p>
                Where an offline appointment or physical consultation is offered, the User shall
                comply with appointment time, location rules, entry requirements, and any safety or
                operational instructions. We shall not be liable for delays, inconvenience, or
                disruptions caused by venue conditions, traffic, third-party premises issues, or
                force majeure.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">6.4. No guarantee of immediate review</h3>
              <p>
                The User acknowledges that reports, photographs, or messages sent before, during,
                or after a consultation may not be reviewed instantly and should not be treated as
                urgent medical triage.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            7. User representations, warranties, and disclosures
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">7.1. Truthful information</h3>
              <p>
                The User represents and warrants that all information supplied is true, accurate,
                current, and complete.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">7.2. Mandatory disclosure</h3>
              <p>
                The User must disclose pregnancy, lactation, age, major illnesses, medications,
                allergies, surgeries, digestive issues, blood sugar issues, thyroid disorders,
                eating disorder history, fertility treatment, and any other condition that may impact
                the suitability of a nutrition plan.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">7.3. Ongoing duty to update</h3>
              <p>
                The User shall promptly inform us of any material change in health condition,
                medication, symptoms, lab findings, hospitalization, or doctor advice that may
                affect the Services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">7.4. Minors and dependents</h3>
              <p>
                Where services are used for a minor or dependent, the parent, guardian, or lawful
                representative confirms authority to provide information and consent on behalf of
                such person, subject to law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">7.5. Medical escalation</h3>
              <p>
                If symptoms worsen or a medical condition is suspected, the User shall immediately
                seek medical care and not rely solely on nutrition support.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            8. Privacy, data protection, and confidentiality
          </h2>
          <p className="text-sm sm:text-base text-[#3D3D3D]">
            A standalone summary of our privacy practices is also published in our{" "}
            <Link href="/privacy-policy" className="text-[#009048] hover:underline">
              Privacy Policy
            </Link>
            . The clauses below form part of this Agreement.
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.1. Data processing framework</h3>
              <p>
                We process digital personal data in accordance with applicable Indian law, including
                the Information Technology Act, 2000, the Information Technology (Reasonable Security
                Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011,
                and the Digital Personal Data Protection Act, 2023, as applicable from time to time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.2. Data collected</h3>
              <p>
                We may collect identity data, contact data, appointment data, health history,
                medication details, laboratory reports, body measurements, dietary preferences,
                lifestyle details, communication records, payment details, and other information
                voluntarily shared for service delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.3. Purpose of processing</h3>
              <p>
                Such data is used for onboarding, consultation, nutrition assessment, plan creation,
                follow-up support, record keeping, service improvement, quality assurance,
                communication, payment processing, grievance handling, compliance, and lawful
                business purposes.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.4. Consent and authorization</h3>
              <p>
                By using the website, App, or Communication Channels, the User consents to the
                collection, storage, use, transmission, and processing of information for the
                purposes described herein.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.5. Sharing and disclosure</h3>
              <p>
                We do not sell personal data. Disclosure may occur only on a need-to-know basis to
                service providers, professional advisors, payment processors, hosting vendors,
                communication vendors, or authorities where required by law, court order, regulatory
                direction, or lawful request.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.6. Security safeguards</h3>
              <p>
                We adopt reasonable technical and organizational safeguards to protect data;
                however, no internet-based system, device, app, message platform, or cloud storage is
                completely immune from risk. The User acknowledges inherent risks of digital
                communication.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.7. Messaging platform risk</h3>
              <p>
                If the User sends Sensitive Information through WhatsApp, email, SMS, or other
                third-party platforms, the User acknowledges that such platforms are not
                controlled by us and may carry their own privacy, delivery, retention, and security
                risks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.8. Record retention</h3>
              <p>
                We may retain records for as long as necessary for service, safety, legal, tax,
                audit, or dispute purposes, and may retain electronic records in accordance with
                law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.9. Grievance</h3>
              <p>
                Any privacy concern may be raised through the official contact details published on
                the website. We will address such concerns in a reasonable manner and within a
                reasonable time.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">8.10. Confidentiality of clinical discussion</h3>
              <p>
                We shall maintain reasonable confidentiality over information shared by the User,
                subject always to lawful disclosure obligations, safety concerns, internal operational
                need, and the limitations of digital communication channels described in this
                Agreement.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            9. Intellectual property
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">9.1. Ownership</h3>
              <p>
                All Content, including but not limited to plans, formats, methods, templates,
                worksheets, reports, text, graphics, video, audio, design, logos, and trademarks, is
                owned by us or our licensors and is protected to the fullest extent available under
                applicable law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">9.2. Restricted use</h3>
              <p>
                No Content may be copied, duplicated, distributed, published, resold, translated,
                modified, reverse engineered, adapted, or used to create derivative works without our
                prior written consent.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">9.3. Personal use only</h3>
              <p>
                Any materials provided to the User are for the User&apos;s personal use only and may
                not be shared publicly, commercially, or with third parties except for legitimate
                medical review by a doctor with appropriate disclosure and consent, where required.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            10. Fees, payment, renewal, and refunds
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.1. Payment terms</h3>
              <p>
                Fees shall be payable in advance or as otherwise displayed or communicated. Payment
                through the website, app, payment gateway, UPI, card, bank transfer, or other
                permitted modes shall be deemed valid confirmation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.2. No automatic refund right</h3>
              <p>
                Except where expressly stated in writing by us, all fees once paid are
                non-refundable and non-transferable.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.3. Services deemed rendered</h3>
              <p>
                A consultation, plan, report, onboarding, or digital deliverable shall be deemed
                rendered once prepared, sent, booked, started, or made available, whether or not
                the User fully utilises it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.4. Missed appointments and no-shows</h3>
              <p>
                If the User misses, delays, or fails to attend a scheduled consultation or follow-up,
                the fee may be forfeited at our discretion, subject to the applicable booking terms
                communicated at the time of booking.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.5. Chargebacks</h3>
              <p>
                The User agrees not to initiate any wrongful chargeback, reversal, or payment dispute
                without first giving us a reasonable opportunity to resolve the issue. Wrongful
                chargebacks may result in suspension of Services and recovery of associated costs.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.6. Taxes and charges</h3>
              <p>
                Applicable taxes, bank charges, gateway fees, and platform charges may be
                non-refundable to the extent permitted by law.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">10.7. No guarantee of commercial success</h3>
              <p>
                The User acknowledges that the Services do not guarantee any particular health,
                cosmetic, aesthetic, fertility, or commercial outcome.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            11. User conduct and prohibited activities
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">11.1. Lawful use only</h3>
              <p>
                The User shall use the website, App, and Services only for lawful purposes and in
                compliance with this Agreement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">11.2. Prohibited conduct</h3>
              <p>
                The User shall not harass, threaten, abuse, defame, impersonate, misrepresent, spam,
                attempt to hack, scrape, overload, disrupt, or otherwise misuse the website, App,
                staff, or Services.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">11.3. No misleading medical reliance</h3>
              <p>
                The User shall not represent nutrition guidance as medical prescription, nor use it
                to delay necessary medical evaluation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">11.4. Security breach notification</h3>
              <p>
                If the User suspects account misuse, unauthorized access, or compromise of
                credentials, the User shall notify us immediately.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            12. Limitation of liability
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">12.1. No consequential liability</h3>
              <p>
                To the fullest extent permitted by law, we shall not be liable for indirect,
                incidental, special, consequential, exemplary, punitive, or remote losses, including
                loss of profit, data, business, goodwill, opportunity, or health outcome.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">12.2. Cap on liability</h3>
              <p>
                Our total aggregate liability for any claim arising out of or relating to the
                website, App, Services, or communications shall not exceed the amount actually paid
                by the User for the specific Service giving rise to the claim.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">12.3. Reliance on user input</h3>
              <p>
                We shall not be liable for any outcome arising from incomplete, inaccurate, delayed,
                or misleading information supplied by the User.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">12.4. Third-party platform failures</h3>
              <p>
                We shall not be liable for any failure caused by Apple, Google, WhatsApp, email
                providers, video platforms, payment gateways, internet service providers, hosting
                providers, or any third-party service beyond our reasonable control.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">12.5. Health-related risks</h3>
              <p>
                The User acknowledges that following a nutrition plan may not be suitable in all
                cases and that adverse events may occur if the User has undisclosed conditions, uses
                incompatible medication, or fails to seek timely medical care.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            13. Indemnity
          </h2>
          <p>
            The User shall indemnify, defend, and hold harmless the Dietitian, our personnel,
            consultants, contractors, agents, affiliates, and representatives from and against any
            and all claims, demands, actions, proceedings, liabilities, damages, losses, fines,
            penalties, costs, and expenses (including reasonable legal fees) arising out of or
            relating to:
          </p>
          <ul className="list-none space-y-2 pl-0">
            <li>(a) breach of this Agreement</li>
            <li>(b) false, incomplete, misleading, or suppressed health information</li>
            <li>(c) misuse of the website, App, or Services</li>
            <li>(d) unauthorized sharing of Content</li>
            <li>(e) violation of law, rights of third parties, or platform terms</li>
            <li>(f) use of nutrition advice in place of medical care</li>
            <li>(g) wrongful chargeback, fraud, or abuse of payment systems</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            14. Suspension, termination, and access control
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">14.1. Right to suspend or terminate</h3>
              <p>
                We may suspend, restrict, limit, or terminate the User&apos;s access to the website,
                App, accounts, consultation slots, or Services at any time if the User breaches this
                Agreement, behaves abusively, supplies false information, uses the Services
                unsafely, or fails to pay amounts due.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">14.2. Effect of termination</h3>
              <p>
                Upon termination, the User&apos;s right to use the App and Services ceases immediately,
                but accrued obligations, payment liabilities, indemnity, confidentiality,
                intellectual property, limitation of liability, and jurisdiction clauses shall
                survive.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">14.3. Data after termination</h3>
              <p>
                We may retain records and data as required by law or for legitimate business
                purposes, including safety, audit, dispute resolution, and legal defense.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            15. Force majeure
          </h2>
          <p>
            We shall not be liable for delay, suspension, or failure in performance caused by
            events beyond our reasonable control, including but not limited to natural calamities,
            power failure, internet outage, cyber incident, strike, epidemic, government restriction,
            platform outage, or acts of third parties.
          </p>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            16. Governing law and exclusive jurisdiction
          </h2>
          <p>
            This Agreement shall be governed by and construed in accordance with the laws of India.
            All disputes, claims, causes of action, proceedings, and controversies arising out of or
            in connection with this Agreement, the website, the App, the Services, communications,
            or any transaction related thereto shall be subject to the exclusive jurisdiction of the
            competent courts at Kolkata, West Bengal, India, and no other court shall have
            jurisdiction.
          </p>
          <p>
            The parties irrevocably agree that Kolkata courts alone shall have exclusive jurisdiction
            to the fullest extent permitted by law.
          </p>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            17. Amendment, severability, and entire agreement
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">17.1. Amendment</h3>
              <p>
                We may modify this Agreement from time to time by updating the website, App, or other
                communication channels. Continued use after such update shall constitute acceptance
                of the revised terms.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">17.2. Severability</h3>
              <p>
                If any provision is held invalid, unlawful, or unenforceable, the remaining provisions
                shall continue in full force and effect.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">17.3. Entire agreement</h3>
              <p>
                This Agreement constitutes the entire understanding between the parties concerning
                use of the website, App, and Services and supersedes prior oral or written
                understandings to the extent inconsistent herewith.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#3D3D3D]">17.4. No waiver</h3>
              <p>
                No failure or delay by us in exercising any right shall operate as a waiver of that
                right.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            18. Acknowledgement and acceptance
          </h2>
          <p>
            By using the website, downloading or opening the App, creating an account, clicking
            &quot;I Agree&quot;, making payment, sending a WhatsApp message, sending an email, joining a video
            consultation, or otherwise interacting with us through any digital or electronic
            means, the User confirms that the User has read, understood, and irrevocably accepted
            this Agreement.
          </p>
          <p>
            The User further confirms that all diet and nutrition-related assistance is separate from
            medical diagnosis and treatment and that any medical issue must be referred to an
            appropriately qualified doctor.
          </p>
          <p>
            The User confirms that the User has had the opportunity to review this Agreement and to
            seek independent legal advice if desired before acceptance.
          </p>

          <h2 className="text-xl font-semibold text-[#3D3D3D] border-l-4 border-[#D58411] pl-3">
            19. Contact and notices
          </h2>
          <p>
            All notices, complaints, support requests, legal communications, privacy concerns,
            refund requests, and service-related grievances shall be sent through the official contact
            details disclosed on the website or app.
          </p>
        </div>

        <p className="mt-8 text-xs sm:text-sm text-gray-500 italic border-t border-gray-200 pt-4">
          This Agreement was last updated on <strong>01-04-2026</strong>.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditionsPage;
