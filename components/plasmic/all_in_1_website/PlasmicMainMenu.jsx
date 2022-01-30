// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 2zyEN4wbAvdpCs3a2xawX4
// Component: sptMhJnpZGz
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web";
import { useScreenVariants as useScreenVariantsfi2NfRzFU3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: FI2nfRzF-U3/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_all_in_1_website.module.css"; // plasmic-import: 2zyEN4wbAvdpCs3a2xawX4/projectcss
import sty from "./PlasmicMainMenu.module.css"; // plasmic-import: sptMhJnpZGz/css
import Icon7Icon from "./icons/PlasmicIcon__Icon7"; // plasmic-import: K8q3vtqtOjO/icon

export const PlasmicMainMenu__VariantProps = new Array();

export const PlasmicMainMenu__ArgProps = new Array(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5"
);

function PlasmicMainMenu__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfi2NfRzFU3(),
  });

  return (hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
        <p.PlasmicImg
          data-plasmic-name={"img"}
          data-plasmic-override={overrides.img}
          alt={""}
          className={classNames(sty.img)}
          displayHeight={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? "150px"
              : "125px"
          }
          displayMaxHeight={"none"}
          displayMaxWidth={"none"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={
            hasVariant(globalVariants, "screen", "mobileOnly") ? "73px" : "61px"
          }
          src={{
            src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA2MSAxMjUiPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuOTIgMjYuNzY2aC00LjgxNmw0LjgxNy05Ljc5M3Y5Ljc5M3pNMjkuMDI2IDBIMjAuOTJMMCA0MC42ODFoOS4zMzdsMi4wNTQtNC4zM2g5LjUzdjQuMzNoOC4xMDRWMHptMTIuOTIyIDgyLjEzM2g4Ljg1OFYwaC04Ljg1OHY4Mi4xMzN6bTkuMDk2IDQyLjY2OGgtOC4xMDZsLTMuODM5LTE4LjQ1NnYxOC40NTZoLTcuOTEzVjg0LjUzNmg3LjU4Nmw0LjM1OCAxOC4yOHYtMTguMjhoNy45MTRWMTI0Ljh6IiBmaWxsPSIjRDkyNzJBIi8+CiAgPHBhdGggZD0iTTUzLjA5NyAyLjUyaDcuNzUxVi4xMzJoLTcuNzUxVjIuNTJ6bTAgMy41NDNoNC43ODd2LjAyNkw1My4wOTcgNy42OHYyLjYyaDcuNzUxVjguMDY2aC00Ljc3N1Y4LjA0bDQuNzc3LTEuNTRWMy44MjloLTcuNzUxdjIuMjM0em0wIDkuOTVsNy43NTEgMS45NzZ2LTIuNTQybC01Ljg0LS45NjN2LS4wMjVsNS44NC0uOTYzdi0yLjUwNGwtNy43NTEgMS45Mzl2My4wODF6bTAgOC4xNzdoMS42NXYtMy4xNmgxLjU0MXYyLjg1aDEuNTg1di0yLjg1aDEuMzI1djMuMDQzaDEuNjV2LTUuNDNoLTcuNzUxdjUuNTQ2em0tLjEyIDMuOTRjMCAxLjA1My4xODcgMS44NTguNTYgMi40MTQuMzcyLjU1Ni45NzEuODM1IDEuNzk2LjgzNS40NyAwIC44NTItLjA5NyAxLjE0NS0uMjkuMjk0LS4xOTIuNTMtLjQzNC43MTItLjcyNS4xOC0uMjkuMzI3LS42MDMuNDQtLjkzNy4xMTEtLjMzNC4yMjItLjY0Ni4zMy0uOTM3YTIuNzcgMi43NyAwIDAxLjM4Ni0uNzI2LjcyLjcyIDAgMDEuNjAyLS4yODguNzEuNzEgMCAwMS40NzIuMThjLjE0Mi4xMi4yMTIuMzA3LjIxMi41NjQgMCAuMjMxLS4wODEuNDAyLS4yNDQuNTE0LS4xNjMuMTExLS4zNi4xNjctLjU5Mi4xNjdoLS4xODR2Mi4yMzRjLjgzMiAwIDEuNDM4LS4yMzQgMS44MTgtLjcuMzgtLjQ2Ni41Ny0xLjIyMi41Ny0yLjI2NiAwLTEuMDEtLjIwNi0xLjc2My0uNjE5LTIuMjYtLjQxMi0uNDk2LTEuMDEzLS43NDQtMS44MDItLjc0NC0uNDU2IDAtLjgyNS4wOTEtMS4xMDcuMjc2LS4yODIuMTg0LS41MS40MTUtLjY4NC42OTNhNC4yNCA0LjI0IDAgMDAtLjQyNC45MDUgMjQuOTIgMjQuOTIgMCAwMS0uMzIuOTA1IDIuNSAyLjUgMCAwMS0uMzguNjk0LjczMy43MzMgMCAwMS0uNjAyLjI3NS43NTguNzU4IDAgMDEtLjUzMi0uMTk4Yy0uMTQ1LS4xMzMtLjIxNy0uMzI0LS4yMTctLjU3MiAwLS4yMy4wNjYtLjQyLjItLjU2NS4xMzQtLjE0NS4zNjgtLjIxOC43LS4yMThoLjE4NXYtMi4zMTFoLS4yNzFjLS40MDYgMC0uNzQ2LjA2OC0xLjAyLjIwNWExLjY3NiAxLjY3NiAwIDAwLS42NjguNTk3Yy0uMTcuMjYyLS4yOS41ODItLjM1OS45NjMtLjA2OC4zODEtLjEwMy44Mi0uMTAzIDEuMzE2em0uMTIgNy45Nmg2LjAzNnYxLjc5N2gxLjcxNVYzMS45M2gtMS43MTV2MS43NzJoLTYuMDM2djIuMzg4em0wIDQuNzQ5aDUuNzc1di4wMjZsLTUuNzc1IDEuMjd2MS43MjFsNS43NzUgMS4yNzF2LjAyNmgtNS43NzV2Mi4yMzRoNy43NTF2LTMuNDE1bC00LjU5Mi0uOTYzdi0uMDI2bDQuNTkyLS45NjN2LTMuNDE1aC03Ljc1MXYyLjIzNHptMCAxMy40MDNoMS42NXYtMy4xNThoMS41NDF2Mi44NWgxLjU4NXYtMi44NWgxLjMyNXYzLjA0MmgxLjY1di01LjQzaC03Ljc1MXY1LjU0NnptMCAzLjM3Nmg0Ljc4N3YuMDI1bC00Ljc4NyAxLjU5MnYyLjYyaDcuNzUxVjU5LjYyaC00Ljc3N3YtLjAyNmw0Ljc3Ny0xLjU0di0yLjY3MWgtNy43NTF2Mi4yMzR6bTAgOS4yM2g2LjAzNnYxLjc5N2gxLjcxNXYtNS45NTdoLTEuNzE1djEuNzcyaC02LjAzNnYyLjM4OHptLS4xMiA5LjAxMWMwIDEuMDUzLjE4NyAxLjg1Ny41NiAyLjQxNC4zNzIuNTU2Ljk3MS44MzQgMS43OTYuODM0LjQ3IDAgLjg1Mi0uMDk2IDEuMTQ1LS4yODkuMjk0LS4xOTIuNTMtLjQzNC43MTItLjcyNWE0LjU0IDQuNTQgMCAwMC40NC0uOTM3Yy4xMTEtLjMzNC4yMjItLjY0Ny4zMy0uOTM4YTIuNzcgMi43NyAwIDAxLjM4Ni0uNzI1LjcyLjcyIDAgMDEuNjAyLS4yODkuNzEuNzEgMCAwMS40NzIuMThjLjE0Mi4xMi4yMTIuMzA4LjIxMi41NjUgMCAuMjMxLS4wODEuNDAyLS4yNDQuNTE0LS4xNjMuMTEtLjM2LjE2Ni0uNTkyLjE2NmgtLjE4NHYyLjIzNGMuODMyIDAgMS40MzgtLjIzMyAxLjgxOC0uNy4zOC0uNDY2LjU3LTEuMjIxLjU3LTIuMjY2IDAtMS4wMS0uMjA2LTEuNzYzLS42MTktMi4yNi0uNDEyLS40OTYtMS4wMTMtLjc0NC0xLjgwMi0uNzQ0LS40NTYgMC0uODI1LjA5Mi0xLjEwNy4yNzZhMi4yMyAyLjIzIDAgMDAtLjY4NC42OTQgNC4yNCA0LjI0IDAgMDAtLjQyNC45MDUgMjQuOTIgMjQuOTIgMCAwMS0uMzIuOTA1IDIuNTEgMi41MSAwIDAxLS4zOC42OTMuNzMzLjczMyAwIDAxLS42MDIuMjc2Ljc1OC43NTggMCAwMS0uNTMyLS4xOTljLS4xNDUtLjEzMi0uMjE3LS4zMjMtLjIxNy0uNTcxYS44LjggMCAwMS4yLS41NjVjLjEzNC0uMTQ2LjM2OC0uMjE4LjctLjIxOGguMTg1di0yLjMxMWgtLjI3MWMtLjQwNiAwLS43NDYuMDY4LTEuMDIuMjA1YTEuNjc2IDEuNjc2IDAgMDAtLjY2OC41OTcgMi41OSAyLjU5IDAgMDAtLjM1OS45NjNjLS4wNjguMzgtLjEwMy44Mi0uMTAzIDEuMzE2em0uMTIgOS45MWgxLjY1di0zLjE1OGgxLjU0MXYyLjg1aDEuNTg1di0yLjg1aDEuMzI1djMuMDQzaDEuNjV2LTUuNDNoLTcuNzUxdjUuNTQ2em0wIDMuNTNoMy4xMDV2LjYzYzAgLjE0NS0uMDE3LjI2Ny0uMDUuMzY2YS41LjUgMCAwMS0uMTczLjI0My43NzYuNzc2IDAgMDEtLjM0Mi4xMzUgMy4xODUgMy4xODUgMCAwMS0uNTQzLjAzOWgtLjUyYTYuNzUgNi43NSAwIDAwLS43MDYuMDMyIDMuNDYgMy40NiAwIDAwLS40MTMuMDY0Yy0uMTM4LjAzLS4yNTcuMDc1LS4zNTguMTM1djIuNTQyaC4xMDhhLjQ5OS40OTkgMCAwMS4xMTQtLjE2NyAzLjU5IDMuNTkgMCAwMS4xMjUtLjEwMi42My42MyAwIDAxLjE4NS0uMDY1Yy4wOC0uMDE3LjE2OC0uMDMuMjY2LS4wMzguMDk3LS4wMDkuMi0uMDEzLjMwOS0uMDEzaC45NzdjLjUyMSAwIC45My0uMTA3IDEuMjI3LS4zMjEuMjk3LS4yMTQuNDY3LS42MDguNTEtMS4xODFoLjAyMmMuMDcyLjU0Ny4yNjguOTQ1LjU4NiAxLjE5NC4zMTguMjQ4LjczOC4zNzIgMS4yNi4zNzIuMjk2IDAgLjU3MS0uMDQ1LjgyNC0uMTM1LjI1NC0uMDkuNDczLS4yMzUuNjU3LS40MzYuMTg1LS4yMDEuMzI4LS40NjIuNDI5LS43ODMuMTAxLS4zMjEuMTUyLS43MDkuMTUyLTEuMTYydi0zLjczNmgtNy43NTF2Mi4zODd6bTQuNDcyLjQ3NnYtLjQ3NmgxLjgyNHYuNDYzYzAgLjM2LS4wNjkuNjE4LS4yMDYuNzc2LS4xMzcuMTU5LS4zNy4yMzgtLjY5NS4yMzgtLjI3NSAwLS40OTctLjA4MS0uNjY3LS4yNDQtLjE3LS4xNjItLjI1Ni0uNDE1LS4yNTYtLjc1N3ptLTQuNDcyIDkuMDg5bDcuNzUxIDEuOTc3di0yLjU0MmwtNS44NC0uOTYzdi0uMDI2bDUuODQtLjk2M3YtMi41MDNsLTcuNzUxIDEuOTM4djMuMDgyem0wIDQuOTI5aDcuNzUxdi0yLjM4OGgtNy43NTF2Mi4zODh6bS0uMTIgNC4zMTNjMCAuMzg1LjAzNS43NTkuMTAzIDEuMTIzLjA3LjM2NC4yMDMuNjg3LjQwMi45Ny4yLjI4Mi40NzIuNTA5LjgyLjY4LjM0Ny4xNzEuNzkyLjI1NyAxLjMzNS4yNTdoLjU3NXYtMi4zMTFjLS4zNjkgMC0uNjc1LS4wMTEtLjkxNy0uMDMyYTIuNDc5IDIuNDc5IDAgMDEtLjU4LS4xMDkuNTkzLjU5MyAwIDAxLS4zMS0uMjE5LjY0NC42NDQgMCAwMS0uMDkyLS4zNTljMC0uMTguMDQtLjMyMy4xMTktLjQzLjA4LS4xMDcuMjItLjE4OS40MjMtLjI0NGEzLjkzIDMuOTMgMCAwMS44Mi0uMTA5IDI1Ljc3IDI1Ljc3IDAgMDExLjI5Ny0uMDI2Yy41MjEgMCAuOTU0LjAwOCAxLjI5OC4wMjYuMzQzLjAxNy42MTcuMDUzLjgyLjEwOS4yMDIuMDU1LjM0My4xMzcuNDIzLjI0NGEuNy43IDAgMDEuMTIuNDNjMCAuMjMxLS4wOC4zOTgtLjI0LjUtLjE1OS4xMDMtLjQ2LjE1NS0uOS4xNTVoLS40MzV2Mi4zMTFoLjQ4OWMuMzc2IDAgLjcxNC0uMDU0IDEuMDE1LS4xNjEuMy0uMTA3LjU1Ny0uMjc4Ljc3LS41MTMuMjE0LS4yMzYuMzc5LS41NDIuNDk0LS45MTguMTE2LS4zNzcuMTc0LS44MzUuMTc0LTEuMzc0IDAtLjYxNy0uMDctMS4xMzQtLjIxMi0xLjU1NGEyLjE1MSAyLjE1MSAwIDAwLS42OS0xLjAxNGMtLjMxNy0uMjU3LS43MzQtLjQzOS0xLjI0OC0uNTQ2LS41MTMtLjEwNy0xLjE0LS4xNi0xLjg3OC0uMTYtLjcyMyAwLTEuMzQuMDQ1LTEuODUuMTM1LS41MS4wODktLjkyNy4yNTQtMS4yNS40OTQtLjMyMS4yNC0uNTUxLjU3My0uNjg4IDEuMDAxLS4xMzguNDI4LS4yMDcuOTc2LS4yMDcgMS42NDR6bS4xMiA5LjcwNWgxLjY1di0zLjE1OGgxLjU0MXYyLjg1aDEuNTg1di0yLjg1aDEuMzI1djMuMDQzaDEuNjV2LTUuNDMxaC03Ljc1MXY1LjU0NnptLS4xMiAzLjk0MWMwIDEuMDUzLjE4NyAxLjg1Ny41NiAyLjQxMy4zNzIuNTU3Ljk3MS44MzUgMS43OTYuODM1LjQ3IDAgLjg1Mi0uMDk2IDEuMTQ1LS4yODlhMi4zMyAyLjMzIDAgMDAuNzEyLS43MjVjLjE4LS4yOTEuMzI3LS42MDQuNDQtLjkzOC4xMTEtLjMzMy4yMjItLjY0Ni4zMy0uOTM3LjEwOS0uMjkxLjIzNy0uNTMzLjM4Ni0uNzI1YS43Mi43MiAwIDAxLjYwMi0uMjg5LjcxLjcxIDAgMDEuNDcyLjE4Yy4xNDIuMTIuMjEyLjMwOC4yMTIuNTY1IDAgLjIzMS0uMDgxLjQwMi0uMjQ0LjUxMy0uMTYzLjExMS0uMzYuMTY3LS41OTIuMTY3aC0uMTg0djIuMjM0Yy44MzIgMCAxLjQzOC0uMjMzIDEuODE4LS43LjM4LS40NjYuNTctMS4yMjIuNTctMi4yNjYgMC0xLjAxLS4yMDYtMS43NjMtLjYxOS0yLjI1OS0uNDEyLS40OTctMS4wMTMtLjc0NS0xLjgwMi0uNzQ1LS40NTYgMC0uODI1LjA5Mi0xLjEwNy4yNzYtLjI4Mi4xODQtLjUxLjQxNS0uNjg0LjY5M2E0LjI0IDQuMjQgMCAwMC0uNDI0LjkwNSAyMy45NyAyMy45NyAwIDAxLS4zMi45MDYgMi41MDggMi41MDggMCAwMS0uMzguNjkzLjczMy43MzMgMCAwMS0uNjAyLjI3Ni43NTcuNzU3IDAgMDEtLjUzMi0uMTk5Yy0uMTQ1LS4xMzMtLjIxNy0uMzIzLS4yMTctLjU3MWEuOC44IDAgMDEuMi0uNTY1Yy4xMzQtLjE0Ni4zNjgtLjIxOS43LS4yMTloLjE4NXYtMi4zMTFoLS4yNzFjLS40MDYgMC0uNzQ2LjA2OS0xLjAyLjIwNmExLjY3NyAxLjY3NyAwIDAwLS42NjguNTk3IDIuNTkgMi41OSAwIDAwLS4zNTkuOTYzIDcuNDY1IDcuNDY1IDAgMDAtLjEwMyAxLjMxNnoiIGZpbGw9IiNmZmYiLz4KICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMxLjEzNSA4Mi4xMzNoOC44NThWMGgtOC44NTh2ODIuMTMzem0tMTAuMjE0IDQyLjY2OGg4LjA5MXYtNjYuMTVoLTguMDl2NjYuMTV6bS4wMDEtNjkuMTM2aDguMDlWNDIuNzY4aC04LjA5djEyLjg5N3oiIGZpbGw9IiNEOTI3MkEiLz4KPC9zdmc+Cg==",
            fullWidth: 73,
            fullHeight: 150,
            aspectRatio: 0.488,
          }}
        />
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__zvqNn)}
      >
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__sGlsk)}
          >
            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__ttwgT
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__raL4E)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__uetv2)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__uXwfp
                        )}
                      >
                        {"INVESTMENT"}
                      </div>
                    </div>

                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__vN03)}
                      role={"img"}
                    />
                  </React.Fragment>
                ),

                value: args.slot5,
              })}
            </p.Stack>

            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__udf2B
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__o9Kv)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__aMmYm)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__fyUWr
                        )}
                      >
                        {"LIFE INSURANCE"}
                      </div>
                    </div>

                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__cTo0Y)}
                      role={"img"}
                    />
                  </React.Fragment>
                ),

                value: args.slot4,
              })}
            </p.Stack>

            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__oUorc
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg___6Wui)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__aL8S)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__tuCpx
                        )}
                      >
                        {"HEALTH INSURANCE"}
                      </div>
                    </div>

                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__ek0Yn)}
                      role={"img"}
                    />
                  </React.Fragment>
                ),

                value: args.slot3,
              })}
            </p.Stack>

            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__a4T26
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__jclOc)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__mv4Ij)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text___8Pdhj
                        )}
                      >
                        {"RESOURCE CENTER"}
                      </div>
                    </div>

                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__jikzY)}
                      role={"img"}
                    />
                  </React.Fragment>
                ),

                value: args.slot2,
              })}
            </p.Stack>

            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__yjkai
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__pUJno)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__lLyCu)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__f04Px
                        )}
                      >
                        {"GET IN TOUCH"}
                      </div>
                    </div>

                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__v7I2H)}
                      role={"img"}
                    />
                  </React.Fragment>
                ),

                value: args.slot,
              })}
            </p.Stack>

            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link___11NjC
              )}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg__fCStN)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__m3Q3O)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__aCoFi
                        )}
                      >
                        {"ABOUT US"}
                      </div>
                    </div>

                    <Icon7Icon
                      className={classNames(projectcss.all, sty.svg___1S1Y6)}
                      role={"img"}
                    />
                  </React.Fragment>
                ),

                value: args.children,
              })}
            </p.Stack>

            <p.Stack
              as={"a"}
              hasGap={true}
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__lhd7G
              )}
            >
              {true ? (
                <Icon7Icon
                  className={classNames(projectcss.all, sty.svg__q72FX)}
                  role={"img"}
                />
              ) : null}

              <div
                data-plasmic-name={"text"}
                data-plasmic-override={overrides.text}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text
                )}
              >
                {"SIGN IN / UP"}
              </div>

              {true ? (
                <Icon7Icon
                  className={classNames(projectcss.all, sty.svg__x1Xsd)}
                  role={"img"}
                />
              ) : null}
            </p.Stack>
          </p.Stack>
        ) : null}
      </p.Stack>
    </p.Stack>
  ) : null;
}

const PlasmicDescendants = {
  root: ["root", "img", "text"],
  img: ["img"],
  text: ["text"],
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicMainMenu__ArgProps,
      internalVariantPropNames: PlasmicMainMenu__VariantProps,
    });

    return PlasmicMainMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMainMenu";
  } else {
    func.displayName = `PlasmicMainMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicMainMenu = Object.assign(
  // Top-level PlasmicMainMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicMainMenu
    internalVariantProps: PlasmicMainMenu__VariantProps,
    internalArgProps: PlasmicMainMenu__ArgProps,
  }
);

export default PlasmicMainMenu;
/* prettier-ignore-end */