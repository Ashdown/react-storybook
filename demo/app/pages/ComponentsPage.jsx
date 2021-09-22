import React, {Component} from 'react';
import PageLayout from "../pages/PageLayout";
import { LayoutSection, NavigationSection, ContentComponentsSection, IconsSection } from './ComponentsPage/'

const sections = ['layout', 'navigation', 'content', 'icons']

export default class ComponentsPage extends Component {

    render() {
        return (
            <PageLayout subMenuData={sections}>
                <div id="layout">
                    <LayoutSection/>
                </div>
                <div id="navigation">
                    <NavigationSection/>
                </div>
                <div id="content">
                    <ContentComponentsSection/>
                </div>
                <div id="icons">
                    <IconsSection/>
                </div>
            </PageLayout>
        )
    }
}


