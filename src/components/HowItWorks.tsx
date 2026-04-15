import { UserPlus, CreditCard, BarChart3, Banknote } from "lucide-react";

const steps = [
  {
    title: "অ্যাকাউন্ট তৈরি করুন",
    description: "মাত্র ২ মিনিটে আপনার তথ্য দিয়ে সাইন-আপ করুন।",
    icon: UserPlus
  },
  {
    title: "বিনিয়োগ করুন",
    description: "আপনার পছন্দমতো প্যাকেজ নির্বাচন করে সরাসরি বিকাশ/নগদ/রকেটে টাকা জমা দিন।",
    icon: CreditCard
  },
  {
    title: "ট্রেডিং শুরু",
    description: "আমাদের অভিজ্ঞ টিম আপনার পুঁজি শেয়ার বাজারে সঠিক স্টকে ইনভেস্ট করবে।",
    icon: BarChart3
  },
  {
    title: "লাভ বুঝে নিন",
    description: "মাসিক ভিত্তিতে আপনার অর্জিত লভ্যাংশ আপনার অ্যাকাউন্টে যোগ হবে যা আপনি যেকোনো সময় তুলে নিতে পারবেন।",
    icon: Banknote
  }
];

export function HowItWorks() {
  return (
    <>
      {steps.map((step, index) => (
        <section key={index} className="bento-card bg-card/50">
          <div className="text-2xl font-bold text-gold mb-3">০{index + 1}</div>
          <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
          <p className="text-xs text-slate-text leading-relaxed">
            {step.description}
          </p>
        </section>
      ))}
    </>
  );
}
