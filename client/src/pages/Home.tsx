import { useEffect, useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Cpu,
  Crosshair,
  Droplets,
  Eye,
  Focus,
  Gauge,
  GitBranch,
  Globe2,
  Headphones,
  Lightbulb,
  Lock,
  MousePointer2,
  Orbit,
  PanelTop,
  Play,
  Radio,
  RotateCcw,
  ScanLine,
  Sparkles,
  Target,
  Timer,
  Triangle,
  Wrench,
  Zap,
} from "lucide-react";

type IconType = typeof BrainCircuit;

type SectionRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function SectionReveal({ children, className = "", id }: SectionRevealProps) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = document.getElementById(id ?? "");
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [id]);
  return (
    <div id={id} className={`reveal ${visible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function Eyebrow({ children, number }: { children: React.ReactNode; number?: string }) {
  return (
    <div className="eyebrow">
      {number && <span className="eyebrow-number">{number}</span>}
      <span className="eyebrow-line" />
      <span>{children}</span>
    </div>
  );
}

function SymbolMark({ small = false }: { small?: boolean }) {
  return (
    <div className={`symbol-mark ${small ? "symbol-mark-small" : ""}`} aria-label="Abstract geometric wisdom mark">
      <svg viewBox="0 0 220 220" role="img" aria-hidden="true">
        <circle className="symbol-orbit orbit-one" cx="110" cy="110" r="88" />
        <circle className="symbol-orbit orbit-two" cx="110" cy="110" r="72" />
        <path className="symbol-stroke symbol-crown" d="M67 70 Q110 30 153 70" />
        <path className="symbol-stroke symbol-ear left" d="M70 77 Q28 85 45 126 Q52 142 74 127" />
        <path className="symbol-stroke symbol-ear right" d="M150 77 Q192 85 175 126 Q168 142 146 127" />
        <path className="symbol-stroke" d="M83 91 Q110 75 137 91" />
        <path className="symbol-stroke symbol-trunk" d="M110 92 C92 116 93 145 121 145 C146 145 150 124 130 114" />
        <path className="symbol-stroke symbol-base" d="M77 156 Q110 177 143 156" />
        <circle className="symbol-dot" cx="110" cy="63" r="3" />
      </svg>
    </div>
  );
}

function WireframeObject({ variant = "model", broken = false }: { variant?: "plan" | "model" | "simulate"; broken?: boolean }) {
  return (
    <div className={`wireframe-object object-${variant} ${broken ? "is-broken" : ""}`} aria-label="Abstract engineering prototype visualization">
      <div className="object-ring ring-a" />
      <div className="object-ring ring-b" />
      <div className="object-core" />
      <div className="object-arm arm-a" />
      <div className="object-arm arm-b" />
      <div className="object-leg leg-a" />
      <div className="object-leg leg-b" />
      <span className="object-label label-top">SENSOR_03</span>
      <span className="object-label label-right">CORE_LINK</span>
      <span className="object-label label-bottom">FRAME / 01</span>
      {variant === "simulate" && <span className="object-readout">STABLE / 98.4%</span>}
    </div>
  );
}

const wisdomNodes: { title: string; label: string; copy: string; icon: IconType }[] = [
  { title: "Large ears", label: "LISTEN", copy: "Engineers listen before they solve.", icon: Headphones },
  { title: "Small eyes", label: "FOCUS", copy: "Great solutions begin with attention to detail.", icon: Eye },
  { title: "Wisdom", label: "THINK", copy: "Understand the problem before building the solution.", icon: BrainCircuit },
  { title: "Trunk", label: "ADAPT", copy: "Engineers adapt when things do not go as planned.", icon: GitBranch },
  { title: "Mouse", label: "EXPLORE", copy: "Even the smallest detail can lead to a breakthrough.", icon: MousePointer2 },
  { title: "Modak", label: "RESULT", copy: "The satisfaction of solving a difficult problem.", icon: Sparkles },
];

const problemCards = [
  { title: "Water", discipline: "Civil systems", detail: "How might every neighbourhood get cleaner water?", icon: Droplets },
  { title: "Energy", discipline: "Electrical", detail: "How do we power more with less?", icon: Zap },
  { title: "Mobility", discipline: "Mechanical", detail: "How might movement become lighter and smarter?", icon: Orbit },
  { title: "Healthcare", discipline: "Biomedical", detail: "How do we make care more human and more precise?", icon: Crosshair },
  { title: "Climate", discipline: "Environmental", detail: "How might the built world repair what it takes?", icon: Globe2 },
  { title: "Access", discipline: "Human-centred", detail: "How can a better system include everyone?", icon: Target },
];

const fields = [
  { name: "Civil", short: "CIV", detail: "Cities that carry more people, more safely.", icon: Triangle },
  { name: "Mechanical", short: "MEC", detail: "Motion translated into useful force.", icon: Wrench },
  { name: "Electrical", short: "ELE", detail: "Invisible systems that keep us moving.", icon: Zap },
  { name: "Computer", short: "COM", detail: "Logic that turns possibility into behaviour.", icon: Cpu },
  { name: "Robotics / AI", short: "RAI", detail: "Machines that learn to meet the moment.", icon: BrainCircuit },
  { name: "Aerospace", short: "AER", detail: "Curiosity with a trajectory.", icon: Orbit },
  { name: "Biomedical", short: "BIO", detail: "Precision applied to the human body.", icon: Crosshair },
  { name: "Environmental", short: "ENV", detail: "Designing a future worth inheriting.", icon: Globe2 },
];

const versions = [
  { label: "V01", title: "The first attempt", detail: "The motor overheated after 18 seconds.", why: "We had optimised for speed, not endurance.", score: 32, accent: "failure" },
  { label: "V02", title: "The honest attempt", detail: "A new heat sink lowered the temperature.", why: "The system needed room to breathe.", score: 54, accent: "warn" },
  { label: "V03", title: "The resilient attempt", detail: "A lighter frame made the whole system calmer.", why: "Every gram changed the conversation.", score: 78, accent: "progress" },
  { label: "V04", title: "The working idea", detail: "The prototype now adapts in real time.", why: "Iteration made the original idea possible.", score: 98, accent: "success" },
];

const timeline = [
  { year: "2026", label: "AI / Robotics", note: "The tools learn alongside us." },
  { year: "2030", label: "Smart infrastructure", note: "Cities begin to respond." },
  { year: "2040", label: "Sustainable systems", note: "Progress becomes regenerative." },
  { year: "2050", label: "Beyond the horizon", note: "Space, climate, advanced engineering." },
  { year: "????", label: "Your breakthrough", note: "The next chapter is unwritten." },
];

export default function Home() {
  const [activeWisdom, setActiveWisdom] = useState(2);
  const [visitedWisdom, setVisitedWisdom] = useState<number[]>([2]);
  const [blueprintMode, setBlueprintMode] = useState<"plan" | "model" | "simulate">("plan");
  const [activeProblem, setActiveProblem] = useState(0);
  const [activeVersion, setActiveVersion] = useState(3);
  const [activeField, setActiveField] = useState(3);
  const [assembled, setAssembled] = useState(false);
  const [failureStarted, setFailureStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!failureStarted) return;
    const timer = window.setTimeout(() => setFailureStarted(false), 4200);
    return () => window.clearTimeout(timer);
  }, [failureStarted]);

  const activeWisdomData = wisdomNodes[activeWisdom];
  const ActiveWisdomIcon = activeWisdomData.icon;
  const activeVersionData = versions[activeVersion];
  const visitedCount = visitedWisdom.length;
  const insightWords = useMemo(() => ["PROBLEM", "THINK", "QUESTION", "IDEA"], []);

  const chooseWisdom = (index: number) => {
    setActiveWisdom(index);
    setVisitedWisdom((current) => (current.includes(index) ? current : [...current, index]));
  };

  const scrollToWisdom = () => document.getElementById("wisdom")?.scrollIntoView({ behavior: "smooth" });

  return (
    <main className="site-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <div className="scroll-progress" style={{ height: `${progress}%` }} aria-hidden="true" />
      <div className="topbar">
        <a href="#hero" className="brand-lockup" aria-label="Inside an Engineer's Mind home">
          <span className="brand-mark"><span /><span /><span /></span>
          <span className="brand-copy">IEM<span> / 2026</span></span>
        </a>
        <div className="topbar-status"><span className="status-dot" /> SYSTEM / ACTIVE</div>
      </div>

      <section id="hero" className="hero scene-section">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-left">
          <Eyebrow number="00">A SYMBOLIC STUDY IN CREATION</Eyebrow>
          <h1 className="hero-title">
            <span>INSIDE</span>
            <span className="hero-title-indented">AN</span>
            <span className="hero-title-outline">ENGINEER&apos;S</span>
            <span className="hero-title-accent">MIND</span>
          </h1>
          <p className="hero-subtitle">Wisdom <i>/</i> Curiosity <i>/</i> Creation</p>
          <p className="hero-support">How does an idea become reality?</p>
          <button className="primary-cta" onClick={scrollToWisdom}>
            <span>ENTER THE MIND</span><ArrowRight size={16} />
          </button>
        </div>
        <div className="hero-visual">
          <div className="hero-orbit orbit-large" />
          <div className="hero-orbit orbit-small" />
          <div className="hero-coordinates">18° 31&apos; 42.2&quot; N<br />73° 51&apos; 07.0&quot; E</div>
          <SymbolMark />
          <div className="hero-tag tag-top">WISDOM // INPUT</div>
          <div className="hero-tag tag-bottom">IDEA // OUTPUT</div>
          <div className="hero-vector vector-one" />
          <div className="hero-vector vector-two" />
        </div>
        <div className="hero-footer">
          <span>SCROLL TO EXPLORE</span><ArrowDown size={15} className="float-arrow" />
          <span className="hero-footer-meta">ENGINEERS&apos; DAY / GANESHOTSAV</span>
        </div>
      </section>

      <SectionReveal id="wisdom" className="scene-section wisdom-section">
        <div className="section-intro split-intro">
          <div>
            <Eyebrow number="01">THE FIRST INSTRUMENT</Eyebrow>
            <h2>Before the build,<br /><em>there is wisdom.</em></h2>
          </div>
          <p className="section-lede">A creative association, not a literal translation. Six symbolic qualities become six engineering instincts — the invisible tools behind every visible invention.</p>
        </div>
        <div className="wisdom-layout">
          <div className="wisdom-orbit-wrap">
            <div className="wisdom-orbit-ring ring-outer" />
            <div className="wisdom-orbit-ring ring-inner" />
            <div className="wisdom-connection-line line-a" />
            <div className="wisdom-connection-line line-b" />
            <SymbolMark small />
            <div className="wisdom-core-label">SYMBOLIC<br />ASSOCIATION</div>
            {wisdomNodes.map((node, index) => {
              const Icon = node.icon;
              return (
                <button
                  key={node.label}
                  className={`wisdom-node node-${index} ${activeWisdom === index ? "is-active" : ""} ${visitedWisdom.includes(index) ? "is-visited" : ""}`}
                  onClick={() => chooseWisdom(index)}
                  aria-label={`Explore ${node.label}: ${node.title}`}
                >
                  <Icon size={17} />
                  <span>{node.label}</span>
                </button>
              );
            })}
          </div>
          <div className="wisdom-detail">
            <span className="detail-index">0{activeWisdom + 1} / 06</span>
            <div className="detail-icon"><ActiveWisdomIcon size={22} /></div>
            <p className="detail-label">{activeWisdomData.title}</p>
            <h3>{activeWisdomData.label}</h3>
            <p className="detail-copy">{activeWisdomData.copy}</p>
            <div className="detail-progress"><span style={{ width: `${(visitedCount / 6) * 100}%` }} /></div>
            <p className="detail-foot">{visitedCount} of 6 instincts explored</p>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="observe" className="scene-section observe-section">
        <div className="section-heading-row">
          <div><Eyebrow number="02">OBSERVE / THE PROBLEM</Eyebrow><h2>Every invention<br /><em>begins with a question.</em></h2></div>
          <div className="heading-aside"><span className="mono">SIGNAL DETECTED</span><span className="signal-bars"><i /><i /><i /><i /><i /></span></div>
        </div>
        <div className="problem-grid">
          {problemCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <button key={card.title} className={`problem-card ${activeProblem === index ? "is-active" : ""}`} onClick={() => setActiveProblem(index)}>
                <div className="card-topline"><span>0{index + 1}</span><Icon size={18} /></div>
                <div className="problem-card-body"><h3>{card.title}</h3><p>{activeProblem === index ? card.detail : card.discipline}</p></div>
                <ArrowRight className="card-arrow" size={17} />
              </button>
            );
          })}
        </div>
        <div className="observe-footer"><span className="accent-line" /> <p>An engineer doesn&apos;t just see the problem.<br /><strong>They see a possibility.</strong></p></div>
      </SectionReveal>

      <SectionReveal id="think" className="scene-section think-section">
        <div className="think-background-word">THINK</div>
        <div className="think-copy"><Eyebrow number="03">THE COGNITIVE LEAP</Eyebrow><h2>Questions are<br /><em>raw material.</em></h2><p>Somewhere between what is and what could be, an idea switches on.</p></div>
        <div className="thought-cluster">
          <span className="thought thought-a">What if...?</span><span className="thought thought-b">Can we improve this?</span><span className="thought thought-c">Why this way?</span><span className="thought thought-d">There must be another solution.</span>
          <div className="idea-core"><Lightbulb size={27} /><span>IDEA</span></div>
          <div className="idea-ray ray-a" /><div className="idea-ray ray-b" /><div className="idea-ray ray-c" /><div className="idea-ray ray-d" />
        </div>
        <div className="process-steps">{insightWords.map((word, index) => <div key={word} className={`process-step ${index === 3 ? "is-current" : ""}`}><span>0{index + 1}</span>{word}</div>)}</div>
      </SectionReveal>

      <SectionReveal id="design" className="scene-section blueprint-section">
        <div className="blueprint-header"><div><Eyebrow number="04">DESIGN / THE BLUEPRINT</Eyebrow><h2>Make the invisible<br /><em>measurable.</em></h2></div><div className="blueprint-meta"><span>PROJECT / ORBITAL-01</span><span>REVISION / 03</span><span>STATUS / IN PROGRESS</span></div></div>
        <div className="blueprint-stage">
          <div className="blueprint-annotations"><span className="annotation a-one">AXIS / 00.4</span><span className="annotation a-two">LOAD / 84 N</span><span className="annotation a-three">SCALE / 1:4</span><span className="annotation a-four">◌ SENSOR ARRAY</span></div>
          <WireframeObject variant={blueprintMode} />
          <div className="blueprint-crosshair cross-a" /><div className="blueprint-crosshair cross-b" />
          <div className="blueprint-tabs" role="tablist" aria-label="Blueprint modes">
            {(["plan", "model", "simulate"] as const).map((mode) => <button key={mode} onClick={() => setBlueprintMode(mode)} className={blueprintMode === mode ? "is-active" : ""} role="tab" aria-selected={blueprintMode === mode}>{mode.toUpperCase()}</button>)}
          </div>
          <div className="blueprint-readout"><span>MODE</span><strong>{blueprintMode.toUpperCase()}</strong><span>BUILD PROGRESS</span><strong>{blueprintMode === "plan" ? "34%" : blueprintMode === "model" ? "68%" : "98%"}</strong></div>
        </div>
      </SectionReveal>

      <SectionReveal id="build" className="scene-section build-section">
        <div className="build-copy"><Eyebrow number="05">BUILD / MAKE IT REAL</Eyebrow><h2>The idea gets<br /><em>a body.</em></h2><p>Structure, power, sensing, control. A thousand small decisions becoming one moving system.</p><button className={`build-trigger ${assembled ? "is-done" : ""}`} onClick={() => setAssembled((value) => !value)}>{assembled ? <><Check size={15} /> ASSEMBLED</> : <><Play size={15} /> RUN ASSEMBLY</>}</button></div>
        <div className={`assembly-stage ${assembled ? "is-assembled" : ""}`}>
          <div className="assembly-grid" />
          <div className="assembly-core"><div className="assembly-core-inner" /></div>
          <div className="assembly-part part-structure"><span>01 / STRUCTURE</span><div /></div>
          <div className="assembly-part part-motor"><span>02 / MOTOR</span><div /></div>
          <div className="assembly-part part-battery"><span>03 / BATTERY</span><div /></div>
          <div className="assembly-part part-sensor"><span>04 / SENSOR</span><div /></div>
          <div className="assembly-part part-controller"><span>05 / CONTROLLER</span><div /></div>
          <div className="assembly-label">ORBITAL-01<br /><span>ASSEMBLY SEQUENCE</span></div>
        </div>
      </SectionReveal>

      <SectionReveal id="fail" className={`scene-section failure-section ${failureStarted ? "failure-started" : ""}`}>
        <div className="failure-copy"><Eyebrow number="06">FAIL / THE DATA POINT</Eyebrow><span className="test-id">TEST #047</span><h2><span className="failure-progress-text">{failureStarted ? "87%" : "READY"}</span><br /><em>{failureStarted ? "CRITICAL FAILURE" : "RUN THE TEST"}</em></h2><div className="failure-bar"><span style={{ width: failureStarted ? "87%" : "0%" }} /></div><p className={`failure-message ${failureStarted ? "is-revealed" : ""}`}>{failureStarted ? "It didn't work." : "Every build needs a moment of truth."}</p>{failureStarted && <p className="failure-message good">Good.<br /><span>Now we know what doesn&apos;t work.</span></p>}<button className="failure-trigger" onClick={() => setFailureStarted(true)}><RotateCcw size={15} /> {failureStarted ? "REPLAY TEST" : "START TEST"}</button></div>
        <div className="failure-object"><WireframeObject variant="simulate" broken={failureStarted} /><div className="glitch-line glitch-one" /><div className="glitch-line glitch-two" /></div>
      </SectionReveal>

      <SectionReveal id="iterate" className="scene-section iteration-section">
        <div className="iteration-header"><div><Eyebrow number="07">LEARN / ITERATE</Eyebrow><h2>Better is a<br /><em>direction.</em></h2></div><p>Engineering isn&apos;t about getting it right the first time.<br /><strong>It&apos;s about getting better every time.</strong></p></div>
        <div className="iteration-layout"><div className="version-rail">{versions.map((version, index) => <button key={version.label} onClick={() => setActiveVersion(index)} className={`version-tab ${activeVersion === index ? "is-active" : ""}`}><span>{version.label}</span><i /></button>)}</div><div className={`iteration-visual tone-${activeVersionData.accent}`}><div className="diff-orbit" /><WireframeObject variant="model" /><span className="diff-tag">DIFF / {activeVersionData.score}%</span></div><div className="iteration-detail"><span className="detail-index">VERSION {activeVersionData.label.slice(1)}</span><h3>{activeVersionData.title}</h3><p>{activeVersionData.detail}</p><div className="why-line"><span>WHY</span>{activeVersionData.why}</div><div className="score-row"><span>SYSTEM HEALTH</span><strong>{activeVersionData.score}%</strong></div><div className="score-track"><span style={{ width: `${activeVersionData.score}%` }} /></div><div className="iteration-arrows"><button onClick={() => setActiveVersion((activeVersion - 1 + versions.length) % versions.length)} aria-label="Previous version"><ChevronLeft size={17} /></button><button onClick={() => setActiveVersion((activeVersion + 1) % versions.length)} aria-label="Next version"><ChevronRight size={17} /></button></div></div></div>
      </SectionReveal>

      <SectionReveal id="innovate" className="scene-section innovate-section">
        <div className="innovation-burst" aria-hidden="true" /><Eyebrow number="08">INNOVATE / THE CONVERGENCE</Eyebrow><div className="equation">{["PROBLEM", "WISDOM", "IDEA", "DESIGN", "FAILURE", "LEARNING", "ITERATION"].map((term) => <span key={term}>{term}</span>)}</div><div className="equation-symbol">+</div><h2>INNOVATION</h2><p>The moment every thread pulls in the same direction.</p><div className="innovation-mark"><Sparkles size={16} /> <span>SYSTEM / ALIVE</span></div>
      </SectionReveal>

      <SectionReveal id="fields" className="scene-section fields-section">
        <div className="fields-heading"><div><Eyebrow number="09">ENGINEERS ARE EVERYWHERE</Eyebrow><h2>One mindset.<br /><em>Many frontiers.</em></h2></div><p>Every discipline is a different way of asking the world to become more possible.</p></div>
        <div className="fields-map"><div className="map-grid" />{fields.map((field, index) => { const Icon = field.icon; return <button key={field.name} className={`field-zone zone-${index} ${activeField === index ? "is-active" : ""}`} onClick={() => setActiveField(index)}><span className="zone-code">{field.short}</span><Icon size={17} /><span>{field.name}</span><i /></button> })}<div className="field-detail"><span className="detail-index">FIELD / 0{activeField + 1}</span><h3>{fields[activeField].name}</h3><p>{fields[activeField].detail}</p><span className="field-detail-line" /></div></div>
      </SectionReveal>

      <SectionReveal id="future" className="scene-section future-section">
        <div className="future-heading"><Eyebrow number="10">THE FUTURE / UNWRITTEN</Eyebrow><h2>Where does<br /><em>curiosity go next?</em></h2></div>
        <div className="timeline">{timeline.map((item, index) => <div key={item.year} className={`timeline-node ${index === timeline.length - 1 ? "is-future" : ""}`}><div className="timeline-dot"><span /></div><div className="timeline-copy"><span className="timeline-year">{item.year}</span><h3>{item.label}</h3><p>{item.note}</p></div></div>)}</div>
      </SectionReveal>

      <section id="close" className="final-section scene-section"><div className="final-glow" /><SymbolMark small /><div className="final-copy"><p className="final-line final-line-one">Every engineer starts with a question.</p><p className="final-line final-line-two">What if?</p><p className="final-line final-line-three">What if I could build it?</p><h2>WHAT WILL<br /><em>YOU BUILD?</em></h2><p className="final-mantra">BUILD WITH WISDOM. CREATE WITH PURPOSE.</p><span className="final-day">HAPPY ENGINEERS&apos; DAY</span></div><a href="#hero" className="restart-link"><ArrowDown size={14} /> RESTART THE JOURNEY</a><div className="final-footer"><span>IEM / 2026</span><span>AN EXPERIENCE IN POSSIBILITY</span></div></section>
    </main>
  );
}
