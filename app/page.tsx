"use client";
import Form from "./components/Form";
import HeaderComponet from "./components/Header";

function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-zinc-200 to-slate-50">
     <HeaderComponet/>    
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <Form />
    </main>
    </div>

  );
}

export default Home;
