/ app/globals.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #333;
}

.header {
  background-color: #fff;
  border-bottom: 1px solid #eee;
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #0070f3;
  text-decoration: none;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #666;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.nav-link:hover {
  background-color: #f5f5f5;
  color: #0070f3;
}

.main {
  min-height: calc(100vh - 128px);
  padding: 2rem 0;
}

.footer {
  background-color: #f5f5f5;
  padding: 2rem;
  text-align: center;
  color: #666;
}