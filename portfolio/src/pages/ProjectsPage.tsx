import ProjectCard from "../components/ProjectCard";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useProjectStore } from "../stores/useProjectStore";

export default function ProjectsPage(){
    const [favorites, setFavorites] = useLocalStorage<string[]>("my_fav_projects", []);
    const toggleFavorite = (projectTitle: string) => {
        if (favorites.includes(projectTitle)) {
            setFavorites(favorites.filter(title => title !== projectTitle));
        } else {
            setFavorites([...favorites, projectTitle]);
        }
    };
    const { projects, addProject, removeProject } = useProjectStore();
    return (
        <div className="w-full">
            <h1 className="text-[56px] font-medium text-[#08060d] tracking-[-1.68px] my-8 leading-tight">Projects</h1>
            <p className="text-[#6b6375] mb-6">This page contains all my future and current projects</p>
            
            <div className="bg-[#f4f3ec] border border-[#e5e4e7] p-4 rounded-lg my-6 text-[#08060d]">
                <strong className="font-medium">Saved Favorite Projects ({favorites.length}):</strong>{' '}
                {favorites.join(', ') || 'None yet. Try clicking the favorite buttons below!'}
            </div>

             <div className="mb-6 text-left">
                <button 
                  onClick={() => addProject({
                    title: `Demo Project #${projects.length + 1}`,
                    description: "Dynamically added via Zustand Global Store!",
                    tags: ["Zustand", "TypeScript", "Global State"]
                  })}
                  className="px-4 py-2 bg-[#aa3bff] hover:bg-[#8f24e6] text-white font-medium rounded-lg cursor-pointer transition-colors text-sm shadow-sm"
                >
                    + Add New Project (Zustand Global Store)
                </button>
            </div>
            
            {projects.map((proj) => (
                <div key={proj.id} className="mb-6 relative">
                    <div className="flex gap-2 mb-2 items-center">
                        <button 
                          onClick={() => toggleFavorite(proj.title)}
                          className="px-3 py-1.5 bg-[#f4f3ec] hover:bg-[#e5e4e7] text-[#08060d] rounded font-mono text-sm transition-colors cursor-pointer border border-[#e5e4e7]"
                        >
                            {favorites.includes(proj.title) ? '★ Remove from Favorites' : '☆ Favorite this Project'}
                        </button>
                        <button 
                          onClick={() => removeProject(proj.id)}
                          className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 rounded font-mono text-sm transition-colors cursor-pointer border border-red-200"
                        >
                            × Delete Project
                        </button>
                    </div>
                    <ProjectCard
                        title={proj.title}
                        description={proj.description}
                        tags={proj.tags}
                        githubUrl={proj.githubUrl}
                    />
                </div>
            ))}
        </div>
    );
}