"use client";

import { useEffect, useRef, useState } from "react";
import { Locale, localeFlags, localeLabels, locales } from "./i18n";

function localePath(locale: Locale) {
  return locale === "ko" ? "/ko" : `/${locale}`;
}

export function LanguageSwitcher({
  activeLocale,
  label,
}: {
  activeLocale: Locale;
  label: string;
}) {
  const [hash, setHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!switcherRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);

    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  function changeLocale(locale: Locale) {
    window.location.href = `${localePath(locale)}${hash}`;
  }

  return (
    <div className="language-switcher" ref={switcherRef}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={label}
        className="language-trigger"
        onClick={() => setIsOpen((current) => !current)}
        type="button"
      >
        <span aria-hidden="true">{localeFlags[activeLocale]}</span>
        <strong>{localeLabels[activeLocale]}</strong>
        <svg className="language-chevron" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M5.5 7.5 10 12l4.5-4.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="language-menu" role="listbox" aria-label={label}>
          {locales.map((locale) => (
            <button
              aria-selected={activeLocale === locale}
              className={activeLocale === locale ? "active" : undefined}
              key={locale}
              lang={locale}
              onClick={() => changeLocale(locale)}
              role="option"
              type="button"
            >
              <span aria-hidden="true">{localeFlags[locale]}</span>
              <strong>{localeLabels[locale]}</strong>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
