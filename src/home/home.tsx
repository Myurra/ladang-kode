import {Hero} from './hero';
import {Kategori } from './kategori';
import {Postingan } from './postingan';
import {News } from './news';
import { Testimoni } from './testimoni';
function TutorialPage() {
  return (
    <div className="bg-[#0f172a]">
      <Hero />
      <Kategori />
      <Postingan />
      <News />
      <Testimoni />
    </div>
  );
}

export default TutorialPage;
