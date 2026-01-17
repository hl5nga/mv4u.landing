import { Database, ShoppingCart, Route, Warehouse, Ship } from 'lucide-react';

const modules = [
  {
    icon: Database,
    name: 'Base Module',
    tagline: 'Foundation for Success',
    description: 'Centralize your core data management. Master data, inventory basics, and essential business information all in one place.',
    features: [
      'Master data management',
      'Product catalog',
      'Supplier database',
      'Real-time inventory tracking'
    ],
    color: 'blue'
  },
  {
    icon: ShoppingCart,
    name: 'Order Module',
    tagline: 'Streamline Procurement',
    description: 'Manage orders from creation to fulfillment. Automate workflows, track status, and maintain complete order visibility.',
    features: [
      'Purchase order automation',
      'Order tracking & status',
      'Supplier integration',
      'Approval workflows'
    ],
    color: 'cyan'
  },
  {
    icon: Route,
    name: 'Way Module',
    tagline: 'Optimize Logistics',
    description: 'Control your shipping and delivery operations. Route optimization, carrier management, and delivery tracking in real-time.',
    features: [
      'Route planning & optimization',
      'Shipment tracking',
      'Carrier management',
      'Delivery analytics'
    ],
    color: 'teal'
  },
  {
    icon: Warehouse,
    name: 'Stock Module',
    tagline: 'Master Inventory Control',
    description: 'Manage your inventory with precision. Real-time stock tracking, warehouse operations, and inventory optimization for maximum efficiency.',
    features: [
      'Real-time stock monitoring',
      'Warehouse management',
      'Inventory optimization',
      'Stock level analytics'
    ],
    color: 'purple'
  },
  {
    icon: Ship,
    name: 'Freight Module',
    tagline: 'Streamline Forwarding',
    description: 'Simplify your freight forwarding operations. Manage shipments, track cargo, and coordinate with carriers seamlessly across global networks.',
    features: [
      'Freight booking & management',
      'Cargo tracking & visibility',
      'Carrier coordination',
      'International shipping support'
    ],
    color: 'orange'
  }
];

export default function Modules() {
  return (
    <section id="modules" className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-cyan-900/40 text-cyan-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-cyan-700/50">
            M4 Series Modules
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Powerful Modules, One Complete Solution
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Launch your digital transformation journey with our core modules designed for immediate impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {modules.map((module, index) => {
            const Icon = module.icon;
            const colorClasses = {
              blue: 'bg-blue-600 text-white border-blue-600',
              cyan: 'bg-cyan-600 text-white border-cyan-600',
              teal: 'bg-teal-600 text-white border-teal-600',
              purple: 'bg-purple-600 text-white border-purple-600',
              orange: 'bg-orange-600 text-white border-orange-600'
            };

            return (
              <div
                key={index}
                className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-700 hover:border-cyan-500/50"
              >
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colorClasses[module.color as keyof typeof colorClasses]}`}>
                  <Icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {module.name}
                </h3>

                <p className="text-sm font-semibold text-cyan-400 mb-4">
                  {module.tagline}
                </p>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {module.description}
                </p>

                <div className="space-y-3">
                  {module.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full bg-emerald-900/40 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-700/50">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="mt-8 w-full py-3 border-2 border-slate-700 rounded-lg text-slate-300 font-medium hover:border-cyan-500 hover:text-cyan-400 transition-all">
                  Learn More
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
