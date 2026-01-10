type TButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "dark" | "ghost";
  size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  variant = "primary",
  size = "normal",
  ...props
}: TButtonProps) => {
  const baseStyle =
    "inline-flex gap-2 items-center justify-center cursor-pointer hover:sclae-105";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/85",
    dark: "bg-black text-white hover:bg-black/85",
    ghost: "bg-transparent text-dark hover:bg-gray-100",
  };

  const sizes = {
    normal: "px-9 py-4",
    small: "px-7 py-[10px]",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
