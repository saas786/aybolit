import '@conversionxl/cxl-ui';

import { storiesOf } from '@storybook/polymer';
import { withKnobs, text } from '@storybook/addon-knobs';
import { html } from 'lit-html';

storiesOf('CXL UI', module)
  // .addDecorator(withKnobs)
  .add('cxl-lesson-card', () => {
    const lesson_title = text('Title', 'Why websites fail?');
    const lesson_title_highlighted = text('Title highlighted part', 'Class 1');
    const lesson_image = text('Image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/10/Elizabeth-Linder-Content-Strategy-CXL-Institute-Graduate.jpeg');
    //const lesson_type = text('Type', 'Lesson');
    const lesson_length = text('Length', '1 hour');
    const lesson_instructor = text('Instructor', 'Karl Gilis');
    const lesson_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');

    return `
      <cxl-lesson-card thumbnail="${lesson_image}">
        <span slot="lesson-thumbnail"></span>
        <span slot="entry-title-highlighted">${lesson_title_highlighted}</span>
        <span slot="entry-title">${lesson_title}</span>
        <span slot="lesson-specs">Lesson | ${lesson_length} | ${lesson_instructor}</span>
        ${lesson_description}
      </cxl-lesson-card>
    `
  })
  .add('cxl-testimonial-card', () => {
    const testimonial_customer_image = text  ('Customer image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/11/Natalie-Jamieson-CXL-Institute-Graduate.jpeg');
    const testimonial_company_image = text('Company image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/05/google-logo-new.png');
    const testimonial_content = text('Content', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing. Our flagship training program. ');
    const testimonial_customer_name = text('Customer name', 'Chris Kershaw');
    const testimonial_customer_company = text('Customer company', 'Managing Director - Sweden, at Trollweb Solutions');

    return `
      <cxl-testimonial-card>
        <p class="entry__header-user-thumbnail" slot="entry__header" style="background-image: url('${testimonial_customer_image}');"></p>
        <img class="entry__header-company-thumbnail" slot="entry__header" src="${testimonial_company_image}" />
        <p class="entry__content" slot="entry__content">"${testimonial_content}"</p>
        <small class="entry__header-user-name" slot="entry__footer">${testimonial_customer_name}</small>
        <small class="entry__header-user-company" slot="entry__footer">${testimonial_customer_company}</small>
      </cxl-testimonial-card>
    `
  })
  .add('cxl-banner-card', () => {
    const banner_image = text('Banner image\n', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/Illustrator_2018-12-19_15-34-43.jpg');
    const banner_title = text('Banner title', 'Conversion Optimization Minidegree Program');
    const banner_description = text('Banner description\n', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const banner_link_label = text('Banner link label\n', 'Curriculum & enrollment info >');
    const banner_link_url = text('Banner link url\n', '#');

    return `
      <cxl-banner-card>
        <p class="entry__header-banner-thumbnail" slot="entry__header" style="background-image: url('${banner_image}');"></p>
        <h2 class="entry__header-banner-title" slot="entry__header">${banner_title}</h2>
        <small class="entry__content-banner-content" slot="entry__content">${banner_description}</small>
        <a class="entry__footer-banner-more-link" slot="entry__footer" href="${banner_link_url}">${banner_link_label}</a>
      </cxl-banner-card>
    `
  })
  .add('cxl-course-card', () => {
    const course_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const course_title = text('Title', 'A/B testing mastery');
    const course_instructor = text('Instructor', 'Ton Wesseling');
    const course_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const course_duration = text('Duration', '2 hours');
    const course_type = text('Type', 'Course');
    const course_category = text('Category', 'Analytics');

    return `
      <cxl-course-card>
        <p class="entry__header-course-thumbnail" slot="entry__header-thumbnail" style="background-image: url('${course_image}');"></p>
        ${course_title}
        <p class="entry__header-course-instructor" slot="entry__header-instructor">${course_instructor}</p>
        <p class="entry__content-course-content" slot="entry__content">${course_description}</p>
        <p class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</p>
      </cxl-course-card>
    `
  })
  .add('cxl-catalog', () => {
    const course_image = text('Featured image', 'https://conversionxli.warmpress.com/wp-content/uploads/_conversionxli/2018/12/measuring-quality-win-rate.jpg');
    const course_title = text('Title', 'A/B testing mastery');
    const course_instructor = text('Instructor', 'Ton Wesseling');
    const course_description = text('Description', 'Our flagship training program. Learn conversion research, start using a systematic way to get more wins and bigger wins through optimization and testing.');
    const course_duration = text('Duration', '2 hours');
    const course_type = text('Type', 'Course');
    const course_category = text('Category', 'Analytics');

    return `
      <cxl-catalog style="--lumo-data-grid-items: 5; --lumo-data-grid-column-size: 250px;">
        <h1 slot="entry__header">CXL Catalog</h1>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
          <cxl-course-card slot="entry__content">
            <p class="entry__header-course-thumbnail" slot="entry__header" style="background-image: url('${course_image}');"></p>
            <h2 class="entry__header-course-title" slot="entry__header">${course_title}</h2>
            <p class="entry__header-course-instructor" slot="entry__header">${course_instructor}</p>
            <small class="entry__content-course-content" slot="entry__content">${course_description}</small>
            <small class="entry__footer-course-specs" slot="entry__footer">${course_duration} | ${course_type} | ${course_category}</small>
          </cxl-course-card>
      </cxl-catalog>
      `
  })