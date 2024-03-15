
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() { //라이브러리라 이 함수의 이름을 찾아 실행
  player = new YT.Player('player', { //id가 player인 요소
    // height: '360',
    // width: '640',
    videoId: 'u0aLYuJcex8',  //최초 재생할 유튜브 영상 ID
    playerVars :{ // 더 자세한 옵션은 플레이어 매개변수 메뉴 확인
      autoplay : true, //자동재생 유무
      loop : true, //반복 재생 유무(플레아리스트 옵션 필수)
      playlist :'u0aLYuJcex8' //번복 재생할 유튜브 영상 id목록
    },
      events: {
      // 영상이 준비되었을 때 지정한 함수를 실행
      onReady: function (event) {
        // event.target : 재생되고 있는 영상
        event.target.mute(); //음소거
      }
    }
  });
}