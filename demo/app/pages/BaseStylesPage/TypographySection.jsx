import React from 'react'
import {PageFrame} from "../../../../src/layout";

const TypographySection = () =>
    <section>
        <PageFrame colour='grey'>
            <h2 class="demo-header-secondary">Typography</h2>
        </PageFrame>
        <PageFrame>
            <p class="primary-heading">Primary heading</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                        <span class="block"><span
                            class="bold">Mobile:</span> Open Sans, 20px/1.4em, 600, uppercase </span>
                <span class="block"><span
                    class="bold">Desktop:</span> Open Sans, 48px/1.4em, 700, uppercase </span>
                <span
                    class="block">Used for the main heading on big hero pages such as the Candidate Readonly Page</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="secondary-heading">Secondary heading</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                        <span class="block"><span
                            class="bold">Mobile:</span> Open Sans, 20px/1.4em, 600, uppercase </span>
                <span class="block"><span
                    class="bold">Desktop:</span> Open Sans, 34px/1.4em, 700, uppercase </span>
                <span class="block">Used for the main heading on index and dashboard pages</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="tertiary-heading">Tertiary heading</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                <span class="block"><span class="bold">Mobile:</span> Open Sans, 12px/1.5em, 600 </span>
                <span class="block"><span class="bold">Desktop:</span> Open Sans, 22px/1.5em, 600 </span>
                <span class="block">Used for for sections within pages.  For example the heading of the education section of a candidates profile</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="quaternary-heading">Quaternary heading</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                        <span class="block"><span
                            class="bold">Mobile:</span> Open Sans, 12px/1.5em, 600, uppercase </span>
                <span class="block"><span
                    class="bold">Desktop:</span> Open Sans, 22px/1em, 600, uppercase </span>
                <span class="block">Used for items within pages.  Used as the header for letterboxes and the header in modals.</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="abstract-text">Abstract text</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                <span class="block"><span class="bold">Mobile:</span> Open Sans, 12px/1.5em, 600 </span>
                <span class="block"><span class="bold">Desktop:</span> Open Sans, 22px/1.4em, 600 </span>
                <span class="block">First paragraph in a body of text, or any narrative text that needs to stand out more.</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="body-text">Body text</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                <span class="block"><span class="bold">Mobile:</span> Open Sans, 12px/1.4em, 600</span>
                <span class="block"><span class="bold">Desktop:</span> Open Sans, 16px/1.4em, 600</span>
                <span class="block">Default styling for any large body of text</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="small-text">Small text</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                <span class="block"><span class="bold">Mobile:</span> Open Sans, 12px/1.5em, 600</span>
                <span class="block"><span class="bold">Desktop:</span> Open Sans, 12px/1.5em, 600</span>
                <span class="block">Small, unimportant text</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="technical-text">Technical text</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                <span class="block"><span class="bold">Mobile:</span> monospace, 12px/1em, 400</span>
                <span class="block"><span class="bold">Desktop:</span> monospace, 12px/1em, 400</span>
                <span class="block">Indicates that text reflects something technical.  Note: should only ever be shown to super users</span>
            </p>
        </PageFrame>
        <PageFrame>
            <p class="body-text bulleted">Bulleted</p>
        </PageFrame>
        <PageFrame colour='grey'>
            <p class="demo-description">
                <span class="block">Used to display unordered lists</span>
            </p>
        </PageFrame>

    </section>

export default TypographySection