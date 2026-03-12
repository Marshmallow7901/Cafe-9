import { motion, AnimatePresence } from "motion/react";
import { Coffee, Users, BookOpen, MapPin, Clock, ArrowRight, ShoppingBag, Star, Menu as MenuIcon, X, Calendar, ChevronRight, CheckCircle2, GraduationCap, Ticket } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = ({ setView, currentView }: { setView: (v: 'home' | 'booking' | 'pass' | 'confirmation' | 'events') => void, currentView: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cafe-bg/80 backdrop-blur-md border-b border-cafe-ink/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
          <span className="text-2xl font-serif font-bold tracking-tighter">CAFE 9</span>
          <div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <button onClick={() => { setView('home'); window.location.hash = 'zones'; }} className="hover:text-cafe-accent transition-colors">Zones</button>
          <button onClick={() => { setView('home'); window.location.hash = 'menu'; }} className="hover:text-cafe-accent transition-colors">Menu</button>
          <button onClick={() => { setView('home'); window.location.hash = 'beans'; }} className="hover:text-cafe-accent transition-colors">Bean Shop</button>
          <button onClick={() => setView('events')} className="hover:text-cafe-accent transition-colors">Events</button>
          <button onClick={() => { setView('home'); window.location.hash = 'membership'; }} className="hover:text-cafe-accent transition-colors">Membership</button>
        </div>

        <button 
          onClick={() => setView('booking')}
          className={`hidden md:block px-6 py-2.5 rounded-full text-sm font-medium transition-all ${currentView === 'booking' ? 'bg-cafe-ink text-white' : 'bg-cafe-accent text-white hover:bg-cafe-accent/90'}`}
        >
          Book a Suite
        </button>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-cafe-bg border-b border-cafe-ink/5 p-6 flex flex-col gap-4 text-sm font-medium uppercase tracking-widest overflow-hidden"
          >
            <button onClick={() => { setView('home'); setIsOpen(false); window.location.hash = 'zones'; }}>Zones</button>
            <button onClick={() => { setView('home'); setIsOpen(false); window.location.hash = 'menu'; }}>Menu</button>
            <button onClick={() => { setView('home'); setIsOpen(false); window.location.hash = 'beans'; }}>Bean Shop</button>
            <button onClick={() => { setView('events'); setIsOpen(false); }}>Events</button>
            <button onClick={() => { setView('home'); setIsOpen(false); window.location.hash = 'membership'; }}>Membership</button>
            <button 
              onClick={() => { setView('booking'); setIsOpen(false); }}
              className="bg-cafe-accent text-white px-6 py-3 rounded-full text-sm font-medium"
            >
              Book a Suite
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="Cafe Interior" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cafe-bg via-transparent to-cafe-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <MapPin className="w-4 h-4 text-cafe-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-cafe-accent">Rondebosch • Umhlanga • Cascades • Woodstock</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
            Space to Think.<br />
            <span className="italic text-cafe-accent">Room to Dine.</span>
          </h1>
          <p className="text-lg text-cafe-ink/70 max-w-lg mb-10 leading-relaxed">
            A curated environment for creators, students, and professionals across South Africa. Engineered for deep work and meaningful connection.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#zones" className="bg-cafe-ink text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-cafe-ink/90 transition-all group">
              Explore the Zones <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#menu" className="border border-cafe-ink/20 px-8 py-4 rounded-full font-medium hover:bg-cafe-ink/5 transition-all">
              View Menu
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1000" 
            alt="Workspace" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-white">
            <p className="text-sm font-serif italic mb-1">"The best ideas happen at the intersection of quiet focus and communal energy."</p>
            <p className="text-[10px] uppercase tracking-widest opacity-60">— The Cafe 9 Philosophy</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Zones = () => {
  const zones = [
    {
      title: "The Long Table",
      description: "Designed for group brainstorms and open networking. Hand-crafted oak with integrated power.",
      icon: <Users className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Focus Nooks",
      description: "Quiet, single-occupancy spaces for individual deep work. Acoustic dampening and ergonomic seating.",
      icon: <BookOpen className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Private Suite",
      description: "Bookable for high-stakes meetings or private dinners. Full AV capabilities and dedicated service.",
      icon: <Star className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="zones" className="py-24 bg-cafe-warm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Collaboration Zones</h2>
          <p className="text-cafe-ink/60 max-w-2xl mx-auto">Purpose-built spaces tailored to your productivity needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {zones.map((zone, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-cafe-bg rounded-3xl overflow-hidden border border-cafe-ink/5 shadow-sm"
            >
              <div className="h-64 relative">
                <img src={zone.image} alt={zone.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-sm">
                  {zone.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-3">{zone.title}</h3>
                <p className="text-sm text-cafe-ink/60 leading-relaxed mb-6">{zone.description}</p>
                <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-cafe-accent transition-colors">
                  Learn More <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BeanShop = () => {
  const blends = [
    {
      id: "01",
      name: "The Catalyst",
      roast: "Light/Medium Roast",
      notes: "Bright citrus, jasmine, honey",
      price: "R145",
      description: "The perfect morning starter to spark creativity."
    },
    {
      id: "02",
      name: "The Flow State",
      roast: "Medium/Dark Roast",
      notes: "Milk chocolate, hazelnut, balanced",
      price: "R130",
      description: "Engineered for sustained focus without the jitter."
    },
    {
      id: "03",
      name: "The After-Hours",
      roast: "Dark Roast",
      notes: "Deep cocoa, smoked oak, rich",
      price: "R160",
      description: "Designed for evening dining and late-night collaboration."
    }
  ];

  return (
    <section id="beans" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl mb-4">The Number 9 Series</h2>
            <p className="text-cafe-ink/60 max-w-lg">Our signature in-house roasted blends available for nationwide delivery.</p>
          </div>
          <button className="bg-cafe-accent text-white px-8 py-3 rounded-full text-sm font-medium flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" /> Shop All Beans
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {blends.map((blend, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div className="relative mb-8 aspect-square bg-cafe-warm rounded-[2.5rem] flex items-center justify-center overflow-hidden">
                <div className="absolute top-6 left-6 text-6xl font-serif opacity-10 group-hover:opacity-20 transition-opacity">{blend.id}</div>
                <Coffee className="w-24 h-24 text-cafe-accent/40 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-6 right-6 bg-cafe-bg px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                  {blend.price}
                </div>
              </div>
              <h3 className="text-2xl mb-1">{blend.name}</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-cafe-accent mb-3">{blend.roast}</p>
              <p className="text-sm text-cafe-ink/60 mb-4">{blend.description}</p>
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-tighter font-medium text-cafe-ink/40">
                <span>Notes: {blend.notes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<'dining' | 'bakery'>('dining');

  const diningItems = [
    { name: "The Nine-Grain Bowl", desc: "Quinoa, charred kale, roasted sweet potato, pickled radishes.", price: "R95" },
    { name: "Sourdough Shared Board", desc: "Artisanal sourdough, whipped feta, chili oil, seasonal pesto.", price: "R110" },
    { name: "Braised Beef Short Rib", desc: "12-hour slow-cooked, truffle-infused mash (Dinner only).", price: "R210" },
    { name: "The Collaboration Platter", desc: "Local cheeses, cured meats, and nuts for the whole table.", price: "R280" },
    { name: "Wild Mushroom Risotto", desc: "Foraged mushrooms, parmesan crisp, and truffle oil drizzle.", price: "R165" }
  ];

  const bakeryItems = [
    { name: "Artisanal Croissant", desc: "Hand-rolled, 48-hour fermented butter pastry.", price: "R35" },
    { name: "Pain au Chocolat", desc: "Double-origin dark chocolate batons in flaky layers.", price: "R42" },
    { name: "Almond Frangipane Tart", desc: "Seasonal stone fruit with toasted almond cream.", price: "R55" },
    { name: "Savory Spinach & Feta Muffin", desc: "Toasted seeds and local feta, served warm with butter.", price: "R38" },
    { name: "Signature Lemon Poppy Loaf", desc: "Zesty lemon glaze with a dense, buttery crumb.", price: "R45" }
  ];

  const currentItems = activeCategory === 'dining' ? diningItems : bakeryItems;

  return (
    <section id="menu" className="py-24 bg-cafe-ink text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl mb-8 leading-tight">Shareable<br /><span className="italic text-cafe-accent">Intelligence.</span></h2>
            
            <div className="inline-flex p-1 bg-white/5 rounded-full mb-12 border border-white/10">
              <button 
                onClick={() => setActiveCategory('dining')}
                className={`relative px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all z-10 ${activeCategory === 'dining' ? 'text-cafe-ink' : 'text-white/40 hover:text-white'}`}
              >
                Dining
                {activeCategory === 'dining' && (
                  <motion.div layoutId="menuTab" className="absolute inset-0 bg-white rounded-full -z-10" />
                )}
              </button>
              <button 
                onClick={() => setActiveCategory('bakery')}
                className={`relative px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all z-10 ${activeCategory === 'bakery' ? 'text-white' : 'text-white/40'}`}
              >
                Bakery
                {activeCategory === 'bakery' && (
                  <motion.div layoutId="menuTab" className="absolute inset-0 bg-white rounded-full -z-10" />
                )}
              </button>
            </div>

            <div className="space-y-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {currentItems.map((item, idx) => (
                    <div key={idx} className="group border-b border-white/10 pb-6">
                      <div className="flex justify-between items-end mb-2">
                        <h4 className="text-xl font-serif group-hover:text-cafe-accent transition-colors">{item.name}</h4>
                        <span className="text-cafe-accent font-bold">{item.price}</span>
                      </div>
                      <p className="text-sm text-white/40">{item.desc}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden">
            <img 
              src={activeCategory === 'dining' 
                ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000"
                : "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1000"
              } 
              alt="Food" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cafe-ink/80 to-transparent" />
            <div className="absolute bottom-12 left-12 right-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-px bg-cafe-accent" />
                <span className="text-xs uppercase tracking-widest text-cafe-accent">{activeCategory === 'dining' ? 'Seasonal Specials' : 'Freshly Baked'}</span>
              </div>
              <p className="text-2xl font-serif italic">
                {activeCategory === 'dining' 
                  ? '"Food that fuels the mind as much as the body."'
                  : '"The scent of morning, baked to perfection."'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BranchSpecials = () => {
  const [selectedBranch, setSelectedBranch] = useState('Rondebosch');

  const branches = [
    {
      name: 'Rondebosch',
      special: "The Academic's Fuel",
      description: "A double espresso served with a side of 70% dark chocolate and sea salt. Designed for long library sessions.",
      price: "R55",
      image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: 'Umhlanga',
      special: "The Coastal Breeze",
      description: "12-hour cold brew infused with organic coconut milk and a hint of Madagascar vanilla.",
      price: "R62",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: 'Cascades',
      special: "The Mist Belt Latte",
      description: "Rooibos-infused latte with local Cascades honey and a dusting of Ceylon cinnamon.",
      price: "R48",
      image: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: 'Woodstock',
      special: "The Artisan's Pour",
      description: "Single-origin pour-over paired with a mini lemon poppyseed loaf. For the creative soul.",
      price: "R75",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const currentBranch = branches.find(b => b.name === selectedBranch)!;

  return (
    <section className="py-24 bg-cafe-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Local Editions</h2>
          <p className="text-cafe-ink/60">Unique signature items crafted for each of our unique communities.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {branches.map(branch => (
            <button
              key={branch.name}
              onClick={() => setSelectedBranch(branch.name)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${selectedBranch === branch.name ? 'bg-cafe-accent text-white shadow-lg shadow-cafe-accent/20' : 'bg-cafe-warm text-cafe-ink/60 hover:bg-cafe-warm/80'}`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            key={`image-${selectedBranch}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <img src={currentBranch.image} alt={currentBranch.special} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </motion.div>

          <motion.div
            key={`content-${currentBranch.name}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1 bg-cafe-accent/10 rounded-full text-[10px] font-bold uppercase tracking-widest text-cafe-accent">
              {currentBranch.name} Exclusive
            </div>
            <h3 className="text-5xl font-serif">{currentBranch.special}</h3>
            <p className="text-lg text-cafe-ink/70 leading-relaxed">{currentBranch.description}</p>
            <div className="text-3xl font-serif text-cafe-accent">{currentBranch.price}</div>
            <button className="bg-cafe-ink text-white px-8 py-4 rounded-full font-medium hover:bg-cafe-ink/90 transition-all">
              Order at {currentBranch.name}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EventsPage = ({ onBack }: { onBack: () => void }) => {
  const events = [
    {
      title: "Creative Mornings: Cape Town",
      date: "March 20, 2026",
      time: "08:30 AM",
      location: "Woodstock Branch",
      description: "A monthly breakfast lecture series for the creative community.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Deep Work Workshop",
      date: "March 25, 2026",
      time: "06:00 PM",
      location: "Rondebosch Branch",
      description: "Master the art of focus with our intensive productivity session.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Founder's Table Dinner",
      date: "April 2, 2026",
      time: "07:30 PM",
      location: "Umhlanga Branch",
      description: "An intimate dinner for local entrepreneurs to share insights and connect.",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cafe-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <button onClick={onBack} className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-cafe-accent transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
          </button>
        </div>
        
        <h2 className="text-6xl font-serif mb-12">Upcoming Events</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-cafe-ink/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-cafe-accent text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar className="w-3 h-3" /> {event.date} • {event.time}
                </div>
                <h3 className="text-2xl mb-3">{event.title}</h3>
                <p className="text-cafe-ink/60 text-sm mb-6 leading-relaxed">{event.description}</p>
                <div className="flex items-center gap-2 text-xs font-medium text-cafe-ink/40">
                  <MapPin className="w-3 h-3" /> {event.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PassPage = ({ onBack, onConfirm }: { onBack: () => void, onConfirm: () => void }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    location: 'Rondebosch'
  });

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cafe-bg">
      <div className="max-w-xl mx-auto px-6">
        <button onClick={onBack} className="mb-12 text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-cafe-accent transition-colors">
          <ArrowRight className="w-4 h-4 rotate-180" /> Back
        </button>

        <div className="bg-cafe-warm rounded-[3rem] p-12 border border-cafe-ink/5">
          <h2 className="text-4xl font-serif mb-8">Get a Day Pass</h2>
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Full Name</label>
              <input 
                type="text" 
                className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-white"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Email Address</label>
              <input 
                type="email" 
                className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-white"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Date</label>
                <input 
                  type="date" 
                  className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-white"
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Location</label>
                <select 
                  className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-white appearance-none"
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                >
                  <option>Rondebosch</option>
                  <option>Umhlanga</option>
                  <option>Cascades</option>
                  <option>Woodstock</option>
                </select>
              </div>
            </div>
            <div className="pt-6">
              <div className="flex justify-between items-center mb-6 p-6 bg-white rounded-2xl border border-cafe-ink/5">
                <span className="text-sm font-medium">Day Pass Total</span>
                <span className="text-xl font-bold">R150</span>
              </div>
              <button 
                onClick={onConfirm}
                className="w-full py-4 bg-cafe-accent text-white rounded-full font-bold hover:bg-cafe-accent/90 transition-all shadow-lg"
              >
                Purchase Pass
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmationPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="pt-32 pb-24 min-h-screen flex items-center justify-center bg-cafe-bg">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-lg w-full px-6 text-center"
      >
        <div className="w-24 h-24 bg-cafe-accent/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 className="w-12 h-12 text-cafe-accent" />
        </div>
        <h2 className="text-5xl font-serif mb-6">You're all set.</h2>
        <p className="text-lg text-cafe-ink/60 mb-10 leading-relaxed">
          Your request has been received. We've sent a confirmation email with all the details and your digital access key.
        </p>
        <button 
          onClick={onBack}
          className="bg-cafe-ink text-white px-10 py-4 rounded-full font-bold hover:bg-cafe-ink/90 transition-all"
        >
          Return to Home
        </button>
      </motion.div>
    </div>
  );
};

const BookingPage = ({ onBack, onConfirm }: { onBack: () => void, onConfirm: () => void }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    location: 'Rondebosch',
    suiteType: 'Private Suite',
    date: '',
    time: '',
    guests: '1-4',
    name: '',
    email: ''
  });

  const locations = ['Rondebosch', 'Umhlanga', 'Cascades', 'Woodstock'];
  const suites = ['Private Suite', 'Focus Nook (Full Day)', 'The Long Table (Group)'];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => step > 1 ? setStep(step - 1) : onBack();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cafe-bg">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12 flex items-center justify-between">
          <button onClick={handleBack} className="text-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:text-cafe-accent transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" /> Back
          </button>
          <div className="flex gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className={`w-8 h-1 rounded-full transition-all ${step >= i ? 'bg-cafe-accent' : 'bg-cafe-ink/10'}`} />
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-serif">Select your space</h2>
              <div className="grid gap-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Location</label>
                  <div className="grid grid-cols-2 gap-3">
                    {locations.map(loc => (
                      <button 
                        key={loc}
                        onClick={() => setFormData({...formData, location: loc})}
                        className={`p-4 rounded-2xl border text-left transition-all ${formData.location === loc ? 'border-cafe-accent bg-cafe-accent/5' : 'border-cafe-ink/10 hover:border-cafe-ink/30'}`}
                      >
                        <span className="text-sm font-medium">{loc}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Suite Type</label>
                  <div className="grid gap-3">
                    {suites.map(suite => (
                      <button 
                        key={suite}
                        onClick={() => setFormData({...formData, suiteType: suite})}
                        className={`p-4 rounded-2xl border flex items-center justify-between transition-all ${formData.suiteType === suite ? 'border-cafe-accent bg-cafe-accent/5' : 'border-cafe-ink/10 hover:border-cafe-ink/30'}`}
                      >
                        <span className="text-sm font-medium">{suite}</span>
                        {formData.suiteType === suite && <CheckCircle2 className="w-4 h-4 text-cafe-accent" />}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button onClick={handleNext} className="w-full py-4 bg-cafe-ink text-white rounded-full font-bold hover:bg-cafe-ink/90 transition-all flex items-center justify-center gap-2">
                Continue <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-serif">When are you arriving?</h2>
              <div className="grid gap-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Date</label>
                    <input 
                      type="date" 
                      className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-transparent"
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Time</label>
                    <input 
                      type="time" 
                      className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-transparent"
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-cafe-ink/40 block mb-3">Number of Guests</label>
                  <select 
                    className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-transparent appearance-none"
                    onChange={(e) => setFormData({...formData, guests: e.target.value})}
                  >
                    <option>1-4 Guests</option>
                    <option>5-8 Guests</option>
                    <option>9-12 Guests</option>
                    <option>12+ Guests</option>
                  </select>
                </div>
              </div>
              <button onClick={handleNext} className="w-full py-4 bg-cafe-ink text-white rounded-full font-bold hover:bg-cafe-ink/90 transition-all flex items-center justify-center gap-2">
                Final Details <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-serif">Confirm Booking</h2>
              <div className="p-8 bg-cafe-warm rounded-3xl border border-cafe-ink/5 space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-cafe-ink/40 uppercase tracking-widest text-[10px] font-bold mb-1">Location</p>
                    <p className="font-medium">{formData.location}</p>
                  </div>
                  <div>
                    <p className="text-cafe-ink/40 uppercase tracking-widest text-[10px] font-bold mb-1">Suite</p>
                    <p className="font-medium">{formData.suiteType}</p>
                  </div>
                  <div>
                    <p className="text-cafe-ink/40 uppercase tracking-widest text-[10px] font-bold mb-1">Date & Time</p>
                    <p className="font-medium">{formData.date || 'Not selected'} at {formData.time || 'Not selected'}</p>
                  </div>
                  <div>
                    <p className="text-cafe-ink/40 uppercase tracking-widest text-[10px] font-bold mb-1">Guests</p>
                    <p className="font-medium">{formData.guests}</p>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6 border-t border-cafe-ink/10">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-white"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    className="w-full p-4 rounded-2xl border border-cafe-ink/10 focus:border-cafe-accent outline-none bg-white"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <button 
                onClick={onConfirm}
                className="w-full py-4 bg-cafe-accent text-white rounded-full font-bold hover:bg-cafe-accent/90 transition-all shadow-lg shadow-cafe-accent/20"
              >
                Confirm Booking
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Membership = ({ setView }: { setView: (v: any) => void }) => {
  return (
    <section id="membership" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-cafe-warm rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cafe-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl mb-6">The Collaborator Membership</h2>
            <p className="text-cafe-ink/60 mb-12 text-lg">For our regulars across all locations, we offer a non-corporate, value-driven membership designed for consistency.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cafe-bg p-8 rounded-3xl border border-cafe-ink/5 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl">The Day Pass</h4>
                  <span className="text-2xl font-bold">R150</span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-cafe-ink/70">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" /> A reserved seat for the day</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" /> 2 coffees of your choice</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" /> High-speed fiber access</li>
                </ul>
                <button 
                  onClick={() => setView('pass')}
                  className="w-full py-3 rounded-full border border-cafe-ink text-sm font-bold hover:bg-cafe-ink hover:text-white transition-all"
                >
                  Get a Pass
                </button>
              </div>

              <div className="bg-cafe-bg p-8 rounded-3xl border border-cafe-ink/5 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-cafe-accent text-white px-4 py-1 text-[10px] uppercase tracking-widest font-bold">Popular</div>
                <div className="flex justify-between items-start mb-6">
                  <h4 className="text-2xl">The Resident</h4>
                  <span className="text-2xl font-bold">R1,200<span className="text-xs font-normal text-cafe-ink/40">/mo</span></span>
                </div>
                <ul className="space-y-4 mb-8 text-sm text-cafe-ink/70">
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" /> Guaranteed access to focus nooks</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" /> 10% off all dining</li>
                  <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" /> Monthly bag of "The Catalyst"</li>
                </ul>
                <button className="w-full py-3 rounded-full bg-cafe-accent text-white text-sm font-bold hover:bg-cafe-accent/90 transition-all">
                  Join the Community
                </button>
              </div>

              {/* Student Discount Card */}
              <div className="md:col-span-2 bg-cafe-accent text-white p-12 rounded-[2.5rem] relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-700">
                  <GraduationCap className="w-64 h-64" />
                </div>
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="max-w-md">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-widest">Student Exclusive</span>
                    </div>
                    <h3 className="text-4xl mb-4">The College Study Discount</h3>
                    <p className="text-white/70 leading-relaxed">
                      We believe in the next generation of creators. Students get 25% off all Day Passes and 15% off all menu items. Valid student ID required.
                    </p>
                  </div>
                  <button 
                    onClick={() => setView('pass')}
                    className="bg-white text-cafe-accent px-8 py-4 rounded-full font-bold hover:bg-cafe-warm transition-all whitespace-nowrap"
                  >
                    Claim Discount
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 border-t border-cafe-ink/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-serif font-bold tracking-tighter">CAFE 9</span>
              <div className="w-1.5 h-1.5 rounded-full bg-cafe-accent" />
            </div>
            <p className="text-cafe-ink/50 max-w-sm leading-relaxed">
              A standalone destination designed specifically for the modern collaborator. Space to think, room to dine.
            </p>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Locations</h5>
            <div className="space-y-2 text-sm text-cafe-ink/60">
              <p>Rondebosch, Cape Town</p>
              <p>Umhlanga, Durban</p>
              <p>Cascades, Pietermaritzburg</p>
              <p>Woodstock, Cape Town</p>
            </div>
          </div>
          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest mb-6">Contact</h5>
            <div className="space-y-2 text-sm text-cafe-ink/60">
              <p>hello@cafe9.co.za</p>
              <p>+27 21 999 9999</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cafe-ink/5 gap-4">
          <p className="text-[10px] uppercase tracking-widest text-cafe-ink/40">© 2026 Cafe 9. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest text-cafe-ink/40">
            <a href="#" className="hover:text-cafe-accent">Instagram</a>
            <a href="#" className="hover:text-cafe-accent">LinkedIn</a>
            <a href="#" className="hover:text-cafe-accent">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'booking' | 'pass' | 'confirmation' | 'events'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen selection:bg-cafe-accent/20">
      <Navbar setView={setView} currentView={view} />
      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Hero />
            <Zones />
            <BeanShop />
            <Menu />
            <BranchSpecials />
            <Membership setView={setView} />
            <Footer />
          </motion.div>
        )}
        {view === 'booking' && (
          <motion.div
            key="booking"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <BookingPage onBack={() => setView('home')} onConfirm={() => setView('confirmation')} />
            <Footer />
          </motion.div>
        )}
        {view === 'pass' && (
          <motion.div
            key="pass"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <PassPage onBack={() => setView('home')} onConfirm={() => setView('confirmation')} />
            <Footer />
          </motion.div>
        )}
        {view === 'events' && (
          <motion.div
            key="events"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <EventsPage onBack={() => setView('home')} />
            <Footer />
          </motion.div>
        )}
        {view === 'confirmation' && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ConfirmationPage onBack={() => setView('home')} />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
