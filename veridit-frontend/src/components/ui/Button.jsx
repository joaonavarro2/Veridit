export default function Button({
  children,
  onClick,
  variant = "primary",
}) {

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "bg-gray-300 hover:bg-gray-400 text-black",

    danger:
      "bg-red-600 hover:bg-red-700 text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`
        px-6
        py-4
        rounded-xl
        transition
        font-semibold
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}