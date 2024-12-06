export interface FirebaseAuthApplicationVerifier {
    readonly type: string;
    verify(): Promise<string>;
}
export interface FirebaseOptions {
    /**
     * Unique identifier of the Firebase app.
     */
    appId?: string;
    /**
     * Firebase API key.
     */
    apiKey?: string;
    /**
     * Firebase database URL.
     */
    databaseURL?: string;
    /**
     * Tracking identifier for Google Analytics.
     */
    trackingId?: string;
    messagingSenderId?: string;
    /**
     * Google Cloud Storage bucket name.
     */
    storageBucket?: string;
    /**
     * Unique identifier of the Firebase project.
     */
    projectId?: string;
    authDomain?: string;
    measurementId?: string;
}
//# sourceMappingURL=FirebaseRecaptcha.types.d.ts.map