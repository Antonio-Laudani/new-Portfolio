const Badge = ({ icon, color, name }) => {
  return (
    <div className="glass-badge h-40 w-full flex flex-col items-center justify-center p-6 gap-4">
      <iconify-icon icon={icon} style={{ fontSize: '48px', color: color }}></iconify-icon>
      <span className="font-medium text-lg text-center">{name}</span>
    </div>
  );
};

export default Badge;