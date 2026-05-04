"use client";

import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import Image from "next/image";
import Link from "next/link";

import { MenuModal } from "./MenuModal";
import { ForkKnife } from "@/components/ui/ForkKnife";
import { Container } from "../Container";
import { PageTransitionOverlay } from "../PageTransitionOverlay";

const MENU_BACKDROP_EXIT_MS = 140;
const PAGE_TRANSITION_PUSH_DELAY_MS = 280;
const PAGE_TRANSITION_MIN_COVER_MS = 700;
const PAGE_TRANSITION_REVEAL_DELAY_MS = 720;
const PAGE_TRANSITION_FALLBACK_MS = 4200;
const COLOR_PRIMARY = "#ffeedf";
const COLOR_SECONDARY = "#450b1d";
const COLOR_HOME = COLOR_PRIMARY;

const getPageChromeColor = (path: string) =>
  path === "/" ? COLOR_HOME : COLOR_PRIMARY;

const setRootChromeColor = (color: string) => {
  if (typeof document === "undefined") return;
  document.documentElement.style.setProperty("--browser-chrome-color", color);
};

const setThemeColor = (color: string) => {
  if (typeof document === "undefined") return;

  const metas = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  if (metas.length === 0) {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "theme-color");
    meta.setAttribute("content", color);
    document.head.appendChild(meta);
    return;
  }

  metas.forEach((meta) => meta.setAttribute("content", color));
};

const setStableThemeColor = () => {
  setThemeColor(COLOR_PRIMARY);
};

const setBrowserChromeColor = (color: string) => {
  setRootChromeColor(color);
  setThemeColor(color);
};

