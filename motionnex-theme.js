(function () {
    function buildBrandChrome() {
        if (!document.body || document.querySelector('.mn-brandbar')) return;

        const header = document.createElement('header');
        header.className = 'mn-brandbar';
        header.innerHTML = `
            <div class="mn-spectrum" aria-hidden="true"></div>
            <div class="mn-brandbar__inner">
                <a class="mn-wordmark" href="index.html" aria-label="返回 MOTIONNEX 維修系統首頁">MOTIONNEX®</a>
                <div class="mn-system-name">FRT 維修技術支援系統</div>
                <nav class="mn-quicknav" aria-label="快速導覽">
                    <a href="index.html">首頁</a>
                    <a href="trouble.html">故障診斷</a>
                    <a href="sop_list.html">維修 SOP</a>
                    <a href="video_menu.html">影音教學</a>
                </nav>
            </div>`;

        const footer = document.createElement('footer');
        footer.className = 'mn-footer';
        footer.innerHTML = '<strong>MOTIONNEX®</strong> · Redefined Motion 智動無限<br>用機器保護人力，讓科技改變未來';

        document.body.prepend(header);
        document.body.append(footer);
        document.documentElement.classList.add('mn-themed');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', buildBrandChrome, { once: true });
    } else {
        buildBrandChrome();
    }
})();
