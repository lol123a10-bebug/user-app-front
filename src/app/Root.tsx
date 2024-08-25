import { Fragment } from "react";
import { withProviders } from "./providers";
import { RedirectGuard } from "processes/auth";
import { Pages } from "pages/index";

const _Root = () => {
  return (
    <Fragment>
      <RedirectGuard>
        <Pages />
      </RedirectGuard>
    </Fragment>
  );
};

export const Root = withProviders(_Root);
