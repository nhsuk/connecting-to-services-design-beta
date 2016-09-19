const cookieMessage = require('./modules/cookie-message');
const feedbackForm = require('./modules/feedback-form');
const analytics = require('./modules/analytics');
const selectionButtons = require('./modules/selection-buttons');


cookieMessage('global-cookies-banner');
feedbackForm.init();
analytics.init();
selectionButtons.init();
