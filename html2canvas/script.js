
    function screenshot(){
        html2canvas(document.getElementById('chart3')).then(function(canvas) {
            document.body.appendChild(canvas);
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
            a.download = 'image.jpg';
            a.click();
        });
    }


    function shot() {
        // html2canvas(el, option)
        // option: https://html2canvas.hertzen.com/configuration
        html2canvas(document.getElementById('myApp')).then(function(canvas) {
            document.body.appendChild(canvas);

            let a = document.createElement('a');
            a.href = canvas.toDataURL('image/jpeg').replace("image/jpeg", "image/octet-stream");
            a.download = 'download.jpg';
            a.click();
        })
    }

