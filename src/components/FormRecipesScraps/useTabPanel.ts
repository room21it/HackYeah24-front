import { useMemo } from "react";

type useTabPanelParams = {
  index: number;
  value: number;
};

export const useTabPanel = ({ index, value }: useTabPanelParams) => {
  const isHidden = value !== index;
  const panelProps = useMemo(
    () => ({
      role: "tabpanel",
      hidden: isHidden,
      id: `simple-tabpanel-${index}`,
      "aria-labelledby": `simple-tab-${index}`,
    }),
    [index, isHidden]
  );

  return {
    tabProps: panelProps,
    isHidden,
  };
};
