if (!window.cf){
   window.cf = {};
}

 // DECLARE MODULE VARS
 cf.g = {
     smallBrowser: 600,
     medBrowser: 1024,
     largeBrowser: 1200
 };


// COUNTS IPADS AS MOBILE
// SHOULD ONLY BE USED FOR PARALAX
cf.isMobile = function(){

   var mobileDevice = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

   if(window.innerWidth < cf.g.smallBrowser || mobileDevice) {

      return true;
   } else {
      return false;
   }
};


cf.isRetina = function() {
   if (window.matchMedia) {
      var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
      return (mq && mq.matches || (window.devicePixelRatio > 1));
   }
};

cf.isSmallBrowser = function(){
   if (window.innerWidth <= cf.g.smallBrowser){
      return true;
   } else {
      return false;
   }
};

cf.isMedBrowser = function(){
   if (window.innerWidth > cf.g.smallBrowser && window.innerWidth <= cf.g.medBrowser){
      return true;
   } else {
      return false;
   }
};

cf.isLargeBrowser = function(){
   if (window.innerWidth >= cf.g.medBrowser){
      return true;
   } else {
      return false;
   }
};

cf.assets = (function () {

    // OPTIONS
    var x2ext = '@2x';

    var largeSuffix = '-large';

    var mediumSuffix = '-med';

    var responsiveClass = '.cf-responsive';

    var noReplaceClass = 'no-replace';

    ////////

    var responsiveImages = [];
    var responsiveBgImages = [];
    var allResponsiveImages = [];

    var _sortImages = function(){

        var images = document.querySelectorAll('img');

        var responsiveImages = [];

        for (var i = 0; i < images.length; i++){


            if (!$(images[i]).hasClass(noReplaceClass)){

            }

            var src = images[i].src;
            var extension = src.split('.').pop();

            if(extension === 'jpg' || extension === 'png') {

                var re = /([\w\d_-]*)\.?[^\\\/]*$/i;

                var image = images[i];
                image.type = 'img';
                image.oldSrc = images[i].src;
                image.filename = image.oldSrc.match(re)[1];
                image.extension = image.oldSrc.split('.').pop();
                image.parentFolder =  image.oldSrc.substr(0, image.oldSrc.lastIndexOf('/'));


                if (!$(images[i]).hasClass(noReplaceClass)){
                    responsiveImages.push(image);
                }

            }
        }

        return responsiveImages;

    };
    var _sortBgImages = function(){

        var responsiveBgImages = [];
        var bgImages = document.querySelectorAll(responsiveClass);

        for (var i = 0; i < bgImages.length; i++){

            var re = /([\w\d_-]*)\.?[^\\\/]*$/i;
            var bgImage = bgImages[i];

            bgImage.compStyle = bgImage.currentStyle || window.getComputedStyle(bgImage, false);
            bgImage.type = 'bgImg';
            bgImage.oldSrc = bgImage.compStyle.backgroundImage.slice(4, -1);
            bgImage.filename = bgImage.oldSrc.match(re)[1];
            bgImage.extension = bgImage.oldSrc.split('.').pop();
            bgImage.parentFolder =  bgImage.oldSrc.substr(0, bgImage.oldSrc.lastIndexOf('/'));

            responsiveBgImages.push(bgImage);

        }

        return responsiveBgImages;

    };






    var init = function(callback){

        responsiveImages = _sortImages();
        responsiveBgImages = _sortBgImages();
        allResponsiveImages = responsiveImages.concat(responsiveBgImages);

        replaceAssets(allResponsiveImages);

       _resizeWatch();

        if (typeof callback === 'function') callback();
    };



    var replaceAssets = function (){

        var assets = allResponsiveImages;

        for (var i = 0; i < assets.length; i++) {


            var newSrc = _getNewSrc(assets[i]);


            // DO STUFF
            if (assets[i].type === 'img') {
                assets[i].src = newSrc;
            }
            else if (assets[i].type === 'bgImg'){
                assets[i].style.backgroundImage = 'url('+newSrc+')';
            }


        }

    };


    var _getNewSrc = function(asset){

        var newSrc = '';

        // SMALL AND 2X
            if (cf.isSmallBrowser() && cf.isRetina()){
                newSrc = asset.parentFolder + '/' + asset.filename + x2ext + '.' + asset.extension;
            }

            // SMALL AND NOT 2X
            else if (cf.isSmallBrowser() && !cf.isRetina()){
                newSrc = asset.parentFolder + '/' + asset.filename + '.' + asset.extension;
            }

            // MEDIUM BROWSERS AND 2X
            else if (cf.isMedBrowser() && cf.isRetina()){
                newSrc = asset.parentFolder + '/' + asset.filename + mediumSuffix + x2ext + '.' + asset.extension;
            }

            // MEDIUM BROWSERS AND NOT 2X
            else if (cf.isMedBrowser() && !cf.isRetina()){
                newSrc = asset.parentFolder + '/' + asset.filename + mediumSuffix + '.' + asset.extension;
            }

            // LARGE BROWSER AND IS X2
            else if (cf.isLargeBrowser() && cf.isRetina()){
                newSrc = asset.parentFolder + '/' + asset.filename + largeSuffix + x2ext + '.' + asset.extension;
            }

            // LARGE AND NOT 2x
            else if (cf.isLargeBrowser() && !cf.isRetina()){
                newSrc = asset.parentFolder + '/' + asset.filename + largeSuffix + '.' + asset.extension;
            }

            return newSrc;

    };


   var _resizeWatch = function(){
      window.addEventListener('resize', function(){
         replaceAssets();
      });
   };



    return {
        init : init,
        replaceAssets : replaceAssets
    };

}());
