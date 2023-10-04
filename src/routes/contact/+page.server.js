// @ts-nocheck
// import sgMail from '@sendgrid/mail';
import { config } from 'dotenv';
config();

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email');
		const comments = data.get('comments');

		// validate

		// send email with the data
		// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

		// const msg = {
		// 	to: 'heynmarty@gmail.com', // Change to your recipient
		// 	from: {
		// 		name: 'Martin Scott',
		// 		email: email
		// 	}, // Change to your verified sender
		// 	subject: 'Sending with SendGrid is Fun',
		// 	html: `<strong>${comments}</strong>`
		// };

		// sgMail
		// 	.send(msg)
		// 	.then((response) => {
		// 	return 'success';
		// 		console.log(response[0].statusCode);
		// 		console.log(response[0].headers);
		// 	})
		// 	.catch((error) => {
		// 		return 'error';
		// 		console.error(error);
		// 	});

		if (email && comments) {
			return 'success';
		}
	}
};
