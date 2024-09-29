import Chip from "@mui/material/Chip";

export type ChipTypes = {
  name: string;
  removeExcludedAllergen: (arg: string) => void;
};

export const ExcludedAllergenChip = ({
  name,
  removeExcludedAllergen,
}: ChipTypes) => {
  const handleDelete = () => {
    removeExcludedAllergen(name);
  };

  return (
    <Chip
      label={name}
      onDelete={handleDelete}
      sx={{ backgroundColor: "#FF7A00", color: "#ffffff" }}
    />
  );
};
