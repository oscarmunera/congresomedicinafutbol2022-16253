import React from 'react';
import _ from 'lodash';

import { Layout } from '../components/index';
import { markdownify } from '../utils';

export default class Page extends React.Component {
    render() {
        const data = _.get(this.props, 'data');
        const config = _.get(data, 'config');
        const page = _.get(this.props, 'page');
        const title = _.get(page, 'title');
        const markdownContent = _.get(page, 'markdown_content');

        return (
            <Layout page={page} config={config}>
                <article className="page py-5 py-sm-6">
                    <div className="container container--medium">
                        {title && <header className="page__header"><h1 className="page__title">{title}</h1></header>}
                        {markdownContent && <div className="page__body text-block">{markdownify(markdownContent)}</div>}
                    </div>
                </article>
            </Layout>
        );
    }
}
<form
    name="simpleContactForm"
    method="POST"
    data-netlify="true"
    data-netlify-recaptcha="true"
    id="simple-contact-form"
    class="contact-form"
>
    <p class="form-row">
        <label id="contact-form-name-label" for="contact-form-name" class="form-label">Name</label>
        <input type="text" name="name" id="contact-form-name" aria-labelledby="contact-form-name-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-email-label" for="contact-form-email" class="form-label">Email address</label>
        <input type="email" name="email" id="contact-form-email" aria-labelledby="contact-form-email-label" class="form-input" />
    </p>
    <p class="form-row">
        <label id="contact-form-message-label" for="contact-form-message" class="form-label">Message</label>
        <textarea
            name="message"
            id="contact-form-message"
            aria-labelledby="contact-form-message-label"
            class="form-textarea"
            rows="7"
        ></textarea>
    </p>
    <div data-netlify-recaptcha="true" class="form-row"></div>
    <p class="form-row form-submit">
        <button type="submit" class="button">Send Message</button>
    </p>
</form>
