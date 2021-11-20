import { useEffect, useState } from "react";
import { Select, AsyncSelect, CreatableSelect, AsyncCreatableSelect } from "chakra-react-select";

interface Propss {
  data: Array<{
    id: string;
    value: string;
  }>;
  onChange?: (value: string) => void;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

interface Props {
  isMulti?: boolean;
  name: string;
  options: Array<{
    label: string;
    value: string;
    variant?: string;
    colorScheme?: string;
    isFixed?: boolean;
  }>;
  placeholder?: string;
  closeMenuOnSelect?: boolean;
  disabled?: boolean;
  tagVariant?: "subtle" | "solid" | "outline";
  colorScheme?: string;
  hasStickyGroupHeaders?: boolean;
  onChange?: (value: string) => void;
}

const DropDown: React.FC<Props> = ({
  isMulti = false,
  name,
  options,
  placeholder,
  disabled,
  hasStickyGroupHeaders = false,
  colorScheme,
  tagVariant,
  onChange,
}: Props) => {
  return (
    <Select
      isMulti={isMulti}
      name={name}
      options={options}
      placeholder={placeholder}
      closeMenuOnSelect={false}
      onChange={(values: any) => onChange && onChange(values)}
      isDisabled={disabled}
      hasStickyGroupHeaders={hasStickyGroupHeaders}
    />
  );
};

export { DropDown };
