(function () {
  const NAV_ITEMS = [
    { href: 'index.html',    label: 'トップ' },
    { href: 'info.html',     label: 'インフォメーション' },
    { href: 'history.html',  label: '教会案内' },
    { href: 'service.html',  label: '礼拝案内' },
    { href: 'sermon.html',   label: '主日の福音' },
    { href: 'photo.html',    label: '写真' },
    { href: 'access.html',   label: 'アクセス' },
    { href: 'link.html',     label: '関連リンク' },
    { href: 'donation.html', label: '建築募金' }
  ];

  function currentPage() {
    const path = location.pathname.split('/').pop();
    if (!path || path === '') return 'index.html';
    return path;
  }

  function renderHeader() {
    const here = currentPage();
    const items = NAV_ITEMS.map(item => {
      const cls = item.href === here ? ' class="active"' : '';
      return `<li><a${cls} href="${item.href}">${item.label}</a></li>`;
    }).join('');

    return `
<div class="band"><span></span><span></span><span></span><span></span><span></span></div>

<header>
  <div class="wrap barflex">
    <a class="brand" href="index.html">
      <span class="crest" aria-hidden="true">
        <img src="img/banner.jpg" alt="">
      </span>
      <span>
        <b>東京聖テモテ教会</b>
        <small>St. Timothy&#39;s Church, Tokyo</small>
      </span>
    </a>
    <input type="checkbox" id="menu-toggle">
    <label class="menu-btn" for="menu-toggle" aria-label="メニュー"><span></span></label>
    <nav>
      <ul>${items}</ul>
    </nav>
  </div>
</header>`;
  }

  function renderFooter() {
    return `
<footer>
  <div class="wrap">
    <div class="fgrid">
      <div>
        <h4>東京聖テモテ教会</h4>
        <p style="font-size:.92rem;color:#cfc8d8;line-height:1.9">日本聖公会 東日本教区<br>St. Timothy&#39;s Church, Tokyo<br>牧師：ヨセフ 太田 信三 司祭</p>
        <p style="margin-top:10px"><a href="mailto:5836timothy@gmail.com">5836timothy@gmail.com</a></p>
      </div>
      <div>
        <h4>ページ</h4>
        <div class="links">
          <a href="info.html">インフォメーション</a>
          <a href="history.html">教会案内</a>
          <a href="service.html">礼拝案内</a>
          <a href="sermon.html">主日の福音</a>
        </div>
      </div>
      <div>
        <h4>その他</h4>
        <div class="links">
          <a href="photo.html">教会の写真</a>
          <a href="access.html">アクセス</a>
          <a href="link.html">関連リンク</a>
          <a href="https://www.youtube.com/channel/UCnVBRc4ZzZfhEeO1DUZO-sQ">YouTube チャンネル</a>
          <a href="https://www.instagram.com/st.timothy.tokyo/" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>Copyright &copy; 2008&ndash; St. Timothy&#39;s Church, Tokyo. All rights reserved.</span>
      <span class="ll">In the light of grace.</span>
    </div>
  </div>
</footer>`;
  }

  function mount() {
    const header = document.getElementById('site-header');
    if (header) header.outerHTML = renderHeader();
    const footer = document.getElementById('site-footer');
    if (footer) footer.outerHTML = renderFooter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
