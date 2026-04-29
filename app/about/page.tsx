"use client";

import { Container } from "@/components/layout/Container";

import { Header } from "@/components/layout/Header/Header";
import MapComponent from "@/components/Map/Map";
import { useRef, useEffect, useState } from "react";

export default function AboutPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Set isClient to true and check mobile on mount
  useEffect(() => {
    setIsClient(true);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Add smooth scrolling to just this container
  useEffect(() => {
    const container = scrollContainerRef.current;
    const mapContainer = mapContainerRef.current;
    if (!container) return;

    let isScrolling = false;
    let targetScroll = 0;
    let currentScroll = 0;
    let scrollTimeout: NodeJS.Timeout;

    const smoothScroll = () => {
      if (!container) return;

      currentScroll += (targetScroll - currentScroll) * 0.04;

      if (Math.abs(targetScroll - currentScroll) < 0.5) {
        currentScroll = targetScroll;
        isScrolling = false;
        setIsScrolling(false);
      } else {
        isScrolling = true;
      }

      container.scrollTop = currentScroll;

      if (isScrolling) {
        requestAnimationFrame(smoothScroll);
      }
    };

    const handleWheel = (e: WheelEvent) => {
      // On mobile, use native scrolling for better UX
      if (isMobile) return;

      e.preventDefault();

      const maxScroll = container.scrollHeight - container.clientHeight;
      targetScroll += e.deltaY * 0.8;
      targetScroll = Math.max(0, Math.min(targetScroll, maxScroll));

      // Temporarily disable pointer events on map while scrolling
      if (mapContainer && !isMobile) {
        mapContainer.style.pointerEvents = "none";
      }
      setIsScrolling(true);

      if (scrollTimeout) clearTimeout(scrollTimeout);

      scrollTimeout = setTimeout(() => {
        if (mapContainer && !isMobile) {
          mapContainer.style.pointerEvents = "auto";
        }
      }, 200);

      if (!isScrolling) {
        isScrolling = true;
        requestAnimationFrame(smoothScroll);
      }
    };

    // Handle touch for mobile - simplified
    // let touchStartY = 0;
    let isTouchScrolling = false;

    const handleTouchStart = (e: TouchEvent) => {
      // touchStartY = e.touches[0].clientY;
      isTouchScrolling = true;

      // On mobile, don't interfere with map scrolling
      const target = e.target as HTMLElement;
      const isMap = target.closest("iframe") !== null;
      if (isMap) return;

      // For mobile, we'll use native scrolling but add some prevention
      // to avoid conflicts with the iframe
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isTouchScrolling) return;

      // Check if we're trying to scroll the map iframe
      const target = e.target as HTMLElement;
      const isMap = target.closest("iframe") !== null;
      if (isMap) {
        // Let the map handle its own scrolling
        return;
      }
    };

    const handleTouchEnd = () => {
      isTouchScrolling = false;
    };

    if (!isMobile) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [isMobile]);

  return (
    <>
      <Header />

      <div
        ref={scrollContainerRef}
        className="fixed overflow-y-auto"
        style={{
          top: "var(--header-height, 120px)",
          left: 0,
          right: 0,
          bottom: 0,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          // On mobile, use native scrolling
          overflowY: isMobile ? "auto" : "hidden",
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
          @media (max-width: 768px) {
            /* Allow native scrolling on mobile */
            div {
              overflow-y: auto !important;
              -webkit-overflow-scrolling: touch !important;
            }
          }
        `}</style>

        <Container className="bg-secondary min-h-[200svh] rounded-xl">
          <div className="p-4 md:p-8 grid grid-rows-[auto_auto_auto] gap-8 md:gap-20">
            {/* About Us Section */}
            <div className=" text-primary rounded-lg p-4 md:p-6 lg:p-8 space-y-8 md:space-y-12 lg:space-y-20">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary">
                About Us
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-full lg:max-w-6xl leading-relaxed">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims
                of.
              </p>
            </div>

            {/* Location Section */}
            <div className=" text-primary rounded-lg p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary">
                Location
              </h1>

              {/* Map Container */}
              <div
                ref={mapContainerRef}
                className="my-4 md:my-8 relative"
                style={{
                  pointerEvents: isScrolling && !isMobile ? "none" : "auto",
                  opacity: isScrolling && !isMobile ? 0.9 : 1,
                  height: isMobile ? "400px" : "600px", // Adjust height for mobile
                }}
              >
                {isClient && <MapComponent />}
              </div>

              {/* Address Below Map */}
              <div className="text-center pt-4 md:pt-6">
                <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
                  Via Tommaso da Modena 1/b • Roncade (TV), Italy
                </p>
                <a
                  href="https://maps.google.com/?q=45.639164,12.383047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-base sm:text-lg md:text-xl px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-secondary transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Third Section - Add content here */}
            <div className=" rounded-lg p-4 md:p-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-primary mb-4 md:mb-8">
                Our Story
              </h1>
              <p className="text-base text-primary sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                Add your restaurant&apos;s story, team information, or other
                content here. This section is fully responsive and will look
                great on all devices.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
