import type { CSSProperties } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import { CVSection } from "./components/CVSection";
import { HeroCard } from "./components/HeroCard";
import { Sidebar } from "./components/Sidebar";
import { TimelineList } from "./components/TimelineList";
import type { CvProfile } from "./types/cv";

const defaultTheme = { primary: "#1e293b", primaryDark: "#0f172a" };

function getThemeStyle(profile: CvProfile): CSSProperties {
  const theme = profile.theme ?? defaultTheme;
  return {
    ["--cv-accent" as string]: theme.primary,
    ["--cv-accent-strong" as string]: theme.primaryDark,
  };
}

// Roman's CVs
import { bcgEnCv } from "./roman/bcgEnCv";
import { csharpDevDeCv } from "./roman/csharpDevDeCv";
import { jbSeniorFullStackEnCv } from "./roman/jbSeniorFullStackEnCv";
import { leadNetEnCv } from "./roman/leadNetEnCv";
import { lgtEnCv } from "./roman/lgtEnCv";
import { manukaiEnCv } from "./roman/manukaiEnCv";
import { oliverBernardEnCv } from "./roman/oliverBernardEnCv";
import { owtDeCv } from "./roman/owtDeCv";
import { recruitingDeCv } from "./roman/recruitingDeCv";
import { smgDeCv } from "./roman/smgDeCv";
import { smgEnCv } from "./roman/smgEnCv";
import { vontobelEnCv } from "./roman/vontobelEn";
import { zkbDeCv } from "./roman/zkbDeCv";
import { zkbDevDeCv } from "./roman/zkbDevDeCv";

// Julia's CVs
import { defaultEnCv as juliaDefaultEnCv } from "./julia/defaultEnCv";
import { hitachiCosEnCv as juliaHitachiCosEnCv } from "./julia/hitachiCosEnCv";

const profiles: Record<string, Record<string, CvProfile>> = {
  roman: {
    "recruiting-de": recruitingDeCv,
    "bcg-en": bcgEnCv,
    "csharp-dev": csharpDevDeCv,
    "owt-de": owtDeCv,
    "smg-de": smgDeCv,
    "smg-en": smgEnCv,
    "leadnet-en": leadNetEnCv,
    "lgt-en": lgtEnCv,
    "oliverbernard-en": oliverBernardEnCv,
    "manukai-en": manukaiEnCv,
    "vontobel-en": vontobelEnCv,
    "zkb-de": zkbDeCv,
    "zkb-dev-de": zkbDevDeCv,
    "jb-senior-fullstack-en": jbSeniorFullStackEnCv,
  },
  julia: {
    "default-en": juliaDefaultEnCv,
    "hitachi-cos-en": juliaHitachiCosEnCv,
  },
};

function CvPage() {
  const { person, variant } = useParams<{ person: string; variant: string }>();
  const profile = profiles[person || ""]?.[variant || ""];

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">CV not found</h1>
          <p className="mt-2 text-slate-600">
            Profile "{person}/{variant}" does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="cv-page min-h-screen bg-white text-slate-900"
      style={getThemeStyle(profile)}
    >
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:person/:variant" element={<CvPage />} />
        <Route
          path="/"
          element={<Navigate to="/roman/recruiting-de" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
