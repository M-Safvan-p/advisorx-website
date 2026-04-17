import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Target, Users, Zap, BarChart, ChevronRight, ChevronDown, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const NavDropdown = ({ title, path, description }) => (
  <div className="relative group h-full flex items-center">
    <span className="flex items-center gap-1 cursor-default text-gray-600 hover:text-advisor-blue transition-colors font-semibold py-6">
      {title} <ChevronDown size={14} className="text-gray-400 group-hover:text-advisor-blue transition-colors" />
    </span>
    
    <div className="absolute top-[100%] left-0 w-80 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-1">
      <div className="bg-white text-corporate-dark shadow-xl shadow-blue-900/10 rounded-xl border border-gray-100 p-8">
        <h4 className="font-bold text-sm uppercase tracking-widest text-advisor-blue mb-3">{title}</h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 font-normal normal-case">
          {description}
        </p>
        <Link to={path} className="text-advisor-blue text-xs font-bold uppercase tracking-widest hover:text-blue-800 flex items-center gap-2 group-hover/link:gap-3 transition-all">
          Explore {title} <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-white/80 backdrop-blur-md text-corporate-dark px-4 md:px-8 sticky top-0 z-50 border-b border-gray-100/50 shadow-sm transition-all h-20">
      <div className="flex justify-between items-center h-full">
        <Link to="/" className="flex items-center">
          <img src="/Advisorx new logo.png" alt="AdvisorX Logo" className="h-7 md:h-8 object-contain opacity-90 hover:opacity-100 transition-opacity" />
        </Link>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-bold tracking-widest uppercase h-full">
          <Link to="/" className="text-gray-600 hover:text-advisor-blue transition-colors flex items-center font-semibold h-full">Home</Link>
          <NavDropdown 
            title="Incubation" 
            path="/incubation" 
            description="A controlled 90-day venture build cycle designed for serious founders and validated execution."
          />
          <NavDropdown 
            title="Investors" 
            path="/investors" 
            description="Disciplined equity participation. We connect investors to validated ventures only when justified."
          />
          <NavDropdown 
            title="Community" 
            path="/community" 
            description="A curated network of founders and operators. We are a governed ecosystem, not a free community."
          />
        </div>

        <div className="hidden md:flex items-center h-full">
          <a href="mailto:startups@advisorxgrowth.com" className="bg-advisor-blue text-white px-7 py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-advisor-accent shadow-lg shadow-blue-500/30 hover:-translate-y-0.5 hover:shadow-blue-500/50 transition-all duration-300">
            Apply
          </a>
        </div>
        
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-advisor-blue transition-colors">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-6 px-6 flex flex-col gap-6 animate-fade-in-up">
          <Link to="/" className="text-gray-800 font-bold uppercase tracking-widest text-sm tracking-wide">Home</Link>
          <Link to="/incubation" className="text-gray-800 font-bold uppercase tracking-widest text-sm tracking-wide">Incubation</Link>
          <Link to="/investors" className="text-gray-800 font-bold uppercase tracking-widest text-sm tracking-wide">Investors</Link>
          <Link to="/community" className="text-gray-800 font-bold uppercase tracking-widest text-sm tracking-wide">Community</Link>
          <a href="mailto:startups@advisorxgrowth.com" className="bg-advisor-blue text-center text-white mt-4 px-6 py-4 rounded-xl font-bold text-xs uppercase tracking-widest shadow-md inline-block">
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-white py-12 md:py-20 px-4 md:px-8 border-t border-advisor-blue/20">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
      <div className="md:col-span-1">
        <img src="/logo.png" alt="AdvisorX Logo" className="h-6 object-contain mb-6 opacity-90" />
        <p className="text-blue-100/70 text-sm leading-relaxed mb-6">
          A Venture Ecosystem Platform.<br/>
          Group of Managed Communities.
        </p>
        <p className="text-advisor-blue font-bold text-xs uppercase tracking-widest">
          India • Dubai
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-200">Platform</h4>
        <ul className="text-blue-100/70 text-sm space-y-3">
          <li><Link to="/incubation" className="hover:text-white transition-colors">Venture Incubation</Link></li>
          <li><Link to="/investors" className="hover:text-white transition-colors">Investor Access</Link></li>
          <li><Link to="/community" className="hover:text-white transition-colors">Managed Communities</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-200">Governance & Legal</h4>
        <ul className="text-blue-100/70 text-sm space-y-3">
          <li className="hover:text-white cursor-pointer transition-colors">Terms & Conditions</li>
          <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer transition-colors">Risk Disclosure</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-blue-200">Institutional Stance</h4>
        <ul className="text-blue-100/70 text-sm space-y-3 border-l-2 border-advisor-blue pl-4">
          <li>We don't promise outcomes.</li>
          <li>We build readiness.</li>
          <li>We enable execution.</li>
          <li>We protect trust.</li>
        </ul>
      </div>
    </div>
  </footer>
);

