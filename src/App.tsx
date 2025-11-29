import { CVSection } from "./components/CVSection";
import { HeroCard } from "./components/HeroCard";
import { Sidebar } from "./components/Sidebar";
import { TimelineList } from "./components/TimelineList";
import { leadNetEnCv as profile } from "./data/leadNetEnCv";

function App() {
  return (
    <div className="cv-page min-h-screen bg-white text-slate-900">
      <div className="cv-grid mx-auto grid max-w-5xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:col-span-2">
          <HeroCard profile={profile} />
        </div>
        <main className="cv-main space-y-6">
          <CVSection title={profile.labels.experience} accent>
            <TimelineList items={profile.experiences} />
          </CVSection>

          <CVSection title={profile.labels.education} accent>
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
