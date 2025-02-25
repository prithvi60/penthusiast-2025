export function generateEmailTemplateForUser(mainContent) {
  const imageUrl = "";
  return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
          <div style="text-align: center; margin-bottom: 20px;">
                 <img src=${imageUrl} alt="Penthusiast Logo" style="width: 150px; height: auto;">
              </div>
          ${mainContent}
           <p style="font-size: 16px; color: #555;">Greetings from Penthusiast Team!</p>
            <p style="font-size: 16px; color: #555;">
                Thank you for choosing Penthusiast! We're thrilled to confirm we've received your submission and are excited to collaborate with you to bring your vision to life. Let’s create something amazing together!
            </p>
            <p style="font-size: 16px; color: #555;">
                Thanks & Regards,<br>
                <strong>Penthusiast</strong><br>
                <a href="mailto:support@webibee.com" style="color: #007bff; text-decoration: none;">support@webibee.com</a><br>
                Chennai, Tamil Nadu, India
            </p>
            <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #aaa;">
                <p>© ${new Date().getFullYear()} Penthusiast. All rights reserved.</p>
            </div>
        </div>
          `;
}

export function generateEmailTemplateForClient(mainContent) {
  const imageUrl = "";
  return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
            <div style="text-align: center; margin-bottom: 20px;">
                  <img src=${imageUrl} alt="Penthusiast Logo" style="width: 150px; height: auto;">
              </div>
              <p style="font-size: 16px; color: #555;">Hi,</p>
              <p style="font-size: 16px; color: #555;">You have a new message from the Penthusiast website:</p>
              <p style="font-size: 16px; color: #555;">
                  Penthusiast is a platform that connects people with the best professionals for their needs. We have received a new message from a potential client. Please find the details below:
              </p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              ${mainContent}
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="font-size: 16px; color: #555;">Thanks,</p>
              <p style="font-size: 16px; color: #555;"><strong>Penthusiast Team</strong></p>
          </div>
            `;
}

// <p><strong>Website:</strong> <a href="https://www.ensileta.com" target="_blank">www.ensileta.com</a></p>
