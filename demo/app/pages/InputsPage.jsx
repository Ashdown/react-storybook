import React, {Component} from 'react';
import PageLayout from "../pages/PageLayout";
import { BasicSection, SpecialSection } from "./InputsPage/"

const sections = ['basic', 'special']

export default class ComponentsPage extends Component {

    render() {
        return (
            <PageLayout subMenuData={sections}>
                <div id="default">
                    <BasicSection/>
                    <SpecialSection/>
                </div>

            </PageLayout>
        )
    }
}


