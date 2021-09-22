import React, {Component} from 'react'
import {PageFrame} from "../../../../src/layout";
import { Accordion, Modal, BoxFilter } from "../../../../src/common"

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

export default class ContentComponentsSection extends Component {

    state = {
        openModal: false
    }

    openModal = (colour) => () => {
        this.setState({
            openModal: colour
        })
    }

    render() {
        return (
            <section class="content-components-section">
                <PageFrame colour='grey'>
                    <h2 class="demo-header-secondary">Content Components</h2>
                    <h3 class="demo-header-tertiary">Accordion</h3>
                    <p class="demo-description">
                        Allows users to show or hide data. Can be forced open.  Can be red or blue.
                    </p>
                </PageFrame>

                <Accordion header="Red accordion header, forced open" isOpen>
                    <p class="abstract-text"></p>
                    <p class="abstract-text">
                        {loremIpsum}
                    </p>
                    <p class="abstract-text">
                        {loremIpsum}
                    </p>
                    <p class="abstract-text">
                        {loremIpsum}
                    </p>

                </Accordion>

                <Accordion header="Blue accordion header, not forced open" colour="blue">
                    <p className="abstract-text">
                        {loremIpsum}
                    </p>
                </Accordion>

                <PageFrame colour='grey'>
                    <h3 class="demo-header-tertiary">Timeline list</h3>
                    <p class="demo-description">
                        Displays a vertical list of data connected by timeline.
                    </p>
                </PageFrame>

                <PageFrame>
                    <ul class="timeline-list">

                        <li class="timeline-item">
                            <h3 class="tertiary-heading">First Line</h3>
                            <h4 class="abstract-text">Second Line</h4>
                            <h5 class="body-text strong">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</h5>
                            <p class="body-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex
                                ea commodo consequat. </p>
                        </li>

                        <li class="timeline-item">
                            <h3 class="tertiary-heading">First Line</h3>
                            <h4 class="abstract-text">Second Line</h4>
                            <h5 class="body-text strong">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod
                                tempor
                                incididunt ut labore et dolore magna aliqua.</h5>
                            <p class="body-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                laboris nisi ut aliquip ex
                                ea commodo consequat. </p>
                        </li>

                    </ul>
                </PageFrame>

                <PageFrame colour="grey">
                    <h3 class="demo-header-tertiary">Modal</h3>
                    <p class="demo-description">
                        Modals can be red, blue, block red and block blue.  Block modals display with a block 3D effect.
                    </p>
                    <button class="square-button red-red" onClick={this.openModal('red')}>Open Red Modal</button>
                    <button class="square-button red-red" onClick={this.openModal('blue')}>Open Blue Modal</button>
                    <button class="square-button red-red" onClick={this.openModal('red-isometric')}>Open Red Block Modal</button>
                    <button class="square-button red-red" onClick={this.openModal('blue-isometric')}>Open Blue Block Modal</button>
                </PageFrame>

                <Modal
                    isOpen={this.state.openModal === 'red'}
                    onClose={() => this.setState({openModal: false})}
                    onSuccess={() => this.setState({openModal: false})}
                >
                    <div>
                        <h2 class="quaternary-heading red">Red Modal</h2>
                        <p class="abstract-text">This is the modal description. <span
                            class="bold">This bit is in bold</span>
                        </p>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openModal === 'blue'}
                    onClose={() => this.setState({openModal: false})}
                    onSuccess={() => this.setState({openModal: false})}
                    colour='blue'
                >
                    <div>
                        <h2 class="quaternary-heading red">Blue Modal</h2>
                        <p class="abstract-text">This is the modal description. <span
                            class="bold">This bit is in bold</span>
                        </p>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openModal === 'red-isometric'}
                    onClose={() => this.setState({openModal: false})}
                    onSuccess={() => this.setState({openModal: false})}
                    isIsometric
                >
                    <div>
                        <h2 class="quaternary-heading red">Red Block Modal</h2>
                        <p class="abstract-text">This is the modal description. <span
                            class="bold">This bit is in bold</span>
                        </p>
                    </div>
                </Modal>
                <Modal
                    isOpen={this.state.openModal === 'blue-isometric'}
                    onClose={() => this.setState({openModal: false})}
                    onSuccess={() => this.setState({openModal: false})}
                    isIsometric
                    colour='blue'
                >
                    <div>
                        <h2 class="quaternary-heading red">Blue Block Modal</h2>
                        <p class="abstract-text">This is the modal description. <span
                            class="bold">This bit is in bold</span>
                        </p>
                    </div>
                </Modal>

                <PageFrame colour="grey">
                    <h3 class="demo-header-tertiary">Box Filter</h3>
                    <p class="demo-description">
                        Users can do this to filter by text, toggle switch, and checkbox list.  If there are a lot of checkbox, a search box appears applowing you to filter the list of checkboxes.
                    </p>
                </PageFrame>

                <BoxFilter
                    updateFilters={ activeFilters => console.log('activeFilters', activeFilters)}
                    doFiltersMatchPreferences={false}
                />
            </section>
        )

    }
}