const PageHeader = ({ title, subtitle }) => (
  <section className="bg-gradient-to-br from-advisor-light to-white text-corporate-dark py-16 md:py-24 px-4 md:px-8 border-b border-blue-100 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-advisor-blue to-teal-400"></div>
    <div className="max-w-5xl mx-auto relative z-10 animate-fade-in-up">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-corporate-dark to-advisor-blue pb-2">{title}</h1>
      <p className="text-xl text-gray-600 max-w-3xl leading-relaxed font-medium">{subtitle}</p>
    </div>
  </section>
);

const Home = () => (
  <div className="min-h-screen bg-white">
    <section className="bg-gradient-to-b from-advisor-light via-white to-white text-corporate-dark py-20 md:py-32 px-4 md:px-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-fade-in-up -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-advisor-blue rounded-full mix-blend-multiply filter blur-3xl opacity-[0.08] animate-fade-in-up translate-y-1/3 -translate-x-1/3" style={{ animationDelay: '0.2s' }}></div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-corporate-dark to-advisor-blue animate-fade-in-up pb-2">
          A selective venture engine that builds startups from <span className="text-advisor-accent">day zero.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mb-12 leading-relaxed font-medium animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          We partner with committed founders to architect, execute, and scale ventures through disciplined structure and equity alignment.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link to="/investors" className="bg-advisor-blue text-white shadow-lg shadow-blue-500/30 px-8 py-4 rounded-full font-bold tracking-wide hover:bg-advisor-accent hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-300">
            Partner as Investor
          </Link>
          <Link to="/incubation" className="bg-white text-corporate-dark border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold tracking-wide hover:border-advisor-blue hover:text-advisor-blue hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-advisor-light opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </Link>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-8 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-advisor-blue pl-6 mb-16">
          <h2 className="text-4xl font-bold text-corporate-dark tracking-tight">Ecosystem Platform</h2>
          <p className="text-gray-500 mt-3 text-lg font-medium">Integrated support from readiness to capital allocation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 p-10 flex flex-col group rounded-3xl shadow-sm hover:shadow-xl hover:border-advisor-blue/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-advisor-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
            <h3 className="text-2xl font-bold mb-4 text-corporate-dark relative z-10">Venture Incubation</h3>
            <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-sm relative z-10">
              A controlled 90-day venture build cycle designed for serious founders. We deploy resources only when earned and operate as an execution partner based on alignment.
            </p>
            <Link to="/incubation" className="text-advisor-blue uppercase tracking-widest text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto relative z-10">
              Explore Incubation <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-white border border-gray-100 p-10 flex flex-col group rounded-3xl shadow-sm hover:shadow-xl hover:border-advisor-blue/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-advisor-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
            <h3 className="text-2xl font-bold mb-4 text-corporate-dark relative z-10">Investor Access</h3>
            <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-sm relative z-10">
              A disciplined deal-flow environment introducing only validated, execution-ready startups. We utilize milestone-controlled capital deployment and structured participation.
            </p>
            <Link to="/investors" className="text-advisor-blue uppercase tracking-widest text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto relative z-10">
              Partner as Investor <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bg-white border border-gray-100 p-10 flex flex-col group rounded-3xl shadow-sm hover:shadow-xl hover:border-advisor-blue/30 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-advisor-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
            <h3 className="text-2xl font-bold mb-4 text-corporate-dark relative z-10">Managed Community</h3>
            <p className="text-gray-600 leading-relaxed mb-10 flex-grow text-sm relative z-10">
              A curated network of founders, operators, and students. We are a governed ecosystem, bringing discipline where chaos exists through structural accountability.
            </p>
            <Link to="/community" className="text-advisor-blue uppercase tracking-widest text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-auto relative z-10">
              View Community <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-8 bg-advisor-light/50 border-t border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="border-l-4 border-advisor-blue pl-6 mb-8">
            <h2 className="text-4xl font-bold text-corporate-dark tracking-tight">Selective by Design</h2>
            <p className="text-advisor-blue mt-3 text-lg font-semibold">Entry is competitive. Advancement is earned.</p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6 text-lg font-medium">
            We do not operate as a general incubator. We operate as a venture engine. AdvisorX exists to bring discipline where chaos exists. We build founders first. We validate businesses next. We deploy resources only when earned.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Limited Intake", icon: <Shield className="text-white mb-4" size={28} /> },
            { title: "Multi-layer Screening", icon: <Target className="text-white mb-4" size={28} /> },
            { title: "Governed Progression", icon: <BarChart className="text-white mb-4" size={28} /> },
            { title: "Milestone Advancement", icon: <CheckCircle2 className="text-white mb-4" size={28} /> }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col items-start hover:-translate-y-1">
              <div className="bg-gradient-to-br from-advisor-blue to-teal-400 p-3 rounded-2xl shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform mb-5">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-corporate-dark">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl font-extrabold text-corporate-dark tracking-tight mb-4">How AdvisorX Works</h2>
          <p className="text-gray-500 text-lg font-medium">A structured, merit-based progression system. No shortcuts.</p>
        </div>

        <div className="space-y-6">
          {[
            { step: "01", title: "Application", desc: "Founders submit structured documentation including market scope, revenue model, commitment level, and stage of development." },
            { step: "02", title: "8-Layer Evaluation", desc: "Assessment across market scalability, monetization logic, founder commitment, positioning, unit economics, and execution feasibility." },
            { step: "03", title: "Strategic Stress Evaluation", desc: "Business model assumptions are tested. Revenue logic is challenged. Execution capability is assessed." },
            { step: "04", title: "Structured Deal Alignment", desc: "Equity participation defined. Vesting structure implemented. Governance framework established. Milestone roadmap confirmed." },
            { step: "05", title: "90-Day Venture Build Cycle", desc: "Architecture → MVP → Revenue Validation. Progression remains strictly milestone-based." },
            { step: "06", title: "Scale & Capital Advancement", desc: "Eligible ventures advance to structured capital participation and execution scaling." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-advisor-blue/30 transition-all duration-300 group">
              <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-200 to-gray-300 w-24 flex-shrink-0 group-hover:scale-110 group-hover:from-advisor-blue group-hover:to-teal-400 transition-all duration-500">{item.step}</div>
              <div>
                <h3 className="text-2xl font-bold text-corporate-dark mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const Incubation = () => (
  <div className="min-h-screen bg-white">
    <PageHeader 
      title="Venture Incubation" 
      subtitle="A controlled 90-day venture build cycle designed for serious founders. Resources are not free; they are linked to the level of support and execution provided."
    />
    
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 border-l-4 border-advisor-blue pl-6">
          <h2 className="text-4xl font-extrabold text-corporate-dark tracking-tight">Program Overview</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-advisor-blue/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
            <h3 className="text-xl font-bold text-corporate-dark mb-2 relative z-10">Phase 1</h3>
            <p className="text-advisor-blue font-bold mb-6 text-sm uppercase tracking-widest relative z-10">Venture Architecture (Days 1–30)</p>
            <ul className="space-y-4 text-gray-600 relative z-10 font-medium">
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Business model refinement</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Market validation review</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Financial projection modeling</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Go-to-market framework</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Legal structuring alignment</li>
            </ul>
            <p className="mt-8 text-sm font-bold text-gray-900 border-t border-gray-100 pt-4 relative z-10">Milestone validation required.</p>
          </div>
          
          <div className="bg-advisor-light/40 border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-advisor-blue/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
            <h3 className="text-xl font-bold text-corporate-dark mb-2 relative z-10">Phase 2</h3>
            <p className="text-advisor-blue font-bold mb-6 text-sm uppercase tracking-widest relative z-10">Execution & Systems (Days 31–60)</p>
            <ul className="space-y-4 text-gray-600 relative z-10 font-medium">
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> MVP deployment</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Brand & positioning alignment</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Acquisition funnel activation</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> KPI monitoring setup</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Operational system documentation</li>
            </ul>
            <p className="mt-8 text-sm font-bold text-gray-900 border-t border-gray-200 pt-4 relative z-10">Traction signals required.</p>
          </div>

          <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-advisor-blue/30 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full"></div>
            <h3 className="text-xl font-bold text-corporate-dark mb-2 relative z-10">Phase 3</h3>
            <p className="text-advisor-blue font-bold mb-6 text-sm uppercase tracking-widest relative z-10">Commercial Validation (Days 61–90)</p>
            <ul className="space-y-4 text-gray-600 relative z-10 font-medium">
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Revenue activation</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Pricing optimization</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Acquisition testing</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Early retention measurement</li>
              <li className="flex gap-3 items-center"><CheckCircle2 size={18} className="text-advisor-blue flex-shrink-0" /> Investor readiness preparation</li>
            </ul>
            <p className="mt-8 text-sm font-bold text-gray-900 border-t border-gray-100 pt-4 relative z-10">Advancement by performance metrics.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold text-corporate-dark mb-6">Founder Expectations</h3>
            <div className="bg-white p-8 border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <ul className="space-y-4 text-gray-600 font-medium">
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Full-time commitment</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Reporting discipline</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Milestone alignment</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Performance accountability</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Governance compliance</li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-corporate-dark mb-6">Engagement Structure</h3>
            <div className="bg-gradient-to-br from-corporate-dark to-slate-800 p-8 rounded-3xl shadow-lg shadow-blue-900/20 text-blue-50">
              <ul className="space-y-4 font-medium">
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue"/> Equity-aligned model</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue"/> Hybrid model (case-dependent)</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue"/> Milestone-based continuation</li>
                <li className="flex items-center gap-3"><ChevronRight size={18} className="text-advisor-blue"/> Centralized execution access</li>
              </ul>
              <p className="mt-8 text-sm text-white uppercase tracking-widest border-t border-slate-700 pt-4 font-bold">Selective intake maintained.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const Investors = () => (
  <div className="min-h-screen bg-advisor-light/30">
    <PageHeader 
      title="Investor Access" 
      subtitle="AdvisorX operates as an early-stage venture engine with disciplined equity participation. We connect investors only when justified."
    />
    
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-3xl p-12 mb-12 shadow-md hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-3xl font-extrabold text-corporate-dark mb-10 tracking-tight">Capital Model</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-start gap-5 group">
              <div className="bg-advisor-light p-4 rounded-2xl text-advisor-blue group-hover:scale-110 group-hover:bg-advisor-blue group-hover:text-white transition-all shadow-sm"><Shield size={28} /></div>
              <div>
                <h4 className="font-bold text-corporate-dark text-lg mb-2">Selective Venture Intake</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">A disciplined deal-flow environment introducing only validated, execution-ready startups.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="bg-advisor-light p-4 rounded-2xl text-advisor-blue group-hover:scale-110 group-hover:bg-advisor-blue group-hover:text-white transition-all shadow-sm"><Target size={28} /></div>
              <div>
                <h4 className="font-bold text-corporate-dark text-lg mb-2">Milestone-Controlled</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Capital deployment is strictly tied to execution feasibility and milestone validation.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="bg-advisor-light p-4 rounded-2xl text-advisor-blue group-hover:scale-110 group-hover:bg-advisor-blue group-hover:text-white transition-all shadow-sm"><BarChart size={28} /></div>
              <div>
                <h4 className="font-bold text-corporate-dark text-lg mb-2">Portfolio Allocation</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Structured approach to portfolio-based allocation and concentrated follow-on strategy.</p>
              </div>
            </div>
            <div className="flex items-start gap-5 group">
              <div className="bg-advisor-light p-4 rounded-2xl text-advisor-blue group-hover:scale-110 group-hover:bg-advisor-blue group-hover:text-white transition-all shadow-sm"><Zap size={28} /></div>
              <div>
                <h4 className="font-bold text-corporate-dark text-lg mb-2">Participation Pathways</h4>
                <p className="text-gray-600 text-sm leading-relaxed font-medium">Direct venture participation, syndicate alignment, and strategic advisory participation.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-corporate-dark to-slate-800 text-white p-10 text-center rounded-3xl shadow-lg border border-blue-900/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-advisor-blue filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <p className="text-xl mb-3 font-semibold relative z-10">AdvisorX does not act as an investment advisor or broker.</p>
          <p className="text-sm text-blue-200 uppercase tracking-widest font-bold relative z-10">Early-stage investing involves inherent risk.</p>
        </div>
      </div>
    </section>
  </div>
);

const Community = () => (
  <div className="min-h-screen bg-white">
    <PageHeader 
      title="AdvisorX Community" 
      subtitle="A curated network of founders, operators, students, and strategic collaborators operating under a unified, governed ecosystem."
    />
    
    <section className="py-16 md:py-24 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="border-l-4 border-advisor-blue pl-6 mb-8">
            <h2 className="text-4xl font-extrabold text-corporate-dark tracking-tight">We are not a free community.</h2>
            <p className="text-gray-500 mt-2 text-lg font-medium">We are a governed ecosystem.</p>
          </div>
          <p className="text-gray-600 leading-relaxed mb-10 text-lg font-medium">
            Community access provides a structured starting point for individuals who want to become founders with clarity, discipline, and real exposure.
          </p>
          
          <h3 className="text-2xl font-bold text-corporate-dark mb-6">Community Focus:</h3>
          <ul className="space-y-5 text-gray-600 font-medium">
            <li className="flex items-center gap-4"><CheckCircle2 size={22} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Knowledge exchange & operator sessions</li>
            <li className="flex items-center gap-4"><CheckCircle2 size={22} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Controlled networking & structured meetups</li>
            <li className="flex items-center gap-4"><CheckCircle2 size={22} className="text-advisor-blue bg-advisor-light p-1 rounded-full"/> Founder roundtables & female founder forums</li>
          </ul>
        </div>
        
        <div className="bg-gradient-to-br from-advisor-light to-white border border-gray-100 p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow duration-300">
          <div className="bg-white p-4 rounded-2xl w-max shadow-sm mb-8"><Users size={40} className="text-advisor-blue" /></div>
          <h3 className="text-3xl font-extrabold text-corporate-dark mb-8 tracking-tight">Who is it for?</h3>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-corporate-dark text-lg mb-1">Students & Early Founders</h4>
              <p className="text-gray-600 text-sm font-medium">For individuals seeking clarity before building.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-corporate-dark text-lg mb-1">Idea-Stage Startups</h4>
              <p className="text-gray-600 text-sm font-medium">A validation environment for founders needing market clarity.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 hover:-translate-y-1 transition-transform">
              <h4 className="font-bold text-corporate-dark text-lg mb-1">Operators & Builders</h4>
              <p className="text-gray-600 text-sm font-medium">Professionals focusing on revenue-focused operations.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-24 text-center border-t border-gray-100 pt-16">
        <p className="text-gray-500 italic font-medium">Community participation does not guarantee incubation entry. Selection remains independent.</p>
      </div>
    </section>
  </div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/incubation" element={<Incubation />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/community" element={<Community />} />
            {/* Apply route completely removed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}