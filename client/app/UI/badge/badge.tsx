type Props = {
  children?: string;
};

const Badge = ({ children }: Props) => {
  return (
    <span className="inline-flex border-black border mx-1 items- px-5 h-min center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
      {children}
    </span>
  );
};
export default Badge;
