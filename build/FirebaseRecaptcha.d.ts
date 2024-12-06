import * as React from "react";
import { FirebaseOptions } from "./FirebaseRecaptcha.types";
import { WebView } from "./WebView";
interface Props extends React.ComponentProps<typeof WebView> {
    firebaseConfig?: FirebaseOptions;
    firebaseVersion?: string;
    appVerificationDisabledForTesting?: boolean;
    languageCode?: string;
    onLoad?: () => any;
    onError?: () => any;
    onVerify: (token: string) => any;
    onFullChallenge?: () => any;
    invisible?: boolean;
    verify?: boolean;
}
declare function FirebaseRecaptcha(props: Props): React.JSX.Element | null;
declare namespace FirebaseRecaptcha {
    var defaultProps: {
        firebaseConfig: void | FirebaseOptions;
    };
}
export default FirebaseRecaptcha;
//# sourceMappingURL=FirebaseRecaptcha.d.ts.map