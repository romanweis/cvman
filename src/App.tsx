import { CVSection } from "./components/CVSection";
import { HeroCard } from "./components/HeroCard";
import { Sidebar } from "./components/Sidebar";
import { TimelineList } from "./components/TimelineList";
import { smgEnCv } from "./data/smgEnCv";

function App() {
  const profile = smgEnCv;

  return (
    <div className="cv-page min-h-screen bg-white text-slate-900">
      <div className="cv-grid mx-auto grid max-w-5xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:col-span-2">
          <HeroCard profile={profile} />
        </div>
        <main className="cv-main space-y-6">
          <CVSection title="Berufserfahrung" accent>
            <TimelineList items={profile.experiences} />
          </CVSection>

          <CVSection title="Ausbildung & Zertifizierungen" accent>
            <TimelineList items={profile.education} />
          </CVSection>
        </main>
        <div className="cv-sidebar">
          <Sidebar profile={profile} />
        </div>
      </div>
    </div>
  );
}

export default App;
