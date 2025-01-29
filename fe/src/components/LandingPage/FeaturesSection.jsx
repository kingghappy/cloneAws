

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Resource Management</h3>
            <p className="mt-4">Easily deploy and manage your cloud resources, just like AWS EC2 instances.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Auto-Scaling</h3>
            <p className="mt-4">Auto-scale your resources based on demand, ensuring optimal performance.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold">Real-Time Monitoring</h3>
            <p className="mt-4">Monitor your containers and resources in real time with detailed analytics.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
