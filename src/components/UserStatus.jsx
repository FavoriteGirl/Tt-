export const UserStatus = ({ isOnline, children }) => {
  return (
    <div className="flex items-center gap-2 pl-0.5">
      <div
        className={`w-3 h-3 rounded-full ${
          isOnline ? "bg-green-500" : "bg-slate-400"
        }`}
      ></div>
      <p className="text-slate-950 font-semibold capitalize">{children}</p>
    </div>
  );
};
