document.addEventListener('DOMContentLoaded', function () {
    const protectedEmails = document.querySelectorAll('.email-protect');
    protectedEmails.forEach(function (el) {
        const user = el.getAttribute('data-user');
        const domain = el.getAttribute('data-domain');
        if (user && domain) {
            const email = user + '@' + domain;
            const link = document.createElement('a');
            link.href = 'mailto:' + email;

            const displayMode = el.getAttribute('data-display');

            if (displayMode === 'text') {
                link.textContent = user + '[at]' + domain;
                // Add a small margin to separate from preceding text if needed, or rely on HTML spacing
            } else {
                const img = document.createElement('img');
                img.src = '/assets/images/logo/email.svg';
                img.alt = 'Email';
                img.style.width = '16px';
                img.style.height = '16px';
                img.style.verticalAlign = 'middle';
                link.appendChild(img);
            }

            el.parentNode.replaceChild(link, el);
        }
    });
});
