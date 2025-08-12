import { useEffect, useRef, useState } from "react";

type Props = {
  src?: string; // defaults to /audio.mp3 in public
};

const LS_KEY = "sound_pref"; // "enabled" | "disabled"

export default function SoundManager({ src = "/audio.mp3" }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(() => {
    const pref = localStorage.getItem(LS_KEY);
    return pref === null; // ask only if we don't know yet
  });
  const [enabled, setEnabled] = useState<boolean>(() => {
    return localStorage.getItem(LS_KEY) === "enabled";
  });
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // Create audio element once
  useEffect(() => {
    const el = new Audio(src);
    el.loop = true;
    el.preload = "auto";
    el.muted = false;
    audioRef.current = el;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);

    return () => {
      el.pause();
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
      audioRef.current = null;
    };
  }, [src]);

  // Apply mute state to element
  useEffect(() => {
    if (audioRef.current) audioRef.current.muted = isMuted;
  }, [isMuted]);

  // If user had enabled earlier, start playing after element is ready
  useEffect(() => {
    if (!enabled || !audioRef.current) return;
    // attempt play (must be triggered by a gesture; if previously enabled it may still work)
    audioRef.current.play().catch(() => {
      // If it fails due to autoplay policy, we’ll wait for a user click (controls below)
    });
  }, [enabled]);

  const enableSound = async () => {
    localStorage.setItem(LS_KEY, "enabled");
    setEnabled(true);
    setShowPopup(false);
    try {
      await audioRef.current?.play();
    } catch {
      // If blocked, user can hit Play later
    }
  };

  const disableSound = () => {
    localStorage.setItem(LS_KEY, "disabled");
    setEnabled(false);
    setShowPopup(false);
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => setIsMuted((m) => !m);

  const stopSound = () => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setIsPlaying(false);
  };

  const playSound = async () => {
    try {
      await audioRef.current?.play();
    } catch {
      // ignore
    }
  };

  return (
    <>
      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900">
            <h2 className="text-xl font-semibold">Enable sound?</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              We can play a short theme when you browse. You can mute or stop
              anytime.
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={enableSound}
                className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              >
                Yes, enable
              </button>
              <button
                onClick={disableSound}
                className="rounded-xl border px-4 py-2 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-800"
              >
                No, thanks
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating controls */}
      <div className="fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-2xl border p-2 shadow-lg backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/90">
        <button
          onClick={isPlaying ? stopSound : playSound}
          className={`rounded-xl border px-3 py-1 text-sm transition-colors 
      ${
        isPlaying
          ? "hover:bg-red-500 hover:text-white" // Stop button hover = red
          : "hover:bg-green-500 hover:text-white" // Play button hover = green
      } 
      dark:border-neutral-700`}
          title={isPlaying ? "Stop" : "Play"}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>

        <button
          onClick={toggleMute}
          className={`rounded-xl border px-3 py-1 text-sm transition-colors
      ${
        isMuted
          ? "hover:bg-yellow-500 hover:text-white" // Unmute hover = yellow
          : "hover:bg-blue-500 hover:text-white" // Mute hover = blue
      }
      dark:border-neutral-700`}
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? "Unmute" : "Mute"}
        </button>
      </div>
    </>
  );
}
