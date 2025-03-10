export function generateEmailTemplateForUser(mainContent) {
    const imageUrl = "https://ik.imagekit.io/webibee/penthusiast_logo_full.png";
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
          <div style="text-align: center; margin-bottom: 20px;">
                 <img src=${imageUrl} alt="Penthusiasts Logo" style="width: 150px; height: auto;">
              </div>
          ${mainContent}
           <p style="font-size: 16px; color: #555;">Greetings from Penthusiasts Team!</p>
            <p style="font-size: 16px; color: #555;">
                Thank you for choosing Penthusiasts! We're thrilled to confirm we've received your submission and are excited to collaborate with you to bring your vision to life. Let's create something amazing together!
            </p>
            <p style="font-size: 16px; color: #008080;">
                Cheers!<br>
                <a href="https://www.linkedin.com/company/penthusiasts2017" style="color: #007bff; text-decoration: none;">Poornima </a>T M,<br>
                <a href="mailto:reachout@penthusiasts.com" style="color: #007bff; text-decoration: none;">reachout@penthusiasts.com</a><br>
                Founder & C.E.O,
            </p>
            <div style="text-align: center; margin-top: 20px; font-size: 14px; color: #008080;">
                <p style="display: flex; align-items: center; gap: 10px;">© ${new Date().getFullYear()} <a href="https://penthusiasts.com/" style="color: #007bff; text-decoration: none;">Penthusiasts<br></a>. All rights reserved.</p>
            </div>
        </div>
          `;
}

export function generateEmailTemplateForClient(mainContent) {
    const imageUrl = "https://ik.imagekit.io/webibee/penthusiast_logo.png";
    return `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; border: 1px solid #ddd;">
              <p style="font-size: 16px; color: #555;">Hi,</p>
              <p style="font-size: 16px; color: #555;">You have a new message from the Penthusiasts website:</p>
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              ${mainContent}
              <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
              <p style="font-size: 16px; color: #008080;">
                Cheers!<br>
                <a href="https://www.linkedin.com/company/penthusiasts2017" style="color: #007bff; text-decoration: none;">Poornima </a>T M,<br>
                <a href="mailto:reachout@penthusiasts.com" style="color: #007bff; text-decoration: none;">reachout@penthusiasts.com</a><br>
                Founder & C.E.O,
            </p>
              <div style="margin-bottom: 10px;">
                 <img src=${imageUrl} alt="Penthusiasts Logo" style="width: 90px; height: auto;">
              </div>
          </div>
            `;
}

// <p><strong>Website:</strong> <a href="https://www.ensileta.com" target="_blank">www.ensileta.com</a></p>
