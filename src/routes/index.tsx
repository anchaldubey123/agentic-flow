import * as React from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { z } from "zod";
import { ScaledSlide } from "@/components/ScaledSlide";
import { slides } from "@/components/slides";

const searchSchema = z.object({
  slide: z.coerce.number().int().min(1).max(slides.length).optional(),
  mode: z.enum(["grid", "present"]).optional(),
});

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EdgeFabric & Agentic SDLC" },
      { name: "description", content: "Reimagining software delivery with AI agents — from Jira story to production, autonomously." },
      { property: "og:title", content: "EdgeFabric & Agentic SDLC" },
      { property: "og:description", content: "Reimagining software delivery with AI agents — from Jira story to production, autonomously." },
    ],
  }),
  validateSearch: searchSchema,
  component: SlidesApp,
});

function SlidesApp() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });
  const current = Math.min(Math.max(search.slide ?? 1, 1), slides.length);
  const mode = search.mode ?? null;
  const Slide = slides[current - 1].Component;

  const go = useCallback(
    (n: number, opts?: { mode?: "grid" | "present" | null }) => {
      const clamped = Math.min(Math.max(n, 1), slides.length);
      navigate({
        search: {
          slide: clamped,
          mode: opts && "mode" in opts ? (opts.mode ?? undefined) : search.mode,
        },
      });
    },
    [navigate, search.mode],
  );

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      else if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
      else if (e.key === "g" || e.key === "G") {
        navigate({ search: { slide: current, mode: mode === "grid" ? undefined : "grid" } });
      } else if (e.key === "Escape") {
        if (mode) navigate({ search: { slide: current } });
        if (document.fullscreenElement) document.exitFullscreen();
      } else if (e.key === "f" || e.key === "F") {
        document.documentElement.requestFullscreen?.();
        navigate({ search: { slide: current, mode: "present" } });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev, mode, current, navigate]);

  useEffect(() => {
    document.title = `${current}/${slides.length} — ${slides[current - 1].title}`;
  }, [current]);

  if (mode === "grid") return <GridView current={current} onPick={(n) => go(n, { mode: null })} onClose={() => navigate({ search: { slide: current } })} />;
  if (mode === "present") return <PresentView current={current} onNext={next} onPrev={prev} onExit={() => { document.exitFullscreen?.().catch(() => {}); navigate({ search: { slide: current } }); }} Slide={Slide} />;

  return <EditorView current={current} onNext={next} onPrev={prev} onGrid={() => navigate({ search: { slide: current, mode: "grid" } })} onPresent={async () => { try { await document.documentElement.requestFullscreen?.(); } catch {} navigate({ search: { slide: current, mode: "present" } }); }} onJump={(n) => go(n)} Slide={Slide} />;
}

function EditorView({
  current, onNext, onPrev, onGrid, onPresent, onJump, Slide,
}: {
  current: number;
  onNext: () => void;
  onPrev: () => void;
  onGrid: () => void;
  onPresent: () => void;
  onJump: (n: number) => void;
  Slide: () => React.ReactElement;
}) {
  return (
    <div className="h-screen w-screen flex flex-col bg-background text-foreground overflow-hidden">
      {/* toolbar */}
      <header className="h-14 border-b border-border flex items-center justify-between px-5 shrink-0 bg-card/60 backdrop-blur">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">EdgeFabric · Deck</span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <button onClick={onPrev} className="px-3 py-1.5 rounded-md border border-border hover:bg-muted">←</button>
          <span className="px-3 text-muted-foreground">
            {String(current).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <button onClick={onNext} className="px-3 py-1.5 rounded-md border border-border hover:bg-muted">→</button>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <button onClick={onGrid} className="px-3 py-1.5 rounded-md border border-border hover:bg-muted font-mono uppercase tracking-wider">Grid (G)</button>
          <button onClick={onPresent} className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-mono uppercase tracking-wider">Present (F)</button>
        </div>
      </header>

      <div className="flex-1 flex min-h-0">
        {/* sidebar */}
        <aside className="w-[260px] border-r border-border overflow-y-auto p-3 space-y-2 bg-card/40 shrink-0">
          {slides.map((s, i) => {
            const active = i + 1 === current;
            const { Component } = s;
            return (
              <button
                key={s.id}
                onClick={() => onJump(i + 1)}
                className={`w-full text-left rounded-lg border transition-all ${
                  active ? "border-primary bg-primary/10" : "border-border hover:border-muted-foreground/40"
                }`}
              >
                <div className="aspect-video relative overflow-hidden rounded-md">
                  <ScaledSlide><Component /></ScaledSlide>
                </div>
                <div className="px-3 py-2 flex items-center justify-between">
                  <span className="font-mono text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-xs truncate ml-2 text-right">{s.title}</span>
                </div>
              </button>
            );
          })}
        </aside>

        {/* canvas */}
        <main className="flex-1 relative bg-[var(--background)] p-10 min-w-0">
          <div className="absolute inset-6 rounded-xl overflow-hidden border border-border bg-black">
            <ScaledSlide><Slide /></ScaledSlide>
          </div>
        </main>
      </div>
    </div>
  );
}

function GridView({ current, onPick, onClose }: { current: number; onPick: (n: number) => void; onClose: () => void }) {
  return (
    <div className="min-h-screen bg-background p-10">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-medium">All slides</h1>
        <button onClick={onClose} className="px-4 py-2 rounded-md border border-border hover:bg-muted font-mono text-xs uppercase tracking-wider">Close (Esc)</button>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-4 gap-6">
        {slides.map((s, i) => {
          const { Component } = s;
          const active = i + 1 === current;
          return (
            <button
              key={s.id}
              onClick={() => onPick(i + 1)}
              className={`group text-left rounded-xl border overflow-hidden transition-all ${
                active ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary/60"
              }`}
            >
              <div className="aspect-video relative bg-black">
                <ScaledSlide><Component /></ScaledSlide>
              </div>
              <div className="px-4 py-3 flex items-center justify-between bg-card">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm">{s.title}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PresentView({ current, onNext, onPrev, onExit, Slide }: { current: number; onNext: () => void; onPrev: () => void; onExit: () => void; Slide: () => React.ReactElement }) {
  const [showChrome, setShowChrome] = useState(true);
  const timer = useRef<number | null>(null);
  useEffect(() => {
    const ping = () => {
      setShowChrome(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setShowChrome(false), 2200);
    };
    ping();
    window.addEventListener("mousemove", ping);
    return () => {
      window.removeEventListener("mousemove", ping);
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-50">
      <ScaledSlide><Slide /></ScaledSlide>
      <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 rounded-full bg-black/70 border border-white/15 backdrop-blur transition-opacity ${showChrome ? "opacity-100" : "opacity-0"}`}>
        <button onClick={onPrev} className="px-3 py-1 rounded text-white/80 hover:text-white">←</button>
        <span className="font-mono text-xs text-white/70">{String(current).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
        <button onClick={onNext} className="px-3 py-1 rounded text-white/80 hover:text-white">→</button>
        <div className="w-px h-4 bg-white/20" />
        <button onClick={onExit} className="px-3 py-1 rounded text-white/80 hover:text-white font-mono text-[10px] uppercase tracking-wider">Exit</button>
      </div>
    </div>
  );
}
