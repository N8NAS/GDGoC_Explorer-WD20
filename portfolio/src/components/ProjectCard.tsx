interface ProjectCardProps{
    title:string;
    description:string;
    tags?:string[];
    githubUrl?:string;
}


export default function ProjectCard({title, description, tags, githubUrl}:ProjectCardProps){
    return(
        <div className="border border-[#ddd] p-4 rounded-lg my-2.5 bg-white text-[#08060d] text-left">
            <h3 className="text-2xl font-medium mb-2">{title}</h3>
            <p className="text-[#6b6375] m-0">{description}</p>
            {tags && (
                <div className="flex gap-2 mt-2.5 flex-wrap">
                {tags.map((tag) => (
                    <span key={tag} className="bg-[#eee] px-2 py-0.5 rounded text-[0.85rem] font-mono text-[#08060d]">
                    {tag}
                    </span>
                ))}
                </div>
            )}
            {githubUrl && (
                <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-block mt-3 text-[#aa3bff] hover:underline font-medium text-sm"
                >
                    View on GitHub →
                </a>
            )}
        </div>
    );
}