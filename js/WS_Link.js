const QRCode = require('qrcode');

$WS_BTNLK.addEventListener('click', () => {
    const exportedData = JSON.stringify($saved_WS);
    const encodedData = encodeURIComponent(exportedData);
    const shareLink = window.location.origin + '/ormi3_project_1_WS.github.io/about.html?data=' + encodedData;

    // QR코드 생성
    QRCode.toDataURL(shareLink, { errorCorrectionLevel: 'H' }, function(err, url) {
        if (err) {
            console.error(err);
            return;
        }

        // 이미지 태그 생성 및 속성 설정
        let imgTag = document.createElement("img");
        imgTag.src = url;

        // 이미지 태그 페이지에 추가 (예: body 태그 내부)
        document.body.appendChild(imgTag);

        // 생성된 URL을 클립보드에 복사합니다.
        navigator.clipboard.writeText(url)
            .then(() => {
                // 복사가 성공적으로 완료되면 알림 메시지를 표시합니다.
                alert('링크가 클립보드에 복사되었습니다.');
            })
            .catch((err) => {
                // 만약 복사 과정에서 오류가 발생하면, 콘솔에 오류 메시지를 출력합니다.
                console.error('링크 복사 실패:', err);
            });
    });
});