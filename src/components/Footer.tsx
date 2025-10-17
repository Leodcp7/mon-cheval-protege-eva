export default function Footer() {
  return (
    <footer className="py-10 border-t border-primary/10 text-sm text-body">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-gradient-to-tr from-primary to-primary2"></span>
          <span className="font-semibold text-ink">Flowline</span>
        </div>
        <p>© {new Date().getFullYear()} Flowline — All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-ink">Privacy</a>
          <a href="#" className="hover:text-ink">Terms</a>
        </div>
      </div>
    </footer>
  );
}
