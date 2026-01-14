export default function Footer() {
    return (
      <footer className="bg-navy-950 py-12 text-center border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-xl font-display font-bold text-platinum mb-4">GANGNAM DALTO</h2>
          <p className="text-slate-gray text-sm mb-6 font-mono">
            Designed for Solo & Private Guests.<br />
            Gangnam-gu, Seoul, Republic of Korea
          </p>
          <p className="text-xs text-navy-700">
            &copy; {new Date().getFullYear()} DALTO. All rights reserved.
          </p>
        </div>
      </footer>
    );
  }
