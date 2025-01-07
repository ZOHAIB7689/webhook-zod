"use client";
import Form from "./components/Form";
import HeaderComponet from "./components/Header";

function Home() {
  return (
    <div className="bg-gradient-to-br from-teal-200 via-rose-200 to-cyan-100">
     <HeaderComponet/>    
    <main className="flex  min-h-screen flex-col items-center justify-between p-24">
      <Form />
    </main>
    </div>

  );
}

export default Home;
