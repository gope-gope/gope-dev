import { useParams, Link } from "react-router-dom";
import { getProject } from "./projects";
import ProjectGallery from "./components/ProjectGallery";
import { useLayoutEffect } from "react";

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = getProject(projectId);

  useLayoutEffect(() => {
    const html = document.documentElement;
    const prevScrollBehavior = html.style.scrollBehavior;

    html.style.scrollBehavior = "auto"; // disable smooth scrolling
    html.scrollTop = 0;
    document.body.scrollTop = 0;

    // Restore smooth scrolling
    html.style.scrollBehavior = prevScrollBehavior;
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 py-36">
          <h1 className="text-3xl font-bold text-primary">Project not found</h1>
          <p className="mt-4 text-muted-foreground">
            There is no project with ID &quot;{projectId}&quot;.
          </p>
          <Link
            to="/"
            className="mt-8 text-primary underline underline-offset-4 hover:no-underline"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:px-12">
        <Link
          to="/#work"
          className="mb-8 inline-flex items-center gap-2 text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          ← Back to Work
        </Link>

        <article className="space-y-10">
          <header className="space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
              {project.year && <span>{project.year}</span>}
              {project.role && (
                <>
                  {project.year && <span>·</span>}
                  <span>{project.role}</span>
                </>
              )}
            </div>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              {project.title}
            </h1>
            {project.tagline && (
              <p className="text-xl text-muted-foreground">{project.tagline}</p>
            )}
          </header>

          <div className="overflow-hidden rounded-2xl border bg-muted/30">
            <img
              src={project.overviewImage}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{project.description}</p>
          </div>

          {project.bullets && project.bullets.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                My Responsibilities
              </h2>
              <ul className="list-none space-y-2 p-0">
                {project.bullets.map((bullet, idx) => (
                  <li
                    key={idx}
                    className="relative pl-5 before:absolute before:left-0 before:top-0 before:font-bold before:text-red-600 before:content-['+']"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.techStack.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Tech stack</h2>
              <ul className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.links && project.links.length > 0 && (
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Links</h2>
              <ul className="flex flex-wrap gap-4">
                {project.links.map(({ label, url }) => (
                  <li key={label}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline underline-offset-4 hover:no-underline"
                    >
                      {label} →
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {project.gallery && project.gallery.length > 0 && (
            <ProjectGallery
              title="Screenshots"
              images={project.gallery}
              projectTitle={project.title}
            />
          )}
        </article>
      </div>
    </div>
  );
};

export default ProjectPage;
