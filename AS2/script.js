$(document).ready(function() {
    $('a').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            var targetId = this.hash;
            var targetElement = document.querySelector(targetId);
            if (targetElement) {
                var targetOffset = targetElement.offsetTop; // 獲取目標元素距離頁面頂部的偏移量
                var duration = 800;
                var start = window.pageYOffset; // 獲取當前頁面滾動位置
                var distance = targetOffset - start; // 計算從目前滾動位置到目標元素的距離
                var startTime = null; // 紀錄滾動開始的時間

                // 定義平滑滾動的函式
                function scroll(timeStamp) {
                    if (!startTime) startTime = timeStamp; // 記錄滾動開始的時間
                    var progress = timeStamp - startTime; // 計算經過的時間
                    var easeInOut = progress / duration; // 計算進度

                    if (easeInOut < 1) {
                        window.scrollTo(0, start + distance * easeInOut); // 設定新的滾動位置
                        requestAnimationFrame(scroll); // 繼續動畫
                    } else {
                        window.location.hash = targetId; // 將頁面定位到 targetId
                    }
                }
                requestAnimationFrame(scroll); // 啟動動畫
            }
        }
    });
});
