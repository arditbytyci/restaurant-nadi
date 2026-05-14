"use client";

export default function MapComponent() {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d697.3951116208646!2d12.38462039170403!3d45.639164065470766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47794f0005bc45f5%3A0x22db9f4166e156db!2sNadi%20sapori%20balcanici!5e0!3m2!1sen!2s!4v1778768669415!5m2!1sen!2s"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Restaurant Nadi location map"
      className="h-full w-full"
    />
  );
}
