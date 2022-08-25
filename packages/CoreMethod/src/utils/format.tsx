type FormatOption = "jsx" | "label" | "value";

type NeedFormatType = string | string[] | number | any;

interface Option {
  label: string;
  value: any;
  color?: string;
}

export function formatOption(
  rowOrId: NeedFormatType,
  column?: any,
  option?: Option[],
  formatWay: FormatOption = "jsx"
) {
  const rowValue = column ? rowOrId[column.property] : rowOrId;
  if (!option) return rowValue;
  const findItem = option.find(
    (item) => item[formatWay === "value" ? "label" : "value"] === rowValue
  );
  if (!findItem) throw new Error(`配置错误${rowValue}`);
  const { color, label, value } = findItem!;
  if (formatWay === "jsx") {
    if (color) return <h1 style={{ color }}>{label}</h1>;
    return label;
  }
  if (formatWay === "label") {
    return label;
  }
  if (formatWay === "value") {
    return value;
  }
}
