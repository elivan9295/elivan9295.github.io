import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyButton({ text, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error("Failed to copy: ", err));
  };

  return (
<button
  onClick={handleCopy}
  className={`flex flex-col sm:flex-row items-center gap-1 px-3 py-2 bg-green-100 rounded hover:bg-green-200 transition-colors text-sm sm:text-base ${className}`}
>
  {/* Text */}
  <span className="truncate">{text}</span>

  {/* Icon + feedback */}
  <div className="flex items-center gap-1">
    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
    {copied ? "Copied" : "Copy"}
  </div>
</button>
  );
};