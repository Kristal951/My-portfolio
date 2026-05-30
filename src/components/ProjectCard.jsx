import { ArrowUpRight, Download } from "lucide-react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-card max-w-sm h-[520px] pb-4 flex flex-col justify-between rounded-xl overflow-hidden group border border-border shadow-sm">
      <div className="flex flex-col min-h-0">
        <div className="w-full h-[200px] bg-black/5 overflow-hidden relative">
          {project.media ? (
            project.isVideo ? (
              <video
                src={project.media}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <img
                src={project.media}
                alt={project.title || "Project preview"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            )
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400">
              <div className="p-4 rounded-full bg-surface-container/50 mb-3 flex items-center justify-center">
                {project.icon}
              </div>
              <p className="text-sm font-medium text-center">
                Visual preview coming soon
              </p>
            </div>
          )}

          {project.media && (
            <div className="absolute inset-0 pointer-events-none bg-black opacity-20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-bg via-transparent to-transparent opacity-60" />
        </div>

        <div className="p-4">
          <div className="flex flex-wrap gap-2 py-1">
            {project.stack?.map((tech, i) => (
              <img
                key={i}
                src={tech.badge}
                alt={tech.name}
                className="h-6 transition-transform hover:scale-105"
              />
            ))}
          </div>
          <h3 className="font-bold text-2xl my-2 text-foreground tracking-tight line-clamp-1">
            {project.title}
          </h3>
          <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed line-clamp-4">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex w-full items-center justify-between px-4 mt-2">
        <a
          href={project.link || "#"}
          download={project.isDownload}
          target={project.isDownload ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-inverse text-sm font-bold hover:gap-3 transition-all cursor-pointer shadow-sm"
        >
          {project.isDownload ? (
            <>
              <Download className="w-4 h-4" />
              <span>Download APK</span>
            </>
          ) : (
            <>
              <ArrowUpRight className="w-4 h-4" />
              <span>Visit Site</span>
            </>
          )}
        </a>

        <button className="text-sm font-semibold text-gray-500 hover:text-foreground transition-colors cursor-pointer">
          See more
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
