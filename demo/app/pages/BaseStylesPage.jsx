import React from 'react';
import {GridSection, PaletteSection, TypographySection, ActionsSection} from './BaseStylesPage/'
import PageLayout from "../pages/PageLayout";

const sections = ['grid', 'palette', 'typography', 'actions']

const BaseStylesPage = () =>
    <PageLayout subMenuData={sections}>
        <div id="grid">
            <GridSection/>
        </div>

        <div id="palette">
            <PaletteSection/>
        </div>

        <div id="typography">
            <TypographySection/>
        </div>

        <div id="actions">
            <ActionsSection/>
        </div>

    </PageLayout>

export default BaseStylesPage

