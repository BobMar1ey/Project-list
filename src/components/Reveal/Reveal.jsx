import useInView from "../../hooks/useInView";

export default function Reveal({
  as: Tag = "div",
  className = "",
  variant = "up",
  delay = 0,
  children,
  style,
  ...props
}) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${visible ? " is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
