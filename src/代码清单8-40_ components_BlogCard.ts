/* components/BlogCard.module.css */
.card {
  padding: 1.5rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid #e5e7eb;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}

.card:hover {
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1),
              0 8px 10px -6px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.75rem;
}

.dot {
  color: #d1d5db;
}

.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.titleLink {
  color: #111827;
  text-decoration: none;
  transition: color 0.2s;
}

.titleLink:hover {
  color: #0070f3;
}

.excerpt {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.readMore {
  display: inline-block;
  font-size: 0.875rem;
  color: #0070f3;
  text-decoration: none;
  font-weight: 500;
}

.readMore:hover {
  text-decoration: underline;
}