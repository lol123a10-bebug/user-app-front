import compose from "compose-function";

import { withAuthContext } from "./with-auth-context";
import { withMantine } from "./with-mantine";

export const withProviders = compose(withMantine, withAuthContext);
