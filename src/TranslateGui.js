import React from "react";
import { translateFromEn, translateFromSf } from "./translate";
import TranslateForm from "./TranslateForm";

function TranslateGui() {
  return (
    <div>
      <TranslateForm
        header="English -> Sy'k Fiar"
        language="English"
        translate={translateFromEn}
      />
      <TranslateForm
        header="Sy'k Fiar -> English"
        language="Sy'k Fiar"
        translate={translateFromSf}
      />
    </div>
  );
}

export default TranslateGui;
