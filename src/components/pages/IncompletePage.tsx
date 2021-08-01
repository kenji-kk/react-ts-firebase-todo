import React, { memo } from "react";
import { InputDialog } from "../atoms/dialogs/InputDialog";

export const IncompletePage: React.FC = memo(() => {
  return (
    <div>
      <InputDialog />
    </div>
  );
});
