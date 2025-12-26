export default function Policy() {
    return (
        <article className="policy-container">
            <div className="policy-header">
                <h1>Privacy Policy</h1>
                {/*<p className="policy-updated">*/}
                {/*    <strong>Last updated:</strong> 01/12/2026*/}
                {/*</p>*/}
            </div>

            <section className="policy-section">
                <h2>1. Introduction</h2>
                <p>
                    This Privacy Policy explains how <strong>tolqAI</strong>, operated by LLC Kodix (“Company”, “we”, “us”, “our”),
                    collects, uses, stores, and protects personal data when you use our website{' '}
                    <a href="https://tolqAI.com" className="policy-link">https://tolqAI.com</a>, our hardware devices, and our software
                    platforms, including dashboards, analytics tools, and related services (collectively, the “Services”).
                </p>
                <p>
                    We are committed to protecting privacy and processing personal data in accordance with applicable
                    data protection laws.
                </p>

                <h2>2. Scope</h2>
                <p>This Privacy Policy applies to:</p>
                <ul className="policy-list">
                    <li>Visitors of the website tolqAI.com</li>
                    <li>Business customers and their authorized users</li>
                    <li>Individuals whose data may be processed through our devices and Services</li>
                </ul>
                <p><em>The Services are intended primarily for business (B2B) use.</em></p>

                <h2>3. Data We Collect</h2>
                <h3>3.1 Information You Provide</h3>
                <ul className="policy-list">
                    <li>Name, job title, company name</li>
                    <li>Email address and phone number</li>
                    <li>Account credentials</li>
                    <li>Billing and payment information</li>
                    <li>Customer support communications</li>
                </ul>

                <h3>3.2 Data Processed Through Devices and Services</h3>
                <p>Depending on customer configuration, we may process:</p>
                <ul className="policy-list">
                    <li>Audio recordings</li>
                    <li>Transcriptions of audio</li>
                    <li>Interaction metadata (timestamps, duration, device ID)</li>
                    <li>Usage and performance analytics</li>
                </ul>

                <div className="policy-note">
                    <strong>Important:</strong> Audio recording and transcription are initiated and controlled by
                    our business customers. Customers are solely responsible for ensuring lawful data collection
                    and obtaining all required consents.
                </div>

                <h2>4. Legal Basis for Processing</h2>
                <ul className="policy-list">
                    <li>Performance of a contract</li>
                    <li>Legitimate business interests</li>
                    <li>Legal obligations</li>
                    <li>Consent, where required by law</li>
                </ul>

                <h2>5. Purpose of Processing</h2>
                <p>We use personal data to:</p>
                <ul className="policy-list">
                    <li>Provide and operate the Services</li>
                    <li>Process audio and generate analytics</li>
                    <li>Improve products and user experience</li>
                    <li>Provide technical support</li>
                    <li>Ensure security and prevent misuse</li>
                    <li>Comply with legal requirements</li>
                </ul>
                <p><strong>We do not sell personal data.</strong></p>

                <h2>6. Data Storage and Retention</h2>
                <ul className="policy-list">
                    <li>Data is stored using secure cloud infrastructure.</li>
                    <li>Retention periods depend on customer agreements and configuration.</li>
                    <li>Customers may request deletion or manage retention settings.</li>
                </ul>

                <h2>7. Data Sharing</h2>
                <p>We may share data with:</p>
                <ul className="policy-list">
                    <li>Cloud hosting and infrastructure providers</li>
                    <li>Audio processing and analytics service providers</li>
                    <li>Legal or regulatory authorities when required by law</li>
                </ul>
                <p>All third parties are bound by confidentiality and data protection obligations.</p>

                <h2>8. International Transfers</h2>
                <p>
                    Data may be processed in multiple jurisdictions.
                    Where required, appropriate safeguards are applied in accordance with applicable law.
                </p>

                <h2>9. Security</h2>
                <p>We implement reasonable technical and organizational measures, including:</p>
                <ul className="policy-list">
                    <li>Encryption</li>
                    <li>Access controls and role-based permissions</li>
                    <li>Monitoring and logging</li>
                </ul>
                <p>No system can guarantee absolute security.</p>

                <h2>10. Data Subject Rights</h2>
                <p>Depending on jurisdiction, individuals may have the right to:</p>
                <ul className="policy-list">
                    <li>Access personal data</li>
                    <li>Request correction or deletion</li>
                    <li>Restrict or object to processing</li>
                    <li>Request data portability</li>
                </ul>
                <p>
                    Requests may be submitted to:{' '}
                    <a href="mailto:privacy@tolqai.com" className="policy-link">privacy@tolqai.com</a>
                </p>

                <h2>11. Cookies</h2>
                <p>
                    The website tolqAI.com may use cookies for functionality and analytics.
                    You can manage cookie settings through your browser.
                </p>

                <h2>12. Children’s Data</h2>
                <p>The Services are not intended for individuals under 16 years of age.</p>

                <h2>13. Changes</h2>
                <p>
                    We may update this Privacy Policy from time to time.
                    Updates will be published on this page with a revised date.
                </p>
            </section>

            <div className="policy-contact-card">

                <p>
                    <strong>Data Controller:</strong> LLC Kodix<br />
                    <strong>Brand:</strong> tolqAI<br />
                    <strong>Website:</strong> <a href="https://tolqAI.com" className="policy-link">https://tolqAI.com</a><br />
                    <strong>Email:</strong> <a href="mailto:privacy@tolqai.com" className="policy-link">privacy@tolqai.com</a>
                </p>
            </div>
        </article>
    );
}