import { ArrowRight, Package } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl font-bold text-white">mv4u</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-400 hover:text-white transition-colors">Features</a>
            <a href="#modules" className="text-slate-400 hover:text-white transition-colors">Modules</a>
            <a href="#benefits" className="text-slate-400 hover:text-white transition-colors">Benefits</a>
            <button className="bg-cyan-600 text-white px-6 py-2.5 rounded-lg hover:bg-cyan-500 transition-colors font-medium">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-cyan-900/40 text-cyan-300 px-4 py-2 rounded-full text-sm font-medium mb-8 border border-cyan-700/50">
            <span>Powered by M4 Series</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Supply Chain Management
            <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Made Simple for SMEs</span>
          </h1>

          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform your supply chain operations with mv4u. Digital transformation made easy for small and medium enterprises. Start with Base, Order, and Way modules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto bg-cyan-600 text-white px-8 py-4 rounded-lg hover:bg-cyan-500 transition-all font-medium text-lg flex items-center justify-center space-x-2 shadow-lg shadow-cyan-600/25 hover:shadow-xl hover:shadow-cyan-600/30">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="w-full sm:w-auto border-2 border-slate-600 text-slate-300 px-8 py-4 rounded-lg hover:border-slate-500 hover:bg-slate-800/50 transition-all font-medium text-lg">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 flex items-center justify-center space-x-8 text-sm text-slate-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>14-day free trial</span>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Easy setup</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-600 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </div>
  );
}
