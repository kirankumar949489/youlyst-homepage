import HomePage from "./home-page/HomePage";
import Header from "./Shared/Header";
import Footer from "./Shared/Footer";

export default function Home() {
  
  return (
    <div className=" min-h-screen font-open">
      <Header/>
      <main className="flex flex-col   lg:px-[40px] pt-[60px] pb-[20px]">
      <HomePage/>
      </main>
      <Footer/>
    </div>
  );
}
