import { storiesOf } from '@storybook/polymer';
import { withKnobs } from '@storybook/addon-knobs';
import { html } from 'lit-html';
import { _initDialogButtons } from '@conversionxl/cxl-marketing/src/init-functions';
import LazyLoad from 'vanilla-lazyload';

import '@conversionxl/cxl-marketing';

import adoreBeauty from './static/adore-beauty.png';
import progressLogo from './static/progress-logo.png';
import karl from './static/karl.png';

/* eslint-disable */

storiesOf('Redesign: Courses', module)
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

          <vaadin-item theme="cxl-hero-content">
            <h1>Learn to optimize your design using <strong>data.</strong></h1>
            <h2><span>Online course:</span> <strong>Data-driven UX masterclass</strong></h2>
            <h5>by Karl Gilis, world-renowned CRO Expert &amp; Information Architect.</h5>
            <p>
              Get a proven and hand-on UX framework to make more money with your website &amp;
              landing pages. Use user research tools and techniques to uncover usability and UX
              problems on any site.
            </p>
          </vaadin-item>

          <cxl-marketing-nav nav-type="bottomnav" slot="bottomnav">
            <vaadin-tabs>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button theme="primary cxl-button margin-right"
                  ><a href="">Start your free trial</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab">
                <vaadin-button theme="primary cxl-button cxl-transparent"
                  ><a href="">Download syllabus</a></vaadin-button
                >
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#testimonials">
                  Testimonials
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#case-studies">
                  Instructors
                </a>
              </vaadin-tab>
              <vaadin-tab theme="cxl-marketing-nav-tab cxl-from-tablet">
                <a href="#case-studies">
                  Curriculum
                </a>
              </vaadin-tab>
            </vaadin-tabs>
          </cxl-marketing-nav>
        </cxl-marketing-hero>

        <section class="padding-top">
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
            <h3 class="text-center">
              Get a proven and hands-on UX framework to make more money with your website &amp;
              landing pages.
            </h3>
            <br />
            <ul>
              <li>
                <p>
                  Use user research tools and techniques to uncover usability and UX problems on any
                  site.
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
                  Apply Karl’s 15 years of UX and usability processes, tools and tricks to your site
                  right away.
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section id="testimonials" class="padding">
          <div class="text-center">
            <cxl-card-grid columns="2">
              <cxl-testimonial-card theme="no-shadow no-hover">
                <img slot="header-right" class="lazy" data-src="${progressLogo}" />
                <p slot="content">
                  “CXL has a thorough process they take customers through. Once they understand
                  their customer’s challenges and needs, they dive into their comprehensive process
                  which includes: heuristic analysis, analytics and mouse tracking data analysis,
                  user session replay videos, customer and web surveys, interviews with our sales
                  and marketing teams, as well as user testing with like customers.”
                </p>
                <strong slot="footer">Megan Gouveia</strong>
                <span slot="footer">Digital Marketing Manager - Progress Software</span>
              </cxl-testimonial-card>
              <cxl-testimonial-card theme="no-shadow no-hover">
                <img slot="header-right" height="20" class="lazy" data-src="${adoreBeauty}" />
                <p slot="content">
                  “Before working with ConversionXL, we were struggling with getting insights into
                  what customers wanted. We needed a parter to help us get more insights into what
                  our customers needed and to understand why tests were or weren’t working. [CXL] is
                  an all-in-one, one-to-one conversion optimization agency and I genuinely believe
                  we understand our customers now. They’re absolutely dedicated, absolutely focused
                  and they come up with great ideas week over week that we would never have come up
                  with ourselves."
                </p>
                <strong slot="footer">Gareth Williams</strong>
                <span slot="footer">Ecommerce Manager - Adore Beauty</span>
              </cxl-testimonial-card>
            </cxl-card-grid>
          </div>
        </section>

        <section>
          <div class="wrap shrunk">
            <h3 class="text-center">This course is right for you if...</h3>
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

        <section id="testimonials" class="padding">
          <div class="text-center wrap shrunk">
            <h3 class="text-center">Lessons in this course:</h3>
            <br />
            <cxl-card-grid columns="1">
              <cxl-lesson-card theme="no-hover">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');"
                ></div>
                <h2 slot="header-right"><strong>Class 1:</strong> Why websites fail?</h2>
                <small slot="header-right">Lesson | 1 hour | Karl Gilis</small>
                <p slot="content">
                  If I’ve learned anything over the past 15 years, it’s that most websites fail due
                  to ego. Companies big and small put themselves first instead of putting their
                  users first. Often without even realising it. Do you talk about what you think
                  customers want? Or do you know what they want?
                </p>
              </cxl-lesson-card>
              <cxl-lesson-card theme="no-hover">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');"
                ></div>
                <h2 slot="header-right"><strong>Class 2:</strong> Data in Google Analytics</h2>
                <small slot="header-right">Lesson | 1 hour | Karl Gilis</small>
                <p slot="content">
                  If I’ve learned anything over the past 15 years, it’s that most websites fail due
                  to ego. Companies big and small put themselves first instead of putting their
                  users first. Often without even realising it. Do you talk about what you think
                  customers want? Or do you know what they want?
                </p>
              </cxl-lesson-card>
              <cxl-lesson-card theme="no-hover">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');"
                ></div>
                <h2 slot="header-right"><strong>Class 3:</strong> Heatmaps</h2>
                <small slot="header-right">Lesson | 1 hour | Karl Gilis</small>
                <p slot="content">
                  If I’ve learned anything over the past 15 years, it’s that most websites fail due
                  to ego. Companies big and small put themselves first instead of putting their
                  users first. Often without even realising it. Do you talk about what you think
                  customers want? Or do you know what they want?
                </p>
              </cxl-lesson-card>
              <cxl-lesson-card theme="no-hover">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');"
                ></div>
                <h2 slot="header-right"><strong>Class 4:</strong> Forms</h2>
                <small slot="header-right">Lesson | 1 hour | Karl Gilis</small>
                <p slot="content">
                  If I’ve learned anything over the past 15 years, it’s that most websites fail due
                  to ego. Companies big and small put themselves first instead of putting their
                  users first. Often without even realising it. Do you talk about what you think
                  customers want? Or do you know what they want?
                </p>
              </cxl-lesson-card>
              <cxl-lesson-card theme="no-hover">
                <div
                  slot="thumbnail"
                  part="thumbnail"
                  style="background-image: url('https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');"
                ></div>
                <h2 slot="header-right"><strong>Class 5:</strong> Layouts</h2>
                <small slot="header-right">Lesson | 1 hour | Karl Gilis</small>
                <p slot="content">
                  If I’ve learned anything over the past 15 years, it’s that most websites fail due
                  to ego. Companies big and small put themselves first instead of putting their
                  users first. Often without even realising it. Do you talk about what you think
                  customers want? Or do you know what they want?
                </p>
              </cxl-lesson-card>
            </cxl-card-grid>
          </div>
        </section>

        <section>
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

        <section class="padding">
          <div class="wrap shrunk">
            <h3 class="text-center">What’s inside the Institute:</h3>
            <br />
            <div class="text-center">
              <strong>Slider section..</strong>
            </div>
          </div>
        </section>

        <section class="padding">
          <div class="wrap shrunk">
            <h3 class="text-center">Get more revenue from the same amount of visitors</h3>
            <br />
            <p>
              See exactly how Karl improves the usability and revenue of websites &amp; landing
              pages during 8 video sessions.
            </p>

            <p>
              Use research tools and techniques to uncover usability and UX problems. So you know
              how to get the most out of them.
            </p>

            <p>
              Find out the best UX tips & tricks Karl learned in the past 15 years. So you can solve
              the problems on your site and turn those visitors into customers.
            </p>
          </div>
        </section>

        <section>
          <div class="wrap text-center">
            <img width="800" class="lazy" data-src="${karl}" />
          </div>
        </section>

        <section class="padding">
          <div class="wrap shrunk">
            <h3 class="text-center">Why Karl?</h3>
            <br />
            <p>
              According to PPC Hero Karl is
              <span class="text-primary"
                >one of the top most influential Conversion Rate Optimizer worldwide</span
              >. He’s also the G in AGConsult, a Belgium-based usability and conversion optimization
              company. He’s been optimizing websites since 2001. Always based on user research &amp;
              facts.
            </p>

            <p>
              Karl is a top rated international speaker (he was voted 2nd best speaker at Digital
              Elite Camp). He teaches at several university colleges in Belgium. And has trained
              people from companies such as Suzuki, Toyota, TUI, Thomas Cook and Atlas Copco.
            </p>

            <p>
              In his spare time, Karl is working on a cure for people who think online marketing is
              based on gut feeling and opinions.
            </p>

            <p>
              He’s also known as the ‘UX comedian’, but he has promised to be dead serious during
              this course. Not.
            </p>
          </div>
        </section>

        <section class="padding-bottom">
          <div class="wrap shrunk">
            <h3 class="text-center">Frequently Asked Questions</h3>
            <br />
            <vaadin-details theme="cxl-faq">
              <div slot="summary">
                <strong class="text-primary">How long should I have been working in UX?</strong>
              </div>
              <p>
                Sea change pro-sumer software but price point helicopter view. You gotta smoke test
                your hypothesis product launch we need to dialog around your choice of work attire,
                run it up the flagpole, ping the boss and circle back or punter or we need to
                socialize the comms with the wider stakeholder community. Even dead cats bounce not
                enough bandwidth turn the crank.
              </p>
            </vaadin-details>
            <vaadin-details theme="cxl-faq">
              <div slot="summary">
                <strong class="text-primary"
                  >What programs or tools should I be familiar with?</strong
                >
              </div>
              <p>
                Golden goose we don't want to boil the ocean guerrilla marketing can we align on
                lunch orders win-win-win but sacred cow. Put your feelers out are there any
                leftovers in the kitchen? gain traction low-hanging fruit. Win-win. Collaboration
                through advanced technlogy manage expectations golden goose, or locked and loaded,
                disband the squad but rehydrate as needed for touch base.
              </p>
            </vaadin-details>
            <vaadin-details theme="cxl-faq">
              <div slot="summary">
                <strong class="text-primary"
                  >What books or resources should I be familiar with?</strong
                >
              </div>
              <p>
                Can you send me an invite? driving the initiative forward big boy pants we need to
                future-proof this. Reach out accountable talk for value-added, or post launch and
                it's not hard guys. Accountable talk staff engagement performance review cloud
                strategy. Optimize for search great plan! let me diarize this, and we can
                synchronise ourselves at a later timepoint my supervisor didn't like the latest
                revision you gave me can you switch back to the first revision?
              </p>
            </vaadin-details>
            <vaadin-details theme="cxl-faq">
              <div slot="summary">
                <strong class="text-primary"
                  >What would make a student overqualified for this course?</strong
                >
              </div>
              <p>
                Can you send me an invite? driving the initiative forward big boy pants we need to
                future-proof this. Reach out accountable talk for value-added, or post launch and
                it's not hard guys. Accountable talk staff engagement performance review cloud
                strategy. Optimize for search great plan! let me diarize this, and we can
                synchronise ourselves at a later timepoint my supervisor didn't like the latest
                revision you gave me can you switch back to the first revision?
              </p>
            </vaadin-details>
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
  });
