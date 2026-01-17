import { CheckCircle2 } from 'lucide-react';

const features = [
  'Full access to Base, Order, and Way modules',
  'Unlimited users during trial',
  'Free onboarding assistance',
  'No credit card required'
];

export default function CTA() {
  return (
    <section className="py-24 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
            <div className="grid md:grid-cols-2">
              <div className="p-12">
                <h3 className="text-3xl font-bold text-white mb-4">
                  Start Your 14-Day Free Trial
                </h3>
                <p className="text-slate-300 mb-8">
                  Experience the power of mv4u risk-free. Get started in minutes with our quick setup process.
                </p>

                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full border-2 border-slate-900"></div>
                    <div className="w-8 h-8 bg-cyan-600 rounded-full border-2 border-slate-900"></div>
                    <div className="w-8 h-8 bg-teal-600 rounded-full border-2 border-slate-900"></div>
                  </div>
                  <span>Join 500+ SMEs already using mv4u</span>
                </div>
              </div>

              <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-12 flex items-center">
                <div className="w-full">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Work Email
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Company Size
                      </label>
                      <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all appearance-none cursor-pointer">
                        <option className="bg-slate-900 text-white">1-10 employees</option>
                        <option className="bg-slate-900 text-white">11-50 employees</option>
                        <option className="bg-slate-900 text-white">51-200 employees</option>
                        <option className="bg-slate-900 text-white">200+ employees</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-white text-cyan-600 py-4 rounded-lg font-semibold hover:bg-cyan-50 transition-colors shadow-lg"
                    >
                      Start Free Trial
                    </button>

                    <p className="text-white/80 text-xs text-center">
                      By signing up, you agree to our Terms of Service
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
