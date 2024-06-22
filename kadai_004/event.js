$(window).on('scroll load', (e) => {
  if(e.type==='scroll'){
    console.log('scrollイベントが発生しました');
  }
  if(e.type==='load'){
    console.log('loadイベントが発生しました');
  }
});