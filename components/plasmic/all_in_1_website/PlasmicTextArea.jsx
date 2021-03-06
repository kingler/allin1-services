// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2zyEN4wbAvdpCs3a2xawX4
// Component: H5crwft2BZ
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_all_in_1_website.module.css"; // plasmic-import: 2zyEN4wbAvdpCs3a2xawX4/projectcss
import sty from "./PlasmicTextArea.module.css"; // plasmic-import: H5crwft2BZ/css

export const PlasmicTextArea__VariantProps = new Array();

export const PlasmicTextArea__ArgProps = new Array();

function PlasmicTextArea__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <textarea
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.textarea,
        projectcss.root_reset,
        sty.root
      )}
      placeholder={"Some placeholder"}
      value={"Enter a message"}
    />
  );
}

const PlasmicDescendants = {
  root: ["root"],
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicTextArea__ArgProps,
      internalVariantPropNames: PlasmicTextArea__VariantProps,
    });

    return PlasmicTextArea__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextArea";
  } else {
    func.displayName = `PlasmicTextArea.${nodeName}`;
  }
  return func;
}

export const PlasmicTextArea = Object.assign(
  // Top-level PlasmicTextArea renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextArea
    internalVariantProps: PlasmicTextArea__VariantProps,
    internalArgProps: PlasmicTextArea__ArgProps,
  }
);

export default PlasmicTextArea;
/* prettier-ignore-end */
