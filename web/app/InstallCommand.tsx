"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

type InstallCommandProps = {
  commandLabel: string;
  command: string;
  copyLabel: string;
  copiedLabel: string;
  footnote?: string;
};

type CopyTextBoxProps = {
  label: string;
  text: string;
  copyLabel: string;
  copiedLabel: string;
};

export type SkillUsageStep = {
  title: string;
  text: string;
  commandLabel: string;
  command: string;
  exampleLabel: string;
  example: string;
};

type SkillUsageGuideProps = {
  steps: SkillUsageStep[];
  copyLabel: string;
  copiedLabel: string;
};

function useClipboardValue(text: string, resetDelay = 1400) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const copy = useCallback(async () => {
    const onSuccess = () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      setCopied(true);
      timeoutRef.current = window.setTimeout(() => setCopied(false), resetDelay);
    };

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        onSuccess();
        return;
      }
    } catch (error) {
      // fall through to legacy path
    }

    const temp = document.createElement("textarea");
    temp.value = text;
    temp.setAttribute("readonly", "");
    temp.style.position = "fixed";
    temp.style.opacity = "0";
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    onSuccess();
  }, [resetDelay, text]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return { copied, copy };
}

export function InstallCommand({
  commandLabel,
  command,
  copyLabel,
  copiedLabel,
  footnote,
}: InstallCommandProps) {
  const [typedCommand, setTypedCommand] = useState("");
  const { copied, copy } = useClipboardValue(command);

  const commandWithSuffix = useMemo(() => `${command} `, [command]);

  useEffect(() => {
    let index = 0;
    let interval: number | null = null;
    const timer = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setTypedCommand(commandWithSuffix.slice(0, index));
        if (index >= commandWithSuffix.length) {
          if (interval) {
            window.clearInterval(interval);
          }
        }
      }, 17);
    }, 170);

    return () => {
      window.clearTimeout(timer);
      if (interval) {
        window.clearInterval(interval);
      }
    };
  }, [commandWithSuffix]);

  return (
    <div className="install-command">
      <div className="install-command-head">{commandLabel}</div>
      <pre className="install-terminal" aria-live="polite">
        <code>{typedCommand}</code>
        <button
          aria-label={copied ? copiedLabel : copyLabel}
          className={`copy-button copy-inline ${copied ? "copied" : ""}`}
          onClick={copy}
          type="button"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <span className="install-cursor" aria-hidden="true">
          ▋
        </span>
      </pre>
      <small>{footnote}</small>
    </div>
  );
}

export function CopyTextBox({ label, text, copyLabel, copiedLabel }: CopyTextBoxProps) {
  const { copied, copy } = useClipboardValue(text);

  return (
    <div className="copy-text-box">
      <div className="copy-text-head">
        <span>{label}</span>
        <button
          aria-label={copied ? copiedLabel : copyLabel}
          className={`copy-button ${copied ? "copied" : ""}`}
          onClick={copy}
          type="button"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>
      <pre>
        <code>{text}</code>
      </pre>
    </div>
  );
}

export function SkillUsageGuide({ steps, copyLabel, copiedLabel }: SkillUsageGuideProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex] ?? steps[0];

  if (!activeStep) {
    return null;
  }

  return (
    <div className="skill-usage-board">
      <ol className="usage-steps">
        {steps.map((step, index) => {
          const isActive = index === activeIndex;

          return (
            <li key={step.title}>
              <button
                aria-pressed={isActive}
                className={`usage-step-button ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="usage-examples">
        <CopyTextBox
          copiedLabel={copiedLabel}
          copyLabel={copyLabel}
          label={activeStep.commandLabel}
          text={activeStep.command}
        />
        <CopyTextBox
          copiedLabel={copiedLabel}
          copyLabel={copyLabel}
          label={activeStep.exampleLabel}
          text={activeStep.example}
        />
      </div>
    </div>
  );
}
