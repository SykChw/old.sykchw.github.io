function loadRSSFeed(url, id) {
  const widget = document.getElementById(id);
  if (!widget) return;

  widget.innerHTML = 'Loading...';

  const style = document.createElement('style');
  style.textContent = `
    .rss-widget {
      font-family: Arial, sans-serif;
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #1a1a1a;
      color: #ffffff;
      border-radius: 8px;
    }
    .rss-widget h2 {
      margin-top: 0;
      margin-bottom: 15px;
    }
    .rss-widget ul {
      list-style-type: none;
      padding: 0;
    }
    .rss-widget li {
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #333;
    }
    .rss-widget li:last-child {
      border-bottom: none;
    }
    .rss-widget a {
      color: #4a9eff;
      text-decoration: none;
    }
    .rss-widget a:hover {
      text-decoration: underline;
    }
    .rss-widget .date {
      font-size: 0.8em;
      color: #888;
    }
  `;
  document.head.appendChild(style);

  fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
    .then(response => response.json())
    .then(data => {
      data.items.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));

      let html = '<div class="rss-widget"><h2>RSS Feed</h2><ul>';
      data.items.slice(0, 5).forEach(item => {
        const date = new Date(item.pubDate).toLocaleDateString();
        html += `
          <li>
            <a href="${item.link}" target="_blank">${item.title}</a>
            <div class="date">${date}</div>
          </li>
        `;
      });
      html += '</ul></div>';
      widget.innerHTML = html;
    })
    .catch(error => {
      widget.innerHTML = 'Error loading feed. Please check the URL and try again.';
      console.error('Error:', error);
    });
}
