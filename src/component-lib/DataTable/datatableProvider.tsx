import React, { useEffect, useMemo, useState } from "react";
import { DataType } from "./types";

export type DataTableCtxType = {
  defaultColumns: string[];
  data: DataType[];
  caption?: string;
  captionPlacement?: "top" | "bottom";
  numeric?: boolean;
  children?: React.ReactNode;
}

const DataTableCtx = React.createContext<DataTableCtxType>({} as DataTableCtxType);

const DataTableProvider = ({ children, data, defaultColumns, caption, captionPlacement, numeric }: any) => {
  const [state, setState] = useState<Omit<DataTableCtxType, "children">>({ data, defaultColumns, caption, captionPlacement, numeric });

  useEffect(() => {
    setState({ data, defaultColumns, caption, captionPlacement, numeric });
  }, [data, defaultColumns, caption, captionPlacement, numeric]);

  const value = useMemo(() => state, [state]);

  return <DataTableCtx.Provider value={value}>{children}</DataTableCtx.Provider>;
};

const useDataTable = () => {
  const context = React.useContext(DataTableCtx);

  if (context === undefined) {
    throw new Error("useDataTable must be used within a DataTableProvider");
  }
  return context;
};

export { DataTableProvider, useDataTable };
