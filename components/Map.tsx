// app/components/Map.tsx
"use client";

export default function MapComponent() {
  return (
    <div className="relative w-full">
      <div className="h-[600px] w-full rounded-2xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.580254495122!2d12.38304707615681!3d45.63916792174765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47794e59cab793dd%3A0x3e35b77125ee558f!2sVia%20Tommaso%20da%20Modena%2C%201B%2C%2031056%20Area%20Industriale%20Treviso-mare%20TV%2C%20Italy!5e0!3m2!1sen!2s!4v1769183377808!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant Location Map"
        />
      </div>
    </div>
  );
}
