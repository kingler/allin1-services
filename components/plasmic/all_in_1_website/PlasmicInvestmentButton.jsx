// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2zyEN4wbAvdpCs3a2xawX4
// Component: ow46Wt9Nr-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_all_in_1_website.module.css"; // plasmic-import: 2zyEN4wbAvdpCs3a2xawX4/projectcss
import sty from "./PlasmicInvestmentButton.module.css"; // plasmic-import: ow46Wt9Nr-/css
import InvestmentsvgIcon from "./icons/PlasmicIcon__Investmentsvg"; // plasmic-import: f24x9T9xN/icon

export const PlasmicInvestmentButton__VariantProps = new Array();

export const PlasmicInvestmentButton__ArgProps = new Array("children", "slot");

function PlasmicInvestmentButton__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(projectcss.all, sty.freeBox__utzsU)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <InvestmentsvgIcon
              className={classNames(projectcss.all, sty.svg__p1Dsj)}
              role={"img"}
            />
          ),

          value: args.slot,
        })}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__qEbOs)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Alternative INVESTMENT",
          value: args.children,
          className: classNames(sty.slotTargetChildren),
        })}
      </p.Stack>
    </p.Stack>
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
      internalArgPropNames: PlasmicInvestmentButton__ArgProps,
      internalVariantPropNames: PlasmicInvestmentButton__VariantProps,
    });

    return PlasmicInvestmentButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInvestmentButton";
  } else {
    func.displayName = `PlasmicInvestmentButton.${nodeName}`;
  }
  return func;
}

export const PlasmicInvestmentButton = Object.assign(
  // Top-level PlasmicInvestmentButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicInvestmentButton
    internalVariantProps: PlasmicInvestmentButton__VariantProps,
    internalArgProps: PlasmicInvestmentButton__ArgProps,
  }
);

export default PlasmicInvestmentButton;
/* prettier-ignore-end */