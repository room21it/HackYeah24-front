import { CSSProperties } from "react";

const style: CSSProperties = {
  width: 300,
  margin: "0px auto 8px",
  textAlign: "center",
  fontSize: 12,
  color: "var(--mui-palette-info-dark)",
};

export const DisplayRevision = () => {
  const fullCommitSh = process.env.SH_VALUE || "";

  return <div style={style}>rev. {fullCommitSh.slice(0, 6)}</div>;
};
