// 初始化一個zip打包物件
var zip = new JSZip();
// 建立一個被用來打包的名為Hello.txt的檔案
zip.file("Hello.txt", "Hello World\n");
// 建立一個名為images的新的檔案目錄
var img = zip.folder("images");
// 這個images檔案目錄中建立一個base64資料為imgData的影像，影像名是smile.gif
img.file("smile.gif", imgData, {base64: true});
// 把打包內容非同步轉成blob二進位制格式
zip.generateAsync({type:"blob"}).then(function(content) {
    // content就是blob資料，這裡以example.zip名稱下載    
    // 使用了FileSaver.js  
    saveAs(content, "example.zip");
});

/*
最終下載的zip檔案包含內容如下：
Hello.txt
images/
    smile.gif
*/