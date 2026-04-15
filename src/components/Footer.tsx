import { TrendingUp, Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <TrendingUp className="text-navy w-6 h-6" />
              </div>
              <span className="text-xl font-serif font-bold text-white">
                Halal Invest
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              আমরা মূলত শেয়ার বাজারের দক্ষ বিশ্লেষণের মাধ্যমে মুনাফা অর্জন করি এবং আমাদের বিনিয়োগকারীদের সাথে সেই লভ্যাংশ শেয়ার করি। সম্পূর্ণ শরীয়াহ সম্মত ও নিরাপদ বিনিয়োগ।
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">দ্রুত লিঙ্ক</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-gold transition-colors">হোম</a></li>
              <li><a href="#features" className="hover:text-gold transition-colors">আমাদের পদ্ধতি</a></li>
              <li><a href="#how-it-works" className="hover:text-gold transition-colors">কিভাবে কাজ করে</a></li>
              <li><a href="#calculator" className="hover:text-gold transition-colors">ক্যালকুলেটর</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">যোগাযোগ</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold" />
                +৮৮০ ১৭০০-০০০০০০
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold" />
                info@halalinvest.com
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold" />
                ঢাকা, বাংলাদেশ
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">লিগ্যাল</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li>ট্রেড লাইসেন্স নম্বর: ১২৩৪৫৬৭৮৯</li>
              <li><a href="#" className="hover:text-gold transition-colors">শর্তাবলী</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">প্রাইভেসি পলিসি</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs text-center md:text-left">
            © ২০২৪ Halal Invest. সর্বস্বত্ব সংরক্ষিত।
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-gold transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/8801700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 group"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-navy px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          সরাসরি কথা বলুন
        </span>
      </a>
    </footer>
  );
}
