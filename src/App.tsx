import { CVSection } from "./components/CVSection";
import { HeroCard } from "./components/HeroCard";
import { ProjectHighlights } from "./components/ProjectHighlights";
import { Sidebar } from "./components/Sidebar";
import { TimelineList } from "./components/TimelineList";
import { recruitingDeCv } from "./data/recruitingDeCv";

function App() {
  const profile = recruitingDeCv;

  return (
    <div className="min-h-screen bg-slate-100 bg-gradient-to-br from-slate-100 via-white to-emerald-50 text-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:px-10">
        <HeroCard profile={profile} />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]">
          <main className="space-y-10">
            <CVSection title="Projekt-Highlights" accent>
              <ProjectHighlights projects={profile.projectHighlights} />
            </CVSection>

            <CVSection title="Berufserfahrung" accent>
              <TimelineList items={profile.experiences} />
            </CVSection>

            <CVSection title="Projektarbeit zum Ausfüllen">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque facilisis, lorem a aliquet efficitur, nisi ipsum
                vestibulum metus, nec tempor neque ipsum nec ipsum. Curabitur at
                eleifend mi.
              </p>
              <ul className="grid gap-3 rounded-2xl border border-dashed border-emerald-200 bg-emerald-50/40 p-5 text-sm text-slate-600">
                <li>
                  <span className="font-semibold text-emerald-700">
                    Projektname / Kunde:
                  </span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  (Bitte ergänzen)
                </li>
                <li>
                  <span className="font-semibold text-emerald-700">
                    Rolle & Verantwortung:
                  </span>{" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  (Bitte ergänzen)
                </li>
                <li>
                  <span className="font-semibold text-emerald-700">
                    Outcome & Kennzahlen:
                  </span>{" "}
                  Max. drei messbare Ergebnisse oder Mehrwerte eintragen.
                </li>
                <li>
                  <span className="font-semibold text-emerald-700">
                    Technologie-Stack:
                  </span>{" "}
                  Liste der wichtigsten Tools, Plattformen und Patterns.
                </li>
              </ul>
            </CVSection>

            <CVSection title="Ausbildung & Zertifizierungen" accent>
              <TimelineList items={profile.education} />
            </CVSection>

            <CVSection title="Referenzen & Next Steps">
              <p>
                Referenzkontakte auf Anfrage verfügbar. Bitte individuell
                ergänzen: Ansprechpartner:innen, Kontaktdaten und kurze
                Beschreibung der Zusammenarbeit.
              </p>
              <p>
                Recruiting-Hinweis: Bevorzugte Branchen, Projektarten oder
                Contracting-Modelle hier aufführen, um den Match-Prozess zu
                beschleunigen.
              </p>
            </CVSection>
          </main>
          <Sidebar profile={profile} />
        </div>
      </div>
    </div>
  );
}

export default App;
