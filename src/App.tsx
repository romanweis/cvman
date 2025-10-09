import { CVSection } from "./components/CVSection";
import { HeroCard } from "./components/HeroCard";
import { Sidebar } from "./components/Sidebar";
import { TimelineList } from "./components/TimelineList";
import { recruitingDeCv } from "./data/recruitingDeCv";

function App() {
  const profile = recruitingDeCv;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-8 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:gap-10">
        <div className="lg:col-span-2">
          <HeroCard profile={profile} />
        </div>
        <main className="space-y-6">
          <CVSection title="Berufserfahrung" accent>
            <TimelineList items={profile.experiences} />
          </CVSection>

          <CVSection title="Ausbildung & Zertifizierungen" accent>
            <TimelineList items={profile.education} />
          </CVSection>

          <CVSection title="Referenzen & Verfügbarkeit">
            <p>
              Referenzkontakte auf Anfrage verfügbar. Bitte individuell ergänzen
              und bei Bedarf in der Recruiting-Kommunikation anführen.
            </p>
            <p>
              Bevorzugte nächste Einsätze: Architektur- und
              Lead-Engineering-Rollen in .NET/Cloud-Umfeldern (Remote oder
              Hybrid Zürich/DACH).
            </p>
          </CVSection>
        </main>
        <Sidebar profile={profile} />
      </div>
    </div>
  );
}

export default App;
