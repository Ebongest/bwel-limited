import { useEffect, useRef, useState } from "react";
import { Mic, MicOff, PhoneOff } from "lucide-react";
import Vapi from "@vapi-ai/web";

import { Button } from "@/components/ui/button";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";

type CallStatus = "unavailable" | "idle" | "connecting" | "active";

export function VoiceCallButton() {
  const [status, setStatus] = useState<CallStatus>(
    company.ebongest.vapiPublicKey ? "idle" : "unavailable",
  );
  const vapiRef = useRef<Vapi | null>(null);

  useEffect(() => {
    if (!company.ebongest.vapiPublicKey) return;

    const vapi = new Vapi(company.ebongest.vapiPublicKey);
    vapiRef.current = vapi;
    const handleCallStart = () => setStatus("active");
    const handleCallEnd = () => setStatus("idle");
    const handleError = () => setStatus("idle");

    vapi.on("call-start", handleCallStart);
    vapi.on("call-end", handleCallEnd);
    vapi.on("error", handleError);

    return () => {
      vapi.stop();
      vapi.removeAllListeners();
      vapiRef.current = null;
    };
  }, []);

  const handleVoiceCall = async () => {
    if (!vapiRef.current || status === "unavailable") return;
    if (status === "active") {
      vapiRef.current.stop();
      return;
    }

    setStatus("connecting");
    try {
      await vapiRef.current.start(company.ebongest.agentId);
    } catch {
      setStatus("idle");
    }
  };

  const label =
    status === "active"
      ? "End voice call"
      : status === "connecting"
        ? "Connecting voice call"
        : status === "unavailable"
          ? "Voice calls are coming soon"
          : "Start a voice call";

  return (
    <div className="group fixed bottom-6 right-24 z-50 flex items-center gap-2 sm:bottom-7 sm:right-28">
      <span className="pointer-events-none hidden rounded-sm bg-foreground px-3 py-2 text-xs font-semibold text-background opacity-0 shadow-lg transition-opacity group-hover:opacity-100 sm:block">
        {label}
      </span>
      <Button
        type="button"
        size="icon"
        variant={status === "active" ? "destructive" : "default"}
        aria-label={label}
        title={label}
        disabled={status === "unavailable" || status === "connecting"}
        onClick={handleVoiceCall}
        className={cn(
          "size-14 rounded-full shadow-floating",
          status === "connecting" && "animate-pulse",
        )}
      >
        {status === "active" ? <PhoneOff /> : status === "unavailable" ? <MicOff /> : <Mic />}
      </Button>
    </div>
  );
}
