/* weekly.js のデータを各ページの placeholder (data-w 属性) に流し込みます。
   このファイルは編集しないでください ─ 更新は weekly.js のみで完結します。 */

(function () {
  function apply() {
    if (!window.WEEKLY) return;
    var W = window.WEEKLY;

    function fill(key, text) {
      if (text == null) return;
      var els = document.querySelectorAll('[data-w="' + key + '"]');
      for (var i = 0; i < els.length; i++) els[i].textContent = text;
    }
    function fillYT(key, vid) {
      if (!vid) return;
      var els = document.querySelectorAll('[data-w-yt="' + key + '"]');
      for (var i = 0; i < els.length; i++) {
        els[i].src = 'https://www.youtube-nocookie.com/embed/' + vid + '?rel=0';
      }
    }

    // ─── 次主日 ───
    if (W.nextSunday) {
      var n = W.nextSunday;
      fill('next-date',      n.date);
      fill('next-name',      n.name);
      fill('next-celebrant', n.celebrant);
      fill('next-readings',  n.readings);
      fill('next-hymns',     n.hymns);
      fillYT('next', n.youtube);
      var iframes = document.querySelectorAll('[data-w-yt="next"]');
      for (var i = 0; i < iframes.length; i++) {
        iframes[i].title = (n.date || '') + ' ' + (n.name || '');
      }
    }

    // ─── 過去の動画 ───
    if (W.archive && W.archive.length) {
      W.archive.forEach(function (a, idx) {
        var k = idx + 1;
        fill('arc' + k + '-date',     a.date);
        fill('arc' + k + '-name',     a.name);
        fill('arc' + k + '-readings', a.readings);
        fill('arc' + k + '-hymns',    a.hymns);
        fillYT('arc' + k, a.youtube);
        var ifr = document.querySelectorAll('[data-w-yt="arc' + k + '"]');
        for (var j = 0; j < ifr.length; j++) {
          ifr[j].title = (a.date || '') + ' ' + (a.name || '');
        }
      });
    }

    // ─── 教会問答 勉強会 ───
    if (W.nextStudy) {
      fill('study-date', W.nextStudy.date);
      fill('study-time', W.nextStudy.time);
      fill('study-note', W.nextStudy.note);
    }

    // ─── 水曜夜聖餐式 ───
    if (W.wedMass && W.wedMass.length) {
      fill('wedmass', W.wedMass.join('、'));
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
