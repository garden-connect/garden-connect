import {Request, Response} from 'express';
import {setActivationToken, setHash} from '../../utils/auth.utils';
import {Profile} from '../../utils/interfaces/Profile';
import {Status} from '../../utils/interfaces/Status';
import {insertProfile} from '../../utils/profile/insertProfile';
import formData from 'form-data'
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';

export async function signupProfileController(request: Request, response: Response): Promise<Response | undefined> {
    try {

        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})

        const {profileAbout, profileName, profileEmail, profilePassword} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Welcome to Garden Connect</h2>
<p>Click this link to confirm your account.</p>
<p><a href="${basePath}">${basePath}</a></p>
`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: 'Garden Connect -- Account Activation',
            html: message
        }
        // console.log(mailgunMessage)


        const profile: Profile = {
            profileId: null,
            profileAbout: null,
            profileActivationToken,
            profileEmail,
            profileHash,
            profileName
        };
        await insertProfile(profile)

        await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

        const status: Status = {
            status: 200,
            message: 'Profile successfully created please check your email.',
            data: null
        };

        return response.json(status)

    } catch (error: any) {

        const status: Status = {
            status: 500,
            message: error.message,
            data: null
        };

        return response.json(status);
    }
}
