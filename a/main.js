// load sprite
let trash = App.loadSpritesheet('trash.png', 48, 43, 0, 10);
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

    _stateTimer += dt;

    switch(_state) {
        case STATE_INIT:
            if(_stateTimer >= 2) {
                App.showCenterLabel("The game will start soon.");
            }
            if(_stateTimer >= 4)
                App.showCenterLabel("Pick Up the Trash");
            if(_stateTimer >= 6)
                increase();
            break;
        case STATE_PLAYING: 
            break;
        case STATE_JUDGE:
            judgement();
            break;
        case STATE_END:
            break;
    };
});


function judgement() {
    if(trash == null) {
        App.showCenterLabel("Success");
    }
    else {
        App.showCenterLabel("You Fail");
    }
}

// 플레이어가 오브젝트를 공격(Z키)했을 때 호출 되는 이벤트
App.onObjectAttacked.Add(function(sender, x, y) {
    Map.clearAllObjects();
});