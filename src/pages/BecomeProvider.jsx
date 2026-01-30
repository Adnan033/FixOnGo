import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  TrendingUp,
  Star,
  Zap,
  DollarSign,
  Shield,
  Clock,
  CreditCard,
  Award,
  MapPin,
  Check,
} from "lucide-react";
import ProviderFormModal from "../components/ProviderFormModal";
import "../styles/BecomeProvider.css";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stats = [
  { value: "15K+", label: "Active Providers", icon: <Users /> },
  { value: "₹8-15L", label: "Avg. Earnings", icon: <TrendingUp /> },
  { value: "4.9★", label: "Rating", icon: <Star /> },
  { value: "2-3 days", label: "Onboarding", icon: <Zap /> },
];

const benefits = [
  {
    icon: <DollarSign />,
    title: "Weekly Payouts",
    desc: "Direct bank transfer",
  },
  { icon: <Shield />, title: "Verified Customers", desc: "No fraud clients" },
  { icon: <Clock />, title: "Flexible Hours", desc: "Work anytime" },
  { icon: <CreditCard />, title: "Zero Commission", desc: "First 50 jobs" },
  { icon: <Award />, title: "Skill Growth", desc: "Certifications" },
  { icon: <MapPin />, title: "Local Jobs", desc: "Nearby work" },
];

const steps = [
  ["01", "Apply", "Fill basic details", "5 mins"],
  ["02", "Verification", "Profile check", "24-48 hrs"],
  ["03", "Onboarding", "Expert guidance", "30 mins"],
  ["04", "Start Earning", "Accept jobs", "Instant"],
];

export default function BecomeProvider() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bp-page">
      <div className="bp-background">
        <div className="bp-gradient" />
        <div className="bp-particles" />
      </div>

      {/* HERO */}
      <motion.section className="bp-hero" {...fadeUp}>
        <div className="bp-badge">
          <TrendingUp size={16} /> Join 15,000+ Professionals
        </div>

        <h1>
          Turn Your Skills Into
          <span className="bp-gradient-text"> Steady Income</span>
        </h1>

        <p className="bp-subtitle">
          Earn more with flexible hours, verified customers & weekly payouts.
        </p>

        <div className="bp-hero-stats">
          {stats.map((s, i) => (
            <motion.div key={i} className="bp-stat-card" whileHover={{ y: -6 }}>
              <div className="bp-stat-icon">{s.icon}</div>
              <div className="bp-stat-value">{s.value}</div>
              <div className="bp-stat-label">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.button
          className="bp-primary"
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(true)}
        >
          <Zap size={18} /> Start Earning – It's Free
        </motion.button>

        <p className="bp-cta-note">No fees • Weekly payouts • 24/7 support</p>
      </motion.section>

      {/* BENEFITS */}
      <section className="bp-section">
        <motion.div className="bp-section-header" {...fadeUp}>
          <h2>Why FixOnGo?</h2>
          <p>Everything you need to grow</p>
        </motion.div>

        <div className="bp-benefits-grid">
          {benefits.map((b, i) => (
            <motion.div key={i} className="bp-benefit-card" {...fadeUp}>
              <div className="bp-benefit-icon">{b.icon}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section className="bp-section bp-steps-section">
        <motion.div className="bp-section-header" {...fadeUp}>
          <h2>Start in 4 Steps</h2>
        </motion.div>

        <div className="bp-steps-container">
          {steps.map(([n, t, d, time], i) => (
            <motion.div key={i} className="bp-step-card" {...fadeUp}>
              <div className="bp-step-number">{n}</div>
              <h3>{t}</h3>
              <p>{d}</p>
              <span className="bp-step-duration">
                <Clock size={14} /> {time}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <motion.section className="bp-cta-section" {...fadeUp}>
        <h2>Ready to Start?</h2>
        <p>Join thousands already earning with FixOnGo</p>

        <div className="bp-cta-features">
          {["No Fees", "Weekly Pay", "Flexible Hours", "Support"].map(
            (t, i) => (
              <div key={i}>
                <Check /> {t}
              </div>
            ),
          )}
        </div>

        <button
          className="bp-primary bp-cta-button"
          onClick={() => setOpen(true)}
        >
          Apply Now
        </button>
      </motion.section>

      <AnimatePresence>
        {open && <ProviderFormModal onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </div>
  );
}
