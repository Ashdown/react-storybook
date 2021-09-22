import React from 'react'
import {PageFrame} from "../../../../src/layout";
import {loremIpsum} from "../../common/";

const GridSection = () =>
    <section class="grid-section">
        <PageFrame colour="grey">
            <h2 class="demo-header-secondary">Grid</h2>
            <p class="demo-description">
                <span class="block">Content should be aligned to the following column layouts for the associated screen widths</span>
                <span class="block"><span class="bold">Mobile (320px to 639px):</span> Gutter width of 22px on left and right side, content wide expands to fill area between.</span>
                <span class="block"><span class="bold">Tablet (640px to 1023px):</span> Gutter width of 22px on left and right side, content width expands to fill area between.</span>
                <span class="block"><span class="bold">Desktop (1024px to 1214px):</span> Gutter width of 15px on left and right side, content width expands to fill area between.</span>
                <span class="block"><span class="bold">Big Desktop (1215px and above):</span> Gutter width of 15px on left and right.  Maximum content width of 1185 pixels.</span>
            </p>

        </PageFrame>
        <PageFrame>
            <ul class="demo-columns">
                <li class="demo-column demo-column-full">
                    <div class="demo-column-content">
                        <h3 class="strong block body-text">One Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
            </ul>
        </PageFrame>
        <PageFrame>
            <ul class="demo-columns">
                <li class="demo-column demo-column-half">
                    <div class="demo-column-content">
                        <h3 class="strong body-text">Two Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
                <li class="demo-column demo-column-half">
                    <div class="demo-column-content">
                        <h3 class="strong body-text">Two Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
            </ul>
        </PageFrame>
        <PageFrame>
            <ul class="demo-columns">
                <li class="demo-column demo-column-quarter">
                    <div class="demo-column-content">
                        <h3 class="strong body-text">Four Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
                <li class="demo-column demo-column-quarter">
                    <div class="demo-column-content">
                        <h3 class="strong body-text">Four Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
                <li class="demo-column demo-column-quarter">
                    <div class="demo-column-content">
                        <h3 class="strong body-text">Four Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
                <li class="demo-column demo-column-quarter">
                    <div class="demo-column-content">
                        <h3 class="strong body-text">Four Column Layout</h3>
                        <p class="body-text">{loremIpsum}</p>
                    </div>
                </li>
            </ul>
        </PageFrame>
    </section>

export default GridSection