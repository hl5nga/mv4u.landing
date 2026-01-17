import { Clock, DollarSign, LineChart, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    stat: '70%',
    label: 'Time Saved',
    description: 'Automate manual processes and reduce operational overhead'
  },
  {
    icon: DollarSign,
    stat: '40%',
    label: 'Cost Reduction',
    description: 'Lower operational costs with optimized supply chain management'
  },
  {
    icon: LineChart,
    stat: '3x',
    label: 'Faster Growth',
    description: 'Scale your business with data-driven insights and automation'
  },
  {
    icon: Smartphone,
    stat: '24/7',
    label: 'Access Anywhere',
    description: 'Cloud-based platform accessible from any device, anytime'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real Results for SMEs
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join hundreds of small and medium businesses transforming their supply chain operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-600 transition-colors border border-slate-700 group-hover:border-cyan-600">
                  <Icon className="w-8 h-8 text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">
                  {benefit.stat}
                </div>
                <div className="text-lg font-semibold text-white mb-2">
                  {benefit.label}
                </div>
                <p className="text-slate-400 text-sm">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Supply Chain?
            </h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join the digital transformation movement designed specifically for SMEs. No complex setups, no hidden costs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-cyan-50 transition-all font-semibold text-lg shadow-xl">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all font-semibold text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>
        </div>
      </div>
    </section>
  );
}
