import '../style/global.sass';
import Header from '@/main/header';
import MainContent from '@/main/main_content';
import Footer from '@/main/footer';

export default function Home() {
  return (
    <div className="main_body">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
