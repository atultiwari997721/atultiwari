"use client";

import Link from "next/link";
import { Download, FileText } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0a0a0d] py-10 px-4 md:px-8 flex flex-col items-center">
      {/* Action Bar */}
      <div className="w-full max-w-[800px] flex justify-end gap-3 mb-6 print:hidden">
        <Link href="/" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md font-bold text-sm transition-colors border border-slate-300">
          Back to Home
        </Link>
        <a
          href="/Atul_Tiwari_Resume.pdf"
          download="Atul_Tiwari_Resume.pdf"
          className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md font-bold text-sm flex items-center gap-2 transition-colors shadow-lg shadow-violet-500/20"
        >
          <Download size={16} /> Download PDF
        </a>
      </div>

      {/* PDF Embed */}
      <div className="w-full max-w-[800px] bg-white shadow-2xl rounded-sm overflow-hidden" style={{ minHeight: "calc(100vh - 100px)" }}>
        <iframe
          src="/Atul_Tiwari_Resume.pdf"
          className="w-full"
          style={{ height: "calc(100vh - 100px)", minHeight: "600px" }}
          title="Atul Tiwari Resume"
        />
      </div>
    </div>
  );
}
