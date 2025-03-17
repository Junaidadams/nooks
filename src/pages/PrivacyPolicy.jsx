const PrivacyPolicy = () => {
  return (
    <div className="flex min-h-screen -mt-[56px] pt-[56px] text-ghost-white bg-gradient-to-b from-space-cadet to-delft-blue flex-col">
      <div className="w-3/4 lg:w-1/2 mx-auto rounded-md text-ghost-white p-10  ">
        <h1 className="text-periwinkle font-black text-2xl sm:text-3xl">
          Privacy Policy
        </h1>
        <p className="mb-4 text-lg">Last updated: [Insert Date]</p>
        <h2 className="text-xl font-semibold mt-6">1. Introduction</h2>
        <p className="mb-4">
          Welcome to Nooks. Your privacy is important to us. This Privacy Policy
          explains how we collect, use, and protect your personal information.
        </p>
        <h2 className="text-xl font-semibold mt-6">
          2. Information We Collect
        </h2>
        <p className="mb-4">
          We collect the following types of information:
          <ul className="list-disc ml-6 mt-2">
            <li>Personal Information (e.g., name, email, contact details)</li>
            <li>Account Information (e.g., username, password)</li>
            <li>Usage Data (e.g., pages visited, interactions)</li>
          </ul>
        </p>
        <h2 className="text-xl font-semibold mt-6">
          3. How We Use Your Information
        </h2>
        <p className="mb-4">
          We use your information to:
          <ul className="list-disc ml-6 mt-2">
            <li>Provide and maintain our services</li>
            <li>Improve user experience</li>
            <li>Send updates and promotional materials (with consent)</li>
          </ul>
        </p>
        <h2 className="text-xl font-semibold mt-6">4. Data Protection</h2>
        <p className="mb-4">
          We implement security measures to protect your data. However, no
          method of transmission over the internet is 100% secure.
        </p>
        <h2 className="text-xl font-semibold mt-6">5. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party services for analytics, advertising, or other
          functions. These services have their own privacy policies.
        </p>
        <h2 className="text-xl font-semibold mt-6">6. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or delete your personal data.
          Contact us at [Insert Contact Email] for any requests.
        </p>
        <h2 className="text-xl font-semibold mt-6">
          7. Changes to This Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page.
        </p>
        <h2 className="text-xl font-semibold mt-6">8. Contact Us</h2>
        <p>
          If you have any questions, please contact us at [Insert Contact
          Email].
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
