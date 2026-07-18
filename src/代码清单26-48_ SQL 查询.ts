import sanitizeHtml from 'sanitize-html';

const sanitized = sanitizeHtml(userContent, {
  allowedTags: ['b', 'i', 'em', 'strong', 'p', 'br'],
  allowedAttributes: {
    'a': ['href', 'title'],
  },
});