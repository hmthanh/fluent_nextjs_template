import * as React from "react";

import {
  DefaultButton,
  IIconProps,
  IStackTokens,
  PrimaryButton,
  Stack
} from "@fluentui/react";
import { getTheme } from "@fluentui/react/lib/Styling";
import { IButtonExampleProps } from "./home.types";

const alertOff: IIconProps = { iconName: "AlertOff20Regular" };
const alertOn: IIconProps = { iconName: "Alert20Regular" };
const alertOffFilled: IIconProps = { iconName: "AlertOff20Filled" };
const alertOnFilled: IIconProps = { iconName: "Alert20Filled" };

const theme = getTheme();
const stackTokens: IStackTokens = { childrenGap: 40 };
export const IndexHomePage: React.FC<
  IButtonExampleProps
> = (props) => {
  return (
    <div>
      <Stack horizontal tokens={stackTokens}>
        <DefaultButton
          text="Standard"
          onClick={_alertClicked}
          allowDisabledFocus
          iconProps={alertOff}
        />
        <PrimaryButton
          text="Primary"
          onClick={_alertClicked}
          allowDisabledFocus
          iconProps={alertOnFilled}
        />
      </Stack>
    </div>
  );
};

function _alertClicked(): void {
  alert("Clicked");
}
