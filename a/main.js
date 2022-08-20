// load sprite
let trash = App.loadSpritesheet('trash.png', 48, 43, 0, 1);
let tr = 0;
let _stateTimer = 0;

const STATE_INIT = 3000;
const STATE_READY = 3001;
const STATE_PLAYING = 3002;
const STATE_JUDGE = 3004;
const STATE_END = 3005;

let _state = STATE_INIT;

function increase() {
    let x = Math.random() * 80; 
    let y = Math.random() * 40;

    Map.putObject(x, y, trash);
}

App.onUpdate.Add(function(dt) {
    // increase();

    _stateTimer += dt;

    switch(_state) {
        case STATE_INIT:
            if(_stateTimer >= 2) {
                App.showCenterLabel("The game will start soon.");
                //increase();
            }zzzz
            if(_stateTimer >= 4)
                App.showCenterLabel("Pick Up the Trash");
             if(_stateTimer >= 6)
                 increase();
            break;
        case STATE_PLAYING: 
            break;
        case STATE_JUDGE:
            if(trash == null) {
                App.showCenterLabel("Success");
            }
            else {
                App.showCenterLabel("You Fail");
            }
            break;
            // if(_stateTimer >= 10)
            //     startState(STATE_END);
            // break;

        case STATE_END:
    };
});

// 플레이어가 오브젝트를 공격(Z키)했을 때 호출 되는 이벤트
App.onObjectAttacked.Add(function(sender, x, y) {
    Map.clearAllObjects();
});

let _Tres = 1;
let _Mres = 1;

App.onInit.Add(function() {
    App.showCenterLabel("Please enter the name of the country \n where you want to respond to live in the chat room.");
})

// 채팅을 치면 호출되는 이벤트
App.onSay.add(function(player, text) {
    if(_Mres < 3) {
        if('Maldives' == text) {
            ++_Mres; //repu 변수 1증가
        }
    }
    else if(_Mres >= 3) {
        App.sayToAll("Now Issued Area is..");
        App.sayToAll(player.getLocationName());
    }

    if(_Tres < 3) {
        if('Tuvalu' == text) {
            ++_Tres; //repu 변수 1증가
        }
    }
    else if(_Tres >= 3) {
        App.sayToAll("Now Issued Area is..");
        App.sayToAll(player.getLocationName());
    }
});