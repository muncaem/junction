let _state = STATE_INIT;
let _answer = '';
let _result = '';
// when chatting event
// 채팅을 치면 호출되는 이벤트
// player : person who chatted
// text : chat text
// return : enter chatting box
// return false or true : not appear in chatting box
App.onSay.add(function(player, text) {
        if(_answer == 'good')
        {
            if(text == _answer)
            _result = player.name + '님이' + _answer + '를 외치셨습니다';
            App.showCenterLabel(_result);
        }
    }
);