import { atom, useAtom } from "jotai";
import { useEffect } from "react";

const pictures = [
  "DSC00680",
  "DSC01145",
  "DSC00966",
  "DSC01420",
  "DSC00983",
  "DSC02064",
  "DSC01011",
  "DSC02031",
  "DSC00933",
  "DSC02064",
  "DSC01040",
  "DSC01420",
  "DSC01064",
  "DSC02069",
  "DSC01071",
  "DSC02064",
  "DSC01103",
  "DSC02031",
  "DSC01489",
  "DSC02064",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

// export const UI = () => {
//   const [page, setPage] = useAtom(pageAtom);

//   useEffect(() => {
//     const audio = new Audio("/audios/page-flip-01a.mp3");
//     audio.play();
//   }, [page]);

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  useEffect(() => {
    const handleUserInteraction = () => {
      const audio = new Audio(new URL("/audios/page-flip-01a.mp3", import.meta.url).href);
      audio.play().catch(error => {
        console.error("Audio play failed:", error);
      });
    };

    // Add an event listener for the first interaction
    document.addEventListener('click', handleUserInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [page]);

  return (
    <>
      <main className=" pointer-events-none select-none z-10 fixed  inset-0  flex justify-between flex-col">
        <a
          className="pointer-events-auto mt-10 ml-10"
          href="https://ayushraj-portfolio.vercel.app/"
        >
          <img className="w-20" src="/images/pooja.png" />
        </a>
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => setPage(index)}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300  px-4 py-3 rounded-full  text-lg uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => setPage(pages.length)}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Happy Birthday
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Chutki
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              Pooja
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              God Bless You
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              wishing you a
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              very happy
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              and
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Healthy life
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">
              Happy Birthday
            </h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              chutki
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">
              pooja
            </h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              God Bless you
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">
              Wishing you a
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Very happy
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">
              and
            </h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Healthy Life
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
