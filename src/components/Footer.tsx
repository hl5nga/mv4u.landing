import { Package, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="w-8 h-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">mv4u</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Supply chain management made simple for small and medium enterprises.
            </p>
            <div className="text-sm text-slate-500">
              Powered by M4 Series
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Base Module</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Order Module</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Way Module</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>contact@mv4u.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>123 Business Ave<br />Suite 100</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-slate-500">
              © 2024 mv4u. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
