import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { _initDialogButtons } from '@conversionxl/cxl-marketing/src/init-functions';
import LazyLoad from 'vanilla-lazyload';

import '@conversionxl/cxl-marketing';

/* eslint-disable */

storiesOf('Redesign: Homepage', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const lazyLoadInstance = new LazyLoad({
      elements_selector: '.lazy'
    });

    setTimeout(function() {
      _initDialogButtons();

      if (lazyLoadInstance) {
        lazyLoadInstance.update();
      }
    }, 500);

    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
          hero-style="waves"
        >
          <cxl-marketing-nav nav-type="topnav" slot="topnav">
            <a href="" slot="cxl-logo">
              <iron-icon class="icon size-xl" icon="cxl:logo"></iron-icon>
            </a>
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet"> </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#">
                  For teams
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#">
                  Blog
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#">
                  About
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet cxl-nav-dropdown">
                <vaadin-context-menu open-on="click" theme="cxl-nav-dropdown">
                  <a href="" style="display: flex; align-items: center;">Agency</a>
                  <template>
                    <vaadin-list-box theme="cxl-nav-dropdown">
                      <a href="https://conversionxl.com/agency/conversion-optimization-services/"
                        >Conversion Optimization</a
                      >
                      <a href="https://conversionxl.com/agency/conversion-design/"
                        >Web Design That Sells</a
                      >
                      <a href="https://conversionxl.com/agency/cro-research/"
                        >CRO Research & Audits</a
                      >
                      <a href="https://conversionxl.com/agency/analytics-implementation-services/"
                        >Analytics Implementation</a
                      >
                    </vaadin-list-box>
                  </template>
                </vaadin-context-menu>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#">
                  Log in
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <vaadin-button theme="cxl-button small contrast margin-left" role="button">
                  Get free trial
                </vaadin-button>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-mobile-icon">
                <a href="#">
                  <iron-icon class="icon size-m" icon="lumo:menu"></iron-icon>
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-mobile-nav-icon">
                <a href="#">
                  <iron-icon class="icon size-l" icon="lumo:cross"></iron-icon>
                </a>
              </vaadin-tab>
            </vaadin-tabs>
          </cxl-marketing-nav>

          <vaadin-item theme="cxl-hero-content waves">
            <h1>We give people an unfair <strong>advantage.</strong></h1>
            <h2>Be the <strong>best</strong>. It’s the least crowded market.</h2>
            <p>
              When you’re ready to become great at data-driven marketing, we give you the training
              you need.
            </p>
          </vaadin-item>

          <cxl-marketing-nav nav-type="bottomnav" slot="bottomnav" waves>
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button theme="primary cxl-button margin-right large"
                  ><a href="">Browse courses</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button theme="primary cxl-button cxl-transparent large"
                  ><a href="">Get a free trial</a></vaadin-button
                >
              </vaadin-tab>
            </vaadin-tabs>
          </cxl-marketing-nav>
        </cxl-marketing-hero>

        <section>
          <div class="wrap text-center shrunk">
            <h3 class="text-center">We train some of the best companies in the world</h3>
            <cxl-partner-logos>
              <img
                height="60"
                class="lazy"
                data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/codecademy.svg"
              />
              <img
                height="60"
                class="lazy"
                data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/kaspersky-lab.svg"
              />
              <img
                height="60"
                class="lazy"
                data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/Bank_of_Canada_Logo.svg"
              />
              <img
                height="60"
                class="lazy"
                data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/Alamy_Ltd_logo-01.png"
              />
              <img
                height="60"
                class="lazy"
                data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/adp.svg"
              />
              <img
                height="60"
                class="lazy"
                data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/social-finance-inc-sofi.svg"
              />
            </cxl-partner-logos>
          </div>
        </section>
        <br />

        <section>
          <div class="wrap shrunk">
            <p>
              When you’re ready to become great at data-driven marketing, we give you the training
              you need.
            </p>

            <p>
              We identify the best marketing practitioners – the top 1% – and get them to teach you
              what they know. You learn from the best to become one, and get the unfair advantage.
            </p>

            <p>
              There are no substitutes for being genuinely great at something.
            </p>

            <p>
              We get the absolute best practitioners in the world to teach their craft to you.
            </p>

            <p>
              CXL Institute is your shortcut to greatness. Become great at digital analytics,
              conversion optimization, digital psychology, growth marketing and customer
              acquisition.
            </p>
          </div>
        </section>

        <section class="padding">
          <cxl-optin-box
            backgroundimage="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/layout/optin-bubble-faces.png"
            backgroundcolor="#F9F9F9"
          >
            <h3>
              Join <strong>95,000+</strong> analysts, optimizers, digital marketers, and UX
              practitioners on the list.
            </h3>
            <p>Learn from the very best to become one.</p>

            <cxl-iron-form
              id="optinForm"
              form-action="https://hooks.zapier.com/hooks/catch/4406519/oopwah6/"
              form-method="POST"
              form-name="optinForm"
            >
              <input type="hidden" name="campaign" value="redesign homepage" />
              <input type="hidden" name="form_source" value="homepage" />
              <vaadin-text-field
                colspan="2"
                placeholder="Your work e-mail"
                name="email"
                required
                error-message="Please enter a valid e-mail"
                autocomplete="off"
                theme="block"
              ></vaadin-text-field>
              <vaadin-checkbox theme="padding" name="consent" checked
                >I consent to being contacted</vaadin-checkbox
              >
              <vaadin-button
                class="ladda-button"
                data-style="zoom-in"
                theme="primary cxl-button block"
                onclick="optinForm.submit()"
                ><span class="ladda-label">Subscribe</span></vaadin-button
              >
              <div slot="confirmation">
                <h4 class="text-success">
                  E-mail submitted successfully.
                </h4>
              </div>
            </cxl-iron-form>
          </cxl-optin-box>
        </section>

        <section class="padding-bottom">
          <div class="wrap shrunk text-center">
            <h3>Get to an advanced level in 4 disciplines with our Minidegree programs</h3>
            <p>Learn from the top data-driven marketing practitioners to become one.</p>
          </div>

          <br />

          <cxl-card-grid>
            <cxl-training-card video="https://player.vimeo.com/video/316968481">
              <div
                slot="thumbnail"
                part="thumbnail"
                style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
              ></div>
              <h2 slot="title">Google Tag Manager - Intermediate</h2>
              <p slot="content">
                Our flagship training program. Learn conversion research, start using a systematic
                way to get more wins and bigger wins through optimization and testing.
              </p>
            </cxl-training-card>
            <cxl-training-card video="https://player.vimeo.com/video/316968481">
              <div
                slot="thumbnail"
                part="thumbnail"
                style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
              ></div>
              <h2 slot="title">Google Tag Manager - Intermediate</h2>
              <p slot="content">
                Our flagship training program. Learn conversion research, start using a systematic
                way to get more wins and bigger wins through optimization and testing.
              </p>
            </cxl-training-card>
            <cxl-training-card video="https://player.vimeo.com/video/316968481">
              <div
                slot="thumbnail"
                part="thumbnail"
                style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
              ></div>
              <h2 slot="title">Google Tag Manager - Intermediate</h2>
              <p slot="content">
                Our flagship training program. Learn conversion research, start using a systematic
                way to get more wins and bigger wins through optimization and testing.
              </p>
            </cxl-training-card>
            <cxl-training-card video="https://player.vimeo.com/video/316968481">
              <div
                slot="thumbnail"
                part="thumbnail"
                style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');"
              ></div>
              <h2 slot="title">Google Tag Manager - Intermediate</h2>
              <p slot="content">
                Our flagship training program. Learn conversion research, start using a systematic
                way to get more wins and bigger wins through optimization and testing.
              </p>
            </cxl-training-card>
          </cxl-card-grid>
        </section>

        <cxl-partner-logos background-color="#F9F9F9">
          <img
            class="logo"
            height="55"
            src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/logos/cxl-trains.svg"
          />
          <img
            height="55"
            class="lazy"
            data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/codecademy.svg"
          />
          <img
            height="55"
            class="lazy"
            data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/Bank_of_Canada_Logo.svg"
          />
          <img
            height="55"
            class="lazy"
            data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/golf-now.svg"
          />
          <img
            height="55"
            class="lazy"
            data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/adp.svg"
          />
          <img
            height="55"
            class="lazy"
            data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/social-finance-inc-sofi.svg"
          />
          <img
            height="55"
            class="lazy"
            data-src="https://cxl.nyc3.cdn.digitaloceanspaces.com/static/client-logos/padding/kaspersky-lab.svg"
          />
        </cxl-partner-logos>
        <footer id="footer">
          <div class="wrap">
            <nav class="menu menu--footer">
              <h3 class="menu__title screen-reader-text">cxl-2019/footer</h3>

              <ul class="menu__items">
                <li id="menu-item-1029889" class="menu__item ">
                  <a href="https://conversionxl.com" class="menu__link"
                    >© <strong><em>C</em>XL</strong>, 2019</a
                  >
                </li>
                <li id="menu-item-1029890" class="menu__item ">
                  <a href="https://conversionxl.com/about/" class="menu__link">About</a>
                </li>

                <li id="menu-item-1029892" class="menu__item ">
                  <a href="https://conversionxl.com/blog/" class="menu__link"
                    >Conversion Optimization Blog</a
                  >
                </li>
                <li id="menu-item-1029893" class="menu__item ">
                  <a href="https://conversionxl.com/institute/" class="menu__link"
                    >CXL Institute – Digital Marketing Training</a
                  >
                </li>
                <li id="menu-item-1029894" class="menu__item ">
                  <a href="https://conversionxl.com/agency/" class="menu__link"
                    >Conversion Optimization Services</a
                  >
                </li>
                <li id="menu-item-1029895" class="menu__item ">
                  <a href="https://conversionxl.com/institute/terms-conditions/" class="menu__link"
                    >Terms and Conditions</a
                  >
                </li>
                <li id="menu-item-1029895" class="menu__item ">
                  <a href="https://conversionxl.com/institute/privacy-options/" class="menu__link"
                    >Privacy Options</a
                  >
                </li>
              </ul>
            </nav>

            <div>
              <a href="mailto:support@conversionxl.com">support@conversionxl.com</a
              >&nbsp;&nbsp;&nbsp;
              <a href="tel:+18005386216">(+1) (800) 538-6216</a>
            </div>
          </div>
        </footer>
      </cxl-marketing-layout>
    `;
  });
