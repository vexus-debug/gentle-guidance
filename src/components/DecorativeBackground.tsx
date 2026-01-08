const DecorativeBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large soft gradient blob - top right */}
      <div 
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--spa-rose) / 0.3) 0%, transparent 70%)',
        }}
      />
      
      {/* Subtle gold accent - left side */}
      <div 
        className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--spa-gold) / 0.25) 0%, transparent 70%)',
        }}
      />
      
      {/* Terracotta glow - center right */}
      <div 
        className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(var(--spa-terracotta) / 0.2) 0%, transparent 70%)',
        }}
      />
      
      {/* Soft beige circle - bottom left */}
      <div 
        className="absolute bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--spa-beige) / 0.5) 0%, transparent 70%)',
        }}
      />
      
      {/* Bronze accent - bottom right */}
      <div 
        className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(var(--spa-bronze) / 0.25) 0%, transparent 70%)',
        }}
      />
      
      {/* Decorative botanical line elements */}
      <svg
        className="absolute top-[15%] right-[5%] w-32 h-32 opacity-[0.08] text-secondary"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <circle cx="50" cy="50" r="45" />
        <circle cx="50" cy="50" r="30" />
        <circle cx="50" cy="50" r="15" />
        <line x1="50" y1="5" x2="50" y2="95" />
        <line x1="5" y1="50" x2="95" y2="50" />
      </svg>
      
      {/* Abstract leaf curve - left */}
      <svg
        className="absolute top-[40%] left-[3%] w-24 h-48 opacity-[0.06] text-primary"
        viewBox="0 0 50 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M25 0 Q45 25 25 50 Q5 75 25 100" />
        <path d="M25 10 Q40 30 25 50 Q10 70 25 90" />
      </svg>
      
      {/* Elegant dots pattern - scattered */}
      <div className="absolute top-[60%] right-[8%] opacity-[0.07]">
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <div 
              key={i} 
              className="w-1.5 h-1.5 rounded-full bg-secondary"
            />
          ))}
        </div>
      </div>
      
      {/* Flowing wave line - bottom */}
      <svg
        className="absolute bottom-[20%] left-[10%] w-64 h-16 opacity-[0.05] text-spa-taupe"
        viewBox="0 0 200 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 25 Q25 10 50 25 T100 25 T150 25 T200 25" />
        <path d="M0 35 Q25 20 50 35 T100 35 T150 35 T200 35" />
      </svg>
      
      {/* Diamond accent - top left */}
      <svg
        className="absolute top-[8%] left-[15%] w-16 h-16 opacity-[0.08] text-spa-gold"
        viewBox="0 0 50 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      >
        <path d="M25 5 L45 25 L25 45 L5 25 Z" />
        <path d="M25 12 L38 25 L25 38 L12 25 Z" />
      </svg>
      
      {/* Concentric arcs - decorative */}
      <svg
        className="absolute bottom-[35%] right-[15%] w-40 h-40 opacity-[0.04] text-secondary"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.6"
      >
        <path d="M10 90 Q10 10 90 10" />
        <path d="M20 90 Q20 20 90 20" />
        <path d="M30 90 Q30 30 90 30" />
        <path d="M40 90 Q40 40 90 40" />
      </svg>
      
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

export default DecorativeBackground;
