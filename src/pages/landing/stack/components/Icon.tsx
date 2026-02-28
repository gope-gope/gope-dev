interface IIconWithLabelProps {
  Icon: any;
  label?: string;
  width?: number;
  height?: number;
  className?: string;
}

const IconWithLabel = ({
  Icon,
  label,
  width = 128,
  height = 128,
  className = "",
}: IIconWithLabelProps) => (
  <div className={`flex flex-col items-center ${className}`}>
    {/* Render the imported SVG as a React component */}
    <Icon className="fill-primary" width={width} height={height} />

    {/* Label under icon */}
    {label && <p className="mt-2 text-center text-sm font-medium">{label}</p>}
  </div>
);

export default IconWithLabel;
