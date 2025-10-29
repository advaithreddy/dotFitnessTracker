import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans bg-black/40 backdrop-blur-sm">
      <p className="text-2xl text-zinc-800 dark:text-zinc-200">
        Welcome to{" "}
        <span className="font-bold text-blue-600 dark:text-blue-400">
          dotFitnessTracker
        </span>
        !
      </p>
    </div>
  );
}
