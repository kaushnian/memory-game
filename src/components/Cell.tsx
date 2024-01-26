export type CellItem = {
  value: number;
  open?: boolean;
};

type CellProps = {
  cell: CellItem;
  onClick: () => void;
};

export default function Cell({ cell: { open, value }, onClick }: CellProps) {
  return (
    <div
      style={{
        height: '200px',
        background: 'lightgreen',
        lineHeight: '200px',
        fontSize: 40,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {open && value}
    </div>
  );
}
