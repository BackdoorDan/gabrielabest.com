// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();


//
// Custom JS
// --------------------------------------------------


!function(){
  
  var letterLimit = 300;
  
  var Blockquote = function(elem){
    this.elem = elem;
    this.fullTxt = elem.innerHTML.replace(/<\/p>/gi, '');
    this.shortTxt = this.fullTxt.slice(0,letterLimit);
    this.moreBtnHTML = '<a class="expand-quote">...more</a>';
    this.lessBtnHTML = '<a class="colapse-quote">...less</a>';
    this.showLess();
  };
  
  Blockquote.prototype.showMore = function(){
    this.elem.innerHTML = this.fullTxt + this.lessBtnHTML;
    
    var moreBtn = this.elem.querySelector('.colapse-quote');
    
    var self = this;
    moreBtn.addEventListener('click', function(){
      self.showLess();
    });
  };
  
  Blockquote.prototype.showLess = function(){
    
    if(this.fullTxt.length < letterLimit + 40) return;
    
    this.elem.innerHTML = this.shortTxt + this.moreBtnHTML;
    
    var moreBtn = this.elem.querySelector('.expand-quote');
    
    var self = this;
    moreBtn.addEventListener('click', function(){
      self.showMore();
    });
  };
  
  var blockquotes = document.querySelectorAll('blockquote');
  
  for (var i = 0; i < blockquotes.length; i++){
    var newBlockquote = new Blockquote(blockquotes[i]);
  }
  
}();

$('.mobile-nav__expand').on('click', function(){
  $('.mobile-nav-expanded').addClass('active');
});
$('.mobile-nav-expanded__close').on('click', function(){
  $('.mobile-nav-expanded').removeClass('active');
});

$('.mobile-nav-expanded__links__link').on('click', function(){
  $('.mobile-nav-expanded').removeClass('active');
});