import { CheckCircle2, Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "আব্দুর রহমান",
    role: "বিনিয়োগকারী",
    content: "আমি গত ৩ মাস ধরে এখানে বিনিয়োগ করছি। প্রতি মাসেই সময়মতো লভ্যাংশ পাচ্ছি। তাদের স্বচ্ছতা সত্যিই প্রশংসনীয়।",
    rating: 5
  },
  {
    name: "ফাতেমা বেগম",
    role: "গৃহিণী",
    content: "অল্প কিছু সঞ্চয় ছিল যা অলস পড়ে ছিল। এখন এখান থেকে প্রতি মাসে ভালো একটি অংক পাচ্ছি যা আমার সংসারে সাহায্য করছে।",
    rating: 5
  },
  {
    name: "কামরুল হাসান",
    role: "চাকরিজীবী",
    content: "শেয়ার বাজার নিয়ে আমার ভয় ছিল, কিন্তু তাদের কাজের পদ্ধতি দেখার পর আমি আত্মবিশ্বাসী। সরাসরি অ্যাডমিনের সাথে লেনদেন করা যায় বলে কোনো টেনশন নেই।",
    rating: 5
  }
];

const recentPayments = [
  { user: "User***45", amount: "৳ ৫,০০০", method: "বিকাশ", time: "২ মিনিট আগে" },
  { user: "User***12", amount: "৳ ১২,৫০০", method: "নগদ", time: "১৫ মিনিট আগে" },
  { user: "User***89", amount: "৳ ২,০০০", method: "রকেট", time: "১ ঘণ্টা আগে" },
  { user: "User***33", amount: "৳ ৮,২০০", method: "বিকাশ", time: "৩ ঘণ্টা আগে" },
];

export function PaymentProof() {
  return (
    <section className="bento-card md:col-span-2">
      <div className="text-xs font-bold text-slate-text uppercase tracking-widest mb-6">পেমেন্ট প্রুফ ও মেম্বার রিভিউ</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-3">
          {recentPayments.slice(0, 3).map((payment, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-navy rounded-xl border border-border">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-500/10 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-500 w-3 h-3" />
                </div>
                <div className="text-[10px] font-bold text-white">{payment.user}</div>
              </div>
              <div className="text-[10px] font-bold text-gold">{payment.amount}</div>
            </div>
          ))}
        </div>
        <div className="bg-navy p-4 rounded-xl border border-border flex flex-col justify-center">
          <Quote className="text-gold/20 w-8 h-8 mb-2" />
          <p className="text-[11px] text-slate-text italic">
            "আমি গত ৩ মাস ধরে এখানে বিনিয়োগ করছি। প্রতি মাসেই সময়মতো লভ্যাংশ পাচ্ছি।"
          </p>
          <div className="mt-3 text-[10px] font-bold text-white">- আব্দুর রহমান</div>
        </div>
      </div>
    </section>
  );
}
