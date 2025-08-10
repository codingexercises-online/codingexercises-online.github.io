export function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto max-w-6xl px-6 py-6 text-sm text-foreground/70 flex items-center justify-between">
        <p>© {new Date().getFullYear()} CodingExercises.Online</p>
        <div className="flex items-center gap-4">
          <a href="https://nextjs.org" target="_blank" rel="noreferrer" className="hover:underline">
            Built with Next.js
          </a>
          <a href="https://jupyterlite.readthedocs.io" target="_blank" rel="noreferrer" className="hover:underline">
            JupyterLite
          </a>
        </div>
      </div>
    </footer>
  );
}