export const Header: React.FC = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isMenuOpenRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);
  const routeTransitionStartRef = useRef(0);
  const routeTransitionTargetRef = useRef<string | null>(null);
  const routeTransitionTimersRef = useRef<number[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [routeTransitionState, setRouteTransitionState] = useState<
    "idle" | "covering" | "settling"
  >("idle");

  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const isHome = pathname === "/";

  const clearRouteTransitionTimers = useCallback(() => {
    routeTransitionTimersRef.current.forEach((timer) => {
      window.clearTimeout(timer);
    });
    routeTransitionTimersRef.current = [];
  }, []);

  const addRouteTransitionTimer = useCallback(
    (callback: () => void, delay: number) => {
      const timer = window.setTimeout(() => {
        routeTransitionTimersRef.current =
          routeTransitionTimersRef.current.filter((item) => item !== timer);
        callback();
      }, delay);

      routeTransitionTimersRef.current.push(timer);
      return timer;
    },
    [],
  );

  const openMenu = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setStableThemeColor();
    setRootChromeColor(COLOR_SECONDARY);
    isMenuOpenRef.current = true;
    setIsMenuClosing(false);
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback((
    nextPath = pathname,
    options: { keepChromeSecondary?: boolean } = {},
  ) => {
    if (!isMenuOpenRef.current) return;

    if (options.keepChromeSecondary) {
      setBrowserChromeColor(COLOR_SECONDARY);
    } else {
      setStableThemeColor();
      setRootChromeColor(getPageChromeColor(nextPath));
    }

    isMenuOpenRef.current = false;
    setIsMenuClosing(true);
    setIsMenuOpen(false);

    closeTimerRef.current = window.setTimeout(() => {
      setIsMenuClosing(false);
      closeTimerRef.current = null;
    }, MENU_BACKDROP_EXIT_MS);
  }, [pathname]);

  const finishRouteTransition = useCallback((nextPath: string) => {
    setBrowserChromeColor(getPageChromeColor(nextPath));
    setRouteTransitionState("settling");

    addRouteTransitionTimer(() => {
      setRouteTransitionState("idle");
      routeTransitionTargetRef.current = null;
    }, PAGE_TRANSITION_REVEAL_DELAY_MS);
  }, [addRouteTransitionTimer]);

  const navigateFromMenu = useCallback((nextPath: string) => {
    if (routeTransitionTargetRef.current) return;

    if (nextPath === pathname) {
      closeMenu(nextPath);
      return;
    }

    clearRouteTransitionTimers();
    routeTransitionTargetRef.current = nextPath;
    routeTransitionStartRef.current = window.performance.now();
    setBrowserChromeColor(COLOR_SECONDARY);
    setRouteTransitionState("covering");
    closeMenu(nextPath, { keepChromeSecondary: true });

    addRouteTransitionTimer(() => {
      router.push(nextPath);
    }, PAGE_TRANSITION_PUSH_DELAY_MS);

    addRouteTransitionTimer(() => {
      if (!routeTransitionTargetRef.current) return;
      finishRouteTransition(routeTransitionTargetRef.current);
    }, PAGE_TRANSITION_FALLBACK_MS);
  }, [
    addRouteTransitionTimer,
    clearRouteTransitionTimers,
    closeMenu,
    finishRouteTransition,
    pathname,
    router,
  ]);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
      clearRouteTransitionTimers();
    };
  }, [clearRouteTransitionTimers]);

  // Sync header height to CSS variable
  useLayoutEffect(() => {
    const update = () => {
      if (!headerRef.current) return;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerRef.current.offsetHeight}px`,
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpenRef.current) {
      closeMenu(pathname);
      return;
    }

    if (routeTransitionTargetRef.current) return;

    setStableThemeColor();
    setRootChromeColor(getPageChromeColor(pathname));
  }, [closeMenu, pathname]);

  useEffect(() => {
    if (routeTransitionTargetRef.current !== pathname) return;

    clearRouteTransitionTimers();

    const elapsed = window.performance.now() - routeTransitionStartRef.current;
    const delay = Math.max(PAGE_TRANSITION_MIN_COVER_MS - elapsed, 0);

    addRouteTransitionTimer(() => {
      finishRouteTransition(pathname);
    }, delay);
  }, [
    addRouteTransitionTimer,
    clearRouteTransitionTimers,
    finishRouteTransition,
    pathname,
  ]);

  const isRouteTransitionActive = routeTransitionState !== "idle";
  const isMenuChromeActive =
    isMenuOpen || isMenuClosing || isRouteTransitionActive;

  // Scroll lock: keep this light for mobile Safari.
  useEffect(() => {
    if (isMenuChromeActive) {
      lenis?.stop();
      document.documentElement.classList.add("menu-open");
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.documentElement.classList.remove("menu-open");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.documentElement.classList.remove("menu-open");
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isMenuChromeActive, lenis]);

  const toggleMenu = () => {
    if (isMenuOpenRef.current) {
      closeMenu(pathname);
      return;
    }

    openMenu();
  };

  const buttonText = isMenuOpen ? "close" : "open";

  // Style differs between home (transparent overlay) and inner pages (solid cream)
  const headerBg =
    isHome || isMenuChromeActive ? "bg-transparent" : "bg-primary";
  const showLightChrome = isHome || isMenuChromeActive;
  const forkColor = showLightChrome ? "#ffeedf" : "#450b1d";
  const chromeColor = showLightChrome ? "text-primary" : "text-secondary";

  return (
    <>
      <Container
        ref={headerRef}
        className={`absolute top-0 left-0 right-0 z-[100] grid grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] py-2 pt-[calc(env(safe-area-inset-top)+0.5rem)] ${headerBg}`}
      >
        {/* Address: desktop only */}
        <div className="relative z-10 hidden items-center lg:flex">
          <a
            href="https://maps.google.com/?q=45.639164,12.383047"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-xl transition-opacity hover:opacity-75 ${chromeColor}`}
          >
            Via Tommaso da Modena 1/b Roncade (TV)
          </a>
        </div>

        {/* Logo */}
        <div className=" relative z-10 flex justify-center">
          <Link
            href="/"
            aria-label="Go to Restaurant Nadi home"
            className="relative h-32 w-32 md:h-28 md:w-28 lg:h-45 lg:w-45"
          >
            <Image
              src="/logo-nadi-light.png"
              fill
              alt="Restaurant Nadi logo"
              className={`object-contain ${
                showLightChrome ? "opacity-100" : "opacity-0"
              }`}
              priority
            />
            <Image
              src="/logo-nadi-dark.png"
              fill
              alt=""
              aria-hidden="true"
              className={`object-contain ${
                showLightChrome ? "opacity-0" : "opacity-100"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Menu toggle */}
        <div className=" relative z-10 flex items-center justify-end">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
            className="flex flex-col items-center"
          >
            <ForkKnife open={isMenuOpen} color={forkColor} />

            <span
              className={`text-sm font-light lg:text-xl ${chromeColor}`}
            >
              {buttonText}
            </span>
          </button>
        </div>
      </Container>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <MenuModal onNavigate={navigateFromMenu} />
        )}
      </AnimatePresence>

      <PageTransitionOverlay state={routeTransitionState} />
    </>
  );
};
