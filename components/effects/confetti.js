import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function ConfettiEffect() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;

        const duration = 15 * 1000;
        const animationEnd = Date.now() + duration;
        let skew = 1;
        let rafId;
        let lastEmit = 0;

        const scopedConfetti = confetti.create(canvas, {
            resize: true,
            useWorker: true
        });

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        function frame(now = performance.now()) {
            const timeLeft = animationEnd - Date.now();
            const ticks = Math.max(120, 260 * (timeLeft / duration));
            skew = Math.max(0.8, skew - 0.001);

            if (now - lastEmit >= 34) {
                lastEmit = now;
                scopedConfetti({
                    particleCount: 2,
                    startVelocity: 0,
                    ticks,
                    origin: {
                        x: Math.random(),
                        y: Math.random() * skew - 0.2
                    },
                    colors: [
                        "#3b82f6", // blue
                        "#22c55e", // green
                        "#facc15", // yellow
                        "#fb923c", // orange
                        "#ef4444", // red
                        "#ec4899", // pink
                        "#a855f7", // purple
                        "#ffffff"  // white
                    ],
                    shapes:["circle", "square"],
                    gravity: randomInRange(0.15, 0.25),
                    scalar: randomInRange(0.5, 1.2),
                    drift: randomInRange(-0.35, 0.35),
                    disableForReducedMotion: true
                });
            }

            if (timeLeft > 0) {
                rafId = requestAnimationFrame(frame);
            }
        }

        frame();

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 1
            }}
        />
    );
}
