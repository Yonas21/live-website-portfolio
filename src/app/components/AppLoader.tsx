"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeLines: string[] = [
  "// bootstrapping services...",
  "import { createServer } from 'node:http'",
  "import { connect } from '@db/postgres'",
  "const cache = await import('redis')",
  "const app = createServer((req, res) => res.end('ok'))",
  "await connect({ host: 'db.internal', ssl: true })",
  "// warming up microservices",
  "service('auth').start().withTracing('datadog')",
  "service('payments').start().withRetries(3)",
  "// optimizing",
  "enableCache({ ttl: '5m' }).reduceLatency(0.40)",
  "aws.s3.coldStorage().save(22000, 'monthly')",
  "// streaming build artifacts...",
  "deploy('nextjs').to('edge').region('us-east-1')",
  "system.ready = true",
];

const AppLoader: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [typed, setTyped] = useState<string>("");
  const mountedRef = useRef(false);

  const line = useMemo(() => codeLines[currentLine] ?? "", [currentLine]);

  useEffect(() => {
    if (mountedRef.current) return; // run once
    mountedRef.current = true;

    const alreadySeen = typeof window !== 'undefined' && sessionStorage.getItem('seenLoader') === '1';
    const requestedMs = Number(process.env.NEXT_PUBLIC_LOADER_MS) || 900; // default 0.9s
    const hardTimeout = setTimeout(() => setVisible(false), alreadySeen ? 0 : requestedMs);

    const start = Date.now();

    let charIndex = 0;
    let typingInterval: NodeJS.Timeout | null = null;

    const typeNext = () => {
      if (charIndex < line.length) {
        setTyped((prev) => prev + line[charIndex]);
        charIndex += 1;
      } else {
        // move to next line
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1);
          setTyped("");
          charIndex = 0;
        }, 120);
      }
    };

    typingInterval = setInterval(() => {
      typeNext();
    }, 18 + Math.random() * 30);

    const onHydrated = () => {
      setVisible(false);
      try { sessionStorage.setItem('seenLoader', '1'); } catch {}
    };
    // If the document is already interactive, hide quickly; otherwise, rely on timeout.
    if (document.readyState === "interactive" || document.readyState === "complete") {
      const elapsed = Date.now() - start;
      const remaining = Math.max(0, Math.min(400, requestedMs - elapsed));
      setTimeout(onHydrated, remaining);
    } else {
      const handle = () => onHydrated();
      window.addEventListener("DOMContentLoaded", handle, { once: true });
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval);
      window.removeEventListener("DOMContentLoaded", () => {});
      clearTimeout(hardTimeout);
    };
  }, [line]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[70] grid place-items-center bg-white dark:bg-gray-950"
        >
          <motion.div
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="w-[92%] max-w-xl rounded-xl border border-gray-300 dark:border-gray-800 bg-white/80 dark:bg-black/60 backdrop-blur px-4 py-5 shadow-2xl"
            aria-label="Loading"
          >
            <div className="flex items-center gap-2 pb-3">
              <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
              <span className="ml-auto text-xs text-gray-400">booting portfolio</span>
            </div>
            <div className="h-48 overflow-hidden rounded-md border border-gray-300 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 p-3 font-mono text-[12.5px] leading-relaxed text-gray-700 dark:text-gray-300">
              {codeLines.slice(0, currentLine).map((l, i) => (
                <div key={i} className="whitespace-pre text-gray-400">{l}</div>
              ))}
              <div className="whitespace-pre">
                {typed}
                <span className="caret" />
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>Initializing services…</span>
              <span>Yonas Alem</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AppLoader;
