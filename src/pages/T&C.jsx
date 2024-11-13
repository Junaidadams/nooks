const TermsAndConditions = () => {
  return (
    <div className="flex min-h-screen -mt-[56px] pt-[56px] text-ghost-white bg-gradient-to-b from-space-cadet to-delft-blue flex-col">
      <div className="max-w-lg mx-auto rounded-md text-ghost-white p-10 sm:border-[1px] border-periwinkle w-full">
        <h1 className="text-periwinkle font-black text-2xl sm:text-3xl">
          Terms and Conditions
        </h1>
        <p className="text-lg">Last updated: [Insert Date]</p>

        <div className="my-4">
          <h2 className="text-xl font-bold">1. Introduction</h2>
          <p className="text-lg">
            Welcome to Nooks! By accessing our website at{" "}
            <a href="https://nooks.co.za">nooks.co.za</a>, you agree to comply
            with and be bound by the following terms and conditions. If you do
            not agree with any part of these terms, please do not use our
            website.
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">2. User Accounts</h2>
          <p className="text-lg">
            You may need to create an account to access certain features on our
            website. You are responsible for keeping your account details secure
            and for any activity that occurs under your account. Please inform
            us of any unauthorized use.
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">3. Content Submission</h2>
          <p className="text-lg">
            Users can submit content, such as reviews and listings of
            businesses, cafes, and restaurants. By submitting content, you grant
            us a non-exclusive, royalty-free, and worldwide license to use,
            display, and distribute your content.
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">4. Prohibited Activities</h2>
          <p className="text-lg">
            You agree not to engage in any activities that may harm, disable, or
            otherwise interfere with the proper functioning of our website. Any
            unauthorized attempts to access restricted areas of the site or to
            misuse user information will be prosecuted.
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">5. Limitation of Liability</h2>
          <p className="text-lg">
            Nooks and its affiliates will not be liable for any indirect,
            incidental, or consequential damages arising from your use of the
            site or any information provided. All information on this website is
            for informational purposes only.
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">6. Changes to Terms</h2>
          <p className="text-lg">
            We reserve the right to modify these terms and conditions at any
            time. Changes will be effective immediately upon posting on this
            page.
          </p>
        </div>
        <div className="my-4">
          <h2 className="text-xl font-bold">7. Contact Us</h2>
          <p className="text-lg">
            If you have any questions about these terms, please contact us at{" "}
            <a href="mailto:info@nooks.co.za">info@nooks.co.za</a>.
          </p>
        </div>
        <p className="text-lg">
          By using our website, you acknowledge that you have read, understood,
          and agree to be bound by these terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
