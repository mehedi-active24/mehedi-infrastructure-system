"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, AlertTriangle, CheckCircle, XCircle, RotateCcw, Calendar, Mail } from "lucide-react";

const questions = [
  {
    id: "placement",
    question: "What is your current inbox placement rate?",
    hint: "Check GlockApps or your sending platform's inbox %. Open rate is not inbox placement.",
    options: [
      { label: "Below 40%", value: 40, risk: "CRITICAL" },
      { label: "40–70%", value: 25, risk: "HIGH" },
      { label: "70–90%", value: 10, risk: "WARNING" },
      { label: "Above 90%", value: 0, risk: "NOMINAL" },
    ],
  },
  {
    id: "validator",
    question: "What tools have you used to diagnose the problem so far?",
    hint: "Surface validators (MXToolbox, Mail-Tester) check that records exist. They do not test whether they work on replies.",
    options: [
      { label: "Only MXToolbox / Mail-Tester", value: 25, risk: "HIGH" },
      { label: "Google Postmaster Tools", value: 12, risk: "WARNING" },
      { label: "GlockApps seed testing", value: 5, risk: "LOW" },
      { label: "Nothing yet. Just noticed the problem", value: 35, risk: "CRITICAL" },
    ],
  },
  {
    id: "domains",
    question: "How many sending domains are in your infrastructure?",
    hint: "More domains = more surface area for misaligned authentication records.",
    options: [
      { label: "1 domain", value: 5, risk: "LOW" },
      { label: "2–10 domains", value: 12, risk: "WARNING" },
      { label: "11–50 domains", value: 20, risk: "HIGH" },
      { label: "50+ domains", value: 30, risk: "CRITICAL" },
    ],
  },
  {
    id: "history",
    question: "When did you last have normal inbox placement?",
    hint: "The onset pattern tells me which failure mode to investigate first.",
    options: [
      { label: "It has always been low", value: 20, risk: "HIGH" },
      { label: "It worked, then dropped 2–4 weeks ago", value: 30, risk: "CRITICAL" },
      { label: "It has been declining slowly for months", value: 22, risk: "HIGH" },
      { label: "Working fine now. Running pre-emptive check", value: 0, risk: "NOMINAL" },
    ],
  },
  {
    id: "platform",
    question: "Which sending platform(s) are you using?",
    hint: "Platform architecture affects how DKIM is signed and whether reply-path alignment holds.",
    options: [
      { label: "Instantly or Smartlead", value: 5, risk: "LOW" },
      { label: "GoHighLevel / HubSpot / Mailshake", value: 10, risk: "WARNING" },
      { label: "Custom SMTP / self-hosted", value: 18, risk: "HIGH" },
      { label: "Multiple platforms on same domains", value: 25, risk: "CRITICAL" },
    ],
  },
];

type RiskLevel = "CRITICAL" | "HIGH" | "WARNING" | "NOMINAL";

interface Result {
  level: RiskLevel;
  score: number;
  headline: string;
  diagnosis: string;
  recommendation: string;
  cta: "calendly" | "email";
}

function getResult(score: number): Result {
  if (score >= 80) {
    return {
      level: "CRITICAL",
      score,
      headline: "Active Infrastructure Failure",
      diagnosis:
        "Your signals indicate an active, compounding deliverability failure. The gap between what your validators show and what your inbox receives is widening. Failures at this severity level get harder to recover the longer they run. Domain reputation decay is non-linear.",
      recommendation:
        "A 20-minute forensic call will identify the specific failure mode. You'll leave knowing the root cause, whether it's fixable, and what it would take. No money changes hands until you decide to proceed.",
      cta: "calendly",
    };
  }
  if (score >= 50) {
    return {
      level: "HIGH",
      score,
      headline: "Infrastructure Drift Detected",
      diagnosis:
        "Your infrastructure shows signs of progressive degradation. The kind that does not produce obvious alerts until it is already material. Standard validators will continue to show green while placement quietly declines. A forensic audit typically surfaces 2–4 specific failure points at this stage.",
      recommendation:
        "Send 3 data points (platform, sending volume, and a DMARC XML sample) and I'll respond with a preliminary diagnosis within 24 hours.",
      cta: "email",
    };
  }
  if (score >= 25) {
    return {
      level: "WARNING",
      score,
      headline: "Risk Signals Present",
      diagnosis:
        "No active failure, but your configuration has patterns that create risk as volume scales. Infrastructure that tests clean at 10k/month frequently develops alignment failures at 100k/month. The right time to find these is before they become critical.",
      recommendation:
        "A pre-emptive infrastructure review will identify the specific points that are likely to break under load, before they affect live campaigns.",
      cta: "email",
    };
  }
  return {
    level: "NOMINAL",
    score,
    headline: "No Active Failure Signals",
    diagnosis:
      "Your current configuration appears stable. The risk at this level is warmup drift: reputation decay that occurs silently when a domain has no background warmup signal to offset cold outbound activity.",
    recommendation:
      "Read the field report on warmup drift for the specific monitoring protocol that prevents passive reputation decay.",
    cta: "email",
  };
}

