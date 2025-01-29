

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-20 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white shadow-md rounded p-6 text-center">
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="mt-2">$10/month</p>
            <ul className="mt-4 text-sm">
              <li>10 Containers</li>
              <li>Basic Monitoring</li>
              <li>1 User</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center border-2 border-blue-600">
            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="mt-2">$30/month</p>
            <ul className="mt-4 text-sm">
              <li>50 Containers</li>
              <li>Advanced Monitoring</li>
              <li>5 Users</li>
            </ul>
          </div>
          <div className="bg-white shadow-md rounded p-6 text-center">
            <h3 className="text-xl font-semibold">Enterprise</h3>
            <p className="mt-2">Custom Pricing</p>
            <ul className="mt-4 text-sm">
              <li>Unlimited Containers</li>
              <li>Premium Support</li>
              <li>Unlimited Users</li>
            </ul>
          </div>
        </div>
      </section>
  );
};

export default PricingSection;
