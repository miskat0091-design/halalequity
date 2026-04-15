import { motion } from "motion/react";
import { TrendingUp, ShieldCheck, Wallet, Users, ArrowRight, MessageCircle } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-navy/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-gold">
              INVEST<span className="text-white">SMART</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium text-slate-text hover:text-white transition-colors">আমাদের পদ্ধতি</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-text hover:text-white transition-colors">কিভাবে কাজ করে</a>
            <a href="#calculator" className="text-sm font-medium text-slate-text hover:text-white transition-colors">ক্যালকুলেটর</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/8801700000000" className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-600 transition-all">
              সরাসরি কথা বলুন
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Hero() {
  return (
    <section className="bento-card bg-gradient-to-br from-card to-navy border-gold/30">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4" />
          ১০০% শরীয়াহ সম্মত বিনিয়োগ
        </div>
        <h1 className="text-4xl lg:text-5xl font-serif font-black text-white leading-[1.2] mb-6">
          আপনার পুঁজি, আমাদের মেধা—<br />
          <span className="text-gold">গড়ে তুলুন সমৃদ্ধ ভবিষ্যৎ</span>
        </h1>
        <p className="text-lg text-slate-text mb-10 max-w-xl leading-relaxed">
          সম্পূর্ণ শরীয়াহ সম্মত উপায়ে শেয়ার বাজার ট্রেডিংয়ের মাধ্যমে মাসিক ২০% পর্যন্ত হালাল মুনাফা অর্জন করুন।
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-gold text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-gold-light transition-all shadow-xl shadow-gold/10 flex items-center justify-center gap-2 group">
            বিনিয়োগ শুরু করুন
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        
        <div className="mt-12 flex items-center gap-8 border-t border-border pt-8">
          <div className="flex-1 bg-border/30 p-4 rounded-xl text-center">
            <div className="text-2xl font-serif font-bold text-white">৫,০০০+</div>
            <div className="text-[10px] text-slate-text uppercase tracking-wider">সফল মেম্বার</div>
          </div>
          <div className="flex-1 bg-border/30 p-4 rounded-xl text-center">
            <div className="text-2xl font-serif font-bold text-white">২৪ঘন্টা</div>
            <div className="text-[10px] text-slate-text uppercase tracking-wider">সাপোর্ট</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
