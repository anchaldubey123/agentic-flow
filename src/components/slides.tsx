import { SlideLayout } from "./SlideLayout";
import type { ReactNode } from "react";

const TOTAL = 17;

const KICKER = (props: { children: ReactNode }) => (
  <div className="slide-kicker mb-8">{props.children}</div>
);

/* ============ 1: COVER ============ */
function Slide1() {
  return (
    <SlideLayout pageNumber={1} totalPages={TOTAL} variant="hero" footerLeft="Cover">
      <div className="absolute inset-0 px-[120px] flex flex-col justify-center">
        <div className="slide-pill mb-12 w-fit">
          <span className="slide-chrome !text-[color:var(--slide-primary)]">A new operating model for engineering</span>
        </div>
        <h1 className="slide-title-lg max-w-[1500px]">
          EdgeFabric <span className="text-primary-slide">&</span> Agentic SDLC
        </h1>
        <p className="slide-subtitle mt-10 max-w-[1300px]">
          Reimagining software delivery with AI agents —
          <span className="text-primary-slide"> from Jira story to production, autonomously.</span>
        </p>
        <div className="mt-16 flex items-center gap-6">
          <div className="h-px w-[120px] bg-[color:var(--slide-primary)]" />
          <span className="slide-caption">
            Building distributed systems faster, smarter, and with human oversight.
          </span>
        </div>
      </div>

      {/* decorative concentric rings */}
      <div className="absolute -right-[200px] -bottom-[200px] w-[900px] h-[900px] rounded-full border border-[color:var(--slide-primary)]/20" />
      <div className="absolute -right-[100px] -bottom-[100px] w-[700px] h-[700px] rounded-full border border-[color:var(--slide-primary)]/15" />
      <div className="absolute right-[40px] bottom-[40px] w-[500px] h-[500px] rounded-full border border-[color:var(--slide-primary)]/10" />
    </SlideLayout>
  );
}

