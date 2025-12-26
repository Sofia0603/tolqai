export default function Terms() {
    return (
        <article className="policy-container">
            <div className="policy-header">
                <h1>Terms of Service</h1>
                {/*<p className="policy-updated">*/}
                {/*    <strong>Last updated:</strong> 01/12/2026*/}
                {/*</p>*/}
            </div>

            <section className="policy-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using <a href="https://tolqAI.com" className="policy-link">https://tolqAI.com</a> or any tolqAI Services,
                    you agree to these Terms of Service (“Terms”).
                </p>
                <p>
                    If you use the Services on behalf of an organization, you represent that you have authority to bind that organization.
                </p>

                <h2>2. Services</h2>
                <p>tolqAI, operated by LLC Kodix, provides:</p>
                <ul className="policy-list">
                    <li>Audio capture hardware devices</li>
                    <li>Software platforms for transcription, analytics, and dashboards</li>
                    <li>Related support and professional services</li>
                </ul>

                <h2>3. Customer Responsibilities</h2>
                <p>You agree to:</p>
                <ul className="policy-list">
                    <li>Use the Services in compliance with applicable laws</li>
                    <li>Obtain all required consents for audio recording and processing</li>
                    <li>Inform employees, customers, and third parties about recordings</li>
                    <li>Use and configure the Services responsibly</li>
                </ul>
                <div className="policy-note">
                    <strong>Compliance Notice:</strong> Compliance with recording, labor, and privacy laws is the sole responsibility of the customer.
                </div>

                <h2>4. Accounts and Security</h2>
                <p>
                    You are responsible for maintaining the confidentiality of account credentials and for all activities
                    under your account.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                    All intellectual property rights in the Services, hardware, software, and documentation belong to
                    LLC Kodix or its licensors. A limited, non-exclusive, non-transferable license is granted for the
                    duration of the agreement.
                </p>

                <h2>6. Data Ownership</h2>
                <ul className="policy-list">
                    <li>Customers retain ownership of their data.</li>
                    <li>tolqAI processes data only to provide and improve the Services.</li>
                    <li>Aggregated and anonymized data may be used for analytics and product development.</li>
                </ul>

                <h2>7. Fees and Payment</h2>
                <p>Fees and payment terms are defined in:</p>
                <ul className="policy-list">
                    <li>Commercial agreements</li>
                    <li>Order forms</li>
                    <li>Pricing pages</li>
                </ul>
                <p>Failure to pay may result in suspension or termination of Services.</p>

                <h2>8. Hardware Terms</h2>
                <ul className="policy-list">
                    <li>Hardware warranties are provided separately.</li>
                    <li>Risk of loss transfers upon delivery unless otherwise agreed.</li>
                    <li>Unauthorized modification voids warranties.</li>
                </ul>

                <h2>9. Confidentiality</h2>
                <p>
                    Each party agrees to protect the other party’s confidential information and use it solely for purposes
                    related to the Services.
                </p>

                <h2>10. Disclaimer of Warranties</h2>
                <p>
                    The Services are provided “as is” and “as available,” without warranties of uninterrupted or error-free operation.
                </p>

                <h2>11. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law:</p>
                <ul className="policy-list">
                    <li>LLC Kodix shall not be liable for indirect or consequential damages.</li>
                    <li>Total liability is limited to fees paid during the preceding 12 months.</li>
                </ul>

                <h2>12. Indemnification</h2>
                <p>You agree to indemnify LLC Kodix against claims arising from:</p>
                <ul className="policy-list">
                    <li>Unlawful use of the Services</li>
                    <li>Failure to obtain required consents</li>
                    <li>Violation of applicable laws</li>
                </ul>

                <h2>13. Termination</h2>
                <p>We may suspend or terminate access if you:</p>
                <ul className="policy-list">
                    <li>Violate these Terms</li>
                    <li>Fail to pay applicable fees</li>
                    <li>Use the Services unlawfully</li>
                </ul>

                <h2>14. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of the State of California,
                    United States of America, without regard to its conflict of law principles.
                </p>
                <p>
                    Any legal action or proceeding arising out of or relating to these Terms or the Services shall be brought
                    exclusively in the state or federal courts located within the State of California, and the parties
                    hereby consent to the personal jurisdiction and venue of such courts.
                </p>
            </section>

            <div className="policy-contact-card">
                <p>
                    <strong>Legal entity:</strong> LLC Kodix<br />
                    <strong>Brand:</strong> tolqAI<br />
                    <strong>Website:</strong> <a href="https://tolqAI.com" className="policy-link">https://tolqAI.com</a><br />
                    <strong>Email:</strong> <a href="mailto:ps@tolqai.com" className="policy-link">ps@tolqai.com</a>
                </p>
            </div>
        </article>
    );
}