const riskConfig = {
  CRITICAL: {
    color: "text-red-400",
    border: "border-red-400/30",
    bg: "bg-red-400/5",
    dot: "bg-red-400",
    badge: "text-red-400 border-red-400/30 bg-red-400/10",
    barColor: "bg-red-400",
  },
  HIGH: {
    color: "text-amber-400",
    border: "border-amber-400/30",
    bg: "bg-amber-400/5",
    dot: "bg-amber-400",
    badge: "text-amber-400 border-amber-400/30 bg-amber-400/10",
    barColor: "bg-amber-400",
  },
  WARNING: {
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/5",
    dot: "bg-yellow-400",
    badge: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    barColor: "bg-yellow-400",
  },
  NOMINAL: {
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    bg: "bg-emerald-400/5",
    dot: "bg-emerald-400",
    badge: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
    barColor: "bg-emerald-400",
  },
};

export default function DeliverabilityTriage() {
  const [step, setStep] = useState(0); // 0 = intro, 1-5 = questions, 6 = result
  const [answers, setAnswers] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const isIntro = step === 0;
  const isResult = step > questions.length;
  const currentQuestion = questions[step - 1];
  const totalScore = answers.reduce((a, b) => a + b, 0);
  const result = isResult ? getResult(totalScore) : null;

  function handleSelect(value: number) {
    setSelectedOption(value);
  }

  function handleNext() {
    if (selectedOption === null) return;
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);
    setStep(step + 1);
  }

  function handleReset() {
    setStep(0);
    setAnswers([]);
    setSelectedOption(null);
  }

  return (
    <section id="triage" className="py-16 border-b border-border-subtle bg-bg-dark">
      <div className="container mx-auto px-6 max-w-4xl">

        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-3">Free Diagnostic Tool</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold text-text-primary uppercase tracking-tight">
                Domain Deliverability Triage
              </h3>
              <p className="text-xs font-mono text-text-secondary mt-2 max-w-lg">
                5 questions. Instant risk assessment. No email required to see your result.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-text-secondary/50 shrink-0">
              <span className="text-emerald-400">●</span> FREE · NO SIGNUP
            </div>
          </div>
        </div>

        {/* Triage Card */}
        <div className="border border-border-subtle bg-surface/20 overflow-hidden">

          {/* Card Header */}
          <div className="border-b border-border-subtle px-5 py-3 flex items-center justify-between bg-surface/40">
            <div className="flex items-center gap-3 text-[10px] font-mono text-text-secondary uppercase tracking-widest">
              <span>FORENSIC TRIAGE</span>
              {!isIntro && !isResult && (
                <span className="text-accent">// QUESTION {step} OF {questions.length}</span>
              )}
              {isResult && result && (
                <span className={riskConfig[result.level].color}>// RESULT READY</span>
              )}
            </div>
            {!isIntro && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-[10px] font-mono text-text-secondary/40 hover:text-text-secondary transition-colors uppercase tracking-wider"
              >
                <RotateCcw className="w-2.5 h-2.5" />
                Reset
              </button>
            )}
          </div>

          {/* Progress Bar */}
          {!isIntro && !isResult && (
            <div className="h-0.5 bg-border-subtle">
              <motion.div
                className="h-full bg-accent"
                initial={{ width: 0 }}
                animate={{ width: `${((step) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">

            {/* Intro */}
            {isIntro && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-8"
              >
                <div className="max-w-xl">
                  <p className="text-sm font-mono text-text-secondary leading-relaxed mb-3">
                    Most deliverability problems are diagnosable. Standard validators check the wrong thing. They verify your records exist. They do not test whether they hold on replies, forwards, or forwarded-to-spam paths.
                  </p>
                  <p className="text-sm font-mono text-text-secondary leading-relaxed mb-8">
                    This triage identifies whether your infrastructure has active failure signals, and which failure mode to investigate first.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { label: "Questions", value: "5" },
                      { label: "Time Required", value: "60 sec" },
                      { label: "Cost", value: "Free" },
                    ].map((item, i) => (
                      <div key={i} className="border border-border-subtle p-3 text-center">
                        <div className="text-lg font-mono font-bold text-accent">{item.value}</div>
                        <div className="text-[9px] font-mono text-text-secondary/60 uppercase mt-1">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="flex items-center gap-2 px-6 py-3 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors"
                  >
                    Start Triage
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Question */}
            {!isIntro && !isResult && currentQuestion && (
              <motion.div
                key={`question-${step}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.2 }}
                className="p-6 md:p-8"
              >
                <div className="mb-6">
                  <p className="text-base md:text-lg font-bold text-text-primary mb-2">
                    {currentQuestion.question}
                  </p>
                  <p className="text-[11px] font-mono text-text-secondary/60 border-l-2 border-accent/30 pl-3">
                    {currentQuestion.hint}
                  </p>
                </div>

                <div className="space-y-2 mb-8">
                  {currentQuestion.options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelect(opt.value)}
                      className={`
                        w-full text-left px-4 py-3 border transition-all duration-150 flex items-center justify-between group
                        ${selectedOption === opt.value
                          ? "border-accent/50 bg-accent/10 text-text-primary"
                          : "border-border-subtle bg-bg-dark hover:border-border-subtle/80 hover:bg-surface/40 text-text-secondary"
                        }
                      `}
                    >
                      <span className="text-sm font-mono">{opt.label}</span>
                      <span className={`text-[9px] font-mono px-1.5 py-0.5 border ${
                        opt.risk === "CRITICAL" ? "text-red-400 border-red-400/30 bg-red-400/5" :
                        opt.risk === "HIGH" ? "text-amber-400 border-amber-400/30 bg-amber-400/5" :
                        opt.risk === "WARNING" ? "text-yellow-400 border-yellow-400/30 bg-yellow-400/5" :
                        "text-emerald-400 border-emerald-400/30 bg-emerald-400/5"
                      }`}>
                        {opt.risk}
                      </span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleNext}
                  disabled={selectedOption === null}
                  className={`
                    flex items-center gap-2 px-5 py-2.5 text-xs font-mono uppercase tracking-wider transition-all
                    ${selectedOption !== null
                      ? "bg-accent text-white hover:bg-accent/90 cursor-pointer"
                      : "bg-surface text-text-secondary/30 cursor-not-allowed border border-border-subtle"
                    }
                  `}
                >
                  {step < questions.length ? "Next Question" : "See My Diagnosis"}
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            )}

            {/* Result */}
            {isResult && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-6 md:p-8"
              >
                {/* Risk Score Header */}
                <div className={`border ${riskConfig[result.level].border} ${riskConfig[result.level].bg} p-5 mb-6`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className={`text-[10px] font-mono uppercase tracking-widest mb-1 ${riskConfig[result.level].color}`}>
                        Risk Assessment
                      </div>
                      <div className="text-xl font-bold text-text-primary">{result.headline}</div>
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1.5 border ${riskConfig[result.level].badge}`}>
                      {result.level === "CRITICAL" && <XCircle className="w-3 h-3" />}
                      {result.level === "HIGH" && <AlertTriangle className="w-3 h-3" />}
                      {result.level === "WARNING" && <AlertTriangle className="w-3 h-3" />}
                      {result.level === "NOMINAL" && <CheckCircle className="w-3 h-3" />}
                      {result.level}
                    </div>
                  </div>

                  {/* Score Bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-[9px] font-mono text-text-secondary/50 mb-1.5 uppercase">
                      <span>Risk Score</span>
                      <span>{result.score} / 130</span>
                    </div>
                    <div className="h-1.5 bg-border-subtle rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${riskConfig[result.level].barColor}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min((result.score / 130) * 100, 100)}%` }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Diagnosis */}
                <div className="mb-6">
                  <p className="text-[11px] font-mono text-text-secondary uppercase tracking-wider mb-2">Diagnosis</p>
                  <p className="text-sm text-text-secondary leading-relaxed">{result.diagnosis}</p>
                </div>

                {/* Recommendation */}
                <div className="border-l-2 border-accent/40 pl-4 mb-8">
                  <p className="text-[10px] font-mono text-text-secondary/50 uppercase mb-1.5">Next Step</p>
                  <p className="text-sm text-text-primary leading-relaxed">{result.recommendation}</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  {result.cta === "calendly" ? (
                    <a
                      href="https://calendly.com/mehedi-active24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      Book Free Discovery Call (20 Min)
                    </a>
                  ) : (
                    <a
                      href={`mailto:mehedi.active24@gmail.com?subject=Deliverability%20Triage%20Result%3A%20${encodeURIComponent(result.level)}&body=My%20triage%20result%3A%20${encodeURIComponent(result.headline)}%20(Score%3A%20${result.score}%2F130).%20Please%20send%20the%20full%20diagnosis.`}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-white text-xs font-mono uppercase tracking-wider hover:bg-accent/90 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      Get Full Written Diagnosis
                    </a>
                  )}
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-border-subtle text-text-secondary text-xs font-mono uppercase tracking-wider hover:border-accent/30 hover:text-text-primary transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Run Again
                  </button>
                </div>

                <p className="mt-4 text-[10px] font-mono text-text-secondary/30">
                  This triage uses infrastructure risk signals, not inbox placement validation. For a forensic diagnosis, book a call or send 3 data points via email.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
