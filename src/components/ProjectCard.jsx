import React from "react";
import { ArrowUpRight, Download, ChevronRight, Folder } from "lucide-react";

const ProjectCard= ({ project }) => {
  return (
    <div className="bg-card text-card-foreground w-full max-w-sm h-[500px] flex flex-col justify-between rounded-2xl overflow-hidden group border border-border/80 hover:border-border/100 shadow-sm hover:shadow-md transition-all duration-300">
      
      {/* Top Content Area */}
      <div className="flex flex-col min-h-0">
        
        {/* Media Preview Container */}
        <div className="w-full h-48 bg-muted/40 overflow-hidden relative shrink-0">
          {project.media ? (
            project.isVideo ? (
              <video
                src={project.media}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <img
                src={project.media}
                alt={project.title || "Project preview"}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            )
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground bg-muted/20 p-4">
              <div className="p-3 rounded-xl bg-background/80 shadow-sm mb-2 flex items-center justify-center">
                {project.icon || <Folder className="w-6 h-6 text-muted-foreground/60" />}
              </div>
              <p className="text-xs font-medium text-center text-muted-foreground/80">
                Visual preview coming soon
              </p>
            </div>
          )}


          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Text & Tech Details Container */}
        <div className="p-5 flex flex-col gap-2.5 overflow-hidden">
          
          {/* Tech Stack List */}
          {/* {project.stack && project.stack.length > 0 && (
            <div className="flex flex-wrap gap-1.5 items-center min-h-[24px]">
              {project.stack.map((tech, i) => {
                const isObject = typeof tech === "object" && tech !== null;
                const badgeUrl = isObject ? (tech).badge : undefined;
                const name = isObject ? (tech).name : (tech);

                return badgeUrl ? (
                  <img
                    key={i}
                    src={badgeUrl}
                    alt={name}
                    className="h-5 object-contain transition-transform hover:scale-110"
                  />
                ) : (
                  <span
                    key={i}
                    className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-medium bg-secondary text-secondary-foreground border border-border/50"
                  >
                    {name}
                  </span>
                );
              })}
            </div>
          )} */}

          <h3 className="font-bold text-xl text-foreground tracking-tight line-clamp-1 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-muted text-xs sm:text-sm leading-relaxed ">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 pb-5 pt-2 mt-auto border-t border-border/40">
        <a
          href={project.link || "#"}
          download={project.isDownload ? true : undefined}
          target={project.isDownload ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-primary text-reverse px-4 py-2 text-xs font-semibold hover:bg-primary/90 hover:gap-2.5 transition-all cursor-pointer shadow-sm active:scale-95"
        >
          {project.isDownload ? (
            <>
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </>
          ) : (
            <>
              <ArrowUpRight className="w-3.5 h-3.5" />
              <span>Visit Site</span>
            </>
          )}
        </a>

        <button
          onClick={project.onSeeMore}
          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer group/btn"
        >
          <span>See details</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;