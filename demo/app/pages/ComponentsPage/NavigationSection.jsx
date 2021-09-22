import React from 'react'
import {PageFrame} from "../../../../src/layout";
import { SquareTabs, Breadcrumbs, PromptStrip } from "../../../../src/navigation";
import { loremIpsum } from "../../common/";

const NavigationSection = () =>
    <section class="navigation-section">
        <PageFrame colour='grey'>
            <h2 class="demo-header-secondary">Navigation</h2>
            <h3 class="demo-header-tertiary">Square Tabs</h3>
            <p class="demo-description">
                Used to divide a page into sections.  Can be red or blue and can be divided into quarters.
            </p>
        </PageFrame>

        <SquareTabs>
            <div
                label="First Tab"
                hash="first"
            >
                <PageFrame>
                    <p class="body-text">
                    Red Tabs: First Tab Content
                    </p>
                    <p class="body-text">
                    {loremIpsum}
                    </p>
                </PageFrame>
            </div>
            <div
                label="Second Tab"
                hash="two"
            >
                <PageFrame>
                    Red Tabs: Second Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Third Tab"
                hash="third"
            >
                <PageFrame>
                    Red Tabs: Third Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Fourth Tab"
                hash="fourth"
            >
                <PageFrame>
                    Red Tabs: Fourth Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
        </SquareTabs>
        <SquareTabs colour="blue">
            <div
                label="First Tab"
                hash="first"
            >
                <PageFrame>
                    Blue Tabs: First Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Second Tab"
                hash="two"
            >
                <PageFrame>
                    Blue Tabs: Second Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Third Tab"
                hash="third"
            >
                <PageFrame>
                    Blue Tabs: Third Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Fourth Tab"
                hash="fourth"
            >
                <PageFrame>
                    Blue Tabs: Fourth Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
        </SquareTabs>
        <SquareTabs type="quarter">
            <div
                label="First Tab"
                hash="first"
            >
                <PageFrame>
                    Quarter Tabs: First Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Second Tab"
                hash="two"
            >
                <PageFrame>
                    Quarter Tabs: Second Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Third Tab"
                hash="third"
            >
                <PageFrame>
                    Quarter Tabs: Third Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
            <div
                label="Fourth Tab"
                hash="fourth"
            >
                <PageFrame>
                    Quarter Tabs: Fourth Tab Content
                    {loremIpsum}
                </PageFrame>
            </div>
        </SquareTabs>

        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Breadcrumbs</h3>
            <p class="demo-description">
                Can be red or blue
            </p>
        </PageFrame>

        <Breadcrumbs
            data={[
                {
                    label: 'First Page',
                    url: '/first-page',
                    isActive: true,
                },
                {
                    label: 'Second Page',
                    url: '/second-page',
                    isActive: true,
                },
                {
                    label: 'Third Page',
                    url: '/third-page',
                    isCurrent: true,
                },
                {
                    label: 'Fourth Page',
                    url: '/fourth-page',
                    isActive: false,
                },
                {
                    label: 'Fifth Page',
                    url: '/fifth-page',
                    isActive: false,
                },
                {
                    label: 'Sixth Page',
                    url: '/sixth-page',
                    isActive: false,
                },
                {
                    label: 'Seventh Page',
                    url: '/seventh-page',
                    isActive: false,
                },

            ]}
        />

        <Breadcrumbs
            data={[
                {
                    label: 'First Page',
                    url: '/first-page',
                    isActive: true,
                },
                {
                    label: 'Second Page',
                    url: '/second-page',
                    isActive: false,
                },
            ]}
            colour="blue"
        />

        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Prompt Strip</h3>
            <p class="demo-description">
                Place at the bottom of content to prompt users to go next or previous.  Can be red or blue.
            </p>
        </PageFrame>

        <PromptStrip buttonData={[{
            text: 'First Button',
            url: '/companies/onboard/first-button',
            isIsometric: true,
        },
            {
                text: 'Second Button',
                url: '/companies/onboard/second-button',
            }]}
        />
        <PromptStrip
            colour="blue" buttonData={[{
            text: 'First Button',
            url: '/companies/onboard/first-button',
            isIsometric: true,
        },
            {
                text: 'Second Button',
                url: '/companies/onboard/second-button',
            }]}/>

        <PageFrame colour='grey'>
            <h3 class="demo-header-tertiary">Chevron Back Link</h3>
            <p class="demo-description">
                Place at the top of a page to allow users to navigation back a page.
            </p>
        </PageFrame>

        <PageFrame colour="red">
            <button
                class="chevron-back-link body-text strong"
                onClick={console.log('go back')}
            >Back
            </button>
        </PageFrame>

    </section>

export default NavigationSection