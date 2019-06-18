import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { _initDialogButtons } from '@conversionxl/cxl-marketing/src/init-functions';
import LazyLoad from 'vanilla-lazyload';
import { getHeroContent } from './templates/content/hero-content';
import { footer } from './templates/cxl-footer';
import { topnav, bottomnav } from './templates/cxl-marketing-nav';
import { cards } from './templates/cxl-x-card';

import '@conversionxl/cxl-marketing';

import nativeLogo from './static/native-logo.png';
import adoreBeauty from './static/adore-beauty.png';
import nationalBankcard from './static/national-bankcard.png';
import progressLogo from './static/progress-logo.png';
import caseAdore from './static/case-adore.png';
import caseNative from './static/case-native.png';
import caseNbc from './static/case-nbc.png';
import video from './static/video.png';

/* eslint-disable */

storiesOf('Templates', module)
  .addDecorator(withKnobs)
  .add('Agency - Success stories', () => {
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
        <vaadin-dialog theme="cxl-optin" id="caseStudies">
          <template>
            <a href="#" part="close-btn" onclick="caseStudies.opened = false"
              ><iron-icon class="icon size-l" icon="lumo:cross"></iron-icon
            ></a>
            <cxl-iron-form
              id="optinForm"
              form-action="https://hooks.zapier.com/hooks/catch/2235798/9hgfl4/"
              form-method="POST"
              form-name="optinForm"
            >
              <h2>
                Get a summary of some of the best optimization success stories
              </h2>
              <br />
              <input type="hidden" name="campaign" value="agency" />
              <input type="hidden" name="form_source" value="success_page" />
              <vaadin-form-layout>
                <vaadin-text-field
                  colspan="2"
                  label="Work email"
                  placeholder="Type here"
                  name="email"
                  required
                  error-message="Please enter a valid e-mail"
                  autocomplete="off"
                ></vaadin-text-field>
                <vaadin-text-field
                  colspan="2"
                  label="Name"
                  placeholder="Type here"
                  name="name"
                  required
                  error-message="Please fill your name"
                  autocomplete="off"
                ></vaadin-text-field>
                <div><br /></div>
                <vaadin-checkbox name="consent" checked
                  >I consent to being contacted</vaadin-checkbox
                >
                <hr />
                <vaadin-button
                  class="ladda-button"
                  data-style="zoom-in"
                  theme="primary cxl-button large"
                  onclick="optinForm.submit()"
                  ><span class="ladda-label">Download Case Studies</span></vaadin-button
                >
              </vaadin-form-layout>
              <div slot="confirmation">
                <h2 class="text-success">
                  Thanks! Here's the link to download our customer case studies.
                </h2>
                <br />
                <a href="">
                  <vaadin-button theme="primary cxl-button large" onclick="optin.submit()">
                    Download Case Studies
                  </vaadin-button>
                </a>
              </div>
            </cxl-iron-form>
          </template>
        </vaadin-dialog>

        <vaadin-dialog theme="cxl-optin" id="contact">
          <template>
            <a href="#" part="close-btn" onclick="contact.opened = false"
              ><iron-icon class="icon size-l" icon="lumo:cross"></iron-icon
            ></a>
            <cxl-iron-form
              id="contactForm"
              form-action="https://hooks.zapier.com/hooks/catch/2235798/5dfgnq/"
              form-method="POST"
              form-name="contactForm"
            >
              <h2>Talk to our conversion experts</h2>
              <p>
                We will make you more money with the traffic you have. Our industry-leading CRO
                process finds the biggest leaks and gets you the wins you want.
              </p>
              <input type="hidden" name="campaign" value="agency" />
              <input type="hidden" name="form_source" value="success_page" />
              <input type="hidden" name="Form Title" value="Case Studies - Get in touch" />
              <vaadin-form-layout>
                <vaadin-text-field
                  colspan="2"
                  label="Name"
                  placeholder=""
                  name="Name"
                  required
                  error-message="Please fill your name"
                  autocomplete="off"
                ></vaadin-text-field>
                <vaadin-text-field
                  colspan="2"
                  label="Business e-mail"
                  placeholder=""
                  name="Business e-mail"
                  required
                  error-message="Please enter a valid e-mail"
                  autocomplete="off"
                ></vaadin-text-field>
                <vaadin-text-field
                  colspan="2"
                  label="Phone"
                  placeholder=""
                  name="Phone"
                  autocomplete="off"
                ></vaadin-text-field>
                <vaadin-text-field
                  colspan="2"
                  label="Company"
                  placeholder=""
                  name="Company"
                  required
                  error-message="Please enter a your company name"
                  autocomplete="off"
                ></vaadin-text-field>
                <vaadin-select
                  name="What's your monthly traffic like?"
                  label="What's your monthly traffic like?"
                  placeholder="Select"
                  required
                  autocomplete="off"
                >
                  <template>
                    <vaadin-list-box>
                      <vaadin-item>Under 5000 unique visits</vaadin-item>
                      <vaadin-item>5k - 15k</vaadin-item>
                      <vaadin-item>16k - 30k</vaadin-item>
                      <vaadin-item>31k - 50k</vaadin-item>
                      <vaadin-item>50k - 100k</vaadin-item>
                      <vaadin-item>Over 100k</vaadin-item>
                      <vaadin-item>Over 500k</vaadin-item>
                      <vaadin-item>Millions</vaadin-item>
                    </vaadin-list-box>
                  </template>
                </vaadin-select>
                <vaadin-select
                  name="Your annual online revenue is"
                  label="Your annual online revenue is"
                  placeholder="Select"
                  required
                  autocomplete="off"
                >
                  <template>
                    <vaadin-list-box>
                      <vaadin-item>$250,000 - $500,000</vaadin-item>
                      <vaadin-item>$500,000 - $1 million</vaadin-item>
                      <vaadin-item>$1 million - $5 million</vaadin-item>
                      <vaadin-item>$5 million - $10 million</vaadin-item>
                      <vaadin-item>More than $10 million</vaadin-item>
                      <vaadin-item>I prefer not to say</vaadin-item>
                    </vaadin-list-box>
                  </template>
                </vaadin-select>
                <vaadin-text-area
                  name="Your business goals and what's going on right now"
                  label="Your business goals and what's going on right now"
                  placeholder=""
                  autocomplete="off"
                ></vaadin-text-area>
                <hr />
                <vaadin-button
                  class="ladda-button"
                  data-style="zoom-in"
                  theme="primary cxl-button large"
                  onclick="contactForm.submit()"
                  ><span class="ladda-label">Schedule demo</span></vaadin-button
                >
              </vaadin-form-layout>
              <div slot="confirmation">
                <h3 class="text-success">
                  Thank you
                </h3>
                <p>
                  We will be getting in touch with you within one business day, usually quicker.
                </p>
              </div>
            </cxl-iron-form>
          </template>
        </vaadin-dialog>

        <cxl-marketing-hero
          background-color="#F5F5F5"
          hero-style="video"
          theme="cxl-hero-style-video"
          video="https://player.vimeo.com/video/345022553"
        >
          <cxl-marketing-nav nav-type="topnav" slot="topnav" right-side>
            <a href="" slot="cxl-logo">
              <iron-icon class="icon size-xl" icon="cxl:logo"></iron-icon>
            </a>
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet"> </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="https://conversionxl.com/institute/pricing/">
                  Pricing
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="https://conversionxl.com/institute/">
                  Institute
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="https://conversionxl.com/blog/">
                  Blog
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
                <vaadin-button
                  open-contact-dialog
                  theme="cxl-button small contrast margin-left"
                  role="button"
                >
                  Schedule a call
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

          <vaadin-item theme="cxl-hero-content">
            <h1>Optimization <strong>success</strong> stories</h1>
            <p>
              Get a proven and hand-on UX framework to make more money with your website &amp;
              landing pages.
            </p>
          </vaadin-item>

          <cxl-marketing-nav nav-type="bottomnav" slot="bottomnav">
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button open-contact-dialog theme="primary cxl-button margin-right"
                  ><a href="">Schedule a call</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button open-download-dialog theme="primary cxl-button cxl-transparent"
                  ><a href="">Get case studies</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#testimonials">
                  Testimonials
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#case-studies">
                  Case studies
                </a>
              </vaadin-tab>
            </vaadin-tabs>
          </cxl-marketing-nav>

          <img slot="video" class="lazy" data-src="${video}" />
        </cxl-marketing-hero>

        <section class="padding">
          <div class="wrap text-center shrunk">
            <h3>We work with some of the best companies in the world</h3>
            <cxl-partner-logos>
              <img
                height="50"
                class="lazy"
                data-src="https://conversionxl.com/wp-content/uploads/2017/07/client-logos-1.png"
              />
              <img
                height="50"
                class="lazy"
                data-src="https://conversionxl.com/wp-content/uploads/2017/07/client-logos-2.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/hpe-2.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/homedepot-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/quicken-1.png"
              />
            </cxl-partner-logos>
          </div>
        </section>

        <section>
          <div class="wrap text-center shrunk">
            <ul>
              <li>
                <p>
                  User research tools and techniques to uncover usability and UX problems on any
                  site
                </p>
              </li>
              <li>
                <p>
                  Implement a proven, repeatable process that will result in more revenue per
                  visitor.
                </p>
              </li>
              <li>
                <p>
                  Extract the highest value insights from Google Analytics, heat maps, user
                  recordings and form analytics.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="testimonials" class="padding">
          <div class="text-center">
            <h3>Making clients happy since 2012</h3>
            <br />
            <cxl-card-grid columns="2">
              <cxl-testimonial-card theme="no-shadow no-hover">
                <img slot="header-right" class="lazy" data-src="${progressLogo}" />
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
              <cxl-testimonial-card theme="no-shadow no-hover">
                <img slot="header-right" height="20" class="lazy" data-src="${adoreBeauty}" />
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
            </cxl-card-grid>
          </div>
        </section>

        <section id="case-studies" class="padding">
          <div class="wrap flex">
            <div class="column text-right push-right">
              <img class="lazy" data-src="${caseNative}" />
            </div>
            <div class="column">
              <h2>
                <img
                  height="30"
                  class="lazy"
                  data-src="${nativeLogo}"
                  alt="Native Deodorant logo"
                />
                Introducing highly-focused cross-sells into the buyer path provided
                <strong>$1.5 million</strong> in annualized revenue for Native.
              </h2>
              <p>
                Extract the highest value insights from Google Analytics, heat maps, user recordings
                and form analytics.
              </p>
              <br />
              <vaadin-button open-contact-dialog theme="primary cxl-button"
                >Schedule a call</vaadin-button
              >
              <hr />
              <cxl-testimonial-card theme="no-header no-padding no-border">
                <p slot="content">
                  "We never wanted to hire just another conversion rate optimization agency. We
                  wanted to hire the best and that’s CXL."
                </p>
                <strong slot="footer">Moiz Ali</strong>
                <span slot="footer">Founder &amp; CEO, Native</span>
              </cxl-testimonial-card>
            </div>
          </div>
        </section>

        <section class="padding">
          <div class="wrap flex">
            <div class="column text-left">
              <img class="lazy" data-src="${caseAdore}" />
            </div>
            <div class="column">
              <h2>
                <img class="lazy" data-src="${adoreBeauty}" alt="Adore Beauty Logo" />
                A conversion-focused redesign of Adore Beauty’s mobile site increased conversions by
                <strong>16%</strong>.
              </h2>
              <p>
                Extract the highest value insights from Google Analytics, heat maps, user recordings
                and form analytics.
              </p>
              <br />
              <vaadin-button open-contact-dialog theme="primary cxl-button"
                >Schedule a call</vaadin-button
              >
              <hr />
              <cxl-testimonial-card theme="no-header no-padding no-border">
                <p slot="content">
                  "CXL is an all-in-one, one-to-one conversion optimization agency and I genuinely
                  believe we understand our customers now. They’re absolutely dedicated, absolutely
                  focused and they come up with great ideas."
                </p>
                <strong slot="footer">Gareth Williams</strong>
                <span slot="footer">Ecommerce Manager - Adore Beauty</span>
              </cxl-testimonial-card>
            </div>
          </div>
        </section>

        <section class="padding">
          <div class="wrap flex">
            <div class="column text-right push-right">
              <img class="lazy" data-src="${caseNbc}" />
            </div>
            <div class="column">
              <h2>
                <img class="lazy" data-src="${nationalBankcard}" alt="National Bankcard logo" />
                National Bankcard removed their dependency on hiring sales staff by implementing a
                <strong>direct sales option</strong> on their website.
              </h2>
              <p>
                Extract the highest value insights from Google Analytics, heat maps, user recordings
                and form analytics.
              </p>
              <br />
              <vaadin-button open-contact-dialog theme="primary cxl-button"
                >Schedule a call</vaadin-button
              >
              <hr />
              <cxl-testimonial-card theme="no-header no-padding no-border">
                <p slot="content">
                  "Our flagship training program. Learn conversion research, start using a
                  systematic way to get more wins and bigger wins through optimization and testing.
                  Our flagship training program."
                </p>
                <strong slot="footer">Chris Kershaw</strong>
                <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
              </cxl-testimonial-card>
            </div>
          </div>
        </section>

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
  })
  .add('Course - 1', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
        >
          ${topnav} ${getHeroContent('sales')} ${bottomnav}
        </cxl-marketing-hero>

        <section class="padding">
          <div class="wrap text-center shrunk">
            <h3>We work with some of the best companies in the world</h3>
            <cxl-partner-logos>
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2018/10/google-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2018/10/cisco-1.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/hpe-2.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/homedepot-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/quicken-1.png"
              />
            </cxl-partner-logos>
          </div>
        </section>

        <section>
          <div class="wrap text-center shrunk">
            <h3>
              Get a proven and hands-on UX framework to make more money with your website &amp;
              landing pages.
            </h3>
            <br /><br />
            <ul>
              <li>
                <p>
                  User research tools and techniques to uncover usability and UX problems on any
                  site
                </p>
              </li>
              <li>
                <p>
                  Implement a proven, repeatable process that will result in more revenue per
                  visitor.
                </p>
              </li>
              <li>
                <p>
                  Extract the highest value insights from Google Analytics, heat maps, user
                  recordings and form analytics.
                </p>
              </li>
              <li>
                <p>
                  Extract the highest value insights from Google Analytics, heat maps, user
                  recordings and form analytics.
                </p>
              </li>
            </ul>
          </div>

          <br /><br />

          <cxl-card-grid columns="2">
            <cxl-testimonial-card theme="no-shadow">
              <div
                slot="thumbnail"
                part="thumbnail"
                style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
              ></div>
              <img
                slot="header-right"
                src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
              />
              <p slot="content">
                "Our flagship training program. Learn conversion research, start using a systematic
                way to get more wins and bigger wins through optimization and testing. Our flagship
                training program."
              </p>
              <strong slot="footer">Chris Kershaw</strong>
              <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
            </cxl-testimonial-card>
            <cxl-testimonial-card theme="no-shadow">
              <div
                slot="thumbnail"
                part="thumbnail"
                style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');"
              ></div>
              <img
                slot="header-right"
                src="https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png"
              />
              <p slot="content">
                "Our flagship training program. Learn conversion research, start using a systematic
                way to get more wins and bigger wins through optimization and testing. Our flagship
                training program."
              </p>
              <strong slot="footer">Chris Kershaw</strong>
              <span slot="footer">Managing Director - Sweden, at Trollweb Solutions</span>
            </cxl-testimonial-card>
          </cxl-card-grid>
        </section>

        <section class="padding">
          <div class="wrap shrunk">
            <h3 class="text-center">This course is right for your if...</h3>
            <br />
            <p>
              You believe that your site or landing pages can be improved. A lot. But you’re not
              sure where to start.
            </p>

            <p>
              You have the ambition to grow your online business or those of your clients. You
              understand Rome wasn’t built in a day. So you’re looking for a strategy and repeatable
              process to improve any website or landing page step-by-step.
            </p>

            <p>
              You’re a business owner, webmaster, designer, marketeer, … who believes that online
              marketing shouldn’t be based on gut feeling and opinions. But you’re not sure how to
              gather those facts.
            </p>

            <p>
              You realize that tools are important but are never the solution as such. You want to
              learn to get the most out of them. And even more important: how to connect the dots.
            </p>

            <p>
              You understand that usability &amp; conversion optimization are crucial to survive
              online. But you’re overwhelmed with all the information you can find online. So you’re
              looking for a hands-on training that’s build around the idea that the proof of the
              pudding is in the eating.
            </p>
          </div>
        </section>

        <section class="padding">
          <div class="wrap shrunk">
            <h3 class="text-center">Lessons in this course:</h3>
            <br />
            <cxl-card-grid columns="1">
              ${cards.lesson} ${cards.lesson} ${cards.lesson} ${cards.lesson} ${cards.lesson}
            </cxl-card-grid>
          </div>
        </section>

        <section class="padding">
          <div class="wrap shrunk">
            <h3 class="text-center">What you’ll walk away with afterwards</h3>
            <br />
            <p>
              The right mindset to be really (and I mean really-really) customer-centric. From now
              on you’ll be able to sell how people want to buy. Instead of selling the way you want
              to sell, as you’re doing now.
            </p>

            <p>
              A proven process and methodology that allows you to identify the weak spots of any
              website or landing page.
            </p>

            <p>
              An in-depth knowledge of how to get useful insights out of the most important (and
              affordable) user research tools and methods available. Without spending ages staring
              at boring graphs and numbers.
            </p>

            <p>
              An incredible amount of tips, tricks and guidelines to convert your visitors into
              customers. Yes, believe me: it’s incredible. See what I did there?
            </p>

            <p>
              The knowledge &amp; confidence to improve your website and landing pages, even when
              you don’t have enough visitors to do a/b testing.
            </p>
          </div>
        </section>

        <section>
          <div class="wrap text-center shrunk">
            <h3>Enroll to the CXL Institute All-Access Plan. You will get:</h3>
            <br />
            <ul>
              <li>
                <p>
                  Every Past and Future Course from Our Catalog
                </p>
              </li>
              <li>
                <p>
                  4 Minidegree programs: Conversion Optimization, Digital Analytics, Growth
                  Marketing and Digital Psychology
                </p>
              </li>
              <li>
                <p>
                  CXL Live & Elite Camp Conference Recordings
                </p>
              </li>
            </ul>
          </div>
        </section>

        ${footer}
      </cxl-marketing-layout>
    `;
  })
  .add('All-access - 1', () => {
    return html`
      <cxl-marketing-layout>
        <cxl-marketing-hero
          background-image="https://conversionxl.com/wp-content/uploads/2018/10/peep-transparent-1.png"
          background-color="#F5F5F5"
        >
          ${topnav} ${getHeroContent('sales')} ${bottomnav}
        </cxl-marketing-hero>

        <section>
          <div class="wrap text-center shrunk">
            <br />
            <cxl-partner-logos>
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2018/10/google-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2018/10/cisco-1.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/hpe-2.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/homedepot-3.png"
              />
              <img
                height="50"
                src="https://conversionxl.com/institute/wp-content/uploads/2019/03/quicken-1.png"
              />
            </cxl-partner-logos>
          </div>
        </section>

        <section class="padding-bottom">
          <div class="wrap">
            <div class="wrap shrunk left">
              <h3>Practitioner-taught courses to train your team on all things data-driven</h3>

              <br />
              <p>
                The half-life of digital marketing know-how is about 2.5 years. Everything changes
                rapidly. If you’re not continuously learning, you’ll become ineffective trying to
                employ outdated tactics.
              </p>

              <p>
                CXL Institute brings you in-depth certification training programs and online courses
                by world-class practitioners. New courses added every 2 weeks.
              </p>

              <p>All of our instructors are hand-picked and carefully vetted – the very best.</p>
            </div>
          </div>
          <cxl-card-grid flow="horizontal">
            ${cards.testimonial} ${cards.testimonial} ${cards.testimonial} ${cards.testimonial}
            ${cards.testimonial} ${cards.testimonial} ${cards.testimonial}
          </cxl-card-grid>
        </section>

        <section class="padding-bottom">
          <div class="wrap">
            <div class="wrap shrunk left">
              <h3>You get to learn from renowned practitioners in the field</h3>
              <br />
              <p>
                We seek out the best in class practitioners, and get them to teach what they know.
                Accelerate your professional growth with people who’ve been there and done that.
              </p>
            </div>
          </div>
          <cxl-card-grid flow="horizontal">
            ${cards.course} ${cards.course} ${cards.course} ${cards.course} ${cards.course}
            ${cards.course} ${cards.course}
          </cxl-card-grid>
        </section>

        <section class="padding-bottom">
          <div class="wrap">
            <div class="wrap shrunk left">
              <h3>Certification Training Programs You’ll Get Access to</h3>
              <br />
              <p>
                Step-by-step easy to follow demonstrations. All included with your subscription or
                available à la carte.
              </p>
            </div>
          </div>
          <cxl-card-grid flow="horizontal">
            ${cards.training} ${cards.training} ${cards.training} ${cards.training}
            ${cards.training} ${cards.training} ${cards.training}
          </cxl-card-grid>
        </section>

        ${footer}
      </cxl-marketing-layout>
    `;
  });
