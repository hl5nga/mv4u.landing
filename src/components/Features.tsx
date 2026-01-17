import { Zap, Shield, TrendingUp, Users } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Quick Digital Transformation',
    description: 'Modernize your supply chain operations in days, not months. Our intuitive platform requires minimal training.'
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level security and data protection designed specifically for small and medium businesses.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Start small and grow. Our M4 Series platform scales with your business needs.'
  },
  {
    icon: Users,
    title: 'SME-Focused Design',
    description: 'Built specifically for small to mid-sized companies. No enterprise complexity, just what you need.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose mv4u?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Purpose-built for SMEs seeking efficient supply chain management without the complexity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border-2 border-slate-700 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-600/10 transition-all duration-300 bg-slate-800/50"
              >
                <div className="w-14 h-14 bg-cyan-900/40 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors border border-cyan-700/50 group-hover:border-cyan-600">
                  <Icon className="w-7 h-7 text-cyan-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
