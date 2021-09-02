import faqsData from '../fixtures/faqs.json';
import { Accordion } from '../components';
import React from 'react';
import OtpForm from '../components/otp-form';

export function FaqsContainer() {
    return (
        <Accordion>

            <Accordion.Title>Frequently Asked Question</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}

            <OtpForm>
                <OtpForm.Input placeholder="Email address" />
                <OtpForm.Button>Try it now</OtpForm.Button>
                <OtpForm.Break />
                <OtpForm.Text>
                    Ready to watch  Enter your email to create or restart your membership
                </OtpForm.Text>
            </OtpForm>

            <Accordion.Item />
        </Accordion>
    );
}