/* ============ 2: INTRO EDGEFABRIC ============ */
function Slide2() {
  const components = [
    { name: "Load Balancer", port: "Port 8080", desc: "Consistent hash based routing" },
    { name: "Cache Nodes", port: "Port 8082", desc: "Gossip-based cluster membership" },
    { name: "Service Registry", port: "AWS EC2", desc: "Hosted discovery & metadata" },
    { name: "Hashing Library", port: "Shared", desc: "Ring routing logic across services" },
  ];
  return (
    <SlideLayout pageNumber={2} totalPages={TOTAL} footerLeft="Introducing EdgeFabric">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] grid grid-cols-12 gap-12">
        <div className="col-span-5 flex flex-col">
          <KICKER>01 — Platform</KICKER>
          <h2 className="slide-title">What is <br /><span className="text-primary-slide">EdgeFabric?</span></h2>
          <p className="slide-body mt-10 text-muted-slide max-w-[640px]">
            A distributed caching and load-balancing platform built for
            low-latency data access, high availability and seamless horizontal
            scalability.
          </p>
          <div className="mt-auto flex flex-wrap gap-3">
            {["Java 21", "Spring Boot 3.x", "AWS EC2", "Docker"].map((t) => (
              <span key={t} className="slide-pill !py-2 !px-4 slide-chrome">{t}</span>
            ))}
          </div>
        </div>
        <div className="col-span-7 grid grid-cols-2 gap-6">
          {components.map((c, i) => (
            <div key={c.name} className="slide-card p-10 flex flex-col">
              <div className="flex items-center justify-between">
                <span className="slide-kicker !text-[color:var(--slide-accent)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="slide-chrome">{c.port}</span>
              </div>
              <div className="mt-auto pt-12">
                <div className="text-[40px] font-display font-medium leading-tight" style={{ fontFamily: "var(--font-display)" }}>{c.name}</div>
                <p className="slide-caption mt-3">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 3: WHY MATTERS ============ */
function Slide3() {
  const caps = [
    "Consistent Hash Ring Routing",
    "Gossip Protocol Membership",
    "Automatic Failover",
    "Cloud Integration",
    "Structured Logging",
    "CI/CD Ready",
  ];
  return (
    <SlideLayout pageNumber={3} totalPages={TOTAL} footerLeft="Why EdgeFabric Matters">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[180px] flex flex-col">
        <KICKER>02 — Capabilities</KICKER>
        <h2 className="slide-title max-w-[1500px]">
          Engineered for <span className="text-primary-slide">scale</span>, designed for <span className="text-accent-slide">operators</span>.
        </h2>
        <div className="grid grid-cols-3 gap-6 mt-16">
          {caps.map((c, i) => (
            <div key={c} className="slide-card p-10 flex items-center gap-6">
              <div className="w-14 h-14 rounded-full bg-[color:var(--slide-primary)]/15 border border-[color:var(--slide-primary)]/40 flex items-center justify-center text-primary-slide text-2xl">
                ✓
              </div>
              <div>
                <div className="slide-chrome">0{i + 1}</div>
                <div className="text-[28px] mt-1 font-medium">{c}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-12 border-t border-slide max-w-[1400px]">
          <p className="slide-body-lg text-muted-slide">
            EdgeFabric demonstrates how modern distributed systems can be
            <span className="text-slide"> engineered and operated efficiently at scale.</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 4: SECTION DIVIDER ============ */
function Slide4() {
  return (
    <SlideLayout pageNumber={4} totalPages={TOTAL} variant="section" footerLeft="Section Divider">
      <div className="absolute inset-0 px-[140px] flex flex-col justify-center">
        <div className="slide-kicker mb-10 !text-[color:var(--slide-accent)]">Section 01</div>
        <h2 className="slide-title-lg max-w-[1500px]">
          Understanding<br />
          <span className="text-primary-slide italic" style={{ fontFamily: "var(--font-display)" }}>AI Agents.</span>
        </h2>
        <div className="mt-16 h-px w-[300px] bg-[color:var(--slide-accent)]" />
      </div>
      <div className="absolute right-[120px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border border-[color:var(--slide-accent)]/30 flex items-center justify-center">
        <div className="w-[260px] h-[260px] rounded-full bg-[color:var(--slide-accent)]/20 backdrop-blur-sm border border-[color:var(--slide-accent)]/40 glow-accent" />
      </div>
    </SlideLayout>
  );
}

/* ============ 5: WHAT IS AGENT ============ */
function Slide5() {
  const cols = [
    { name: "Traditional AI", desc: "Responds to prompts", highlight: false },
    { name: "AI Assistant", desc: "Helps when asked", highlight: false },
    { name: "AI Agent", desc: "Acts independently toward objectives", highlight: true },
  ];
  return (
    <SlideLayout pageNumber={5} totalPages={TOTAL} footerLeft="What is an AI Agent?">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>03 — Definition</KICKER>
        <h2 className="slide-title max-w-[1500px]">
          An autonomous software system that <span className="text-primary-slide">reasons, plans and acts.</span>
        </h2>
        <p className="slide-body-lg mt-8 text-muted-slide max-w-[1500px]">
          Capable of understanding goals, using tools, maintaining context and
          executing actions with minimal human intervention.
        </p>
        <div className="grid grid-cols-3 gap-6 mt-auto">
          {cols.map((c) => (
            <div
              key={c.name}
              className={`p-12 rounded-2xl border ${c.highlight
                ? "bg-[color:var(--slide-primary)]/10 border-[color:var(--slide-primary)]/50 glow-primary"
                : "slide-card"
              }`}
            >
              <div className={`slide-kicker ${c.highlight ? "!text-[color:var(--slide-accent)]" : ""}`}>{c.highlight ? "★ Focus" : "Reference"}</div>
              <div className={`mt-6 text-[44px] font-medium leading-tight ${c.highlight ? "text-primary-slide" : ""}`} style={{ fontFamily: "var(--font-display)" }}>{c.name}</div>
              <p className="slide-body mt-4 text-muted-slide">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 6: CHARACTERISTICS ============ */
function Slide6() {
  const items = [
    { t: "Reasoning", d: "Plans solutions step by step" },
    { t: "Planning", d: "Breaks goals into tasks" },
    { t: "Tool Usage", d: "Calls APIs and services" },
    { t: "Memory", d: "Retains execution context" },
    { t: "Autonomy", d: "Acts independently" },
    { t: "Collaboration", d: "Works with other agents" },
    { t: "State Mgmt", d: "Maintains execution progress" },
  ];
  return (
    <SlideLayout pageNumber={6} totalPages={TOTAL} footerLeft="Characteristics">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>04 — Characteristics</KICKER>
        <h2 className="slide-title">Seven traits of an agent.</h2>
        <div className="grid grid-cols-4 gap-6 mt-16">
          {items.map((it, i) => (
            <div key={it.t} className={`slide-card p-8 flex flex-col ${i === 6 ? "col-span-1" : ""}`}>
              <div className="flex items-baseline justify-between">
                <span className="slide-kicker">0{i + 1}</span>
                <span className="text-primary-slide text-2xl">◆</span>
              </div>
              <div className="text-[34px] font-medium mt-10" style={{ fontFamily: "var(--font-display)" }}>{it.t}</div>
              <p className="slide-caption mt-3">{it.d}</p>
            </div>
          ))}
          <div className="slide-card-2 p-8 col-span-1 flex items-center justify-center">
            <p className="slide-body-lg text-primary-slide italic text-center" style={{ fontFamily: "var(--font-display)" }}>
              "Agents perceive, decide, and act."
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 7: SINGLE vs MULTI ============ */
function Slide7() {
  return (
    <SlideLayout pageNumber={7} totalPages={TOTAL} footerLeft="Single vs Multi-Agent">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>05 — Architecture</KICKER>
        <h2 className="slide-title">Single agent vs. <span className="text-primary-slide">multi-agent systems.</span></h2>
        <div className="grid grid-cols-12 gap-8 mt-14 flex-1">
          {/* single */}
          <div className="col-span-4 slide-card p-10 flex flex-col">
            <div className="slide-kicker">Single Agent</div>
            <ul className="mt-10 space-y-5 slide-body">
              <li className="flex gap-4"><span className="text-dim-slide">—</span> One model</li>
              <li className="flex gap-4"><span className="text-dim-slide">—</span> Limited context</li>
              <li className="flex gap-4"><span className="text-dim-slide">—</span> Sequential execution</li>
            </ul>
          </div>
          {/* multi */}
          <div className="col-span-4 p-10 rounded-2xl bg-[color:var(--slide-primary)]/10 border border-[color:var(--slide-primary)]/40 flex flex-col">
            <div className="slide-kicker !text-[color:var(--slide-accent)]">Multi-Agent</div>
            <ul className="mt-10 space-y-5 slide-body">
              <li className="flex gap-4"><span className="text-primary-slide">+</span> Specialized roles</li>
              <li className="flex gap-4"><span className="text-primary-slide">+</span> Shared state</li>
              <li className="flex gap-4"><span className="text-primary-slide">+</span> Parallel execution</li>
              <li className="flex gap-4"><span className="text-primary-slide">+</span> Scalable architecture</li>
            </ul>
          </div>
          {/* diagram */}
          <div className="col-span-4 slide-card-2 p-10 flex flex-col items-center justify-center">
            <div className="px-8 py-4 rounded-xl bg-[color:var(--slide-accent)]/20 border border-[color:var(--slide-accent)]/50 text-accent-slide text-[26px] font-medium">Orchestrator</div>
            <div className="w-px h-12 bg-slide" />
            <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
              {["Architect", "Developer", "Tester", "Reviewer"].map((n) => (
                <div key={n} className="px-4 py-3 rounded-lg slide-card text-center text-[22px]">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 8: WHY AGENTIC ============ */
function Slide8() {
  const items = [
    { t: "Speed", v: "Weeks → Hours", d: "Compressed cycle time" },
    { t: "Quality", v: "Consistent", d: "Reviews & test coverage" },
    { t: "Flow", v: "End-to-End", d: "One story, full story, complete" },
    { t: "Cost", v: "↓ Effort", d: "Reduced repetitive work" },
  ];
  return (
    <SlideLayout pageNumber={8} totalPages={TOTAL} footerLeft="Why Agentic Workflows">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>06 — Value</KICKER>
        <h2 className="slide-title">Why agentic workflows?</h2>
        <div className="grid grid-cols-4 gap-6 mt-16">
          {items.map((i, idx) => (
            <div key={i.t} className="slide-card p-10 flex flex-col">
              <span className="slide-kicker">0{idx + 1}</span>
              <div className="mt-8 text-[28px] text-muted-slide">{i.t}</div>
              <div className="text-[56px] font-medium mt-2 text-primary-slide leading-none" style={{ fontFamily: "var(--font-display)" }}>{i.v}</div>
              <p className="slide-caption mt-auto pt-8">{i.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-auto pt-12">
          <blockquote className="text-[44px] font-medium leading-tight italic max-w-[1600px]" style={{ fontFamily: "var(--font-display)" }}>
            <span className="text-accent-slide">"</span>Agentic systems don't replace engineers — they <span className="text-primary-slide">amplify</span> them.<span className="text-accent-slide">"</span>
          </blockquote>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 9: MCP ============ */
function Slide9() {
  return (
    <SlideLayout pageNumber={9} totalPages={TOTAL} footerLeft="MCP">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>07 — Protocol</KICKER>
        <h2 className="slide-title">MCP — the standard language for agents.</h2>
        <p className="slide-body mt-6 text-muted-slide max-w-[1500px]">
          A standardized way for AI agents to interact with enterprise systems,
          tools, APIs and repositories.
        </p>
        <div className="grid grid-cols-12 gap-8 mt-12 flex-1">
          <div className="col-span-4 slide-card p-10">
            <div className="slide-kicker !text-[color:var(--slide-accent)]">Without MCP</div>
            <ul className="mt-8 space-y-4 slide-body text-muted-slide">
              <li>— Custom integrations</li>
              <li>— Hard to maintain</li>
              <li>— Tool-specific glue</li>
            </ul>
          </div>
          <div className="col-span-4 p-10 rounded-2xl bg-[color:var(--slide-primary)]/10 border border-[color:var(--slide-primary)]/50 glow-primary">
            <div className="slide-kicker">With MCP</div>
            <ul className="mt-8 space-y-4 slide-body">
              <li className="text-primary-slide">+ Plug-and-play</li>
              <li className="text-primary-slide">+ Reusable</li>
              <li className="text-primary-slide">+ Agent agnostic</li>
            </ul>
          </div>
          <div className="col-span-4 slide-card-2 p-10 flex flex-col items-center justify-between">
            <div className="px-8 py-4 rounded-xl slide-card text-[24px]">Agent</div>
            <div className="w-px h-8 bg-slide" />
            <div className="px-8 py-4 rounded-xl bg-[color:var(--slide-primary)]/20 border border-[color:var(--slide-primary)]/50 text-primary-slide text-[26px] font-medium">MCP Layer</div>
            <div className="w-px h-8 bg-slide" />
            <div className="grid grid-cols-3 gap-2 w-full text-[16px]">
              {["Jira", "GitLab", "Jenkins", "AWS", "SonarQube", "Repos"].map((n) => (
                <div key={n} className="px-2 py-3 rounded-md slide-card text-center font-mono">{n}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 10: TRADITIONAL vs AGENTIC SDLC ============ */
function Slide10() {
  const trad = ["Story", "BA", "Architect", "Developer", "Tester", "Reviewer", "DevOps"];
  const ag = ["Story", "Orchestrator", "Agents", "CI/CD", "Verification", "Done"];
  return (
    <SlideLayout pageNumber={10} totalPages={TOTAL} footerLeft="Traditional vs Agentic SDLC">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>08 — Comparison</KICKER>
        <h2 className="slide-title">Two pipelines, two outcomes.</h2>
        <div className="grid grid-cols-2 gap-10 mt-12 flex-1">
          {/* Traditional */}
          <div className="slide-card p-10 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="slide-kicker">Traditional</div>
              <span className="slide-chrome">linear</span>
            </div>
            <div className="mt-8 grid grid-cols-7 gap-2 items-center">
              {trad.map((s, i) => (
                <div key={s} className="contents">
                  <div className="col-span-1 px-3 py-4 rounded-md slide-card-2 text-center text-[18px]">{s}</div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-slide">
              <div className="slide-kicker !text-[color:var(--slide-accent)]">Pain Points</div>
              <ul className="mt-4 space-y-2 slide-body text-muted-slide">
                <li>• Multiple handoffs</li>
                <li>• Waiting time</li>
                <li>• Manual reviews & context loss</li>
              </ul>
            </div>
          </div>
          {/* Agentic */}
          <div className="p-10 rounded-2xl bg-[color:var(--slide-primary)]/8 border border-[color:var(--slide-primary)]/50 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="slide-kicker !text-[color:var(--slide-accent)]">Agentic</div>
              <span className="slide-chrome !text-[color:var(--slide-primary)]">continuous</span>
            </div>
            <div className="mt-8 grid grid-cols-6 gap-2">
              {ag.map((s, i) => (
                <div key={s} className={`px-3 py-4 rounded-md text-center text-[18px] ${i === ag.length - 1 ? "bg-[color:var(--slide-primary)]/30 text-primary-slide font-medium" : "slide-card-2"}`}>{s}</div>
              ))}
            </div>
            <div className="mt-auto pt-10 border-t border-[color:var(--slide-primary)]/30">
              <div className="slide-kicker">Benefits</div>
              <ul className="mt-4 space-y-2 slide-body">
                <li>+ Continuous execution</li>
                <li>+ Standardized quality</li>
                <li>+ Faster delivery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 11: ARCHITECTURE ============ */
function Slide11() {
  const layers = [
    { t: "SDLC Orchestrator", s: "Central Brain", items: ["Plans, routes, supervises every story"], tone: "accent" as const },
    { t: "Specialized Agents", s: "Execution Layer", items: ["Scrum Master", "Architect", "Developer", "Tester", "Reviewer", "Deployment"], tone: "primary" as const },
    { t: "MCP Tool Servers", s: "Integration Surface", items: ["Jira", "GitLab", "Jenkins", "AWS", "SonarQube", "Codebase"], tone: "neutral" as const },
  ];
  return (
    <SlideLayout pageNumber={11} totalPages={TOTAL} footerLeft="Architecture">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>09 — System</KICKER>
        <h2 className="slide-title">Our Agentic SDLC architecture.</h2>
        <div className="mt-16 space-y-6 flex-1 flex flex-col justify-center">
          {layers.map((l, i) => (
            <div
              key={l.t}
              className={`p-10 rounded-2xl border flex items-center gap-12 ${
                l.tone === "accent" ? "bg-[color:var(--slide-accent)]/10 border-[color:var(--slide-accent)]/50 glow-accent"
                : l.tone === "primary" ? "bg-[color:var(--slide-primary)]/10 border-[color:var(--slide-primary)]/50"
                : "slide-card"
              }`}
            >
              <div className="w-[100px] text-[80px] font-medium leading-none opacity-30" style={{ fontFamily: "var(--font-display)" }}>0{i + 1}</div>
              <div className="w-[420px]">
                <div className="text-[40px] font-medium" style={{ fontFamily: "var(--font-display)" }}>{l.t}</div>
                <div className="slide-caption mt-2">{l.s}</div>
              </div>
              <div className="flex-1 flex flex-wrap gap-3">
                {l.items.map((it) => (
                  <span key={it} className="px-5 py-2 rounded-full slide-card-2 border-slide text-[20px]">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 12: ENTERPRISE MCP ============ */
function Slide12() {
  const items = [
    { t: "Jira MCP", d: "Sprint management" },
    { t: "GitLab MCP", d: "MR creation" },
    { t: "Jenkins MCP", d: "Build execution" },
    { t: "SonarQube MCP", d: "Quality analysis" },
    { t: "AWS MCP", d: "Deployment" },
    { t: "Codebase MCP", d: "Symbol search" },
  ];
  return (
    <SlideLayout pageNumber={12} totalPages={TOTAL} footerLeft="Enterprise MCP Integrations">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>10 — Integrations</KICKER>
        <h2 className="slide-title">Enterprise MCP integrations.</h2>
        <div className="grid grid-cols-3 gap-8 mt-16">
          {items.map((it, i) => (
            <div key={it.t} className="slide-card p-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-[160px] h-[160px] rounded-full bg-[color:var(--slide-primary)]/10 blur-2xl" />
              <span className="slide-kicker">0{i + 1}</span>
              <div className="mt-10 text-[44px] font-medium" style={{ fontFamily: "var(--font-display)" }}>{it.t}</div>
              <p className="slide-body mt-3 text-muted-slide">{it.d}</p>
              <div className="mt-10 h-px bg-[color:var(--slide-primary)]/30" />
              <div className="mt-4 slide-chrome">MCP</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 13: AGENT TEAM ============ */
function Slide13() {
  const agents = [
    "Scrum Master", "Solution Architect", "Test Writer",
    "Java Implementer", "Test Runner", "Code Reviewer",
    "Pipeline Monitor", "Docker Builder", "AWS SSM Deployer",
    "Deployment Verifier", "Performance Tester", "Dead Code Cleaner",
  ];
  return (
    <SlideLayout pageNumber={13} totalPages={TOTAL} footerLeft="The Agent Team">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>11 — The Team</KICKER>
        <div className="flex items-end justify-between">
          <h2 className="slide-title">Twelve agents, one delivery system.</h2>
          <div className="text-[120px] font-medium text-primary-slide leading-none" style={{ fontFamily: "var(--font-display)" }}>12</div>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-12 flex-1">
          {agents.map((a, i) => (
            <div key={a} className="slide-card p-7 flex items-center gap-5">
              <div className="w-12 h-12 rounded-full bg-[color:var(--slide-primary)]/15 border border-[color:var(--slide-primary)]/40 flex items-center justify-center text-primary-slide font-mono text-[16px]">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-[24px] font-medium leading-tight">{a}</div>
            </div>
          ))}
        </div>
        <p className="slide-caption mt-8 text-center">
          Each agent owns exactly one responsibility within the delivery lifecycle.
        </p>
      </div>
    </SlideLayout>
  );
}

/* ============ 14: END-TO-END EXECUTION ============ */
function Slide14() {
  const steps = [
    "Story Created", "Scrum Master", "Solution Architect",
    "★ Architecture Review", "Test Writer", "Java Implementer",
    "Test Runner", "Reviewer", "Pipeline Monitor",
    "★ Merge Approval", "Docker Builder", "★ Deployment Approval",
    "AWS Deployment", "Verification", "Performance Tests", "Done ✓",
  ];
  return (
    <SlideLayout pageNumber={14} totalPages={TOTAL} footerLeft="End-to-End Execution">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>12 — Flow</KICKER>
        <h2 className="slide-title">One story. <span className="text-primary-slide">Zero manual steps.</span></h2>
        <div className="mt-16 flex-1 flex items-center">
          <div className="w-full grid grid-cols-8 gap-3">
            {steps.map((s, i) => {
              const isGate = s.startsWith("★");
              const isDone = s.includes("Done");
              return (
                <div
                  key={s}
                  className={`relative p-5 rounded-xl border min-h-[120px] flex flex-col justify-between ${
                    isGate ? "bg-[color:var(--slide-accent)]/15 border-[color:var(--slide-accent)]/50"
                    : isDone ? "bg-[color:var(--slide-primary)]/20 border-[color:var(--slide-primary)]/60 glow-primary"
                    : "slide-card"
                  }`}
                >
                  <span className="slide-chrome">{String(i + 1).padStart(2, "0")}</span>
                  <div className={`text-[20px] leading-tight font-medium ${isGate ? "text-accent-slide" : isDone ? "text-primary-slide" : ""}`}>
                    {s.replace("★ ", "")}
                  </div>
                  {isGate && <span className="absolute -top-3 left-4 px-2 py-0.5 rounded slide-chrome bg-[color:var(--slide-accent)]/40 !text-[color:var(--slide-accent)]">Human Gate</span>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 15: HUMANS IN CONTROL ============ */
function Slide15() {
  return (
    <SlideLayout pageNumber={15} totalPages={TOTAL} footerLeft="Humans Stay in Control">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] flex flex-col">
        <KICKER>13 — Oversight</KICKER>
        <h2 className="slide-title">Humans stay in control.</h2>
        <div className="mt-16 flex-1 flex flex-col justify-center gap-8">
          <div className="relative h-[180px] slide-card-2 rounded-2xl flex items-center overflow-hidden">
            <div className="absolute inset-0 flex">
              <div className="flex-1 bg-[color:var(--slide-primary)]/10" />
              <div className="w-[240px] bg-[color:var(--slide-accent)]/25 border-x border-[color:var(--slide-accent)]/50 flex flex-col items-center justify-center">
                <div className="slide-kicker !text-[color:var(--slide-accent)]">Human Gate 1</div>
                <div className="text-[24px] font-medium mt-2 text-center px-2">Architecture Review</div>
              </div>
              <div className="flex-1 bg-[color:var(--slide-primary)]/10" />
              <div className="w-[240px] bg-[color:var(--slide-accent)]/25 border-x border-[color:var(--slide-accent)]/50 flex flex-col items-center justify-center">
                <div className="slide-kicker !text-[color:var(--slide-accent)]">Human Gate 2</div>
                <div className="text-[24px] font-medium mt-2 text-center px-2">Merge Approval</div>
              </div>
              <div className="flex-1 bg-[color:var(--slide-primary)]/10" />
              <div className="w-[240px] bg-[color:var(--slide-accent)]/25 border-x border-[color:var(--slide-accent)]/50 flex flex-col items-center justify-center">
                <div className="slide-kicker !text-[color:var(--slide-accent)]">Human Gate 3</div>
                <div className="text-[24px] font-medium mt-2 text-center px-2">Deployment Approval</div>
              </div>
              <div className="flex-1 bg-[color:var(--slide-primary)]/10" />
            </div>
          </div>
          <div className="grid grid-cols-7 slide-chrome text-center">
            <span>Autonomous</span><span className="text-accent-slide">Human</span><span>Autonomous</span><span className="text-accent-slide">Human</span><span>Autonomous</span><span className="text-accent-slide">Human</span><span>Autonomous</span>
          </div>
          <p className="text-center text-[44px] font-medium italic mt-8" style={{ fontFamily: "var(--font-display)" }}>
            Autonomy <span className="text-primary-slide">at scale</span>. Control <span className="text-accent-slide">where it matters.</span>
          </p>
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 16: CONCLUSION ============ */
function Slide16() {
  const takeaways = [
    "EdgeFabric demonstrates a production-grade distributed platform.",
    "AI Agents transform delivery from sequential workflows into autonomous execution.",
    "MCP enables seamless integration with enterprise systems.",
    "Human approvals remain at strategic checkpoints.",
    "Agentic SDLC significantly improves speed, consistency, and scalability.",
  ];
  return (
    <SlideLayout pageNumber={16} totalPages={TOTAL} footerLeft="Conclusion">
      <div className="absolute inset-0 px-[120px] pt-[180px] pb-[140px] grid grid-cols-12 gap-12">
        <div className="col-span-5 flex flex-col">
          <KICKER>14 — Conclusion</KICKER>
          <h2 className="slide-title">Key takeaways.</h2>
          <div className="mt-auto pt-12">
            <p className="text-[36px] font-medium italic leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              From a Jira story to production deployment, Agentic SDLC turns software delivery into a
              <span className="text-primary-slide"> continuously operating engineering system.</span>
            </p>
          </div>
        </div>
        <div className="col-span-7 flex flex-col gap-4">
          {takeaways.map((t, i) => (
            <div key={t} className="slide-card p-7 flex gap-6 items-start">
              <div className="text-[36px] font-medium text-primary-slide leading-none w-[60px]" style={{ fontFamily: "var(--font-display)" }}>0{i + 1}</div>
              <div className="text-[26px] leading-snug pt-1">{t}</div>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  );
}

/* ============ 18: THANK YOU ============ */
function Slide17() {
  return (
    <SlideLayout pageNumber={17} totalPages={TOTAL} variant="hero" footerLeft="Thank You">
      <div className="absolute inset-0 px-[120px] flex flex-col justify-center">
        <div className="slide-kicker mb-10">— Fin —</div>
        <h1 className="slide-title-lg">
          Thank <span className="text-primary-slide italic" style={{ fontFamily: "var(--font-display)" }}>you.</span>
        </h1>
        <p className="slide-subtitle mt-10 max-w-[1300px]">Questions & discussion.</p>
        <div className="mt-20 flex items-center gap-8">
          <div className="h-px w-[200px] bg-[color:var(--slide-primary)]" />
          <div>
            <div className="text-[32px] font-medium">EdgeFabric & Agentic SDLC</div>
            <div className="slide-caption mt-1">Reimagining software delivery with AI agents.</div>
          </div>
        </div>
      </div>
      <div className="absolute -left-[200px] -top-[200px] w-[700px] h-[700px] rounded-full border border-[color:var(--slide-accent)]/20" />
      <div className="absolute -left-[100px] -top-[100px] w-[500px] h-[500px] rounded-full border border-[color:var(--slide-accent)]/15" />
    </SlideLayout>
  );
}

export const slides = [
  { id: 1, title: "Cover", Component: Slide1 },
  { id: 2, title: "Introducing EdgeFabric", Component: Slide2 },
  { id: 3, title: "Why EdgeFabric Matters", Component: Slide3 },
  { id: 4, title: "Section: AI Agents", Component: Slide4 },
  { id: 5, title: "What is an AI Agent?", Component: Slide5 },
  { id: 6, title: "Characteristics", Component: Slide6 },
  { id: 7, title: "Single vs Multi-Agent", Component: Slide7 },
  { id: 8, title: "Why Agentic Workflows", Component: Slide8 },
  { id: 9, title: "MCP", Component: Slide9 },
  { id: 10, title: "Traditional vs Agentic SDLC", Component: Slide10 },
  { id: 11, title: "Architecture", Component: Slide11 },
  { id: 12, title: "Enterprise MCP Integrations", Component: Slide12 },
  { id: 13, title: "The Agent Team", Component: Slide13 },
  { id: 14, title: "End-to-End Execution", Component: Slide14 },
  { id: 15, title: "Humans in Control", Component: Slide15 },
  { id: 16, title: "Conclusion", Component: Slide16 },
  { id: 17, title: "Thank You", Component: Slide17 },
];
