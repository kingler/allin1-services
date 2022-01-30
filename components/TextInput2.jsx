import * as React from "react";
import { PlasmicTextInput2 } from "./plasmic/all_in_1_website/PlasmicTextInput2";

function TextInput2_(props, ref) {
  const { plasmicProps } = PlasmicTextInput2.useBehavior(props, ref);
  return <PlasmicTextInput2 {...plasmicProps} />;
}

const TextInput2 = React.forwardRef(TextInput2_);

export default Object.assign(TextInput2, {
  __plumeType: "text-input",
});
