import React, {Component} from 'react'
import {PageFrame, ConfettiHero, Letterbox, Candybox, FloatingBox} from "../../../../src/layout";

export default class LayoutSection extends Component {

    state = {}

    render() {
        return (
            <section class="layout-section">
                <PageFrame colour='grey'>
                    <h2 class="demo-header-secondary">Layout</h2>
                    <h3 class="demo-header-tertiary">Standard page frame</h3>
                    <p class="demo-description">
                        Use this component to ensure all content is aligned properly within the page
                    </p>

                </PageFrame>

                <PageFrame>
                    <p class="body-text">
                        Wrap this component around all your content. Wrap this component around all your content. Wrap
                        this component around all your content. Wrap this component around all your content. Wrap this
                        component around all your content. Wrap this component around all your content. Wrap this
                        component around all your content. Wrap this component around all your content.
                    </p>
                </PageFrame>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Page frame with right gutter</h3>
                </PageFrame>

                <PageFrame hasGutter>
                    <p class="body-text">
                        Wrap this component around all your content. Wrap this component around all your content. Wrap
                        this component around all your content. Wrap this component around all your content. Wrap this
                        component around all your content. Wrap this component around all your content. Wrap this
                        component around all your content. Wrap this component around all your content.
                    </p>
                </PageFrame>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Confetti Hero</h3>
                    <p class="demo-description">
                        Displays content within a pattern background.
                    </p>
                </PageFrame>

                <ConfettiHero>
                    <PageFrame>
                        <h2
                            class="primary-heading"
                            style={{color: '#ffff'}}
                        >Red Hero</h2>
                        <p
                            class="abstract-text"
                            style={{color: '#ffff'}}
                        >For use on candidate pages. The content background
                            image stays fixed as you scroll</p>
                    </PageFrame>
                </ConfettiHero>
                <ConfettiHero colour="blue">
                    <PageFrame>
                        <h2
                            class="primary-heading"
                            style={{color: '#ffff'}}
                        >Blue Hero</h2>
                        <p
                            class="abstract-text"
                            style={{color: '#ffff'}}
                        >For use on employer pages. The content background
                            image stays fixed as you scroll</p>
                    </PageFrame>
                </ConfettiHero>
                <ConfettiHero colour="yellow">
                    <PageFrame>
                        <h2
                            class="primary-heading"
                            style={{color: '#ffff'}}
                        >Yellow Hero</h2>
                        <p
                            class="abstract-text"
                            style={{color: '#ffff'}}
                        >For use on blog pages. The content background
                            image stays fixed as you scroll</p>
                    </PageFrame>
                </ConfettiHero>

                <ConfettiHero colour="grey">
                    <PageFrame>
                        <h2
                            class="primary-heading"
                            style={{color: '#ffff'}}
                        >Grey Hero</h2>
                        <p
                            class="abstract-text"
                            style={{color: '#ffff'}}
                        >Indicates this page has been disabled</p>
                    </PageFrame>
                </ConfettiHero>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Candybox</h3>
                    <p class="demo-description">
                        Display content with a grey background. Can take an array to render a list of buttons on the
                        right hand side. Replacement for the Letterbox
                    </p>
                </PageFrame>
                <ul>
                    <Candybox>
                        <p class="abstract-text">
                            <span class="strong block">Standard Letterbox, no title</span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Candybox>
                    <Candybox
                        title="Candybox with href"
                        href="https://www.google.com"
                    >
                        <p class="abstract-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Candybox>
                    <Candybox
                        title="Candybox with Action Buttons"
                        href="/test"
                        buttonData={[
                            {
                                text: 'First Button',
                                onClick: () => console.log('click'),
                                class: 'isometric red',
                            },
                            {
                                text: 'Second Button',
                                onClick: () => console.log('click'),
                                class: 'red-red',
                            },
                            {
                                text: 'Third Button',
                                onClick: () => console.log('click'),
                                class: 'transparent-grey',
                            },
                            {
                                text: 'Fourth Button',
                                onClick: () => console.log('click'),
                                class: 'transparent-yellow',
                            },
                            {
                                text: 'Fifth Button',
                                onClick: () => console.log('click'),
                                class: 'transparent-red',
                            },
                        ]}
                    >
                        <p class="abstract-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Candybox>
                    <Candybox
                        title="Candybox with action buttons, artwork and abstract"
                        abstract={<p class="abstract-text strong">Lorem ipsum dolar sit amet</p>}
                        href="https://www.google.com/"
                        artwork={
                            <div>
                                <p style={{
                                    fontSize: '60px',
                                    backgroundColor: 'white',
                                    textAlign: 'center',
                                    lineHeight: '220px',
                                }}>^_^</p>

                            </div>
                        }
                        buttonData={[
                            {
                                text: 'First Button',
                                onClick: () => console.log('click'),
                                class: 'isometric red',
                            },
                            {
                                text: <span>Second Button</span>,
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                            {
                                text: <span>Third Button</span>,
                                href: '/somehwere',
                                class: 'white-red',
                            },
                            {
                                text: 'Fourth Button',
                                onClick: () => console.log('click'),
                            },
                        ]}
                    >
                        <p class="abstract-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Candybox>
                </ul>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Letterbox</h3>
                    <p class="demo-description">
                        Display content with a grey background. Can take an array to render a list of buttons on the
                        right hand side.
                    </p>
                </PageFrame>
                <ul>
                    <Letterbox>
                        <h2 className="secondary-heading">Standard Letterbox</h2>
                        <p class="abstract-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Letterbox>
                    <Letterbox
                        buttonData={[
                            {
                                text: 'First Button',
                                onClick: () => console.log('click'),
                                class: 'isometric red',
                            },
                            {
                                text: 'Second Button',
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                            {
                                text: 'Third Button',
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                            {
                                text: 'Fourth Button',
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                        ]}
                    >
                        <h2 className="secondary-heading">Letterbox with Action Buttons</h2>
                        <p class="abstract-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                            sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Letterbox>
                    <Letterbox
                        artwork={
                            <div>
                                <p style={{
                                    fontSize: '60px',
                                    backgroundColor: 'white',
                                    textAlign: 'center',
                                    lineHeight: '220px',
                                }}>^_^</p>

                            </div>
                        }
                        buttonData={[
                            {
                                text: 'First Button',
                                onClick: () => console.log('click'),
                                class: 'isometric red',
                            },
                            {
                                text: 'Second Button',
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                            {
                                text: 'Third Button',
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                            {
                                text: 'Fourth Button',
                                onClick: () => console.log('click'),
                                class: 'white-red',
                            },
                        ]}
                    >
                        <h2 className="secondary-heading">Letterbox with action buttons and artwork</h2>
                        <p class="abstract-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </Letterbox>
                </ul>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Floating Box</h3>
                    <p class="demo-description">
                        Display content within a box that is locked to the top of the screen
                    </p>
                </PageFrame>
                <PageFrame>

                    <button class="square-button white-red"
                            onClick={() => this.setState({showRedFloatingContent: !this.state.showRedFloatingContent})}>Toggle
                        Red Floating Box
                    </button>
                    <button class="square-button white-blue"
                            onClick={() => this.setState({showBlueFloatingContent: !this.state.showBlueFloatingContent})}>Toggle
                        Blue Floating Box
                    </button>
                </PageFrame>


                <FloatingBox visible={this.state.showRedFloatingContent}>
                    <p class="abstract-text">Red Floating Box</p>
                </FloatingBox>

                <FloatingBox visible={this.state.showBlueFloatingContent} colour="blue">
                    <p class="abstract-text">Blue Floating Box</p>
                </FloatingBox>


            </section>
        )
    }

}
