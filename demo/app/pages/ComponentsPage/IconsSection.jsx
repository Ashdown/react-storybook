import React from 'react'
import {PageFrame} from "../../../../src/layout";
import { Bolt, Chevron } from "../../../../src/icons";

const IconsSection = () =>
    <section class="icons-section">
        <PageFrame colour='grey'>
            <h2 class="demo-header-secondary">Icons</h2>
        </PageFrame>

        <PageFrame>
            <Bolt/>
            <Chevron/>
        </PageFrame>

    </section>

export default IconsSection