import { company } from "@/lib/content";

export function WhatsAppButton() {
  return (
    <a
      href={company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter 3VIE-BTP sur WhatsApp"
      className="fixed bottom-20 left-4 z-50 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-lg transition hover:brightness-95 sm:bottom-6 sm:left-6 sm:w-auto sm:gap-2 sm:px-4"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.86 9.86 0 0 0 12.04 2Zm0 1.82c4.46 0 8.09 3.63 8.09 8.09 0 4.46-3.63 8.09-8.09 8.09-1.42 0-2.81-.37-4.03-1.07l-.29-.17-3.11.82.83-3.04-.19-.31a8.03 8.03 0 0 1-1.21-4.32c0-4.46 3.63-8.09 8.09-8.09Zm4.61 10.8c-.12-.06-.71-.35-1.08-.53-.29-.14-.5-.2-.71.14-.21.35-.82.95-1 .97-.18.02-.35.02-.6-.14-.71-.35-1.37-.72-2.05-1.48-.49-.52-.95-1.15-1.29-1.71-.27-.45-.03-.58.16-.77.18-.22.35-.41.41-.53.06-.12.03-.35-.02-.5-.06-.14-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.5.08-.76.35-.26.27-1 1-1 2.43s1.02 2.82 1.17 3.01c.14.2 2 3.05 4.85 4.28 1.8.78 2.28.72 2.7.68.41-.05 1.34-.55 1.53-1.07.19-.53.19-.98.14-1.07-.06-.09-.22-.14-.46-.26Z" />
      </svg>
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp</span>
    </a>
  );
}
