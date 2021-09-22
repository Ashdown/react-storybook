import React from 'react'
import {ConfettiHero, PageFrame} from "../../../src/layout";
import {Link} from "react-router";
import { HomePath, ComponentsPagePath, InputsPagePath } from '../containers/App'

const PageLayout = ({ children, subMenuData = [] }) => (
  <div>
      <ConfettiHero colour="yellow">
          <PageFrame>
              <h1 class="demo-header-primary">React Storybook</h1>
              <ul class="demo-navigation">
                  <li class="demo-navigation-item">
                      <Link class="demo-navigation-link left" to={HomePath}>Base styles</Link>
                  </li>
                  <li class="demo-navigation-item">
                      <Link class="demo-navigation-link right" to={HomePath + ComponentsPagePath}>Components</Link>
                  </li>
                  <li class="demo-navigation-item">
                      <Link class="demo-navigation-link right" to={HomePath + InputsPagePath}>Inputs</Link>
                  </li>
              </ul>

              <ul class="demo-navigation">
                  {
                    subMenuData.map((section) =>
                      <li class="demo-navigation-sub-item">
                          <a class="demo-navigation-sub-link" href={`#${section}`}>{section}</a>
                      </li>
                    )
                  }
              </ul>
          </PageFrame>
      </ConfettiHero>
    {children}
  </div>
)

export default PageLayout
