import React from 'react';

import { Footer } from '../components';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Questions</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Investor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to  Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                    <Footer.Link href="#">NetFlix Originals</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Help Center</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Terns of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem Gif Cards</Footer.Link>
                    <Footer.Link href="#">Privacy</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>

                <Footer.Column>
                    <Footer.Link href="#">Media Cente</Footer.Link>
                    <Footer.Link href="#">Buy Gif Cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>NetFlix United Kingdom</Footer.Text>
        </Footer>
    )
}