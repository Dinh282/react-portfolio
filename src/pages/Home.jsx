import { AnimatedPage } from "../components/PageAnimations";

export default function Home() {
  return (
    <AnimatedPage>
      <div className="flex flex-col justify-center items-center space-y-4 mx-auto w-[80%]">
        <h1 className="text-4xl dark:text-white text-black decoration-1 py-4 mt-10">
        "In life, we must embrace the 'Lobster Effect.' Just like lobsters, we often need to shed our old shells, leave our comfort zones, and endure moments of vulnerability to grow stronger and emerge even better than before." 
        </h1>
        <p className="pb-1 text-3xl text-gray dark:text-white"> - Joshua Bohde</p>
      </div>
    </AnimatedPage>
  );
}
