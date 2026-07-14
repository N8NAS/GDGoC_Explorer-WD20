import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import AboutPage from './pages/AboutPage';
import { useProjectStore } from './stores/useProjectStore';

export default function App() {
  const projects = useProjectStore((state) => state.projects);
  return (
    <BrowserRouter>
      <div className="w-[1126px] max-w-full mx-auto text-center border-x border-[#e5e4e7] min-h-screen flex flex-col box-border">
        <nav className="flex justify-center gap-8 p-6 border-b border-[#e5e4e7] text-[#08060d] font-medium">
          <Link to="/" className="hover:text-[#aa3bff] transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-[#aa3bff] transition-colors flex items-center gap-1.5">
            Projects 
            <span className="bg-[#aa3bff] text-white px-2 py-0.5 rounded-full text-xs font-mono">{projects.length}</span>
          </Link>
          <Link to="/about" className="hover:text-[#aa3bff] transition-colors">About</Link>
        </nav>
        <main className="p-8 flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}